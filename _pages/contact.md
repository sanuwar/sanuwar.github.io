---
layout: single
title: "Contact"
permalink: /contact/
author_profile: true
header:
  overlay_image: /assets/images/contact-header.jpg
  overlay_filter: 0.5
  caption: "Let’s connect and collaborate"
excerpt: "Reach out via email, social links, or send a message through the form below. I'm always open to new ideas and partnerships."
---

<div class="section-content fade-in">
  <p>If you’d like to get in touch, use the form below or reach me via the links.</p>
</div>

## Direct
{: .fade-in}

<div class="section-content fade-in">
- **Email:** <a href="mailto:sanuwar.rashid@gmail.com">sanuwar.rashid@gmail.com</a><br>
- **LinkedIn:** <a href="https://linkedin.com/in/Sanuwar" target="_blank">linkedin.com/in/Sanuwar</a><br>
- **GitHub:** <a href="https://github.com/Sanuwar" target="_blank">github.com/Sanuwar</a>
</div>

---

## Send a Message
{: .fade-in}

<div class="section-content fade-in">
<form action="https://formspree.io/f/mdkdvolz" method="POST">
  <p>
    <label for="name"><strong>Name</strong></label><br>
    <input id="name" type="text" name="name" required>
  </p>

  <p>
    <label for="email"><strong>Email</strong></label><br>
    <input id="email" type="email" name="email" required>
  </p>

  <p>
    <label for="subject"><strong>Subject</strong></label><br>
    <select id="subject" name="subject" required>
      <option value="">Select a topic…</option>
      <option value="collaboration">Project Collaboration</option>
      <option value="mentoring">Mentoring Opportunity</option>
      <option value="technical">Technical Discussion</option>
      <option value="research">Research Partnership</option>
      <option value="consulting">Consulting Inquiry</option>
      <option value="networking">Professional Networking</option>
      <option value="other">Other</option>
    </select>
  </p>

  <p>
    <label for="message"><strong>Message</strong></label><br>
    <textarea id="message" name="message" rows="6" placeholder="Tell me about your project, idea, or how we might collaborate…" required></textarea>
  </p>

  <input type="hidden" name="_subject" value="New contact from sanuwar.github.io">
  <input type="text" name="_gotcha" style="display:none">

  <p>
    <button type="submit" class="btn btn--primary">Send</button>
  </p>
</form>
</div>