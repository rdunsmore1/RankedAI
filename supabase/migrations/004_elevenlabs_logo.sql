-- Set ElevenLabs logo_url so it appears in ranking cards and tool detail pages
UPDATE tools
SET logo_url = '/logos/elevenlabs-black.png'
WHERE slug = 'elevenlabs';
