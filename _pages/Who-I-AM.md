---
layout: single
title: "Who I Am"
permalink: /who-i-am/
author_profile: true
---

<div class="hero-section fade-in">
  <p class="greeting">Hi, I'm Sanuwar 👋</p>
  <p class="tagline">
    A backend engineer who discovered my passion for automation and AI, 
    now specializing in agentic RAG, LLM evaluation and guardrails, 
    and MLOps/CI. I build reliable AI systems that actually ship.
  </p>
</div>

<div class="one-liner fade-in">
  What I do in one line: Ship AI features with measurable reliability — from retrieval quality and prompts to evals, regressions, and rollout.
</div>

## My Journey
{: .fade-in}

<div class="section-content fade-in">
  <p>
    I started my career as a backend software engineer, building APIs, working with databases, 
    and ensuring system reliability. But as AI began transforming how we build software, I found myself 
    naturally gravitating toward the intersection of engineering and intelligence.
  </p>
  <p>
    What began as curiosity about automating repetitive tasks evolved into expertise in AI systems. 
    I navigated from traditional backend development to becoming an expert in automation frameworks, 
    AI evaluation systems, and intelligent agents that can reason, retrieve, and act.
  </p>
  <p>
    Today, I specialize in building the infrastructure that makes AI reliable and production-ready — 
    the eval loops, quality gates, and guardrails that turn experimental models into shipped features.
  </p>
</div>

## Core Competencies
{: .fade-in}

<div class="fade-in">
  <div class="experience-item">
    <h3>AI & Automation Systems</h3>
    <span class="experience-period">No-Code to Heavy-Code</span>
    <p>
      Built RAG chatbots, agentic AI, and multi-agent systems across the entire spectrum — from no-code platforms like Flowise and n8n, to low-code with CrewAI and OpenAI SDK, to heavy-code implementations with AutoGen and LangChain. My approach combines rapid prototyping with production-grade architecture.
    </p>
  </div>
  
  <div class="experience-item">
    <h3>Backend Software Development</h3>
    <span class="experience-period">Cross-Platform Expertise</span>
    <p>
      Deep experience building robust REST APIs across both .NET/C# (using Dapper and Entity Framework) and Python/Flask ecosystems. My systematic approach to API design, database optimization, and system reliability stems from rigorous engineering practices honed through diverse technical environments.
    </p>
  </div>
  
  <div class="experience-item">
    <h3>Research & Analytics</h3>
    <span class="experience-period">Academic Rigor Meets Industry</span>
    <p>
      Ph.D. expertise in corporate culture, branding, and consumer behavior with advanced modeling using SPSS, AMOS-SEM, and Hayes process models. My international academic training (Auburn University, Sweden) brings methodological rigor and analytical depth to AI evaluation frameworks and data-driven decision making.
    </p>
  </div>
</div>

## Focus Areas
{: .fade-in}

<div class="fade-in">
  <div class="focus-item">
    <h3>Agentic RAG Systems</h3>
    <p>Building intelligent retrievers with memory and tool-calling capabilities. Creating evaluation harnesses with gold standard datasets, LLM judges, and regression gates.</p>
  </div>
  
  <div class="focus-item">
    <h3>MLOps/CI for LLM Apps</h3>
    <p>Designing pipelines for canary deployments, offline/online evaluations, and prompt version control. Making AI development as reliable as traditional software.</p>
  </div>
  
  <div class="focus-item">
    <h3>Vector Search & Orchestration</h3>
    <p>Working with OpenSearch, Pinecone, and orchestration tools like n8n/Flowise. Building the infrastructure that powers intelligent information retrieval.</p>
  </div>
</div>

## Additional Focus Areas
{: .fade-in}

<div class="fade-in">
  <div class="focus-item">
    <h3>System Prompts & Guardrails</h3>
    <p>Designing robust system prompts, role definitions, and safety guardrails to align model behavior with business goals and compliance standards.</p>
  </div>
  
  <div class="focus-item">
    <h3>Workflow Orchestration</h3>
    <p>Building end-to-end AI workflows with tools like Airflow, Dagster, n8n, and Flowise. Coordinating retrieval, model calls, post-processing, and evaluations into reproducible pipelines.</p>
  </div>
  
  <div class="focus-item">
    <h3>Process Automation with AI Agents</h3>
    <p>Developing multi-agent systems that automate repetitive workflows, integrate APIs, and handle human-in-the-loop decision making at scale.</p>
  </div>
  
  <div class="focus-item">
    <h3>Evaluation & Benchmarking</h3>
    <p>Creating custom evaluation harnesses, gold-standard datasets, and regression testing suites for continuous monitoring of LLM applications.</p>
  </div>
  
  <div class="focus-item">
    <h3>Cloud-Native AI Infrastructure</h3>
    <p>Deploying scalable AI solutions on AWS, GCP, and Azure, leveraging containerization (Docker/Kubernetes) and CI/CD practices for model deployment.</p>
  </div>
  
  <div class="focus-item">
    <h3>Security & Compliance for AI Systems</h3>
    <p>Implementing access controls, audit logs, and compliance checks (HIPAA, SOC 2, GDPR) within AI/ML pipelines to ensure enterprise readiness.</p>
  </div>
</div>

<div class="cta-section fade-in">
  <p>Want to collaborate or compare notes?</p>
  <a href="/contact/" class="btn btn--primary btn--large">Let's Talk →</a>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Initial reveal
    setTimeout(() => {
        document.querySelector('.hero-section').classList.add('visible');
    }, 200);
});
</script>