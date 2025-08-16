---
title: "Let's Connect"
permalink: /contact/
layout: single
author_profile: true
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/contact-header.jpg # Optional: add your own header image
classes: wide
---

<style>
/* Custom styles for contact page */
.contact-hero {
    text-align: center;
    padding: 2rem 0 3rem 0;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 15px;
    margin-bottom: 3rem;
}

.contact-hero h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
    font-weight: 700;
}

.contact-subtitle {
    font-size: 1.2rem;
    color: #34495e;
    font-weight: 300;
    margin-bottom: 2rem;
}

.contact-intro {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.8;
    max-width: 700px;
    margin: 0 auto;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    margin: 3rem 0;
    align-items: start;
}

.contact-info {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2.5rem;
    border-radius: 15px;
    color: white;
    height: fit-content;
    position: sticky;
    top: 2rem;
}

.contact-info h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: white;
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

.contact-form {
    background: white;
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-weight: 600;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 1rem;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: #3498db;
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.submit-btn {
    background: linear-gradient(135deg, #3498db, #2980b9);
    color: white;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
}

.submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(52, 152, 219, 0.4);
}

.professional-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 3rem 0;
}

.profile-link {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    background: white;
    border: 2px solid #e9ecef;
    border-radius: 15px;
    text-decoration: none;
    color: #2c3e50;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.profile-link:hover {
    border-color: #3498db;
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    color: #2c3e50;
}

.profile-icon {
    font-size: 2rem;
    margin-right: 1rem;
    width: 50px;
    text-align: center;
}

.profile-text h3 {
    font-size: 1.1rem;
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
    padding: 2.5rem;
    background: linear-gradient(135deg, #27ae60, #2ecc71);
    color: white;
    border-radius: 15px;
    margin: 3rem 0;
}

.availability h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
}

.collaboration-types {
    background: #f8f9fa;
    padding: 2.5rem;
    border-radius: 15px;
    margin: 3rem 0;
}

.collaboration-types h3 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    text-align: center;
}

.collab-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
}

.collab-item {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.collab-item:hover {
    transform: translateY(-3px);
}

.collab-item .icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    display: block;
}

/* Responsive Design */
@media (max-width: 768px) {
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .contact-hero h1 {
        font-size: 2rem;
    }
    
    .professional-links {
        grid-template-columns: 1fr;
    }
    
    .contact-info {
        position: static;
    }
    
    .collab-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<div class="contact-hero">
    <h1>Let's Connect</h1>
    <p class="contact-subtitle">Ready to Grow, Learn, and Lead Together</p>
    <div class="contact-intro">
        I'm passionate about continuous learning and always curious about new challenges that can help me grow professionally. 
        Whether you're interested in discussing innovative projects, potential collaborations, mentoring opportunities, 
        or exploring how we can learn from each other, I'd welcome the opportunity to connect.
    </div>
</div>

<div class="contact-grid">
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

    <div class="contact-form">
        <h2>Send a Message</h2>
        <form action="https://formspree.io/f/mdkdvolz" method="POST">
            <div class="form-group">
                <label for="name">Name *</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="subject">Subject *</label>
                <select id="subject" name="subject" required>
                    <option value="">Select a topic...</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="mentoring">Mentoring Opportunity</option>
                    <option value="technical">Technical Discussion</option>
                    <option value="research">Research Partnership</option>
                    <option value="consulting">Consulting Inquiry</option>
                    <option value="networking">Professional Networking</option>
                    <option value="other">Other</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" name="message" placeholder="Tell me about your project, idea, or how we might collaborate..." required></textarea>
            </div>
            
            <button type="submit" class="submit-btn">Send Message</button>
        </form>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: #777; text-align: center;">
            I typically respond within 24 hours
        </p>
    </div>
</div>

<div class="collaboration-types">
    <h3>Ways We Can Collaborate</h3>
    <p style="text-align: center; color: #666; margin-bottom: 2rem;">
        I'm open to various forms of professional collaboration and knowledge exchange
    </p>
    
    <div class="collab-grid">
        <div class="collab-item">
            <span class="icon">🤝</span>
            <h4>Mentoring</h4>
            <p>Both mentoring others and being mentored in new areas</p>
        </div>
        
        <div class="collab-item">
            <span class="icon">🚀</span>
            <h4>Technical Leadership</h4>
            <p>Leading technical initiatives and driving innovation</p>
        </div>
        
        <div class="collab-item">
            <span class="icon">💻</span>
            <h4>Code Collaboration</h4>
            <p>Code reviews, pair programming, and technical discussions</p>
        </div>
        
        <div class="collab-item">
            <span class="icon">🔬</span>
            <h4>Research Projects</h4>
            <p>Joint research initiatives and academic collaborations</p>
        </div>
        
        <div class="collab-item">
            <span class="icon">🌐</span>
            <h4>Open Source</h4>
            <p>Contributing to meaningful open-source projects</p>
        </div>
        
        <div class="collab-item">
            <span class="icon">💡</span>
            <h4>Innovation</h4>
            <p>Exploring new technologies and creative solutions</p>
        </div>
    </div>
</div>

<div class="professional-links">
    <a href="https://LinkedIn.com/in/Sanuwar" target="_blank" class="profile-link">
        <div class="profile-icon">💼</div>
        <div class="profile-text">
            <h3>LinkedIn Profile</h3>
            <p>Professional background, experience & network</p>
        </div>
    </a>
    
    <a href="https://Github.com/Sanuwar" target="_blank" class="profile-link">
        <div class="profile-icon">⚡</div>
        <div class="profile-text">
            <h3>GitHub Portfolio</h3>
            <p>Code samples, projects & contributions</p>
        </div>
    </a>
    
    <a href="https://orcid.org/0000-0003-2496-4210" target="_blank" class="profile-link">
        <div class="profile-icon">🎓</div>
        <div class="profile-text">
            <h3>ORCID Profile</h3>
            <p>Academic publications & research contributions</p>
        </div>
    </a>
</div>

<div class="availability">
    <h3>🌱 Ready to Grow, Learn & Lead</h3>
    <p>Always interested in challenging projects, meaningful collaborations, and opportunities to make a positive impact</p>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Animate professional links on scroll
    const links = document.querySelectorAll('.profile-link, .collab-item');
    
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

    // Form submission feedback
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
        });
    }

    // Enhanced contact item hover animations
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(10px) scale(1)';
        });
    });
});
</script>