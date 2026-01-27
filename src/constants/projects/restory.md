ReStory was a winner at SwampHacks XI, taking home **1st Place Best Overall** (1st of 112 projects). ReStory is a multi-modal AI wearable that fuses computer vision with neural audio processing to help people living with Alzheimer's by acting as a cognitive safety net - a wearable social second brain that restores a patient's dignity and agency by remembering faces and shared history so they don't have to.

For people living with Alzheimer's, the world can become a room of strangers. This loss of context leads to deep social anxiety. We built ReStory to address this challenge by creating a wearable device that captures and remembers the people around them.

**Biometric Identity Fusion**: ReStory captures **512-d ArcFace** facial and **192-d ECAPA-TDNN** vocal embeddings to create a unique signature for every contact. This multi-modal approach ensures robust identity recognition even when faces are partially obscured or voices change due to room acoustics.

**Wearer-First Locking**: Uses a custom **Wearer Anchor** to explicitly isolate the user's own voice, ensuring the AI never confuses the wearer's thoughts with the participant's speech. This was one of our biggest challenges - filtering out the wearer's own voice in a wearable form factor.

**Neural Diarization**: Performs real-time speaker separation to ensure conversation threads are never crossed. This allows ReStory to maintain accurate context about who said what during conversations.

**Real-time Memory Feed**: A mobile dashboard automatically sorts contacts by interaction frequency, highlighting the person you are currently talking to and displaying their face for instant verification.

We utilized a distributed edge-to-GPU architecture with a Raspberry Pi 5 streaming 30FPS video and PCM audio over a custom low-latency binary WebSocket. The vision and audio stack uses **InsightFace** for high-precision biometric recognition and **OpenCV** for **Spatial Zone Locking** to maintain identity even when faces move or turn. **Gemini 3 Flash** processes diarized transcripts into **synthesized JSON lore**, merging new facts with existing baseline knowledge.

**Challenges we overcame:**
- **Identity Drift**: Managing how a person's voice changes due to room acoustics. We implemented **Centroid Evolution** and **Silence Protection** to "lock" voice candidates to a face rather than creating "new" strangers every session.
- **The Wearer Paradox**: Filtering out the wearer's own voice in a wearable form factor. We solved this with a **Probabilistic Linker** that uses spatial co-occurrence to attribute lore correctly.
- **Blackwell 5090 Integration**: As early adopters of the RTX 5090, we had to patch Torch 2.4+ security restrictions (weights_only) to load our model weights on Blackwell silicon.
- **NumPy Scalar Safety**: We solved persistent logic crashes by hardening our linker against the multi-element arrays returned by ChromaDB vector distance queries.

Highlights:
• **Multi-modal AI** combining facial and vocal biometrics
• **Real-time processing** with edge-to-GPU architecture
• **Neural diarization** for accurate speaker separation
• **Wearer-first design** ensuring privacy and accuracy
• **Mobile dashboard** for real-time memory feed
• **Distributed architecture** with Raspberry Pi 5 and GPU acceleration

Other Contributors:
• [Lewin Bobda](https://www.linkedin.com/in/lewin-bobda-08ba2325a/)
• [Luke Cullen](https://www.linkedin.com/in/luke-cullen-319701305/)
• [Leonard Gofman](https://www.linkedin.com/in/lgofman/)
