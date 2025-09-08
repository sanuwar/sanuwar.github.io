---
title: "Meet Sanuwar — Pure-Python Career Chatbot"
layout: single
permalink: /what-I-have-built/meet-sanuwar/
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/chatbot-banner.jpg
  actions:
    - label: "View Demo"
      url: "https://www.youtube.com/embed/A1RM34p3Gz4"
      btn_class: "btn--primary"
    - label: "Try the Chatbot"
      url: "https://huggingface.co/spaces/Sanuwar/meet-sanuwar"
      btn_class: "btn--success"
    - label: "Back to Projects"
      url: "/what-I-have-built/"
      btn_class: "btn--secondary"
excerpt: "A personal Q&A bot built in pure Python—minimal RAG, strict context answers, and simple CSV logging. No frameworks, no vector DB."
sidebar:
  - title: "Tech Stack"
    text: |
      - **Language**: Python 3.11
      - **LLM**: OpenAI (gpt-4o-mini)
      - **Embeddings**: text-embedding-3-small
      - **UI**: Gradio (tiny wrapper)
      - **Storage**: JSON index + CSV logs
      - **Hosting**: Hugging Face Spaces
  - title: "Key Features"
    text: |
      ✅ Pure-Python retrieval (regex chunking + cosine)  
      ✅ Strict RAG guardrails (“use only Context”)  
      ✅ Synonym + timeframe reasoning  
      ✅ Enter-to-send, Save contact  
      ✅ One-switch index rebuild on Space
toc: true
toc_label: "Project Guide"
toc_icon: "robot"
author_profile: true 
---

{% include video id="A1RM34p3Gz4" provider="youtube" %}

{: .notice--info}
**Try it live:** The chatbot runs on **Hugging Face Spaces** with a clean **Gradio** UI.  
👉 https://huggingface.co/spaces/Sanuwar/meet-sanuwar

## 🚀 What This Project Does

**Meet Sanuwar** is a personal Q&A chatbot built with **only Python**. It converts a single Markdown profile into a searchable index and answers career questions with strict context grounding—no vector database, no heavy frameworks.

- **Reads** `activities.md` → builds embeddings → saves `data/retrieval_index.json`  
- **Retrieves** top-k chunks with cosine similarity  
- **Answers** with a concise, context-only prompt  
- **Logs** leads and unknown questions to simple CSVs

{: .notice--success}
**Why it’s different:** Minimal code, transparent retrieval, production-friendly guardrails, and easy deploys to Hugging Face Spaces.

## 🤖 Agentic AI Workflow (Pure Python)

This career chatbot is a **multi-step, agentic LLM workflow** implemented without frameworks. The model has **narrow, purposeful autonomy**: it chooses between answering from context or invoking small tools when needed.

- **Perception → Reasoning → Action loop**
  - *Perception:* Retrieve top-k chunks from `activities.md` (cosine similarity).
  - *Reasoning:* Apply a strict, context-only prompt with synonym + timeframe logic.
  - *Action:*  
    - If the answer is known → reply concisely.  
    - If unknown → **log the question** to `unknown_questions.csv`.  
    - If the user shares contact → **record name/email** to `leads.csv`.

- **Autonomy with guardrails**
  - The LLM never invents facts; it answers only from the provided Context.
  - “Niceties” (hi/thanks/bye) are handled conversationally without tools.
  - Year/timeframe questions synthesize overlapping roles (e.g., 2020 transitions).

- **Why this is agentic**
  - The model **decides** when to answer vs. when to call tools (logging, lead capture).
  - Each tool is a tiny, auditable Python function (CSV writes)—no external services.
  - The loop is transparent and easy to extend (e.g., add email alerts or a task queue).

## 🏗️ Architecture Overview

<div class="feature__wrapper">
  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-cubes fa-3x" style="color: #3498db;"></i>
      </div>
      <div class="archive__item-body">
        <h2 class="archive__item-title">Index Builder</h2>
        <div class="archive__item-excerpt">
          <p>Parses headings → creates chunks → generates OpenAI embeddings → writes <code>data/retrieval_index.json</code>.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-comments fa-3x" style="color: #e74c3c;"></i>
      </div>
      <div class="archive__item-body">
        <h2 class="archive__item-title">Chat Engine</h2>
        <div class="archive__item-excerpt">
          <p>Cosine search → top-k context → concise answer with strict RAG prompt (synonyms + timeframe logic).</p>
        </div>
      </div>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-file-csv fa-3x" style="color: #27ae60;"></i>
      </div>
      <div class="archive__item-body">
        <h2 class="archive__item-title">Lightweight Logging</h2>
        <div class="archive__item-excerpt">
          <p>Captures name/email to <code>leads.csv</code> and unknown questions to <code>unknown_questions.csv</code>—no database required.</p>
        </div>
      </div>
    </div>
  </div>
</div>

## ⚡ Key Capabilities

### 🎯 Context-Only Answers (Strict RAG)
The bot answers **only** from the provided context—no hallucinations. Synonym mapping handles phrases like “professional experience” → Industry/Research/Teaching.

```text
User: "Which company does Sanuwar work for?"
Bot: "Humana (2020–Present)."
