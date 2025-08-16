---
layout: single
title: "Let's Connect"
permalink: /contact/
author_profile: true
classes: wide
---

<style>
/* Custom styles for enhanced contact page */
.contact-section {
    max-width: 800px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.page-header {
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e9ecef;
}

.page-header h1 {
    font-size: 2.8rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
    letter-spacing: -0.8px;
}

.page-subtitle {
    font-size: 1.3rem;
    color: #6c757d;
    font-weight: 300;
    margin-bottom: 2rem;
    font-style: italic;
    letter-spacing: 0.2px;
}

.intro-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #495057;
    text-align: center;
    max-width: 650px;
    margin: 0 auto;
}

.contact-grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 4rem 0;
}

.contact-info {
    background: rgba(248, 249, 250, 0.8);
    padding: 2.5rem;
    border-left: 3px solid #007bff;
    border-radius: 8px;
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
}

.contact-info h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1.8rem;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 0.8rem;
}

.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.4rem;
    padding: 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.5);
}

.contact-item:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.contact-item .label {
    font-weight: 500;
    color: #495057;
    min-width: 80px;
    margin-right: 1rem;
    font-size: 0.95rem;
}

.contact-item a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.2s ease;
    font-weight: 500;
}

.contact-item a:hover {
    color: #0056b3;
}

.contact-form {
    background: rgba(255, 255, 255, 0.9);
    padding: 2.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.06);
    backdrop-filter: blur(10px);
}

.contact-form h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1.8rem;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 0.8rem;
}

.form-group {
    margin-bottom: 1.8rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.6rem;
    color: #495057;
    font-weight: 500;
    font-size: 0.95rem;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 0.9rem;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: inherit;
    background: rgba(255, 255, 255, 0.9);
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    transform: translateY(-1px);
}

.form-group textarea {
    resize: vertical;
    min-height: 130px;
}

.submit-btn {
    background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
    color: white;
    padding: 0.9rem 2.5rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
    box-shadow: 0 2px 10px rgba(0, 123, 255, 0.2);
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
}

.response-note {
    margin-top: 1.2rem;
    font-size: 0.9rem;
    color: #6c757d;
    text-align: center;
    font-style: italic;
}

.collaboration-section {
    margin: 4rem 0;
    padding: 2rem 0;
    border-top: 1px solid #e9ecef;
    text-align: center;
}

.collaboration-section h3 {
    font-size: 1.6rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1.2rem;
}

.collaboration-intro {
    color: #6c757d;
    margin-bottom: 2.5rem;
    font-size: 1.05rem;
    line-height: 1.6;
    font-style: italic;
}

.collaboration-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.8rem;
    margin-top: 2rem;
    text-align: left;
}

.collaboration-item {
    padding: 2rem;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    cursor: pointer;
    backdrop-filter: blur(5px);
}

.collaboration-item:hover {
    border-color: #007bff;
    transform: scale(1.03);
    box-shadow: 0 8px 25px rgba(0, 123, 255, 0.12);
    background: rgba(255, 255, 255, 0.95);
}

.collaboration-item h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.7rem;
}

.collaboration-item p {
    color: #6c757d;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
    font-style: italic;
}

.professional-links {
    margin: 4rem 0;
    padding: 2rem 0;
    border-top: 1px solid #e9ecef;
}

.professional-links h3 {
    font-size: 1.6rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1.8rem;
    text-align: center;
}

.links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.8rem;
}

.profile-link {
    display: block;
    padding: 2rem;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    text-decoration: none;
    color: #495057;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
}

.profile-link:hover {
    border-color: #007bff;
    transform: scale(1.03);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: #495057;
    background: rgba(255, 255, 255, 0.95);
}

.profile-link h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.7rem;
}

.profile-link p {
    color: #6c757d;
    font-size: 0.95rem;
    margin: 0;
    line-height: 1.4;
    font-style: italic;
}

.availability-note {
    text-align: center;
    padding: 2.5rem;
    background: rgba(40, 167, 69, 0.05);
    border-left: 3px solid #28a745;
    margin: 3rem 0;
    border-radius: 8px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
}

.availability-note h4 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.8rem;
}

.availability-note p {
    color: #6c757d;
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.6;
    font-style: italic;
}

/* Responsive Design */
@media (max-width: 768px) {
    .page-header h1 {
        font-size: 2.2rem;
    }
    
    .links-grid,
    .collaboration-list {
        grid-template-columns: 1fr;
    }
    
    .contact-info,
    .contact-form {
        padding: 1.8rem;
    }
}
</style>

<div class="contact-section">
    <div class="page-header">
        <p class="page-subtitle">Ready to Grow, Learn, and Lead Together</p>
        <div class="intro-text">
            I'm passionate about continuous learning and always curious about new challenges that can help me grow professionally. 
            Whether you're interested in discussing innovative projects, potential collaborations, mentoring opportunities, 
            or exploring how we can learn from each other, I'd welcome the opportunity to connect.
        </div>
    </div>

    <div class="contact-grid">
        <div class="contact-info">
            <h2>Contact Information</h2>
            
            <div class="contact-item">
                <span class="label">Phone:</span>
                <a href="tel:347-302-9440">347-302-9440</a>
            </div>
            
            <div class="contact-item">
                <span class="label">Email:</span>
                <a href="mailto:sanuwar.rashid@gmail.com">sanuwar.rashid@gmail.com</a>
            </div>
            
            <div class="contact-item">
                <span class="label">LinkedIn:</span>
                <a href="https://LinkedIn.com/in/Sanuwar" target="_blank">LinkedIn.com/in/Sanuwar</a>
            </div>
            
            <div class="contact-item">
                <span class="label">GitHub:</span>
                <a href="https://Github.com/Sanuwar" target="_blank">Github.com/Sanuwar</a>
            </div>
        </div>

        <div class="contact-form">
            <h2>Send a Message</h2>
            <form action="https://formspree.io/f/mdkdvolz" method="POST">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="subject">Subject</label>
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
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tell me about your project, idea, or how we might collaborate..." required></textarea>
                </div>
                
                <button type="submit" class="submit-btn">Send Message</button>
                <p class="response-note">I typically respond within 24 hours</p>
            </form>
        </div>
    </div>

    <div class="collaboration-section">
        <h3>Ways We Can Collaborate</h3>
        <p class="collaboration-intro">
            I'm open to various forms of professional collaboration and knowledge exchange
        </p>
        
        <div class="collaboration-list">
            <div class="collaboration-item">
                <h4>Mentoring & Growth</h4>
                <p>Both mentoring others and being mentored in new areas of expertise</p>
            </div>
            
            <div class="collaboration-item">
                <h4>Technical Leadership</h4>
                <p>Leading technical initiatives and driving innovation in development projects</p>
            </div>
            
            <div class="collaboration-item">
                <h4>Code Collaboration</h4>
                <p>Code reviews, pair programming, and in-depth technical discussions</p>
            </div>
            
            <div class="collaboration-item">
                <h4>Research Projects</h4>
                <p>Joint research initiatives and academic collaborations</p>
            </div>
            
            <div class="collaboration-item">
                <h4>Open Source</h4>
                <p>Contributing to meaningful open-source projects and communities</p>
            </div>
            
            <div class="collaboration-item">
                <h4>Innovation & Strategy</h4>
                <p>Exploring new technologies and developing creative solutions</p>
            </div>
        </div>
    </div>

    <div class="professional-links">
        <h3>Professional Profiles</h3>
        <div class="links-grid">
            <a href="https://LinkedIn.com/in/Sanuwar" target="_blank" class="profile-link">
                <h4>LinkedIn Profile</h4>
                <p>Professional background, experience, and network connections</p>
            </a>
            
            <a href="https://Github.com/Sanuwar" target="_blank" class="profile-link">
                <h4>GitHub Portfolio</h4>
                <p>Code samples, projects, and open-source contributions</p>
            </a>
            
            <a href="https://orcid.org/0000-0003-2496-4210" target="_blank" class="profile-link">
                <h4>ORCID Profile</h4>
                <p>Academic publications and research contributions</p>
            </a>
        </div>
    </div>

    <div class="availability-note">
        <h4>Ready to Grow, Learn & Lead</h4>
        <p>Always interested in challenging projects, meaningful collaborations, and opportunities to make a positive impact</p>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced form submission feedback with smooth animation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.transform = 'scale(0.98)';
        });
    }

    // Add smooth entrance animations
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

    // Observe elements for entrance animations
    document.querySelectorAll('.collaboration-item, .profile-link').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
</script>