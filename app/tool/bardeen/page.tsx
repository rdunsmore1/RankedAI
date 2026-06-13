import type { Metadata } from "next";
import { fetchToolPageData } from "@/lib/fetchToolPageData";
import AutomationToolClient from "@/components/AutomationToolClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Bardeen Review 2026 — AI Browser Automation Agent | RankedAI™",
  description: "See how Bardeen ranks in AI Automation on RankedAI™. AI browser agent that automates repetitive web tasks without code.",
  openGraph: {
    title: "Bardeen Review 2026 — AI Browser Automation Agent | RankedAI™",
    description: "Bardeen automates browser tasks with AI Autobooks — describe a workflow and Bardeen builds it. Independent rankings on RankedAI™.",
    type: "website",
  },
};

const DESCRIPTION = `## What is Bardeen?
Bardeen is an AI browser automation tool that works as a Chrome extension. It automates repetitive web tasks — scraping data, filling forms, triggering actions across tabs — using pre-built Playbooks or natural language commands. The AI Autobooks feature lets you describe a workflow in plain text and Bardeen builds the automation.

## Key Features
- **AI Autobooks:** Describe any web task in natural language; AI builds the automation for you
- **Web scraper:** Extract structured data from any website without code or API access
- **Trigger-based automation:** Run workflows on schedule, on new data, or from any event
- **Integrations:** Connects with Notion, Airtable, HubSpot, Salesforce, Slack, and more
- **Community playbooks:** Library of pre-built automations for common sales and ops tasks
- **Browser-native:** Works across all tabs and websites — no API access required

## Who Is It For?
- Sales and marketing teams doing repetitive outreach, research, and data collection tasks
- Operations teams who manually move data between web tools that lack APIs
- Recruiters automating candidate data collection from job boards
- Anyone who repeats the same series of browser actions multiple times per week

## Honest Assessment
Bardeen fills a gap that API-based automation tools miss: automating tasks that only have a web UI. For browser-native workflows like scraping a site without an API, copying data between two web apps, or bulk-filling forms, Bardeen is the best tool in its class. The AI Autobooks feature has meaningfully reduced setup friction. The tool is best suited for browser tasks; it is less suitable for complex server-side data transformation or enterprise-scale volumes.`;

export default async function BardeenPage() {
  const data = await fetchToolPageData("bardeen");
  return (
    <AutomationToolClient
      {...data}
      initials="BD"
      toolName="Bardeen"
      tagline="AI browser agent that automates repetitive web tasks without code"
      websiteUrl="https://bardeen.ai"
      pricingUrl="https://bardeen.ai/pricing"
      categoryPath="/ai-automation"
      categoryLabel="AI Automation"
      description={DESCRIPTION}
      pricingModel="Freemium"
      pricingNote="Free plan with credits · Pro from $10/mo"
    />
  );
}
