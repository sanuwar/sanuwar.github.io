<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Who I Am - Sanuwar Rashid</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.7;
            color: #2c3e50;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 2rem 0;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .main-content {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 4rem;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(20px);
            animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero-section {
            text-align: center;
            margin-bottom: 4rem;
            padding-bottom: 3rem;
            border-bottom: 2px solid #e9ecef;
        }

        h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
        }

        .greeting {
            font-size: 2rem;
            margin-bottom: 2rem;
            color: #34495e;
            font-weight: 300;
        }

        .tagline {
            font-size: 1.3rem;
            color: #555;
            max-width: 800px;
            margin: 0 auto 2rem;
            line-height: 1.8;
        }

        .highlight {
            background: linear-gradient(120deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-weight: 600;
            color: #2c3e50;
        }

        .section {
            margin-bottom: 3rem;
        }

        .section h2 {
            font-size: 1.8rem;
            color: #2c3e50;
            margin-bottom: 1.5rem;
            position: relative;
            padding-left: 1rem;
        }

        .section h2::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 100%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 2px;
        }

        .one-liner {
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            padding: 2rem;
            border-radius: 15px;
            border-left: 5px solid #667eea;
            font-size: 1.2rem;
            font-weight: 500;
            color: #2c3e50;
            margin-bottom: 3rem;
        }

        .journey-story {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
            padding: 2.5rem;
            border-radius: 15px;
            margin-bottom: 3rem;
            border: 1px solid rgba(102, 126, 234, 0.2);
        }

        .journey-story p {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: #444;
        }

        .experience-grid {
            display: grid;
            gap: 1.5rem;
            margin-bottom: 3rem;
        }

        .experience-item {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            border-left: 4px solid #667eea;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
        }

        .experience-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }

        .experience-item h3 {
            color: #2c3e50;
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }

        .experience-item .period {
            color: #667eea;
            font-weight: 600;
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }

        .experience-item p {
            color: #555;
            line-height: 1.6;
        }

        .focus-areas {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 3rem;
        }

        .focus-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border-top: 3px solid #667eea;
        }

        .focus-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
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
        }

        .tech-stack {
            background: #2c3e50;
            color: white;
            padding: 2.5rem;
            border-radius: 15px;
            margin-bottom: 3rem;
        }

        .tech-stack h2 {
            color: white;
            margin-bottom: 2rem;
        }

        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .tech-tag {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.7rem 1.2rem;
            border-radius: 25px;
            font-family: 'Monaco', 'Consolas', monospace;
            font-size: 0.9rem;
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
            padding: 3rem;
            border-radius: 15px;
            margin-top: 2rem;
        }

        .cta-section p {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
            .main-content {
                padding: 2rem;
                margin: 1rem;
            }
            
            h1 {
                font-size: 2.5rem;
            }
            
            .greeting {
                font-size: 1.6rem;
            }
            
            .focus-areas {
                grid-template-columns: 1fr;
            }
            
            .tech-tags {
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="main-content">
            <div class="hero-section">
                <h1>Who I Am</h1>
                <p class="greeting">Hi, I'm Sanuwar 👋</p>
                <p class="tagline">
                    A backend engineer who discovered my passion for <span class="highlight">automation and AI</span>, 
                    now specializing in <span class="highlight">agentic RAG</span>, <span class="highlight">LLM evaluation & guardrails</span>, 
                    and <span class="highlight">MLOps/CI</span>. I build reliable AI systems that actually ship.
                </p>
            </div>

            <div class="section">
                <div class="one-liner">
                    <strong>What I do in one line:</strong> Ship AI features with measurable reliability — from retrieval quality and prompts to evals, regressions, and rollout.
                </div>
            </div>

            <div class="section">
                <h2>My Journey</h2>
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
            </div>

            <div class="section">
                <h2>Experience at a Glance</h2>
                <div class="experience-grid">
                    <div class="experience-item">
                        <h3>Automation & AI Engineering</h3>
                        <div class="period">2020—Present</div>
                        <p>
                            Leading AI testing frameworks, agent workflows, and evaluation dashboards. 
                            Deep focus on LLM evals, guardrails, and CI integration for production AI systems.
                        </p>
                    </div>
                    
                    <div class="experience-item">
                        <h3>Backend Software Engineer, Verizon</h3>
                        <div class="period">2018—2020</div>
                        <p>
                            Built robust APIs, optimized SQL/ORM performance, and ensured system reliability. 
                            Foundation that prepared me for the complexities of AI system engineering.
                        </p>
                    </div>
                    
                    <div class="experience-item">
                        <h3>Ph.D., Consumer & Design Sciences (Auburn)</h3>
                        <div class="period">Academic Research</div>
                        <p>
                            Research design & statistics expertise. Published in <em>Vaccine</em> and other journals. 
                            This research background proves invaluable for rigorous AI evaluation methodologies.
                        </p>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Focus Areas</h2>
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
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Animate cards on scroll
            const cards = document.querySelectorAll('.experience-item, .focus-card');
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
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
                card.style.transform = 'translateY(30px)';
                card.style.transition = `all 0.6s ease ${index * 0.1}s`;
                observer.observe(card);
            });

            // Tech tag hover effects
            const techTags = document.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px) scale(1.05)';
                });
                
                tag.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-2px) scale(1)';
                });
            });

            // Smooth scroll animation for sections
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'all 0.8s ease';
            });

            setTimeout(() => {
                sections.forEach((section, index) => {
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }, 500);
        });
    </script>
</body>
</html>