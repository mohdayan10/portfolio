import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { GitHubCalendar } from 'react-github-calendar';

const AbstractShape = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 4]} />
        <MeshDistortMaterial
          color="#ff416c"
          emissive="#ff4b2b"
          emissiveIntensity={0.5}
          wireframe={true}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AbstractShape />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.header 
        className="hero-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="brand">@ Mohammed Ayan</div>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>

      <div className="hero-content">
        <motion.div 
          className="hero-text-bg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Mohammed Ayan
        </motion.div>
        
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ width: '500px', height: '500px' }}
        >
          <Hero3D />
        </motion.div>
      </div>

      <motion.div 
        className="hero-socials"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a href="#linkedin">LinkedIn</a>
        <a href="#twitter">Twitter</a>
        <a href="#instagram">Instagram</a>
      </motion.div>

      <motion.div 
        className="hero-subtitle"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>
          <span className="slash">//</span> Full Stack Dev<br />
          <strong>Software Engineer</strong>
        </h2>
      </motion.div>
    </section>
  );
};

const Intro = () => {
  return (
    <section id="intro" className="intro-section">
      <div className="bg-glow"></div>
      
      <motion.div 
        className="intro-content"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-tag">Intro</div>
        <h2 className="intro-large-text">
          I'm a versatile <span className="text-accent">designer who partners with founders to turn ideas into real products.</span> I focus on clear interfaces, sharp decisions, and fast execution.
        </h2>
        
        <div className="intro-bottom">
          <p className="intro-small-text">
            Bringing your vision to life quickly and efficiently—whether it's branding, apps, or websites—I've got it covered, delivering smooth and effective solutions from start to finish.
          </p>
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
            <button className="btn-outline">See my Work</button>
          </Tilt>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const servicesList = [
    "Brand Strategy and Messaging",
    "Logo Design",
    "Visual Identity",
    "Brand Guidelines & Frameworks",
    "Marketing Materials",
    "Motion Design",
    "Web Design"
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <motion.div 
          className="services-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-tag">Services</div>
          <h2 className="huge-number">01</h2>
        </motion.div>
        
        <motion.div 
          className="services-right"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Branding & Marketing</h2>
          <p className="services-desc">
            Branding that builds trust and drives loyalty through clear visuals and messaging, into an unforgettable online experience.
          </p>
          
          <div className="services-list">
            {servicesList.map((service, index) => (
              <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                <motion.div 
                  className="service-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="service-name">{service}</span>
                  <span className="service-num">{String(index + 1).padStart(2, '0')}</span>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GitHubActivity = () => {
  const accentTheme = {
    light: ['#1a1a1f', '#3a1320', '#7a1f3b', '#cc2a55', '#ff416c'],
    dark: ['#1a1a1f', '#3a1320', '#7a1f3b', '#cc2a55', '#ff416c'],
  };

  return (
    <section id="github" className="github-section">
      <div className="bg-glow"></div>

      <motion.div
        className="github-content"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-tag">GitHub Activity</div>
        <h2 className="github-heading">
          Building <span className="text-accent">in public.</span>
        </h2>
        <p className="github-desc">
          A live snapshot of my commits, pull requests, and contributions over the past year.
        </p>

        <div className="github-calendar-wrap">
          <GitHubCalendar
            username="mohdayan10"
            colorScheme="dark"
            theme={accentTheme}
            fontSize={14}
            blockRadius={3}
          />
        </div>

        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03}>
          <a
            className="btn-outline"
            href="https://github.com/mohdayan10"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile on GitHub
          </a>
        </Tilt>
      </motion.div>
    </section>
  );
};

function App() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <GitHubActivity />
    </main>
  );
}

export default App;
