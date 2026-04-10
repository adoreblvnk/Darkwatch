# DarkWatch: The Cart Cleanser — Technical Spec

**AI-powered autonomous shopping proxy. Sanitizing the web's militarized UX in real time.**

DarkWatch is an "Autonomous Shopping Bodyguard" that protects consumers by acting as a proxy agent. It identifies and strips deceptive junk fees, verifies product authenticity through community cross-referencing, and exposes massive retail markups on dropshipped goods.

---

## Architecture Overview

DarkWatch operates in three distinct phases: **The Watchtower**, **The Sanitizer**, and **The Clean Reveal**.

### 1. The Watchtower (Intelligence Phase)
- **Engine:** TinyFish SDK + OpenAI GPT-4o-mini
- **Process:** An autonomous stealth browser instance is launched via TinyFish. It navigates the target domain while streaming live "Thought Trace" logs via Server-Sent Events (SSE).
- **Probes:**
  - **Community Probe:** Scrapes Reddit (r/Scams, r/Reviews) for real-world user experiences and color accuracy reports.
  - **Wholesale Probe:** Simultaneously searches wholesale platforms (Alibaba/AliExpress) to find the original source and calculate retail markups.

### 2. The Sanitizer (Action Phase)
- **Engine:** TinyFish + GPT-4o (Vision)
- **Process:**
  - **Cart Cleansing:** The agent navigates to the checkout page, identifies pre-checked "Shipping Guarantees" or hidden insurance fees, and autonomously un-checks them.
  - **Spatial Validation (Nano Banana 2):** Extracts physical dimensions from the product page and generates a scale-comparison image using multimodal vision to prevent deceptive sizing (comparing products to a Credit Card or iPhone for scale).

### 3. The Clean Reveal (Result Phase)
- **UI:** Transitions from a "Dark Hacker Terminal" to a "Minimalist Light Receipt".
- **Data:** Surfaces "Junk Fees Stripped", "True Price", "Trust Score (0-100)", and a final "Verdict" (Safe / Sketchy / Skip).

---

## Technical Stack

- **Framework:** Next.js 16 (App Router)
- **Runtime:** Bun
- **Browser Orchestration:** TinyFish SDK (Stealth Browser, US/Global Proxies)
- **AI Models:**
  - `gpt-4o`: Multi-modal vision for checkout and spatial analysis.
  - `gpt-4o-mini`: Fast, low-latency log generation and pattern extraction.
  - `gemini-2.0-flash`: Fallback for spatial reasoning and ethical analysis.
- **Styling:** Tailwind CSS + shadcn/ui + Framer Motion.
- **Data:** Server-Sent Events (SSE) for real-time log streaming.

---

## Environment Configuration

Create a `.env.local` file with the following keys:

```bash
OPENAI_API_KEY=sk-...
TINYFISH_API_KEY=...
GEMINI_API_KEY=...
```

---

## Getting Started

```bash
# Install dependencies
bun install

# Run the development server
bun dev
```

Visit `localhost:3000` to start a scan. Use a target like `shein.com` with a query like `iphone 16 case` to see the full "Watchtower" experience in action.

---

## License

MIT
