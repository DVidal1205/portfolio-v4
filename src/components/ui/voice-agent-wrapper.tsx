"use client";

import dynamic from "next/dynamic";

// Lazy-load the heavy ElevenLabs client only on the browser.
const VoiceAgent = dynamic(() => import("@/components/ui/voice-agent"), {
    ssr: false,
});

export default VoiceAgent;
