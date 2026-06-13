import type { Metadata } from "next";
import { fetchToolPageData } from "@/lib/fetchToolPageData";
import AutomationToolClient from "@/components/AutomationToolClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Makeform Review 2026 — AI Form Builder with Automation | RankedAI™",
  description: "See how Makeform ranks in AI Automation on RankedAI™. AI-generated forms with smart conditional logic and workflow automation.",
  openGraph: {
    title: "Makeform Review 2026 — AI Form Builder with Automation | RankedAI™",
    description: "Makeform generates professional forms from a plain-text prompt and connects responses to automation workflows. Ranked on RankedAI™.",
    type: "website",
  },
};

const DESCRIPTION = `## What is Makeform?
Makeform is an AI-powered form and survey builder that generates professional forms from a plain-text description, applies conditional logic automatically, and connects responses to downstream automation workflows. It combines the simplicity of a traditional form builder with the intelligence of an AI assistant that understands your intent.

## Key Features
- **AI form generation:** Describe the form you need in plain text; Makeform builds it immediately
- **Smart conditional logic:** AI infers and applies skip logic, branching rules, and validation automatically
- **Response automation:** Trigger workflows, email notifications, and integrations on form submission
- **Integrations:** Connects to Notion, Airtable, Zapier, Slack, and common CRM tools
- **Custom branding:** Apply your logo, brand colours, and custom domain to every form
- **Analytics:** Response rates, completion drop-off, and field-level performance insights

## Who Is It For?
- Teams who need forms quickly without manually configuring every field and rule
- Operations teams building intake, request management, and feedback forms at volume
- Marketers running surveys, lead capture forms, and event registrations
- Anyone who wants form creation and workflow automation in a single tool

## Honest Assessment
Makeform's core promise — AI generates a working form from a plain-language description — meaningfully reduces the time to create a well-structured form. The automatic conditional logic is particularly strong: it infers branching rules that would otherwise require careful manual configuration. For teams who create forms regularly, the time saving compounds quickly across the year. As a newer tool, some advanced customisation features are still maturing relative to established form platforms.`;

export default async function MakeformPage() {
  const data = await fetchToolPageData("makeform");
  return (
    <AutomationToolClient
      {...data}
      initials="MF"
      toolName="Makeform"
      tagline="AI form builder that generates smart forms and automates responses"
      websiteUrl="https://makeform.ai"
      pricingUrl="https://makeform.ai/pricing"
      categoryPath="/ai-automation"
      categoryLabel="AI Automation"
      description={DESCRIPTION}
      pricingModel="Freemium"
      pricingNote="Free plan available · Pro plans available"
    />
  );
}
