import type { Metadata } from "next";
import { fetchToolPageData } from "@/lib/fetchToolPageData";
import AutomationToolClient from "@/components/AutomationToolClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Notion AI Review 2026 — AI Workspace Assistant | RankedAI™",
  description: "See how Notion AI ranks in AI Automation on RankedAI™. AI writing, summarization, Q&A, and database automation built into Notion.",
  openGraph: {
    title: "Notion AI Review 2026 — AI Workspace Assistant | RankedAI™",
    description: "Notion AI adds AI drafting, Q&A over your workspace, and database autofill to Notion. Independent rankings on RankedAI™.",
    type: "website",
  },
};

const DESCRIPTION = `## What is Notion AI?
Notion AI is an AI layer built directly into the Notion workspace. It drafts, summarizes, translates, and rewrites content inline; answers questions about your entire workspace using natural language; and autofills database properties using AI analysis. It turns Notion from a note-taking and project tool into an AI-augmented knowledge base.

## Key Features
- **Ask AI:** Query your entire Notion workspace in natural language — find, summarize, and extract from pages and databases
- **Inline writing tools:** Draft, rewrite, summarize, translate, and improve text anywhere in a Notion page
- **Database autofill:** Automatically populate database fields using AI analysis of linked content
- **Meeting summarizer:** Paste a transcript and get structured action items, decisions, and key points
- **Connectors:** Query across Slack messages, Google Drive files, and GitHub activity from within Notion AI
- **Custom AI blocks:** Insert persistent AI-generated content blocks into any page

## Who Is It For?
- Teams already using Notion as their primary workspace and knowledge tool
- Knowledge workers who want AI access to their personal note and document library
- Operations teams using Notion databases who want AI-powered data extraction and tagging
- Content teams who draft, edit, review, and publish from inside Notion

## Honest Assessment
Notion AI is most compelling when your content already lives in Notion. The Ask AI feature is genuinely useful for surfacing information from large team wikis where manual search becomes slow. The database autofill feature can meaningfully reduce manual data entry for operations teams who store structured records in Notion. The main limitation is context: Notion AI works best with information already in Notion and is less effective as a standalone general-purpose AI assistant compared to dedicated tools.`;

export default async function NotionAiPage() {
  const data = await fetchToolPageData("notion-ai");
  return (
    <AutomationToolClient
      {...data}
      initials="NO"
      toolName="Notion AI"
      tagline="AI writing, summarization, and automation built into your Notion workspace"
      websiteUrl="https://notion.so"
      pricingUrl="https://notion.so/pricing"
      categoryPath="/ai-automation"
      categoryLabel="AI Automation"
      description={DESCRIPTION}
      pricingModel="Freemium"
      pricingNote="AI add-on from $8/user/mo (requires Notion plan)"
    />
  );
}
