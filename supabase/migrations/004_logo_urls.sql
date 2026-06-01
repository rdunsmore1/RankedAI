-- Update logo_url for all tools to local icon paths
-- Run this in Supabase SQL Editor after uploading images to public/images/tools/

UPDATE tools SET logo_url = '/images/tools/claude-icon.png'          WHERE slug = 'claude';
UPDATE tools SET logo_url = '/images/tools/chatgpt-icon.png'         WHERE slug = 'chatgpt';
UPDATE tools SET logo_url = '/images/tools/chatgpt-icon.png'         WHERE slug = 'chatgpt-o3';
UPDATE tools SET logo_url = '/images/tools/dalle-icon.png'           WHERE slug = 'dalle-3';
UPDATE tools SET logo_url = '/images/tools/gemini-icon.png'          WHERE slug = 'gemini';
UPDATE tools SET logo_url = '/images/tools/grok-icon.png'            WHERE slug = 'grok';
UPDATE tools SET logo_url = '/images/tools/copilot-icon.png'         WHERE slug = 'github-copilot';
UPDATE tools SET logo_url = '/images/tools/cursor-icon.png'          WHERE slug = 'cursor';
UPDATE tools SET logo_url = '/images/tools/jasper-icon.png'          WHERE slug = 'jasper';
UPDATE tools SET logo_url = '/images/tools/copyai-icon.png'          WHERE slug = 'copyai';
UPDATE tools SET logo_url = '/images/tools/grammarly-icon.png'       WHERE slug = 'grammarly';
UPDATE tools SET logo_url = '/images/tools/midjourney-icon.png'      WHERE slug = 'midjourney';
UPDATE tools SET logo_url = '/images/tools/stablediffusion-icon.png' WHERE slug = 'stable-diffusion-xl';
UPDATE tools SET logo_url = '/images/tools/firefly-icon.png'         WHERE slug = 'adobe-firefly';
UPDATE tools SET logo_url = '/images/tools/ideogram-icon.png'        WHERE slug = 'ideogram';
UPDATE tools SET logo_url = '/images/tools/perplexity-icon.png'      WHERE slug = 'perplexity';
UPDATE tools SET logo_url = '/images/tools/consensus-icon.png'       WHERE slug = 'consensus';
UPDATE tools SET logo_url = '/images/tools/wolfram-icon.png'         WHERE slug = 'wolfram-alpha';
UPDATE tools SET logo_url = '/images/tools/runway-icon.png'          WHERE slug = 'runway-ml';
UPDATE tools SET logo_url = '/images/tools/kling-icon.png'           WHERE slug = 'kling-ai';
UPDATE tools SET logo_url = '/images/tools/elevenlabs-icon.png'      WHERE slug = 'elevenlabs';
UPDATE tools SET logo_url = '/images/tools/heygen-icon.png'          WHERE slug = 'heygen';
UPDATE tools SET logo_url = '/images/tools/metaai-icon.png'          WHERE slug = 'meta-ai';
