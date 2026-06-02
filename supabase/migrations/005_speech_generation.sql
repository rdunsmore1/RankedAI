-- Add Speech Generation category
INSERT INTO categories (name, slug, icon, description, sort_order)
VALUES (
  'Speech Generation',
  'speech-generation',
  '🎙️',
  'AI tools for converting text to speech, voice cloning, and audio narration generation',
  7
) ON CONFLICT (slug) DO NOTHING;

-- Update ElevenLabs benchmark score
UPDATE tools SET benchmark_score = 91 WHERE slug = 'elevenlabs';

-- Move ElevenLabs out of Video & Audio
DELETE FROM tool_categories
WHERE tool_id = (SELECT id FROM tools WHERE slug = 'elevenlabs')
  AND category_id = (SELECT id FROM categories WHERE slug = 'video-audio');

-- Add ElevenLabs to Speech Generation
INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, 90
FROM tools t, categories c
WHERE t.slug = 'elevenlabs' AND c.slug = 'speech-generation'
ON CONFLICT DO NOTHING;

-- Insert Fish Audio
INSERT INTO tools (name, slug, tagline, description, website_url, affiliate_url, pricing_model, price_details, is_sponsored, benchmark_score)
VALUES (
  'Fish Audio',
  'fish-audio',
  'Studio-grade voice cloning and TTS with 2 million community voices',
  E'## Fish Audio\n\nFish Audio is a studio-grade AI text-to-speech and voice cloning platform built for production workflows. Powered by the S2 Pro synthesis engine it delivers ultra-realistic TTS with reported 98% human likeness, instant voice cloning from just 10–30 seconds of reference audio, and a community library of over 2 million voice models. Supports 50+ languages with approximately 100ms API latency for real-time voice agents. The open-source FishAudio-S1-mini model can be self-hosted with no API costs.\n\n### Strengths\n- Ultra-realistic TTS powered by the S2 Pro synthesis engine\n- Voice cloning from just 10–30 seconds of reference audio\n- Community library of 2 million+ voice models\n- 50+ language support with ~100ms API latency\n- Open-source FishAudio-S1-mini available for self-hosting\n- Built for production real-time voice agent workflows\n\n### Pricing\nFree plan includes 8,000 credits per month (approximately 7 minutes of audio). Paid plans available for higher usage. Open-source model available for self-hosting at no cost.',
  'https://fish.audio',
  'https://fish.audio',
  'Freemium',
  'Free · 8,000 credits/mo',
  false,
  83
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, 79
FROM tools t, categories c
WHERE t.slug = 'fish-audio' AND c.slug = 'speech-generation'
ON CONFLICT DO NOTHING;

-- Insert Speechma
INSERT INTO tools (name, slug, tagline, description, website_url, affiliate_url, pricing_model, price_details, is_sponsored, benchmark_score)
VALUES (
  'Speechma',
  'speechma',
  'Unlimited free text-to-speech with 580+ voices and commercial licensing',
  E'## Speechma\n\nSpeechma is a completely free browser-based text-to-speech platform that converts written text into natural sounding audio with no account required and no usage caps. It offers 580+ AI voices across 75+ languages with full commercial licensing included on every generated audio file. Each conversion supports up to 2,000 characters.\n\n### Strengths\n- Completely free with no account or signup required\n- 580+ AI voices across 75+ languages\n- Full commercial licensing included on all generated audio\n- Up to 2,000 characters per conversion\n- No hidden caps or rate limits on free tier\n- Ideal for content creators, educators, marketers, and podcasters\n\n### Pricing\nFree forever with no signup required. Pro plan at $1.50/month for 10,000 character limit, no ads, no captchas, and dedicated fast servers.',
  'https://speechma.com',
  'https://speechma.com',
  'Free',
  'Free forever · Pro $1.50/mo',
  false,
  71
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO tool_categories (tool_id, category_id, editorial_score)
SELECT t.id, c.id, 74
FROM tools t, categories c
WHERE t.slug = 'speechma' AND c.slug = 'speech-generation'
ON CONFLICT DO NOTHING;
