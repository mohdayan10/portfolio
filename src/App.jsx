import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { GitHubCalendar } from 'react-github-calendar';

/* --------------------------- Code window subject --------------------------- */
const CodeWindow = () => {
  const lines = [
    [{ t: 'com', v: '// developer.js' }],
    [],
    [{ t: 'kw', v: 'const' }, { t: 'def', v: ' ayan ' }, { t: 'pn', v: '= {' }],
    [{ t: 'key', v: '  name' }, { t: 'pn', v: ': ' }, { t: 'str', v: "'Mohammed Ayan'" }, { t: 'pn', v: ',' }],
    [{ t: 'key', v: '  role' }, { t: 'pn', v: ': ' }, { t: 'str', v: "'Full-Stack AI Engineer'" }, { t: 'pn', v: ',' }],
    [{ t: 'key', v: '  stack' }, { t: 'pn', v: ': [' }, { t: 'str', v: "'React'" }, { t: 'pn', v: ', ' }, { t: 'str', v: "'FastAPI'" }, { t: 'pn', v: ', ' }, { t: 'str', v: "'AWS'" }, { t: 'pn', v: '],' }],
    [{ t: 'key', v: '  shipping' }, { t: 'pn', v: ': ' }, { t: 'kw', v: 'true' }, { t: 'pn', v: ',' }],
    [{ t: 'pn', v: '};' }],
    [],
    [{ t: 'def', v: 'ayan' }, { t: 'pn', v: '.' }, { t: 'fn', v: 'build' }, { t: 'pn', v: '(' }, { t: 'def', v: 'idea' }, { t: 'pn', v: ')' }, { t: 'com', v: '  // → product' }],
  ];

  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown >= lines.length) return;
    const id = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 500 : 180);
    return () => clearTimeout(id);
  }, [shown, lines.length]);

  return (
    <div className="code-window">
      <div className="code-bar">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="code-file">ayan.js</span>
      </div>
      <div className="code-body">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="code-line"
            initial={{ opacity: 0, x: -6 }}
            animate={i < shown ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.25 }}
          >
            <span className="ln">{String(i + 1).padStart(2, '0')}</span>
            <span className="lc">
              {line.map((tok, j) => (
                <span key={j} className={`tok-${tok.t}`}>{tok.v}</span>
              ))}
              {i === shown - 1 && shown < lines.length && <span className="caret" />}
            </span>
          </motion.div>
        ))}
        {shown >= lines.length && <span className="caret caret-end" />}
      </div>
    </div>
  );
};

/* ------------------------------- Icons -------------------------------- */
const GMAIL = 'https://mail.google.com/mail/?view=cm&fs=1&to=mohammedayan10@gmail.com';
const GITHUB = 'https://github.com/mohdayan10';
const LINKEDIN = 'https://linkedin.com/in/mohammed-ayan10';
// Get a free key at https://web3forms.com (verify your email) and paste it here.
const WEB3FORMS_KEY = '89a5ec23-b45a-4030-83f2-b684909ec166';

const IconGitHub = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
const IconLinkedIn = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 6.5 9 6.2 9-6.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ----------------------------- Navigation ----------------------------- */
const Nav = () => {
  return (
    <motion.header
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
    >
      <a href="#top" className="nav-brand">PORTFOLIO<span>.</span></a>

      <nav className="nav-pill">
        <a href="#top">Home</a>
        <a href="#about">About Me</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="nav-actions">
        <a className="icon-btn" href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <IconGitHub width={17} height={17} />
        </a>
        <a className="icon-btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <IconLinkedIn width={16} height={16} />
        </a>
        <a className="icon-btn" href={GMAIL} target="_blank" rel="noopener noreferrer" aria-label="Email">
          <IconMail width={17} height={17} />
        </a>
      </div>
    </motion.header>
  );
};

/* -------------------------------- Hero -------------------------------- */
const Hero = () => {
  const skills = ['AI / ML Systems', 'Full-Stack Dev', 'Cloud / AWS', 'RAG & LLMs', 'Voice AI'];

  const word = {
    hidden: { y: '110%' },
    show: (i) => ({
      y: '0%',
      transition: { duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="top" className="hero">
      <Nav />

      <div className="hero-body">
        <h1 className="hero-title">
          <span className="line">
            {['Explore', 'My'].map((w, i) => (
              <span key={w} className="mask">
                <motion.span className="word" variants={word} custom={i} initial="hidden" animate="show">
                  {w}
                </motion.span>
              </span>
            ))}
          </span>
          <span className="line">
            <span className="mask">
              <motion.span className="word" variants={word} custom={2} initial="hidden" animate="show">
                Portfolio
              </motion.span>
            </span>
          </span>
        </h1>

        <motion.div
          className="hero-subject"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
        >
          <CodeWindow />
        </motion.div>

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <span className="eyebrow">AI Engineer @ FewCuts</span>
          <a href="#about" className="scroll-btn" aria-label="Scroll down">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 4v16M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
I build robust, scalable<br />systems for high-throughput<br />AI workloads.
        </motion.p>

        <motion.ul
          className="hero-skills"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </motion.ul>

      </div>
    </section>
  );
};

/* -------------------------------- About ------------------------------- */
const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-inner"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <span className="tag">About</span>
        <h2 className="big-statement">
          I'm Mohammed Ayan — a full-stack AI engineer building{' '}
          <span className="ink-muted">distributed cloud architectures, automation pipelines, and high-performance systems.</span>
        </h2>
        <div className="about-foot">
          <p>
            CS student and Full-Stack AI Engineer at FewCuts. From LLM fine-tuning and RAG
            pipelines to fault-tolerant AWS infrastructure, I ship production-grade systems
            engineered for scale, throughput, and observability.
          </p>
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.04}>
            <a href="#projects" className="btn">See my Work →</a>
          </Tilt>
        </div>

        <div className="tech-strip">
          {['React', 'Next.js', 'Node', 'FastAPI', 'Python', 'TypeScript', 'AWS', 'PyTorch', 'LangChain', 'Whisper', 'RAG', 'MongoDB', 'Docker'].map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

/* ----------------------------- Experience ----------------------------- */
const Experience = () => {
  const roles = [
    {
      company: 'FewCuts Inc.',
      loc: 'Delaware, US · Remote',
      date: 'Oct 2025 — Present',
      title: 'Full-Stack AI Engineer',
      points: [
        'Engineered an adaptive viral-moment detection pipeline integrating Whisper STT into a progressive personalization engine — from curated prompts to creator-specific fine-tuned models — with a hybrid FFmpeg + Remotion rendering stack (smart-cropping, dynamic zooms, programmatic captions).',
        'Architected a Zero-Disk-I/O parallel ingestion system on an SQS-orchestrated multi-worker topology, routing semantic analysis to AWS Lambda and high-compute media tasks to AWS Batch, streaming through S3 presigned URLs.',
        'Shipped a beta platform sustaining 50+ videos/day and 30m+ long-running jobs, with a FastAPI async backend, WebSocket real-time observability, DLQ-based render recovery, and SOC 2-compliant audit logging.',
        'Drove end-to-end full-stack development across React & Next.js frontends integrated with AWS Lambda, SQS, and S3 — owning the full lifecycle from cloud infrastructure to user-facing features.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <motion.div
        className="experience-head"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="tag">Experience</span>
        <h2 className="big-statement">Where I've worked.</h2>
      </motion.div>

      <div className="exp-list">
        {roles.map((r, i) => (
          <motion.div
            key={r.company}
            className="exp-entry"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <div className="exp-meta">
              <span className="exp-co">{r.company}</span>
              <span className="exp-loc">{r.loc}</span>
              <span className="exp-date">{r.date}</span>
            </div>
            <div className="exp-body">
              <h3>{r.title}</h3>
              <ul>
                {r.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ------------------------------ Projects ------------------------------ */
const Projects = () => {
  const projects = [
    {
      name: 'MCP Server',
      stack: 'TypeScript · Protocol Layer',
      desc: 'A Model Context Protocol server exposing structured tool interfaces over external APIs and a local SQLite database — letting any MCP-compatible model query live data through a clean, standardized protocol.',
      highlights: [
        'Universal AI-to-tool bridging architecture that abstracts provider-specific integrations behind one protocol interface.',
        'Dynamic tool registration and request routing with strict input validation and error handling.',
        'Standardized layer lets models execute natural-language queries against heterogeneous data sources.',
      ],
      tags: ['TypeScript', 'MCP', 'SQLite'],
    },
    {
      name: 'RAG Pipeline',
      stack: 'Retrieval · Telemetry & Eval',
      desc: 'A production-grade RAG pipeline with hybrid BM25 + vector retrieval and cross-encoder reranking, built observability-first to systematically surface and debug failure modes.',
      highlights: [
        'Full query logging, chunk-level similarity scoring, and usage-pattern tracking across every retrieval stage.',
        'Ground-truth eval harness of 50+ QA pairs using Ragas and DeepEval for reproducible benchmarks.',
        'Data-driven iteration on retrieval quality and answer accuracy in production-like conditions.',
      ],
      tags: ['BM25', 'Vector', 'Ragas', 'DeepEval'],
    },
    {
      name: 'Voice AI Study Coach',
      stack: 'Real-time · STT / TTS',
      desc: 'A fully conversational voice coach delivering a verbal quiz experience with live adaptive feedback — engineered for real-time responsiveness against commercial voice AI.',
      highlights: [
        'Streaming STT chunked for sub-2s latency with LLM-driven session state and low-latency Cartesia TTS.',
        'Spaced-repetition logic and progressive difficulty that adapt to cumulative user performance.',
        'Low-latency audio pipeline with voice activity detection and streaming chunk processing.',
      ],
      tags: ['Whisper', 'Cartesia', 'VAD'],
    },
    {
      name: 'Fine-Tuned Domain Model',
      stack: 'LoRA · Unsloth',
      desc: 'A domain-specific model fine-tuned with LoRA via Unsloth on cloud GPU infrastructure — prioritizing data quality and task specificity over raw volume.',
      highlights: [
        '100 high-quality, task-focused training examples curated for deliberate task specificity.',
        'Evaluation metrics defined before training; systematically benchmarked vs base and frontier models.',
        'Applied only after exhaustive prompt-engineering failure analysis — production-grade judgment on when to fine-tune.',
      ],
      tags: ['LoRA', 'Unsloth', 'Benchmarks'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-head"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="tag">Projects</span>
        <h2 className="big-statement">Selected work.</h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href="#projects"
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <div className="project-left">
              <div className="project-top">
                <span className="project-idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="project-arrow">↗</span>
              </div>
              <h3>{p.name}</h3>
              <span className="project-stack">{p.stack}</span>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
            <div className="project-right">
              <p className="project-desc">{p.desc}</p>
              <ul className="project-points">
                {p.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

/* --------------------------- GitHub Activity --------------------------- */
const GitHubActivity = () => {
  const monoTheme = {
    light: ['#ececec', '#c9c9c9', '#9a9a9a', '#5a5a5a', '#0d0d0d'],
    dark: ['#ececec', '#c9c9c9', '#9a9a9a', '#5a5a5a', '#0d0d0d'],
  };

  return (
    <section id="github" className="github">
      <motion.div
        className="github-inner"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <span className="tag">GitHub Activity</span>
        <h2 className="big-statement">Building in public.</h2>
        <p className="github-desc">
          A live snapshot of my commits, pull requests, and contributions over the past year.
        </p>

        <div className="github-cal">
          <GitHubCalendar username="mohdayan10" colorScheme="light" theme={monoTheme} fontSize={13} blockRadius={2} />
        </div>

        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03}>
          <a className="btn" href="https://github.com/mohdayan10" target="_blank" rel="noopener noreferrer">
            View Profile on GitHub →
          </a>
        </Tilt>
      </motion.div>
    </section>
  );
};

/* ------------------------------- Contact ------------------------------ */
const Contact = () => {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    const keyReady = WEB3FORMS_KEY && WEB3FORMS_KEY !== 'YOUR_ACCESS_KEY_HERE';

    // No access key yet → open a pre-filled email so the form still works.
    if (!keyReady) {
      const body = `${fd.get('message') || ''}\n\n— ${fd.get('name') || ''} (${fd.get('email') || ''})`;
      const url = `${GMAIL}&su=${encodeURIComponent('New inquiry from your portfolio')}&body=${encodeURIComponent(body)}`;
      window.open(url, '_blank', 'noopener');
      setStatus('compose');
      return;
    }

    // With a key → submit silently via Web3Forms.
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="contact">
      <div className="contact-inner contact-grid">
        <motion.div
          className="contact-left"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-top">
            <span className="tag">Connection</span>
          </div>
          <h2 className="contact-headline">
            Let's build<br /><span className="ink-muted">something.</span>
          </h2>
          <p className="contact-note">
            Drop your requirements below — I'll review the details and get back to you
            personally within 24 hours.
          </p>
          <div className="contact-status"><span className="status-dot" />Available for new projects</div>
          <div className="contact-socials">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><IconGitHub width={20} height={20} /></a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><IconLinkedIn width={20} height={20} /></a>
            <a href={GMAIL} target="_blank" rel="noopener noreferrer" aria-label="Email"><IconMail width={20} height={20} /></a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={onSubmit}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
          <input type="hidden" name="subject" value="New inquiry from your portfolio" />
          <input type="hidden" name="from_name" value="Portfolio Inquiry" />
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" placeholder="you@company.com" required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Project Brief</label>
            <textarea id="message" name="message" rows={3} placeholder="What are we building?" required />
          </div>

          <button className="send-btn" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent' : 'Send Inquiry'}
            <span className="cta-arrow">↗</span>
          </button>
          <span className="form-hint">Typically replies within 24 hours.</span>

          {status === 'success' && <p className="form-msg ok">Thanks — I'll be in touch within 24 hours.</p>}
          {status === 'compose' && <p className="form-msg ok">Opening your email — just hit send and it's on its way.</p>}
          {status === 'error' && <p className="form-msg err">Couldn't send. Email me directly at mohammedayan10@gmail.com.</p>}
        </motion.form>
      </div>

      <div className="contact-foot">
        <span>© {new Date().getFullYear()} Mohammed Ayan</span>
        <span className="foot-loc">Hyderabad, India</span>
        <a href="#top" className="back-top">Back to top ↑</a>
      </div>
    </footer>
  );
};

/* ---------------------------- Floating CTA ---------------------------- */
const FloatingCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById('contact');
      const contactTop = contact ? contact.getBoundingClientRect().top : Infinity;
      const pastHero = window.scrollY > window.innerHeight * 0.7;
      const contactInView = contactTop < window.innerHeight * 0.85;
      setShow(pastHero && !contactInView);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <a href="#contact" className={`floating-cta ${show ? 'show' : ''}`}>
      Let's talk <span className="cta-arrow">→</span>
    </a>
  );
};

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GitHubActivity />
        <Contact />
      </main>
      <FloatingCTA />
    </>
  );
}

export default App;
