# ElevenLabs Voice Agent Knowledge Base

This directory contains the raw text files that serve as the knowledge base for the ElevenLabs voice agent on this portfolio. The information is extracted from the website's constants and components to provide the AI with a personality, professional history, and detailed project knowledge based on Dylan Vidal.

The files are intentionally structured in a simple text format for easy parsing and ingestion by the voice agent's context.

---

## Updating the AI's Knowledge

If you make any changes to the text files within this directory (`about.txt`, `events.txt`, `experience.txt`, `features.txt`, `projects.txt`, `skills.txt`), you will need to have the AI re-read and update its internal knowledge.

Please use the following prompt to instruct the AI to update its knowledge base after you have saved your changes.

### AI Update Prompt

```text
The knowledge base files in `src/constants/` have been updated. Please re-read all `.ts` and `.tsx` files in this directory to refresh your context and ensure your understanding of my background, skills, and experiences is current. Confirm once you have finished processing the updates.
```
