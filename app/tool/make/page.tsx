import type { Metadata } from "next";
import { fetchToolPageData } from "@/lib/fetchToolPageData";
import AutomationToolClient from "@/components/AutomationToolClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Make Review 2026 — Visual No-Code Automation Platform | RankedAI™",
  description: "See how Make ranks in AI Automation on RankedAI™. Visual canvas-based workflow automation for complex, data-heavy processes.",
  openGraph: {
    title: "Make Review 2026 — Visual No-Code Automation Platform | RankedAI™",
    description: "Make's visual scenario builder handles complex data transformations and multi-branch automation. Independent rankings on RankedAI™.",
    type: "website",
  },
};

const DESCRIPTION = `## What is Make?
Make (formerly Integromat) is a visual automation platform built around a canvas-based scenario builder. Unlike linear workflow builders, Make displays the entire data flow as a connected diagram — inputs, transformations, routing, and outputs — making complex automations easier to build, read, and debug.

## Key Features
- **Visual canvas builder:** See the full automation as a connected node diagram
- **Data structures:** Map, transform, and aggregate data across complex JSON payloads
- **HTTP/Webhook module:** Connect any API without a native integration
- **Error handling:** Built-in error routes, retry logic, and rollback controls
- **Iterators & Aggregators:** Process arrays, loop over records, and collect results
- **Scheduling & Instant triggers:** Run on schedule or immediately via webhooks

## Who Is It For?
- Technical users and operations teams who need fine-grained control over data flows
- Teams dealing with nested JSON, arrays, or complex data transformations
- Developers who want visual automation without writing full application code
- Teams migrating from Zapier who need more powerful data handling at lower cost

## Honest Assessment
Make is the power-user alternative to Zapier. The canvas interface feels more like programming than filling forms — a feature for some users and a learning curve for others. For automations involving complex data transformation, conditional branching, or bulk record processing, Make typically outperforms Zapier at lower cost per operation. The setup investment pays off once workflows exceed simple app-to-app triggers.`;

export default async function MakePage() {
  const data = await fetchToolPageData("make");
  return (
    <AutomationToolClient
      {...data}
      initials="MK"
      toolName="Make"
      tagline="Visual scenario-based automation for complex, data-heavy workflows"
      websiteUrl="https://make.com"
      pricingUrl="https://make.com/en/pricing"
      categoryPath="/ai-automation"
      categoryLabel="AI Automation"
      description={DESCRIPTION}
      pricingModel="Freemium"
      pricingNote="Free plan · Core from $9/mo"
    />
  );
}
