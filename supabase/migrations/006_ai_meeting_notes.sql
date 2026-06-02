-- Add AI Meeting Notes category
INSERT INTO categories (name, slug, icon, description, sort_order)
VALUES (
  'AI Meeting Notes',
  'ai-meeting-notes',
  '📝',
  'AI tools that automatically record, transcribe and summarize meetings with action items and integrations for teams and individuals',
  8
) ON CONFLICT (slug) DO NOTHING;

-- Fellow AI
INSERT INTO tools (name, slug, tagline, description, website_url, affiliate_url, pricing_model, price_details, is_sponsored, benchmark_score)
VALUES (
  'Fellow AI',
  'fellow-ai',
  'The only HIPAA compliant AI meeting assistant with both bot and bot-free recording',
  E'## Fellow AI\n\nFellow AI is the most comprehensive AI meeting assistant for teams and healthcare environments. It is SOC 2 Type II, HIPAA, and GDPR compliant and does not train on user data — making it the only enterprise-grade option safe for clinical conversations involving PHI. Uniquely offers both traditional bot recording and invisible bot-free recording on any platform.\n\n### Strengths\n- SOC 2 Type II, HIPAA, and GDPR compliant\n- Does not train on user data\n- Both bot and bot-free recording options\n- 92 language support\n- 50+ native integrations including Salesforce, HubSpot, Asana, and Notion\n- API and MCP server for custom workflows\n- Admin controls with granular access permissioning and PHI redaction\n\n### Pricing\nFree tier with 5 AI notes per user. Paid plans from $7/user/month.',
  'https://fellow.ai',
  'https://fellow.ai',
  'Freemium',
  'Free · Paid from $7/user/mo',
  false,
  87
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, 91
FROM tools t, categories c
WHERE t.slug = 'fellow-ai' AND c.slug = 'ai-meeting-notes'
ON CONFLICT DO NOTHING;

-- Fathom
INSERT INTO tools (name, slug, tagline, description, website_url, affiliate_url, pricing_model, price_details, is_sponsored, benchmark_score)
VALUES (
  'Fathom',
  'fathom',
  'Best free AI meeting recorder with unlimited recordings and 90 day money back',
  E'## Fathom\n\nFathom is a highly rated AI meeting assistant offering unlimited recording and transcription on its free plan. SOC 2 Type II certified with solid summary quality and automatic action item extraction. Best suited for individuals and small teams attending mostly online calls.\n\n### Strengths\n- Unlimited recording and transcription on the free plan\n- SOC 2 Type II certified\n- Automatic action item extraction\n- 90 day money back guarantee on all paid plans\n- Best for individuals and small teams\n\n### Pricing\nFree forever with unlimited recordings. Premium $20/month or $16/month annual. Team $19/user/month. Business $34/user/month with CRM sync.',
  'https://fathom.ai',
  'https://fathom.ai',
  'Freemium',
  'Free forever · Premium $20/mo',
  false,
  83
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, 85
FROM tools t, categories c
WHERE t.slug = 'fathom' AND c.slug = 'ai-meeting-notes'
ON CONFLICT DO NOTHING;

-- Fireflies.ai
INSERT INTO tools (name, slug, tagline, description, website_url, affiliate_url, pricing_model, price_details, is_sponsored, benchmark_score)
VALUES (
  'Fireflies.ai',
  'fireflies-ai',
  'AI meeting recorder with analytics, conversation intelligence and CRM sync',
  E'## Fireflies.ai\n\nFireflies.ai records, transcribes and analyzes meetings across Zoom, Google Meet, Microsoft Teams, Webex, and more. Strong on analytics and conversation intelligence making it ideal for sales teams tracking talk ratios and deal insights. SOC 2 Type II certified.\n\n### Strengths\n- SOC 2 Type II certified\n- Cross-platform support (Zoom, Meet, Teams, Webex)\n- Analytics and conversation intelligence\n- Talk ratio and deal insight tracking\n- Ideal for sales teams and recurring operational meetings\n\n### Pricing\nFree plan available. Pro $18/seat/month. Business $29/seat/month. Enterprise custom pricing.',
  'https://fireflies.ai',
  'https://fireflies.ai/affiliate',
  'Freemium',
  'Free · Pro $18/seat/mo',
  false,
  80
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, 78
FROM tools t, categories c
WHERE t.slug = 'fireflies-ai' AND c.slug = 'ai-meeting-notes'
ON CONFLICT DO NOTHING;

-- Otter.ai
INSERT INTO tools (name, slug, tagline, description, website_url, affiliate_url, pricing_model, price_details, is_sponsored, benchmark_score)
VALUES (
  'Otter.ai',
  'otter-ai',
  'Popular AI meeting transcription with real time notes and slide capture',
  E'## Otter.ai\n\nOtter.ai is one of the most widely used AI meeting assistants offering real-time transcription, automated summaries, slide capture, and action item extraction. SOC 2 Type II certified. Best suited for administrative, operational, and internal team meetings.\n\n### Strengths\n- SOC 2 Type II certified\n- Real-time transcription\n- Slide capture during meetings\n- Automated summaries and action item extraction\n- Strong for administrative and internal team meetings\n\n### Pricing\nFree plan with 300 monthly transcription minutes. Pro $16.99/month. Business $30/user/month.',
  'https://otter.ai',
  'https://otter.ai',
  'Freemium',
  'Free · Pro $16.99/mo',
  false,
  78
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, 74
FROM tools t, categories c
WHERE t.slug = 'otter-ai' AND c.slug = 'ai-meeting-notes'
ON CONFLICT DO NOTHING;

-- Jamie
INSERT INTO tools (name, slug, tagline, description, website_url, affiliate_url, pricing_model, price_details, is_sponsored, benchmark_score)
VALUES (
  'Jamie',
  'jamie',
  'Privacy first bot-free AI meeting notes for solo professionals and small teams',
  E'## Jamie\n\nJamie is a desktop-based bot-free AI note taker developed by a German company with a strong privacy focus. Records directly from device audio without joining calls as a visible participant — making it ideal for sensitive or client-facing meetings where a bot presence is unwanted. Produces clean, structured summaries.\n\n### Strengths\n- Bot-free recording — no visible bot joins the call\n- GDPR compliant, developed in Germany\n- Clean structured summaries\n- Ideal for sensitive or client-facing meetings\n- Best for solo clinicians, consultants, lawyers, and small teams\n\n### Pricing\nPlans from €24/user/month (~$26 USD). No free tier.',
  'https://meetjamie.ai',
  'https://meetjamie.ai',
  'Paid',
  'From €24/user/mo (~$26 USD)',
  false,
  72
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, 76
FROM tools t, categories c
WHERE t.slug = 'jamie' AND c.slug = 'ai-meeting-notes'
ON CONFLICT DO NOTHING;

-- Granola
INSERT INTO tools (name, slug, tagline, description, website_url, affiliate_url, pricing_model, price_details, is_sponsored, benchmark_score)
VALUES (
  'Granola',
  'granola',
  'Minimalist bot-free AI notepad that enhances your own meeting notes with AI',
  E'## Granola\n\nGranola is a minimalist Mac-only AI meeting assistant that runs invisibly on your device without joining calls as a bot. It uniquely merges your own rough notes taken during the meeting with an AI-enhanced transcript — producing output that reads like notes you would have written yourself.\n\n### Strengths\n- Bot-free recording — no visible participant joins\n- Merges your handwritten notes with AI-enhanced transcript\n- Minimalist, clean output\n- Best for founders, consultants, and solo professionals\n- No bot presence — ideal for client-facing meetings\n\n### Pricing\nFree for 25 lifetime meetings. Paid plan from $18/month.',
  'https://granola.ai',
  'https://granola.ai',
  'Freemium',
  'Free 25 meetings · Paid $18/mo',
  false,
  70
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, 72
FROM tools t, categories c
WHERE t.slug = 'granola' AND c.slug = 'ai-meeting-notes'
ON CONFLICT DO NOTHING;
