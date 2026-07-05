# Bamblu

Bamblu is a real-time developer career intelligence platform. Connect your GitHub, LeetCode, and Codeforces accounts — Bamblu tracks your coding activity, finds your skill gaps, benchmarks you against peers, and gives you a personalized roadmap tied to actual job market demand.

Currently in active development.

---

# What Bamblu Does

Most developers don't have a clear picture of where they actually stand. Bamblu fixes that by pulling everything into one place and telling you exactly what to work on next.

It syncs your coding activity across GitHub, LeetCode, and Codeforces automatically. It runs AI analysis on your profile to surface the skills you're missing for the roles you want. It benchmarks you against anonymized peers at similar levels so you know where you actually stand. It builds you a growth roadmap based on real job market demand, not generic advice. And it gives you live mock interview rooms with a collaborative code editor so you can practice in real conditions.

---

# What the Dashboard Offers

Once you log in, everything lives in one place.

The **activity feed** gives you a unified view of everything you've coded across all connected platforms, so you're not jumping between tabs to piece together your own progress.

The **skill gap report** shows you what you have, what you're missing, and ranks those gaps by how much the market actually cares about them right now.

The **peer benchmarks** section shows you where you sit relative to developers at your level. Everything is anonymized — you see real comparisons without anyone's identity attached.

The **roadmap** is a prioritized list of what to learn next and why, built around live job posting data so it stays relevant as the market moves.

The **interview rooms** let you join or create live sessions with a shared code editor for real-time mock interviews with other developers.

---

# Tech Stack

**Frontend** — Next.js with App Router, React Query for data fetching, Zustand for global state, Tailwind CSS and shadcn/ui for the interface.

**Edge and middleware** — Vercel Edge handles every request before it hits the app. JWT authentication, Zod for input validation, and rate limiting all run here.

**Database** — PostgreSQL as the primary database, accessed through Drizzle ORM.

**Cache and realtime** — Redis handles caching so frequent requests come back fast, and pub/sub powers the WebSocket connections in interview rooms.

**Auth** — NextAuth.js with OAuth support for GitHub login.

**Background jobs** — activity sync and AI scoring run on a schedule in the background so the dashboard is always up to date.


---


# Project Structure

**lib** — database connection, auth config, Redis client, API fetch wrappers, Zod validation schemas, and utility functions.

**hooks** — reusable React hooks for WebSocket connections, debouncing, and optimistic UI updates.

**store** — Zustand global state shared across the whole app.

**services** — all backend business logic, split across user management, activity aggregation, skill analysis, and external integrations.

**jobs** — background job definitions for syncing activity data and running AI scoring.

**middleware.ts** — auth checks and rate limiting that run on every single incoming request at the edge.

**types** — shared TypeScript types used across the entire codebase.

---
