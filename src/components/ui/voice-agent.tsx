"use client";

import { useEffect } from "react";

export default function ConvaiWidget() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
        script.async = true;
        script.type = "text/javascript";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    /* @ts-expect-error - ElevenLabs */
    return <elevenlabs-convai agent-id="agent_01jyak3rghepb9v506bfqh0gf0" />;
}
