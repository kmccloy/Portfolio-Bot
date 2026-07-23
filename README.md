# Kyle McCloy — Interactive Portfolio Bot

## What's in this folder
- `src/PortfolioBot.jsx` — the chatbot itself (design, knowledge base, chat logic)
- `src/main.jsx` — entry point that renders it
- `api/chat.js` — the serverless function that talks to Claude securely (your API key lives here, never in the browser)
- `index.html`, `vite.config.js`, `package.json` — standard project setup, no need to touch these

## Deploy to Vercel — step by step

### 1. Put this project on GitHub
- Go to github.com, create a new repository (e.g. `kyle-portfolio-bot`), keep it private if you'd rather.
- Upload this whole folder to it. Easiest way: on the repo page, click "uploading an existing file" and drag in everything (or use GitHub Desktop if you have it, or `git` from the command line if you're comfortable with that).

### 2. Connect Vercel to the repo
- Go to vercel.com, log in (you said you've already got an account).
- Click "Add New" → "Project".
- Choose "Import Git Repository" and select the `kyle-portfolio-bot` repo you just created.
- Vercel will auto-detect it's a Vite project — leave the default build settings as they are.

### 3. Add your API key as an environment variable — this is the important step
- Still on the import screen (or afterward in Project Settings → Environment Variables), add:
  - **Name:** `ANTHROPIC_API_KEY`
  - **Value:** your actual API key from console.anthropic.com
- This keeps the key on Vercel's servers only. It's never in your code, never on GitHub, never visible in the browser.

### 4. Deploy
- Click "Deploy". Takes about a minute.
- You'll get a live URL like `kyle-portfolio-bot.vercel.app` — that's your shareable link.

### 5. Test it
- Open the link, ask it a few questions yourself first.
- Check the browser's dev tools (right-click → Inspect → Network tab) and confirm you never see your raw API key anywhere in the requests — you should only see calls to `/api/chat`, not to `api.anthropic.com` directly. That's the security check that matters most.

## Updating the content later
Whenever you want to add more material (new stories, updated CV, etc.), edit the `KNOWLEDGE_BASE` constant near the top of `src/PortfolioBot.jsx`, then push the change to GitHub — Vercel will automatically redeploy within a minute or two. No need to touch anything else.

## Cost
- Vercel hosting: free, on their Hobby tier, for a project at this scale.
- Anthropic API usage: pay-as-you-go, billed to your Anthropic account directly. Light recruiter traffic with short capped responses should run a few pounds a month at most — worth checking your usage dashboard at console.anthropic.com occasionally.
