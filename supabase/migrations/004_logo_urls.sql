-- Update logo_url for all tools to local icon paths
-- Run this in Supabase SQL Editor after uploading images to public/logos/

UPDATE tools SET logo_url = '/logos/claude-icon.png'          WHERE slug = 'claude';
UPDATE tools SET logo_url = '/logos/chatgpt-icon.png'         WHERE slug = 'chatgpt';
UPDATE tools SET logo_url = '/logos/chatgpt-icon.png'         WHERE slug = 'chatgpt-o3';
UPDATE tools SET logo_url = '/logos/dalle-icon.png'           WHERE slug = 'dalle-3';
UPDATE tools SET logo_url = '/logos/gemini-icon.png'          WHERE slug = 'gemini';
UPDATE tools SET logo_url = '/logos/grok-icon.png'            WHERE slug = 'grok';
UPDATE tools SET logo_url = '/logos/copilot-icon.png'         WHERE slug = 'github-copilot';
UPDATE tools SET logo_url = '/logos/cursor-icon.png'          WHERE slug = 'cursor';
UPDATE tools SET logo_url = '/logos/jasper-icon.png'          WHERE slug = 'jasper';
UPDATE tools SET logo_url = '/logos/copyai-icon.png'          WHERE slug = 'copyai';
UPDATE tools SET logo_url = '/logos/grammarly-icon.png'       WHERE slug = 'grammarly';
UPDATE tools SET logo_url = '/logos/midjourney-icon.png'      WHERE slug = 'midjourney';
UPDATE tools SET logo_url = '/logos/stablediffusion-icon.png' WHERE slug = 'stable-diffusion-xl';
UPDATE tools SET logo_url = '/logos/firefly-icon.png'         WHERE slug = 'adobe-firefly';
UPDATE tools SET logo_url = '/logos/ideogram-icon.png'        WHERE slug = 'ideogram';
UPDATE tools SET logo_url = '/logos/perplexity-icon.png'      WHERE slug = 'perplexity';
UPDATE tools SET logo_url = '/logos/consensus-icon.png'       WHERE slug = 'consensus';
UPDATE tools SET logo_url = '/logos/wolfram-icon.png'         WHERE slug = 'wolfram-alpha';
UPDATE tools SET logo_url = '/logos/runway-icon.png'          WHERE slug = 'runway-ml';
UPDATE tools SET logo_url = '/logos/kling-icon.png'           WHERE slug = 'kling-ai';
UPDATE tools SET logo_url = '/logos/elevenlabs-icon.png'      WHERE slug = 'elevenlabs';
UPDATE tools SET logo_url = '/logos/heygen-icon.png'          WHERE slug = 'heygen';
UPDATE tools SET logo_url = '/logos/metaai-icon.png'          WHERE slug = 'meta-ai';
