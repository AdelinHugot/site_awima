// Reçoit le ping de visite d'un prospect (awima.fr/?p=<slug>) et le relaie à n8n.
// Garde l'URL du webhook hors du code de la page et ajoute l'IP + le user-agent réels,
// ce qui permet à n8n d'écarter les robots de prévisualisation de liens.
// Variables d'environnement Netlify : N8N_VISIT_WEBHOOK_URL, AWIMA_VISIT_SECRET.
export default async (req) => {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  let data;
  try {
    data = await req.json();
  } catch {
    return new Response(null, { status: 204 });
  }

  const slug = String(data.p ?? "").trim().toLowerCase().slice(0, 80);
  if (!/^[a-z0-9-]{2,80}$/.test(slug)) return new Response(null, { status: 204 });

  const url = process.env.N8N_VISIT_WEBHOOK_URL;
  const secret = process.env.AWIMA_VISIT_SECRET;
  if (!url || !secret) {
    console.error("N8N_VISIT_WEBHOOK_URL ou AWIMA_VISIT_SECRET manquante");
    return new Response(null, { status: 204 });
  }

  const payload = {
    p: slug,
    src: String(data.src ?? "lien").trim().slice(0, 40),
    ref: String(data.ref ?? "").trim().slice(0, 200),
    ua: req.headers.get("user-agent") ?? "",
    ip: req.headers.get("x-nf-client-connection-ip") ?? "",
  };

  // Le visiteur n'attend rien de cette requête : on n'échoue jamais côté page.
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Awima-Secret": secret },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000),
    });
  } catch (err) {
    console.error("n8n injoignable", err?.message);
  }
  return new Response(null, { status: 204 });
};
