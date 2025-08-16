---
title: "Who I Am"
permalink: /who-i-am/
layout: single
author_profile: true
classes: wide
---

<style>
.hero-section {
    text-align: center;
    margin: 2rem 0 3rem 0;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    border-radius: 15px;
    border: 1px solid rgba(102, 126, 234, 0.2);
}

.greeting {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #34495e;
    font-weight: 300;
}

.tagline {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.7;
    margin-bottom: 1rem;
}

.highlight {
    background: linear-gradient(120deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-weight: 600;
    color: #2c3e50;
}

.one-liner {
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    padding: 1.5rem;
    border-radius: 10px;
    border-left: 4px solid #667eea;
    font-size: 1.1rem;
    font-weight: 500;
    color: #2c3e50;
    margin: 2rem 0;
}

.journey-story {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08));
    padding: 2rem;
    border-radius: 12px;
    margin: 2rem 0;
    border: 1px solid rgba(102, 126, 234, 0.15);
}

.journey-story p {
    font-size: 1.05rem;
    margin-bottom: 1.2rem;
    color: #444;
    line-height: 1.7;
}

.experience-grid {
    display: grid;
    gap: 1.5rem;
    margin: 2rem 0;
}

.experience-item {
    background: #fff;
    padding: 1.8rem;
    border-radius: 10px;
    border-left: 4px solid #667eea;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
}

.experience-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.experience-item h3 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 1.15rem;
}

.experience-period {
    color: #667eea;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    display: block;
}

.focus-areas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.focus-card {
    background: #fff;
    padding: 1.8rem;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    border-top: 3px solid #667eea;
}

.focus-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.focus-card h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.focus-card p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
}

.tech-stack {
    background: #2c3e50;
    color: white;
    padding: 2rem;
    border-radius: 12px;
    margin: 2rem 0;
}

.tech-stack h2 {
    color: white;
    margin-bottom: 1.5rem;
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.tech-tag {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.6rem 1rem;
    border-radius: 20px;
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 0.85rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.tech-tag:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.cta-section {
    text-align: center;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 2.5rem;
    border-radius: 12px;
    margin: 3rem 0 2rem 0;
}

.cta-section p {
    font-size: 1.15rem;
    margin-bottom: 1.5rem;
}

.cta-button {
    display: inline-block;
    padding: 0.8rem 2rem;
    background: white;
    color: #667eea;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    color: #667eea;
}

@media (max-width: 768px) {
    .focus-areas {
        grid-template-columns: 1fr;
    }
    
    .tech-tags {
        justify-content: center;
    }
    
    .greeting {
        font-size: 1.5rem;
    }
    
    .hero-section, .journey-story, .tech-stack, .cta-section {
        padding: 1.5rem;
    }
}
</style>

<div class="hero-section">
  <p class="greeting">Hi, I'm Sanuwar 👋</p>
  <p class="tagline">
    A backend engineer who discovered my passion for <span class="highlight">automation and AI</span>, 
    now specializing in <span class="highlight">agentic RAG</span>, <span class="highlight">LLM evaluation & guardrails</span>, 
    and <span class="highlight">MLOps/CI</span>. I build reliable AI systems that actually ship.
  </p>
</div>

<div class="one-liner">
  <strong>What I do in one line:</strong> Ship AI features with measurable reliability — from retrieval quality and prompts to evals, regressions, and rollout.
</div>

## My Journey

<div class="journey-story">
  <p>
    I started my career as a <strong>backend software engineer</strong>, building APIs, working with databases, 
    and ensuring system reliability. But as AI began transforming how we build software, I found myself 
    naturally gravitating toward the intersection of engineering and intelligence.
  </p>
  <p>
    What began as curiosity about automating repetitive tasks evolved into expertise in AI systems. 
    I navigated from traditional backend development to becoming an expert in <strong>automation frameworks</strong>, 
    <strong>AI evaluation systems</strong>, and <strong>intelligent agents</strong> that can reason, retrieve, and act.
  </p>
  <p>
    Today, I specialize in building the infrastructure that makes AI reliable and production-ready — 
    the eval loops, quality gates, and guardrails that turn experimental models into shipped features.
  </p>
</div>

## Core Competencies

<div class="experience-grid">
  <div class="experience-item">
    <h3>🤖 AI & Automation Systems</h3>
    <span class="experience-period">No-Code to Heavy-Code</span>
    <p>
      Built RAG chatbots, agentic AI, and multi-agent systems across the entire spectrum — from no-code platforms like Flowise and n8n, to low-code with CrewAI and OpenAI SDK, to heavy-code implementations with AutoGen and LangChain. My approach combines rapid prototyping with production-grade architecture.
    </p>
  </div>
  
  <div class="experience-item">
    <h3>⚡ Backend Software Development</h3>
    <span class="experience-period">Cross-Platform Expertise</span>
    <p>
      Deep experience building robust REST APIs across both .NET/C# (using Dapper and Entity Framework) and Python/Flask ecosystems. My systematic approach to API design, database optimization, and system reliability stems from rigorous engineering practices honed through diverse technical environments.
    </p>
  </div>
  
  <div class="experience-item">
    <h3>📊 Research & Analytics</h3>
    <span class="experience-period">Academic Rigor Meets Industry</span>
    <p>
      Ph.D. expertise in corporate culture, branding, and consumer behavior with advanced modeling using SPSS, AMOS-SEM, and Hayes process models. My international academic training (Auburn University, Sweden) brings methodological rigor and analytical depth to AI evaluation frameworks and data-driven decision making.
    </p>
  </div>
</div>

## Focus Areas

<div class="focus-areas">
  <div class="focus-card">
    <h3>🤖 Agentic RAG Systems</h3>
    <p>Building intelligent retrievers with memory and tool-calling capabilities. Creating evaluation harnesses with gold standard datasets, LLM judges, and regression gates.</p>
  </div>
  
  <div class="focus-card">
    <h3>⚙️ MLOps/CI for LLM Apps</h3>
    <p>Designing pipelines for canary deployments, offline/online evaluations, and prompt version control. Making AI development as reliable as traditional software.</p>
  </div>
  
  <div class="focus-card">
    <h3>🔍 Vector Search & Orchestration</h3>
    <p>Working with OpenSearch, Pinecone, and orchestration tools like n8n/Flowise. Building the infrastructure that powers intelligent information retrieval.</p>
  </div>
</div>

<div class="tech-stack">
  <h2>Stacks I Reach For</h2>
  <div class="tech-tags">
    <span class="tech-tag">Python</span>
    <span class="tech-tag">SQL</span>
    <span class="tech-tag">AWS & Bedrock</span>
    <span class="tech-tag">GCP & Vertex</span>
    <span class="tech-tag">OpenSearch</span>
    <span class="tech-tag">LangChain</span>
    <span class="tech-tag">Airflow</span>
    <span class="tech-tag">SageMaker</span>
    <span class="tech-tag">Guardrails/Evals</span>
  </div>
</div>

<div class="cta-section">
  <p>Want to collaborate or compare notes?</p>
  <a href="https://sanuwar.github.io/contact/" class="cta-button">Let's Talk →</a>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Animate cards on scroll
    const cards = document.querySelectorAll('.experience-item, .focus-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Tech tag interactions
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px) scale(1)';
        });
    });
});
</script>