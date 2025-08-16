<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Let's Connect - Sanuwar Rashid</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #2c3e50;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
            padding: 2rem 0;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 3rem;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
            animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .header {
            text-align: center;
            margin-bottom: 3rem;
        }

        h1 {
            font-size: 2.8rem;
            margin-bottom: 1rem;
            color: #2c3e50;
            font-weight: 700;
        }

        .subtitle {
            font-size: 1.3rem;
            color: #34495e;
            font-weight: 300;
            margin-bottom: 2rem;
        }

        .intro {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 3rem;
            text-align: center;
            line-height: 1.8;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .contact-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-bottom: 3rem;
        }

        .contact-info {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 2.5rem;
            border-radius: 15px;
            color: white;
        }

        .contact-info h2 {
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
            padding: 0.8rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            transition: all 0.3s ease;
        }

        .contact-item:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateX(10px);
        }

        .contact-icon {
            font-size: 1.5rem;
            margin-right: 1rem;
            width: 30px;
        }

        .contact-item a {
            color: white;
            text-decoration: none;
            font-weight: 500;
        }

        .contact-item a:hover {
            text-decoration: underline;
        }

        .cta-section {
            background: #f8f9fa;
            padding: 2.5rem;
            border-radius: 15px;
            text-align: center;
        }

        .cta-section h2 {
            color: #2c3e50;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: linear-gradient(135deg, #3498db, #2980b9);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
            margin: 1rem 0;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(52, 152, 219, 0.4);
        }

        .professional-links {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-top: 3rem;
        }

        .profile-link {
            display: flex;
            align-items: center;
            padding: 1.2rem;
            background: white;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            text-decoration: none;
            color: #2c3e50;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        .profile-link:hover {
            border-color: #3498db;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .profile-icon {
            font-size: 1.8rem;
            margin-right: 1rem;
            width: 40px;
            text-align: center;
        }

        .profile-text {
            flex: 1;
        }

        .profile-text h3 {
            font-size: 1rem;
            margin-bottom: 0.3rem;
            color: #2c3e50;
        }

        .profile-text p {
            font-size: 0.9rem;
            color: #7f8c8d;
            margin: 0;
        }

        .availability {
            text-align: center;
            padding: 2rem;
            background: linear-gradient(135deg, #27ae60, #2ecc71);
            color: white;
            border-radius: 10px;
            margin-top: 3rem;
        }

        .availability h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
            .container {
                margin: 1rem;
                padding: 2rem;
            }
            
            h1 {
                font-size: 2.2rem;
            }
            
            .contact-section {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .professional-links {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Let's Connect</h1>
            <p class="subtitle">Always Curious About New Challenges & Growth Opportunities</p>
        </div>
        
        <p class="intro">
            I'm passionate about continuous learning and always curious about new challenges that can help me grow professionally. 
            Whether you're interested in discussing innovative projects, potential collaborations, or exploring how my skills 
            might contribute to interesting initiatives, I'd welcome the opportunity to connect and learn more.
        </p>

        <div class="contact-section">
            <div class="contact-info">
                <h2>Contact Information</h2>
                
                <div class="contact-item">
                    <span class="contact-icon">📞</span>
                    <a href="tel:347-302-9440">347-302-9440</a>
                </div>
                
                <div class="contact-item">
                    <span class="contact-icon">📧</span>
                    <a href="mailto:sanuwar.rashid@gmail.com">sanuwar.rashid@gmail.com</a>
                </div>
                
                <div class="contact-item">
                    <span class="contact-icon">💼</span>
                    <a href="https://LinkedIn.com/in/Sanuwar" target="_blank">LinkedIn.com/in/Sanuwar</a>
                </div>
                
                <div class="contact-item">
                    <span class="contact-icon">👨‍💻</span>
                    <a href="https://Github.com/Sanuwar" target="_blank">Github.com/Sanuwar</a>
                </div>
            </div>

            <div class="cta-section">
                <h2>Ready to Explore?</h2>
                <p style="margin-bottom: 1.5rem; color: #666;">
                    Interested in discussing potential collaborations, projects, or just connecting professionally? 
                    I'd love to hear about what you're working on.
                </p>
                
                <a href="https://sanuwar.github.io/contact/" class="cta-button" target="_blank">
                    Send Message
                </a>
                
                <p style="margin-top: 1rem; font-size: 0.9rem; color: #777;">
                    I typically respond within 24 hours
                </p>
            </div>
        </div>

        <div class="professional-links">
            <a href="https://LinkedIn.com/in/Sanuwar" target="_blank" class="profile-link">
                <div class="profile-icon">💼</div>
                <div class="profile-text">
                    <h3>LinkedIn Profile</h3>
                    <p>Professional background & network</p>
                </div>
            </a>
            
            <a href="https://Github.com/Sanuwar" target="_blank" class="profile-link">
                <div class="profile-icon">⚡</div>
                <div class="profile-text">
                    <h3>GitHub Portfolio</h3>
                    <p>Code samples & projects</p>
                </div>
            </a>
            
            <a href="https://orcid.org/0000-0003-2496-4210" target="_blank" class="profile-link">
                <div class="profile-icon">🎓</div>
                <div class="profile-text">
                    <h3>ORCID Profile</h3>
                    <p>Academic & research contributions</p>
                </div>
            </a>
            
            <a href="https://sanuwar.github.io/contact/" target="_blank" class="profile-link">
                <div class="profile-icon">📋</div>
                <div class="profile-text">
                    <h3>Contact Form</h3>
                    <p>Send detailed inquiries</p>
                </div>
            </a>
        </div>

        <div class="availability">
            <h3>🌱 Open to Learning & Growth</h3>
            <p>Always interested in challenging projects and meaningful collaborations</p>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Animate professional links on scroll
            const links = document.querySelectorAll('.profile-link');
            
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

            links.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'translateY(20px)';
                link.style.transition = `all 0.6s ease ${index * 0.1}s`;
                observer.observe(link);
            });

            // Add contact item hover animations
            const contactItems = document.querySelectorAll('.contact-item');
            contactItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateX(10px) scale(1.02)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateX(10px) scale(1)';
                });
            });
        });
    </script>
</body>
</html>
