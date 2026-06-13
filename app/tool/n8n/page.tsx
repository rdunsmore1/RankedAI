import type { Metadata } from "next";
import { fetchToolPageData } from "@/lib/fetchToolPageData";
import AutomationToolClient from "@/components/AutomationToolClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "n8n Review 2026 — Open-Source Workflow Automation | RankedAI™",
  description: "See how n8n ranks in AI Automation on RankedAI™. Self-hostable workflow automation with 400+ integrations and full code control.",
  openGraph: {
    title: "n8n Review 2026 — Open-Source Workflow Automation | RankedAI™",
    description: "n8n is open-source, self-hostable workflow automation with code nodes, AI agent support, and 400+ integrations. Ranked on RankedAI™.",
    type: "website",
  },
};

const DESCRIPTION = `## What is n8n?
n8n is an open-source workflow automation tool that runs on your own infrastructure or in the cloud. It offers 400+ native integrations, a code node for custom logic in JavaScript or Python, and built-in support for AI agent workflows — making it the go-to platform for engineering and DevOps teams who want automation with full code-level control.

## Key Features
- **Self-hostable:** Deploy on your own server; complete data sovereignty
- **400+ native integrations:** Nodes for most major services out of the box
- **Code node:** Write JavaScript or Python directly inside any workflow step
- **AI Agent nodes:** Build LLM-powered agents with tool use and memory
- **Version control:** Store and diff workflows as JSON in Git repositories
- **Sub-workflows:** Break complex flows into reusable, callable modules

## Who Is It For?
- Engineering and DevOps teams who want full control over automation infrastructure
- Companies with data sovereignty, security, or compliance requirements
- Developers building AI agent pipelines with LangChain-style orchestration
- Teams who want to avoid per-task pricing on high-volume workflows

## Honest Assessment
n8n is the right choice if you can self-host and want maximum flexibility. The ability to drop into code at any workflow step eliminates the ceiling that pure no-code tools hit. The AI agent capabilities are genuinely impressive for building LLM-powered pipelines. The main trade-off is operational overhead — when self-hosting, you own uptime, updates, and security. The cloud-hosted version removes this burden at the cost of a monthly fee.`;

export default async function N8nPage() {
  const data = await fetchToolPageData("n8n");
  return (
    <AutomationToolClient
      {...data}
      initials="N8"
      toolName="n8n"
      tagline="Open-source workflow automation with full code control and self-hosting"
      websiteUrl="https://n8n.io"
      pricingUrl="https://n8n.io/pricing"
      categoryPath="/ai-automation"
      categoryLabel="AI Automation"
      description={DESCRIPTION}
      pricingModel="Freemium"
      pricingNote="Self-hosted free · Cloud from $20/mo"
    />
  );
}
