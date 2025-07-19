"use client";

import { useConversation } from "@elevenlabs/react";
import { useCallback, useState } from "react";

// Small helper to safely access NEXT_PUBLIC env vars on the client
const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ?? "";

interface TranscriptItem {
    id: number;
    text: string;
    from: "user" | "agent" | "system";
}

export default function VoiceAgent() {
    // Hook to handle conversation life-cycle
    const [connected, setConnected] = useState(false);
    const [transcript, setTranscript] = useState<TranscriptItem[]>([]);

    const conversation = useConversation({
        textOnly: false,
        onConnect: () => setConnected(true),
        onDisconnect: () => setConnected(false),
        onMessage: (msg) => {
            // msg could be tentative; we'll just append final ones for simplicity
            if (msg.isFinal) {
                setTranscript((prev) => [
                    ...prev,
                    {
                        id: prev.length,
                        text: msg.text ?? "",
                        from: msg.from ?? "agent",
                    },
                ]);
            }
        },
        onError: (error) => {
            console.error("ElevenLabs conversation error", error);
        },
    });

    const toggleSession = useCallback(async () => {
        if (connected) {
            conversation.stopSession();
            return;
        }

        if (!AGENT_ID) {
            console.error(
                "Missing NEXT_PUBLIC_ELEVENLABS_AGENT_ID environment variable. Voice agent cannot start."
            );
            return;
        }

        try {
            await conversation.startSession({
                agentId: AGENT_ID,
                connectionType: "webrtc",
            });
        } catch (err) {
            console.error("Failed to start ElevenLabs conversation", err);
        }
    }, [connected, conversation]);

    return (
        <div className="fixed bottom-4 right-4 z-[1000] flex flex-col items-end gap-2">
            <button
                onClick={toggleSession}
                className="rounded-full bg-black/90 px-5 py-3 text-sm font-medium text-white shadow-lg hover:bg-black focus:outline-none"
            >
                {connected ? "End conversation" : "Talk to Dylan"}
            </button>

            {transcript.length > 0 && (
                <div className="max-h-80 w-80 overflow-y-auto rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-xl">
                    {transcript.map((line) => (
                        <p
                            key={line.id}
                            className={`mb-1 whitespace-pre-wrap ${
                                line.from === "user"
                                    ? "text-right text-blue-800"
                                    : "text-left text-gray-800"
                            }`}
                        >
                            {line.text}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}
