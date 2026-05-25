-- Seed categories
INSERT INTO categories (name, slug, icon, description, sort_order) VALUES
  ('Coding & Development', 'coding', '💻', 'AI tools for writing, debugging, and reviewing code', 1),
  ('Writing & Content', 'writing', '✍️', 'AI tools for drafting, editing, and creating content', 2),
  ('Image Generation', 'image-gen', '🎨', 'AI tools for generating and editing images', 3),
  ('Research & Summarization', 'research', '🔬', 'AI tools for research, analysis, and summarization', 4),
  ('Math & Science', 'math-science', '🧮', 'AI tools for solving math problems and scientific analysis', 5),
  ('Video & Audio Creation', 'video-audio', '🎬', 'AI tools for generating and editing video and audio', 6)
ON CONFLICT (slug) DO NOTHING;

-- Seed tools
INSERT INTO tools (name, slug, tagline, description, logo_url, website_url, affiliate_url, pricing_model, price_details, is_sponsored, benchmark_score) VALUES
  ('Claude', 'claude', 'Anthropic''s AI for thoughtful, nuanced work', E'## Claude by Anthropic\n\nClaude is a family of AI assistants developed by Anthropic, designed to be helpful, harmless, and honest. Known for exceptional reasoning, long context handling, and nuanced understanding.\n\n### Strengths\n- Outstanding at complex reasoning and analysis\n- Exceptional long-context understanding (200K+ tokens)\n- Nuanced, thoughtful responses\n- Strong coding capabilities\n- Excellent writing and creative tasks\n\n### Pricing\nFree tier available. Claude Pro at $20/month. API pricing varies by model.', null, 'https://claude.ai', 'https://claude.ai', 'Freemium', 'Free tier + $20/mo Pro', false, 91),
  ('GitHub Copilot', 'github-copilot', 'AI pair programmer built into your editor', E'## GitHub Copilot\n\nGitHub Copilot is an AI-powered code completion tool developed by GitHub and OpenAI. It suggests whole lines or entire functions right in your editor.\n\n### Strengths\n- Deep IDE integration (VS Code, JetBrains, etc.)\n- Context-aware code completions\n- Supports 40+ languages\n- Copilot Chat for in-editor conversations\n\n### Pricing\nFree for students and open-source maintainers. $10/month individual. $19/month business.', null, 'https://github.com/features/copilot', 'https://github.com/features/copilot', 'Freemium', '$10/mo Individual', false, 87),
  ('ChatGPT', 'chatgpt', 'OpenAI''s versatile AI assistant', E'## ChatGPT by OpenAI\n\nChatGPT is OpenAI''s conversational AI, available in multiple versions including GPT-4o and the reasoning-focused o3 model.\n\n### Strengths\n- Versatile across many tasks\n- Strong code generation\n- DALL-E image generation integration\n- Browse the web with Plus\n- Large plugin/GPT ecosystem\n\n### Pricing\nFree tier with GPT-4o. Plus at $20/month. Team and Enterprise plans available.', null, 'https://chat.openai.com', 'https://chat.openai.com', 'Freemium', 'Free + $20/mo Plus', false, 85),
  ('Gemini', 'gemini', 'Google''s multimodal AI with deep search integration', E'## Gemini by Google\n\nGemini is Google''s most capable AI model family, deeply integrated with Google Workspace and search.\n\n### Strengths\n- Multimodal (text, image, audio, video)\n- Native Google integration\n- 1M+ context window\n- Strong at analysis and research\n\n### Pricing\nFree tier available. Advanced at $20/month (includes 2TB Drive).', null, 'https://gemini.google.com', 'https://gemini.google.com', 'Freemium', 'Free + $20/mo Advanced', false, 82),
  ('Cursor AI', 'cursor', 'The AI-first code editor for serious developers', E'## Cursor\n\nCursor is an AI-first code editor forked from VS Code. It puts AI at the center of the development experience with codebase-aware chat and edits.\n\n### Strengths\n- Codebase-wide context\n- Apply AI edits directly to files\n- Composer for multi-file changes\n- Supports all major LLMs\n\n### Pricing\nFree tier. Pro at $20/month. Business at $40/user/month.', null, 'https://cursor.com', 'https://cursor.com', 'Freemium', '$20/mo Pro', false, 79),
  ('Jasper', 'jasper', 'Enterprise AI writing platform for marketing teams', E'## Jasper\n\nJasper is an enterprise-focused AI writing platform built for marketing teams and content creators.\n\n### Strengths\n- Brand voice training\n- Marketing-specific templates\n- SEO integration\n- Team collaboration features\n\n### Pricing\nCreator at $49/month. Pro at $69/month. Business custom pricing.', null, 'https://jasper.ai', 'https://jasper.ai', 'Paid', 'From $49/mo', false, 74),
  ('Copy.ai', 'copyai', 'AI-powered copywriting for sales and marketing', E'## Copy.ai\n\nCopy.ai is an AI writing tool focused on sales and marketing copy, offering templates and workflows for teams.\n\n### Strengths\n- 90+ writing templates\n- GTM workflows\n- Team workspace\n- Brand voice settings\n\n### Pricing\nFree plan available. Starter at $49/month. Advanced at $249/month.', null, 'https://copy.ai', 'https://copy.ai', 'Freemium', 'Free + $49/mo Starter', false, 70),
  ('Grammarly', 'grammarly', 'AI writing assistant for clarity and correctness', E'## Grammarly\n\nGrammarly is an AI-powered writing assistant that helps with grammar, tone, clarity, and style.\n\n### Strengths\n- Real-time grammar and spelling\n- Tone detection\n- Plagiarism checker (Premium)\n- Works across apps via browser extension\n\n### Pricing\nFree tier. Premium at $12/month. Business plans available.', null, 'https://grammarly.com', 'https://grammarly.com', 'Freemium', 'Free + $12/mo Premium', false, 68),
  ('Midjourney', 'midjourney', 'The gold standard for AI art and image generation', E'## Midjourney\n\nMidjourney is a leading AI image generation tool known for producing stunning, high-quality artistic images through a Discord-based interface.\n\n### Strengths\n- Exceptional aesthetic quality\n- Style consistency\n- V6 photorealism\n- Active community\n\n### Pricing\nBasic at $10/month. Standard at $30/month. Pro at $60/month.', null, 'https://midjourney.com', 'https://midjourney.com', 'Paid', 'From $10/mo', false, 90),
  ('DALL-E 3', 'dalle-3', 'OpenAI''s image generation with precise prompt following', E'## DALL-E 3 by OpenAI\n\nDALL-E 3 is OpenAI''s image generation model, integrated directly into ChatGPT and available via API.\n\n### Strengths\n- Excellent prompt adherence\n- Integrated with ChatGPT\n- API access for developers\n- Safe content filtering\n\n### Pricing\nIncluded with ChatGPT Plus. API: $0.04-$0.12 per image.', null, 'https://openai.com/dall-e-3', 'https://openai.com/dall-e-3', 'API', '$0.04/image via API', false, 85),
  ('Stable Diffusion XL', 'stable-diffusion-xl', 'Open-source image generation for full creative control', E'## Stable Diffusion XL\n\nSDXL is an open-source image generation model that can be run locally or via cloud platforms.\n\n### Strengths\n- Fully open-source\n- Run locally for free\n- Highly customizable with LoRAs\n- Large community model ecosystem\n\n### Pricing\nFree (self-hosted) or via cloud APIs from $0.002/image.', null, 'https://stability.ai', 'https://stability.ai', 'Free', 'Free (self-hosted)', false, 80),
  ('Adobe Firefly', 'adobe-firefly', 'Commercial-safe AI image generation from Adobe', E'## Adobe Firefly\n\nAdobe Firefly is Adobe''s commercially safe AI image generation, trained on licensed content and integrated into Creative Cloud.\n\n### Strengths\n- Commercially safe output\n- Deep Creative Cloud integration\n- Generative Fill in Photoshop\n- Style matching\n\n### Pricing\nIncluded with Creative Cloud. Standalone credits available.', null, 'https://firefly.adobe.com', 'https://firefly.adobe.com', 'Freemium', 'Included with CC', false, 77),
  ('Ideogram', 'ideogram', 'AI image generation with exceptional text rendering', E'## Ideogram\n\nIdeogram is an AI image generation platform known for its exceptional ability to render text accurately within images.\n\n### Strengths\n- Best-in-class text in images\n- Realistic and illustrative styles\n- Magic Prompt enhancement\n- Free tier generous\n\n### Pricing\nFree tier. Basic at $8/month. Plus at $20/month.', null, 'https://ideogram.ai', 'https://ideogram.ai', 'Freemium', 'Free + $8/mo Basic', false, 74),
  ('Perplexity AI', 'perplexity', 'AI-powered search engine that cites its sources', E'## Perplexity AI\n\nPerplexity is an AI-powered search and research tool that provides cited, real-time answers by searching the web.\n\n### Strengths\n- Real-time web search\n- Cites all sources\n- Follow-up questions\n- Focused research mode\n- Pro Search with deeper research\n\n### Pricing\nFree tier. Pro at $20/month.', null, 'https://perplexity.ai', 'https://perplexity.ai', 'Freemium', 'Free + $20/mo Pro', false, 89),
  ('Consensus', 'consensus', 'AI search engine for peer-reviewed scientific research', E'## Consensus\n\nConsensus is an AI-powered search engine specifically for finding and understanding peer-reviewed scientific research.\n\n### Strengths\n- Searches 200M+ papers\n- Consensus meter shows agreement\n- Study snapshots\n- Citation export\n\n### Pricing\nFree tier. Premium at $9.99/month.', null, 'https://consensus.app', 'https://consensus.app', 'Freemium', 'Free + $10/mo Premium', false, 74),
  ('Wolfram Alpha', 'wolfram-alpha', 'Computational knowledge engine for math and science', E'## Wolfram Alpha\n\nWolfram Alpha is a computational knowledge engine that answers factual queries using a vast curated knowledge base and computation engine.\n\n### Strengths\n- Step-by-step math solutions\n- Scientific data and constants\n- Computational accuracy\n- Wolfram Language integration\n\n### Pricing\nFree basic. Pro at $7.25/month. Pro Premium at $12/month.', null, 'https://wolframalpha.com', 'https://wolframalpha.com', 'Freemium', 'Free + $7.25/mo Pro', false, 92),
  ('ChatGPT o3', 'chatgpt-o3', 'OpenAI''s most powerful reasoning model', E'## ChatGPT o3 by OpenAI\n\nOpenAI''s o3 model is their most advanced reasoning model, designed for complex math, science, and coding problems.\n\n### Strengths\n- Exceptional mathematical reasoning\n- Step-by-step problem solving\n- Code execution\n- Frontier science capability\n\n### Pricing\nAvailable with ChatGPT Plus and API. Usage-based API pricing.', null, 'https://chat.openai.com', 'https://chat.openai.com', 'Freemium', '$20/mo Plus', false, 90),
  ('Grok', 'grok', 'xAI''s real-time AI with X/Twitter integration', E'## Grok by xAI\n\nGrok is xAI''s AI assistant, featuring real-time information access through X (Twitter) and uncensored responses.\n\n### Strengths\n- Real-time X/Twitter data\n- Strong reasoning (Grok 3)\n- Aurora image generation\n- Less restrictive content policy\n\n### Pricing\nAvailable with X Premium+ ($16/month).', null, 'https://grok.x.ai', 'https://grok.x.ai', 'Paid', '$16/mo (X Premium+)', false, 80),
  ('Runway ML', 'runway-ml', 'Professional AI video generation and editing studio', E'## Runway ML\n\nRunway is an AI creative suite focused on video generation and editing, used by professional filmmakers and creators.\n\n### Strengths\n- Gen-3 video generation\n- Advanced video editing tools\n- Motion brush and camera controls\n- Multi-frame consistency\n\n### Pricing\nFree tier. Standard at $15/month. Pro at $35/month.', null, 'https://runwayml.com', 'https://runwayml.com', 'Freemium', 'Free + $15/mo Standard', false, 85),
  ('Kling AI', 'kling-ai', 'High-quality video generation with cinematic quality', E'## Kling AI\n\nKling AI is a video generation platform known for cinematic quality and realistic motion physics.\n\n### Strengths\n- Cinematic video quality\n- Realistic physics simulation\n- 5-second to 3-minute generations\n- Image-to-video capability\n\n### Pricing\nFree tier. Standard at $9.99/month. Pro at $29.99/month.', null, 'https://klingai.com', 'https://klingai.com', 'Freemium', 'Free + $10/mo', false, 81),
  ('ElevenLabs', 'elevenlabs', 'Industry-leading AI voice generation and cloning', E'## ElevenLabs\n\nElevenLabs is the leading AI voice generation platform, known for ultra-realistic voice synthesis and cloning.\n\n### Strengths\n- Industry-best voice quality\n- Voice cloning from 1-minute sample\n- 30+ languages\n- Real-time voice changing\n\n### Pricing\nFree tier. Starter at $5/month. Creator at $22/month.', null, 'https://elevenlabs.io', 'https://try.elevenlabs.io/h3ioc1p5e7vz', 'Freemium', 'Free + $5/mo Starter', false, 84),
  ('HeyGen', 'heygen', 'AI video generation with lifelike avatars and translation', E'## HeyGen\n\nHeyGen is an AI video platform specializing in avatar-based videos and video translation with lip-sync.\n\n### Strengths\n- Photorealistic AI avatars\n- 40+ languages with lip-sync\n- Video translation\n- Custom avatar creation\n\n### Pricing\nFree tier. Creator at $29/month. Business at $89/month.', null, 'https://heygen.com', 'https://heygen.com', 'Freemium', 'Free + $29/mo Creator', false, 78)
ON CONFLICT (slug) DO NOTHING;

-- Seed tool_categories (coding)
INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, scores.score
FROM (VALUES
  ('claude', 88::numeric),
  ('github-copilot', 90::numeric),
  ('chatgpt', 82::numeric),
  ('gemini', 78::numeric),
  ('cursor', 85::numeric)
) AS scores(slug, score)
JOIN tools t ON t.slug = scores.slug
JOIN categories c ON c.slug = 'coding'
ON CONFLICT DO NOTHING;

-- Writing
INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, scores.score
FROM (VALUES
  ('claude', 90::numeric),
  ('chatgpt', 85::numeric),
  ('jasper', 72::numeric),
  ('copyai', 68::numeric),
  ('grammarly', 75::numeric)
) AS scores(slug, score)
JOIN tools t ON t.slug = scores.slug
JOIN categories c ON c.slug = 'writing'
ON CONFLICT DO NOTHING;

-- Image Gen
INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, scores.score
FROM (VALUES
  ('midjourney', 88::numeric),
  ('dalle-3', 82::numeric),
  ('stable-diffusion-xl', 78::numeric),
  ('adobe-firefly', 80::numeric),
  ('ideogram', 76::numeric)
) AS scores(slug, score)
JOIN tools t ON t.slug = scores.slug
JOIN categories c ON c.slug = 'image-gen'
ON CONFLICT DO NOTHING;

-- Research
INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, scores.score
FROM (VALUES
  ('perplexity', 92::numeric),
  ('claude', 85::numeric),
  ('chatgpt', 80::numeric),
  ('gemini', 82::numeric),
  ('consensus', 88::numeric)
) AS scores(slug, score)
JOIN tools t ON t.slug = scores.slug
JOIN categories c ON c.slug = 'research'
ON CONFLICT DO NOTHING;

-- Math & Science
INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, scores.score
FROM (VALUES
  ('wolfram-alpha', 95::numeric),
  ('chatgpt-o3', 90::numeric),
  ('claude', 84::numeric),
  ('gemini', 82::numeric),
  ('grok', 76::numeric)
) AS scores(slug, score)
JOIN tools t ON t.slug = scores.slug
JOIN categories c ON c.slug = 'math-science'
ON CONFLICT DO NOTHING;

-- Video & Audio
INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, scores.score
FROM (VALUES
  ('runway-ml', 88::numeric),
  ('kling-ai', 80::numeric),
  ('elevenlabs', 90::numeric),
  ('heygen', 82::numeric)
) AS scores(slug, score)
JOIN tools t ON t.slug = scores.slug
JOIN categories c ON c.slug = 'video-audio'
ON CONFLICT DO NOTHING;
