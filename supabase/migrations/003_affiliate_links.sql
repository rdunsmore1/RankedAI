-- Affiliate link: ElevenLabs
UPDATE tools
SET affiliate_url = 'https://try.elevenlabs.io/h3ioc1p5e7vz'
WHERE slug = 'elevenlabs';

-- Logo: ElevenLabs
UPDATE tools
SET logo_url = '/logos/elevenlabs.png'
WHERE slug = 'elevenlabs';

-- Video & Audio: remove Sora, set Kling AI #1, Runway ML #2
DELETE FROM tool_categories
WHERE tool_id = (SELECT id FROM tools WHERE slug = 'sora')
AND category_id = (SELECT id FROM categories WHERE slug = 'video-audio');

UPDATE tools SET benchmark_score = 89 WHERE slug = 'kling-ai';
UPDATE tool_categories
SET editorial_score = 88
WHERE tool_id = (SELECT id FROM tools WHERE slug = 'kling-ai')
AND category_id = (SELECT id FROM categories WHERE slug = 'video-audio');

UPDATE tool_categories
SET editorial_score = 85
WHERE tool_id = (SELECT id FROM tools WHERE slug = 'runway-ml')
AND category_id = (SELECT id FROM categories WHERE slug = 'video-audio');
