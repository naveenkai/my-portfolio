const LINK = (href, text) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{text}</a>
);

const YOUTUBE = {
  channel: 'https://www.youtube.com/@naveenk_ai',
  interviewAgent: 'https://www.youtube.com/watch?v=XKT5FmCf8jk',
  postura: 'https://youtu.be/_PCpW9ioZr4',
  rockers: 'https://youtu.be/YnoXQUwImjU',
};

function Portfolio() {
  return (
    <div className="portfolio">
      {/* Hero */}
      <section className="hero">
        <img
          src={process.env.PUBLIC_URL + '/images/naveenk_dp.jpeg'}
          alt="Naveen K"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-name">Naveen K</h1>
          <p className="hero-subtitle">AI Engineer / Researcher</p>
          <p className="hero-email">
            <a href="mailto:naveenk.ai.engineer@gmail.com">naveenk.ai.engineer@gmail.com</a>
          </p>
          <div className="social-icons">
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
          <a href={YOUTUBE.channel} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="https://github.com/naveenkai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        </div>
      </section>

      {/* Career */}
      <section className="section">
        <h2 className="section-heading">career</h2>
        <div className="timeline">
          <div className="timeline-entry">
            <div className="timeline-header">
              <img src={process.env.PUBLIC_URL + '/images/ekfrazo.png'} alt="Ekfrazo" className="timeline-org-img" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="timeline-year">Apr 2025 –</div>
            </div>
            <div className="timeline-content">
              <p><strong>AI Engineer</strong> at Ekfrazo Technologies, Bengaluru.</p>
              <p>Voice AI agents for 10k+ users. 95% automation, 500–600 ms latency. Reasoning, multi-model debate. RAG auto-resolving 70–80% of manual queries. Vapi, Pipecat, LangGraph, CrewAI.</p>
            </div>
          </div>
          <div className="timeline-entry">
            <div className="timeline-header">
              <img src={process.env.PUBLIC_URL + '/images/indus-vision.png'} alt="Indus Vision" className="timeline-org-img" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="timeline-year">Jun 2024 – Mar 2025</div>
            </div>
            <div className="timeline-content">
              <p><strong>AI/ML Engineer</strong> at Indus Vision, Bengaluru.</p>
              <p>Led POSTURA—2D clinical gait system. 85–95% keypoint accuracy, 98% gait phase detection. Perspective correction, step measurement without 3D sensors. {LINK(YOUTUBE.postura, 'POSTURA demo')}, {LINK(YOUTUBE.rockers, '3 Rockers')}.</p>
            </div>
          </div>
          <div className="timeline-entry">
            <div className="timeline-header">
              <img src={process.env.PUBLIC_URL + '/images/iisc.png'} alt="IISc" className="timeline-org-img" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="timeline-year">Aug 2023 – Feb 2024</div>
            </div>
            <div className="timeline-content">
              <p><strong>Project Assistant</strong> at Indian Institute of Science (IISc), Bengaluru.</p>
              <p>Tennis biomechanics—shot classification, contact detection, joint angles. 1st at INCOFYRA (1 of 198 papers). Under the guidance of Prof. SN Omkar, Abhilash Manu (EY). {LINK(YOUTUBE.rockers, 'Phase detection demo')}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section">
        <h2 className="section-heading">bio</h2>
        <div className="bio">
          <p>Mainly started working on AI because I was confused about life. AI helped me understand—deep math truths, stats behind the world, patterns, and some good frameworks to think about life.</p>
          <p>I'm good at ML, DL, Gen AI, Agentic AI and everything that can make a system intelligent (I'll just learn if it makes sense). I can research and engineer AI.</p>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2 className="section-heading">projects</h2>
        <div className="project-item">
          <div className="project-content">
            <h4>AI Interview Agent</h4>
            <p>This agent is good at taking interviews end-to-end with the context of resume and JD. I've made it to say umm, hmm, ahh 😅 {LINK('https://www.instagram.com/p/DIOyU2IBkTJ/', 'V1 demo')}, {LINK('https://www.instagram.com/p/DJQbRadTFSt/', 'V2 demo')} (interesting fact: V2 demo hit 5M+ views on Instagram).</p>
          </div>
        </div>
        <div className="project-item">
          <div className="project-content">
            <h4>Voice cloning using OpenVoice</h4>
            <p>Upload/record your voice, choose style and generate. {LINK('https://huggingface.co/spaces/naveenk-ai/openvoice_voicecloning_win', 'Try here')}.</p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="section">
        <h2 className="section-heading">research</h2>
        <div className="research-item">
          <div className="research-text">
            <div className="research-title">Computer Vision and bio-mechanics based tennis players' performance analysis</div>
            <p>Shot classification (RNN), contact detection, joint angles. 1st at INCOFYRA—1 of 198 papers. Prof. SN Omkar (IISc), Abhilash Manu (EY).</p>
          </div>
          <div className="research-videos-row">
            <div className="research-video-card">
              <div className="research-video-wrap">
                <iframe src="https://www.youtube.com/embed/ovDj4v0vfWo?modestbranding=1&rel=0&controls=1" title="Shot classification" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <span>Shot classification</span>
            </div>
            <div className="research-video-card">
              <div className="research-video-wrap">
                <iframe src="https://www.youtube.com/embed/RR2gIitjEw4?modestbranding=1&rel=0&controls=1" title="Phase classification" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <span>Phase classification</span>
            </div>
            <div className="research-video-card">
              <div className="research-video-wrap">
                <iframe src="https://www.youtube.com/embed/an30U-l10D0?modestbranding=1&rel=0&controls=1" title="Point of contact detection" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <span>Point of contact detection</span>
            </div>
          </div>
        </div>
        <div className="research-item">
          <div className="research-text">
            <div className="research-title">Gait analysis with multi 2D cameras (POSTURA)</div>
            <p>2D clinical gait system. 85–95% keypoint accuracy, 98% gait phase detection. YOLOv8, ByteTrack, MediaPipe. 3 Rockers, perspective correction.</p>
          </div>
          <div className="research-videos-row">
            <div className="research-video-card">
              <div className="research-video-wrap">
                <iframe src="https://www.youtube.com/embed/_PCpW9ioZr4?modestbranding=1&rel=0&controls=1" title="Keypoint extraction" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <span>Keypoint extraction</span>
            </div>
            <div className="research-video-card">
              <div className="research-video-wrap">
                <iframe src="https://www.youtube.com/embed/YnoXQUwImjU?modestbranding=1&rel=0&controls=1" title="3 Rockers classifier" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <span>3 Rockers classifier</span>
            </div>
            <div className="research-video-card">
              <div className="research-video-wrap">
                <iframe src="https://www.youtube.com/embed/tFITDzDOzkw?modestbranding=1&rel=0&controls=1" title="3 Rockers classifier masked output" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <span>3 Rockers classifier masked output</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <h2 className="section-heading">highlights</h2>
        <ul className="research-list">
          <li>Interviewed 13 founders and researchers. {LINK('https://www.youtube.com/watch?v=2u8S3zcrhxA', 'My conversation with Robert Scoble')}.</li>
        </ul>
      </section>

      {/* Misc */}
      <section className="section">
        <h2 className="section-heading">misc</h2>
        <div className="misc-socials">
          {LINK('https://github.com/naveenkai', 'GitHub')}
          {LINK('https://x.com/naveenk_ai', 'X')}
          {LINK('https://www.linkedin.com/in/naveenkai/', 'LinkedIn')}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
