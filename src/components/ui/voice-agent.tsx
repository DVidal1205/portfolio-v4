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

    return (
        <>
            <style>
                {`
          elevenlabs-convai {
            z-index: 1000;
          }

					@media (max-width: 768px) {
						elevenlabs-convai {
							transform: scale(0.8);
							transform-origin: bottom right;
							bottom: 0px !important;
							right: 0px !important;
							margin: 0 !important;
							padding: 0 !important;
							position: fixed !important;
						}
					}
				`}
            </style>
            {/* @ts-expect-error - ElevenLabs */}
            <elevenlabs-convai agent-id="agent_01jyak3rghepb9v506bfqh0gf0" />
        </>
    );
}
