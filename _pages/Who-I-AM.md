<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Who I Am - Sanuwar</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.7;
            color: #374151;
            background-color: #ffffff;
            max-width: 800px;
            margin: 0 auto;
            padding: 3rem 2rem;
        }

        /* Typography */
        h2 {
            font-weight: 600;
            color: #1f2937;
            font-size: 1.8rem;
            margin: 3rem 0 1.5rem 0;
            letter-spacing: -0.025em;
        }

        h3 {
            font-weight: 600;
            color: #374151;
            font-size: 1.1rem;
            margin: 2rem 0 0.8rem 0;
        }

        p {
            margin-bottom: 1.2rem;
            color: #4b5563;
            line-height: 1.7;
        }

        /* Hero Section */
        .hero-section {
            text-align: center;
            margin-bottom: 4rem;
            padding: 2rem 0;
        }

        .greeting {
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
            color: #1f2937;
            font-weight: 300;
            letter-spacing: -0.025em;
        }

        .tagline {
            font-size: 1.2rem;
            color: #6b7280;
            line-height: 1.6;
            max-width: 600px;
            margin: 0 auto 2rem auto;
        }

        /* One-liner */
        .one-liner {
            font-size: 1.1rem;
            color: #374151;
            margin: 3rem 0;
            padding: 0 1rem;
            border-left: 3px solid #e5e7eb;
            font-style: italic;
        }

        /* Section content */
        .section-content {
            margin-bottom: 2rem;
        }

        .section-content p {
            margin-bottom: 1.5rem;
        }

        /* Experience items - clean flow */
        .experience-item {
            margin-bottom: 2.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid #f3f4f6;
        }

        .experience-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }

        .experience-item h3 {
            margin-bottom: 0.5rem;
        }

        .experience-period {
            color: #9ca3af;
            font-size: 0.9rem;
            margin-bottom: 1rem;
            display: block;
            font-style: italic;
        }

        .experience-item p {
            color: #4b5563;
        }

        /* Focus areas - clean list */
        .focus-item {
            margin-bottom: 2rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid #f9fafb;
        }

        .focus-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }

        .focus-item h3 {
            margin-bottom: 0.8rem;
            color: #374151;
        }

        .focus-item p {
            color: #4b5563;
            font-style: italic;
        }

        /* CTA Section */
        .cta-section {
            text-align: center;
            margin: 4rem 0 2rem 0;
            padding: 2rem 0;
        }

        .cta-section p {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: #374151;
        }

        .cta-button {
            display: inline-block;
            padding: 0.8rem 2rem;
            background: #374151;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .cta-button:hover {
            background: #1f2937;
            transform: translateY(-1px);
            text-decoration: none;
            color: white;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            body {
                padding: 2rem 1.5rem;
            }
            
            .greeting {
                font-size: 1.8rem;
            }
            
            h2 {
                font-size: 1.5rem;
            }

            .tagline {
                font-size: 1.1rem;
            }
        }

        /* Animation setup */
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
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

    <h2 class="fade-in">My Journey</h2>

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

    <h2 class="fade-in">Core Competencies</h2>

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

    <h2 class="fade-in">Focus Areas</h2>

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

    <h2 class="fade-in">Additional Focus Areas</h2>

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
        <a href="#" class="cta-button">Let's Talk →</a>
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
</body>
</html>