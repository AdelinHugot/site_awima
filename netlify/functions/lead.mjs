// Reçoit le formulaire « Rappelez-moi » et le transmet au workflow Twenty.
// L'URL du webhook Twenty se règle dans la variable d'environnement TWENTY_WEBHOOK_URL (Netlify).
export default async (req) => {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  let data;
  try {
    data = await req.json();
  } catch {
    return new Response("Bad Request", { status: 400 });
  }

  // Pot de miel anti-spam : un humain ne remplit pas ce champ.
  if (data.site) return new Response("OK", { status: 200 });

  const clean = (v, max) => String(v ?? "").trim().slice(0, max);
  const payload = {
    prenom: clean(data.prenom, 80),
    telephone: clean(data.telephone, 30),
    metier: clean(data.metier, 60),
    source: "awima.fr",
    prospect: clean(data.prospect, 60),
  };
  if (!payload.prenom || payload.telephone.replace(/\D/g, "").length < 9) {
    return new Response("Bad Request", { status: 400 });
  }

  const url = process.env.TWENTY_WEBHOOK_URL;
  if (!url) {
    console.error("TWENTY_WEBHOOK_URL manquante", payload);
    return new Response("Server not configured", { status: 500 });
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error("Twenty a répondu", res.status, await res.text());
    return new Response("Upstream error", { status: 502 });
  }
  return new Response("OK", { status: 200 });
};
