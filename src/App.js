import './App.css';

const LINK = (href, text) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{text}</a>
);

const YOUTUBE = {
  channel: 'https://www.youtube.com/@naveenk_ai',
  interviewAgent: 'https://www.youtube.com/watch?v=XKT5FmCf8jk',
  postura: 'https://youtu.be/_PCpW9ioZr4',
  rockers: 'https://youtu.be/YnoXQUwImjU',
};

function App() {
  return (
    <div className="portfolio">
      {/* Hero */}
      <section className="hero">
        <img
          src={process.env.PUBLIC_URL + '/images/profile.svg'}
          alt="Naveen K"
          className="hero-image"
        />
        <h1 className="hero-name">Naveen K</h1>
        <p className="hero-tagline">I want to deeply understand humans and build AGI.</p>
        <div className="social-icons">
          <a href="mailto:naveenk.ai.engineer@gmail.com" aria-label="Email">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/naveenkai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://x.com/naveenk_ai" target="_blank" rel="noopener noreferrer" aria-label="X">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/naveenk.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href={YOUTUBE.channel} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section">
        <h2 className="section-heading">career</h2>
        <div className="timeline">
          <div className="timeline-entry">
            <div className="timeline-year">2025 –</div>
            <div className="timeline-content">
              <p><strong>AI/ML Engineer</strong> at Ekfrazo Technologies. Building agents.</p>
            </div>
          </div>
          <div className="timeline-entry">
            <div className="timeline-year">2024 – 2025</div>
            <div className="timeline-content">
              <p><strong>AI/ML Engineer</strong> at Indus Vision. Voice AI agents for telecom and e-commerce. RAG applications and recommender systems. Lead on POSTURA: a low-cost gait analysis system using 2D cameras—perspective correction, step measurements, 3 Rocker classifier, 3D pose. Quality control with computer vision. Collaborated with HUL quality control team.</p>
            </div>
          </div>
          <div className="timeline-entry">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <p><strong>AI/ML Engineer Intern</strong> at Indus Vision (Mar–May). Computer vision for human safety. Truck–Human safety model using zone analysis. On-site at Pondicherry.</p>
              <p>Later promoted to full-time. Teeth and vertical defects classifier for sachets. Spatial attention for defect detection, autoencoders for anomaly detection.</p>
            </div>
          </div>
          <div className="timeline-entry">
            <div className="timeline-year">2023 – 2024</div>
            <div className="timeline-content">
              <p><strong>Project Assistant</strong> at Indian Institute of Science (IISc). Computer vision and biomechanics for tennis shot analysis with Prof. SN Omkar and Abhilash Manu (EY). 1st place at 25th INCOFYRA International Conference.</p>
              <p>Ashok Elluswamy (Director of Tesla Autopilot) replied to my internship ask: "Exceptions can be made for truly exceptional people." Pitched AI idea to Chris Prucha (Notion co-founder). Started Future of AI podcast—Chris was first guest.</p>
            </div>
          </div>
          <div className="timeline-entry">
            <div className="timeline-year">2022</div>
            <div className="timeline-content">
              <p>Tesla AI Day sparked my journey—Optimus and FSD. Top 10 at -1 Ultimate AI hackathon (photo-realistic Indian road dataset with Stable Diffusion).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section">
        <h2 className="section-heading">bio</h2>
        <div className="bio">
          <p>Why AI? To know more about humans. I want to deeply understand humans and build AGI. I'm an AI Engineer at Ekfrazo building agents. Previously at Indus Vision (Voice AI, RAG, computer vision, POSTURA), and Project Assistant at IISc. Host of <a href={YOUTUBE.channel} target="_blank" rel="noopener noreferrer">Discussions</a> podcast on YouTube. "Tech gave me everything I have—I want to contribute something to it."</p>
        </div>
      </section>

      {/* Featured Talks - YouTube Embeds */}
      <section className="section">
        <h2 className="section-heading">featured talks</h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          More on my {LINK(YOUTUBE.channel, 'YouTube channel')}.
        </p>
        <div className="videos-grid">
          <div className="video-embed">
            <h4>Interview Agent v1</h4>
            <div className="video-wrapper">
              <iframe src="https://www.youtube.com/embed/XKT5FmCf8jk" title="Interview Agent v1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p>{LINK(YOUTUBE.interviewAgent, 'Watch on YouTube')}</p>
          </div>
          <div className="video-embed">
            <h4>POSTURA — Gait Analysis Demo</h4>
            <div className="video-wrapper">
              <iframe src="https://www.youtube.com/embed/_PCpW9ioZr4" title="POSTURA Gait Analysis" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p>{LINK(YOUTUBE.postura, 'Watch on YouTube')}</p>
          </div>
          <div className="video-embed">
            <h4>3 Rockers Classifier — Perspective Correction</h4>
            <div className="video-wrapper">
              <iframe src="https://www.youtube.com/embed/YnoXQUwImjU" title="3 Rockers Classifier" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p>{LINK(YOUTUBE.rockers, 'Watch on YouTube')}</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2 className="section-heading">projects</h2>
        <div className="project-item">
          <div className="project-icon" style={{ background: '#ddd' }} />
          <div className="project-content">
            <h4>POSTURA — Gait Analysis</h4>
            <p>Low-cost vision-based system using 2D cameras. Step length, foot angles, joint movement, 3 Rocker classifier. {LINK(YOUTUBE.postura, 'Demo')}.</p>
          </div>
        </div>
        <div className="project-item">
          <div className="project-icon" style={{ background: '#ddd' }} />
          <div className="project-content">
            <h4>Tennis Biomechanics</h4>
            <p>Computer vision and bio-mechanics for tennis shot analysis. Shot classification, POC detection, forehand analysis. IISc with Prof. Omkar.</p>
          </div>
        </div>
        <div className="project-item">
          <div className="project-icon" style={{ background: '#ddd' }} />
          <div className="project-content">
            <h4>Interview Agent</h4>
            <p>Voice AI breakthrough. {LINK(YOUTUBE.interviewAgent, 'v1 demo')}, v2 improvements.</p>
          </div>
        </div>
        <div className="project-item">
          <div className="project-icon" style={{ background: '#ddd' }} />
          <div className="project-content">
            <h4>RAG & Recommender Systems</h4>
            <p>Voice AI agents, RAG applications for telecom and e-commerce at Indus Vision.</p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="section">
        <h2 className="section-heading">research</h2>
        <ul className="research-list">
          <li>
            <div className="research-title">Computer Vision and bio-mechanics based tennis players' performance analysis</div>
            <p>In-depth statistical–biomechanical analysis using computer vision. Shot classification (RNN), POC detection, forehand analysis, 3D pose. Worked with Prof. SN Omkar (IISc), Abhilash Manu (EY). 1st place at 25th INCOFYRA.</p>
          </li>
          <li>
            <div className="research-title">Gait analysis with multi 2D cameras (POSTURA)</div>
            <p>Low-cost vision-based alternative to motion capture. Step length, foot angles, joint movement, gait timing. Hybrid tracking (YOLOv8, ByteTrack, MediaPipe). 3 Rockers classifier, perspective correction. {LINK(YOUTUBE.rockers, 'Demo')}.</p>
          </li>
        </ul>
      </section>

      {/* Hear from them */}
      <section className="section">
        <h2 className="section-heading">hear from them</h2>
        <div className="testimonial">
          <div className="testimonial-image" style={{ background: '#ddd' }} />
          <div className="testimonial-content">
            <blockquote>Throughout his time, Naveen has demonstrated a strong passion for artificial intelligence and computer vision technologies. He quickly grasped complex concepts and was able to apply them effectively to our projects.</blockquote>
            <div className="testimonial-author">Abhilash Manu, Innovation Lead at EY</div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-image" style={{ background: '#ddd' }} />
          <div className="testimonial-content">
            <blockquote>I really appreciate your thought on bringing a global perspective to the AI Mission.</blockquote>
            <div className="testimonial-author">Chris Prucha, Co-founder of Notion</div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-image" style={{ background: '#ddd' }} />
          <div className="testimonial-content">
            <blockquote>He has a very sound knowledge of data science, AI, and ML. He has completed a couple of projects in academics related to data science, and he also supports juniors.</blockquote>
            <div className="testimonial-author">Sonu Kumar, SDET at ImpactQA</div>
          </div>
        </div>
      </section>

      {/* Misc */}
      <section className="section">
        <h2 className="section-heading">misc</h2>
        <ul className="misc-links">
          <li>{LINK(YOUTUBE.channel, 'YouTube — Discussions & demos')}</li>
          <li>{LINK('https://www.linkedin.com/in/naveenkai/', 'LinkedIn')}</li>
          <li>{LINK('https://x.com/naveenk_ai', 'X')}</li>
          <li>{LINK('https://www.instagram.com/naveenk.ai/', 'Instagram')}</li>
        </ul>
        <div className="misc-socials">
          <a href="https://www.linkedin.com/in/naveenkai/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/naveenk_ai" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.instagram.com/naveenk.ai/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={YOUTUBE.channel} target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </section>
    </div>
  );
}

export default App;
