---
title: "AssortApp — AI Content Routing and Summarization"
order: 1
layout: single
permalink: /what-I-have-built/assortapp/
header:
  overlay_color: "#2c3e50"
  actions:
    - label: "Try the Live Demo"
      url: "https://assortdemo.duckdns.org"
      btn_class: "btn--primary"
    - label: "View Source Code"
      url: "https://github.com/sanuwar/assort-design"
      btn_class: "btn--secondary"
    - label: "Back to Projects"
      url: "/what-I-have-built/"
      btn_class: "btn--inverse"
excerpt: "An agentic AI pipeline that reads a document, decides who in an organization should care about it, and generates a tailored summary — with citations, risk flags, and a mind map."
sidebar:
  - title: "Tech Stack"
    text: |
      - **Orchestration**: LangGraph
      - **LLM**: OpenAI
      - **ML Routing**: scikit-learn
      - **Backend**: FastAPI
      - **Database**: SQLite
  - title: "Key Features"
    text: |
      ✅ Hybrid ML + LLM routing  
      ✅ Audience-specific summaries  
      ✅ Citation extraction  
      ✅ Risk and compliance flagging  
      ✅ Mind map generation  
      ✅ Full audit trail
toc: true
toc_label: "Project Overview"
toc_icon: "sitemap"
author_profile: true
---

{% include video id="ZeSKSsv_hY4" provider="youtube" %}

## What This Project Does

In large organizations, documents arrive every day — research papers, news articles, regulatory updates, internal reports. Someone has to read each one and decide who should care about it. That takes time and it is easy to miss things.

AssortApp automates this. You give it a document — paste text, drop a URL, or upload a PDF. It reads it, decides which team it is relevant to, and writes a summary just for that audience. It also draws a mind map of the key concepts, pulls out important claims, and flags anything that looks like a compliance risk.

---

## How It Works

The app runs every document through seven steps, all connected using LangGraph.

**Step 1 — Ingest**
The user submits content. The app checks size limits and runs safety checks.

**Step 2 — Route the Audience**
This is the core of the project. A small, fast ML model (TF-IDF + Logistic Regression) tries to classify the document first. If it is confident, it routes immediately. If not, it passes to an LLM to make the call. Documents that are unclear go to a Cross-Functional bucket.

The three main audiences are:
- Commercial
- Medical Affairs
- R&D

**Step 3 — Generate the Summary**
The LLM writes a one-line summary, 3–5 decision-ready bullet points, topic tags, and key signals — all tailored to the routed audience.

**Step 4 — Evaluate**
A second LLM checks the output. Are all required sections present? Is the length right? If something is wrong, the pipeline retries with corrective feedback.

**Step 5 — Citations and Risk Flags**
Two tools run back to back — one extracts factual claims and traces them to the source, the other flags compliance issues by severity.

**Step 6 — Revision Loop**
If the output fails evaluation, the system tries again with corrective context, up to a set retry limit.

**Step 7 — Save Everything**
Every attempt, every piece of feedback, and every final output is saved to a database. Nothing is lost. You can always go back and see exactly what happened and why.

---

## What I Am Most Proud Of

**Hybrid routing.** Using ML first and only calling the LLM when needed keeps the app fast and cheap to run. Most documents are easy to classify — no need to spend LLM tokens on them.

**Full audit trail.** Every version of every output is stored. In professional environments, being able to explain how a decision was made is just as important as the decision itself.

**Tag intelligence.** As more documents are processed, the app starts to surface patterns — which topics are trending, which concepts appear together. It gets more useful over time.

---

## Live Numbers

| Metric | Value |
|--------|-------|
| Documents processed | 89 |
| Success rate | 97% |
| App version | 3.0.0 |

---

## Try It Yourself

The app is live and open to try:

<div class="btn-group">
  <a href="https://assortdemo.duckdns.org" class="btn btn--primary btn--large">
    <i class="fas fa-external-link-alt"></i> Open AssortApp
  </a>
  <a href="https://github.com/sanuwar/assort-design" class="btn btn--secondary btn--large">
    <i class="fab fa-github"></i> View on GitHub
  </a>
</div>
