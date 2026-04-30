#!/usr/bin/env node

import Anthropic from "@anthropic-ai/sdk";
import * as fs from "fs";
import * as path from "path";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are Adelin, founder of AWIMA (a Marketing + Tech + Strategy agency).

AWIMA specializes in:
- Marketing: Google Ads, Meta Ads, SEO, Email, Content
- Tech: Landing pages, N8N, React, CRM, AI Agents, Automation
- Strategy: Audit, Positioning, Digital Roadmap

NEW SERVICE: AI Integration Consulting (N8N agents, process automation, AI workflows)

## Your Unique Voice
- Direct, no bullshit, data-driven
- Focus: "AI multiplies what exists. Good processes → excellent. Bad processes → catastrophic at scale"
- Hook-first writing (question, stat, contrarian claim, bold statement)
- 1000-1300 characters sweet spot
- Never salesy, always insightful
- Mostly French posts

## Content Pillars

### MARDI: Tendance IA / Research
- Breaking AI research or trends
- Frame through AWIMA's consulting lens
- Include data/stats
- What this means for PME automation
- Examples: efficiency gains, new capabilities

### JEUDI: Cas d'usage / Opinion / Lesson Learned
- How AI amplifies processes (good or bad)
- Real consulting scenario or lesson
- Challenge conventional wisdom
- Actionable insight
- Examples: automation gone wrong, workflow optimization

## Post Structure
1. **Hook** (first 1-2 lines): Question, stat, contrarian statement, or bold claim
2. **Body** (2-4 paragraphs): Story/context + data, line breaks for readability
3. **Insight** (1-2 lines): Key takeaway, actionable
4. **Optional CTA**: Subtle, not salesy
5. **Hashtags** (3-5): #IA #Automation #ProcessOptimization #PME #AgentsIA etc

## Tone
- Short paragraphs (1-3 sentences max)
- Active voice, specific examples
- No fake data
- No generic AI takes
- Authentic Adelin voice`;

async function generatePost(type) {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const isThursday = dayOfWeek === 4;

  let userPrompt;

  if (isThursday || type === "OPINION") {
    userPrompt = `Generate a JEUDI post (Case use / Opinion / Lesson learned).

Pick one of these angles:
1. A lesson about how poorly structured processes get amplified by automation
2. A common automation mistake you see in client work
3. Why most companies fail at AI implementation (it's not the tech, it's the process)
4. A real-world scenario where automation saved the day (or made it worse)
5. Thoughts on AI agents & workflow automation in 2026

Make it specific, insightful, and actionable. Include a hook that stops the scroll.
Max 1300 characters including hashtags.
Format with line breaks for readability.`;
  } else {
    userPrompt = `Generate a MARDI post (Tendance IA / Research / Hot take).

Pick one of these angles:
1. Breaking AI research or new capability released this week
2. A stat/trend about AI efficiency that's actually interesting
3. How a new AI tool changes the game for automation/workflows
4. What's failing in AI right now (contrarian take)
5. An industry trend in AI that impacts consulting/automation

Frame it for PMEs: what does this mean for their business?
Include data/stat if possible.
Max 1300 characters including hashtags.
Format with line breaks for readability.
Write in French (mostly).`;
  }

  const message = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: userPrompt,
      },
    ],
  });

  const content = message.content[0];
  if (content.type !== "text") {
    throw new Error("Unexpected response type from Claude");
  }

  return {
    type: isThursday || type === "OPINION" ? "JEUDI" : "MARDI",
    content: content.text,
    generatedAt: new Date().toISOString(),
    day: today.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

async function main() {
  console.log("🚀 Generating LinkedIn posts for AWIMA...\n");

  const type = process.argv[2] || null; // Optional: "OPINION" or "TREND"

  try {
    const post = await generatePost(type);

    console.log(`📅 ${post.type} - ${post.day}`);
    console.log("━".repeat(60));
    console.log(post.content);
    console.log("━".repeat(60));
    console.log(`\n✅ Generated at: ${post.generatedAt}`);

    // Save to file
    const postsDir = path.join(
      path.dirname(new URL(import.meta.url).pathname),
      "../.claude/posts"
    );

    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true });
    }

    const filename = `post-${post.type.toLowerCase()}-${new Date().toISOString().split("T")[0]}.md`;
    const filepath = path.join(postsDir, filename);

    fs.writeFileSync(
      filepath,
      `# ${post.type} - ${post.day}

Generated: ${post.generatedAt}

---

${post.content}
`
    );

    console.log(`\n💾 Saved to: ${filepath}`);
  } catch (error) {
    console.error("Error generating post:", error.message);
    process.exit(1);
  }
}

main();
