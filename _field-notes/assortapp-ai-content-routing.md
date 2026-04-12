---
title: "🔀 AssortApp: How I Built an AI That Reads Documents and Decides Who Should Care"
date: 2026-04-08
last_modified_at: 2026-04-08
excerpt: "I built an app that takes a document, figures out who in an organization should read it, summarizes it for them, and flags any risks — all automatically. Here is how it works and what I learned."
header:
  teaser: /assets/images/assortapp-banner.png
  overlay_image: /assets/images/assortapp-banner.png
  overlay_filter: 0.2
  caption: "AssortApp — AI Content Routing and Summarization"
categories:
  - field-notes
  - ai-engineering
tags:
  - LangGraph
  - Agentic-AI
  - OpenAI
  - ML-Routing
  - RAG
toc: true
---

## What Is AssortApp?

Imagine you work in a large organization. Every day, documents come in — research papers, news articles, reports, regulatory updates. Someone needs to read each one and decide who it is relevant to. That takes time. It is easy to miss things. And the same document might matter to three different teams for three different reasons.

I built AssortApp to solve this problem.

You give it a document — paste text, drop a URL, or upload a PDF. It reads it, figures out which team it belongs to (Commercial, Medical Affairs, R&D, or Cross-Functional), and generates a tailored summary just for that audience. It also creates a visual mind map, extracts key claims, and flags anything that looks risky or non-compliant.

You can try it here: [assortdemo.duckdns.org](https://assortdemo.duckdns.org)

---

## The Problem I Was Trying to Solve

In many organizations, content ends up in the wrong hands — or no hands at all. A medical affairs team gets a sales brief. An R&D team gets a regulatory update written for lawyers. Nobody has time to re-route everything manually.

I wanted to build something that does this automatically and does it well. Not just a simple keyword match, but something that understands context and can explain its reasoning.

---

## How It Works: The 7-Step Pipeline

AssortApp runs every document through seven steps. I built this pipeline using **LangGraph**, which lets me connect each step like a flowchart — with the ability to loop back, retry, and make decisions along the way.

### Step 1: Ingest
The user submits content — text, a URL, or a file. The app checks the size and runs basic safety checks.

### Step 2: Route the Audience
This is the most interesting step. I built a **hybrid routing system**:

- First, a simple machine learning model tries to classify the document. It uses TF-IDF (a technique that turns text into numbers) and Logistic Regression (a classifier). It is fast and cheap to run.
- If the model is not confident enough, it passes the decision to an LLM (OpenAI) to make the final call.
- If even the LLM is not sure, the document goes to a "Cross-Functional" bucket — meaning it is relevant to everyone.

This approach is smart because it saves money. Most documents are easy to classify. The LLM only gets involved when it is genuinely needed.

### Step 3: Generate the Summary
Once we know the audience, the LLM generates:
- A one-line summary
- 3 to 5 decision-ready bullet points
- Tags and key signals from the document
- A mind map (using Mermaid diagrams)

### Step 4: Evaluate the Output
A second LLM call checks the output. Did it include all required sections? Is the length within limits? If something is wrong, the pipeline does not just give up — it tries again.

### Step 5: Extract Citations and Flag Risks
Two tool nodes run back to back:
- One finds factual claims in the document and traces them back to the source
- Another flags anything that might be a compliance issue — with a severity level and a suggested fix

### Step 6: Revision Loop
If the output fails evaluation, the system retries with corrective instructions. It keeps trying until it gets it right or hits the maximum retry limit.

### Step 7: Save Everything
The final output — along with every attempt, every piece of feedback, and every revision — is saved to a database. Nothing is thrown away. You can always go back and see exactly what happened.

---

## What Makes This Different

A few design choices I am proud of:

**ML first, LLM second.** Most people just throw everything at the LLM. I trained a small, fast ML model to handle the easy cases. It keeps costs low and responses fast.

**Full audit trail.** Every version of every output is saved. You can see why the system made the decisions it made. This matters a lot in professional environments.

**Structured outputs, not just text.** The app does not just return a paragraph. It returns decision bullets, tags, citations, and risk flags — each in a defined format that can be used downstream.

**Tag intelligence over time.** As more documents get processed, the app starts to surface patterns — which topics are trending, which concepts appear together, which topics cross multiple departments. This gets more useful the more you use it.

---

## What I Learned Building This

**LangGraph is worth learning.** It makes it easy to build pipelines that can branch, loop, and recover from errors. Without it, managing the retry logic alone would have been painful.

**Hybrid routing works.** I was not sure at first if mixing ML and LLM routing would be messy. It turned out to be clean and very effective. The confidence thresholds are easy to tune.

**Evaluation is not optional.** Early versions just generated output and called it done. Adding an evaluation step — and a revision loop — made the quality noticeably better. The system catches its own mistakes.

**Simple databases are fine.** I used SQLite. No cloud database, no infrastructure overhead. For a demo and a learning project, it is completely sufficient.

---

## Current Numbers

As of today, the app has processed 89 documents with a 97% success rate. Small numbers, but enough to validate that the pipeline holds up under real use.

---

## Try It Yourself

The app is live at [assortdemo.duckdns.org](https://assortdemo.duckdns.org). You can paste any article, drop a URL, or upload a PDF and see what happens.

The source code is on GitHub: [github.com/sanuwar/assort-design](https://github.com/sanuwar/assort-design)

