import type { Metadata } from "next";
import { fetchToolPageData } from "@/lib/fetchToolPageData";
import AutomationToolClient from "@/components/AutomationToolClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "TinyFish Review 2026 — AI Automation for Business Workflows | RankedAI™",
  description: "See how TinyFish ranks in AI Automation on RankedAI™. AI agent platform for building intelligent, human-in-the-loop business workflows.",
  openGraph: {
    title: "TinyFish Review 2026 — AI Automation for Business Workflows | RankedAI™",
    description: "TinyFish lets teams build AI agents that handle operational workflows with human escalation when needed. Independent rankings on RankedAI™.",
    type: "website",
  },
};

const DESCRIPTION = `## What is TinyFish?
TinyFish is an AI automation platform designed for building intelligent agents that handle operational business workflows. It focuses on connecting AI reasoning to real processes — allowing agents to take actions, make decisions, and escalate to human reviewers when confidence is low or a decision exceeds defined thresholds.

## Key Features
- **AI agent builder:** Create agents that reason over data, decide, and take actions across connected tools
- **Human-in-the-loop:** Route edge cases and high-stakes decisions to human approvers before execution
- **Workflow orchestration:** Chain multiple agents and actions into a single end-to-end process
- **API and webhook integrations:** Connect to existing business tools without custom engineering
- **Monitoring dashboard:** Track agent actions, decisions, confidence levels, and outcomes
- **Custom triggers:** Start workflows from any event — time-based, webhook, or user action

## Who Is It For?
- Operations and RevOps teams automating complex, decision-based internal processes
- Teams building AI-assisted customer support with escalation to human agents
- Businesses that need AI automation with oversight, audit trails, and approval gates
- Companies wanting to deploy AI agents without a dedicated engineering team

## Honest Assessment
TinyFish occupies a well-considered niche: AI automation that includes human-in-the-loop oversight rather than fully autonomous execution. This approach is right for workflows where full automation creates compliance risk, quality variance, or business liability. The platform is newer than established tools like Zapier or Make, so the native integration library is smaller — but the AI-native architecture positions it well as AI agents become a standard part of business operations.`;

export default async function TinyfishPage() {
  const data = await fetchToolPageData("tinyfish");
  return (
    <AutomationToolClient
      {...data}
      initials="TF"
      toolName="TinyFish"
      tagline="AI agent platform for intelligent, human-in-the-loop business workflows"
      websiteUrl="https://tinyfish.ai"
      pricingUrl="https://tinyfish.ai/pricing"
      categoryPath="/ai-automation"
      categoryLabel="AI Automation"
      description={DESCRIPTION}
      pricingModel="Freemium"
      pricingNote="Free tier available · Pro plans available"
    />
  );
}
