"use client";

import { useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const EMAIL = "chamindusandeepa339@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/chamidu-sandeepa-431025311";
const GITHUB = "https://github.com/HMGChamidu";

const projects = [
  {
    no: "01",
    name: "SmartPresence",
    type: "UNIVERSITY CAPSTONE",
    year: "2026",
    description: "A fraud-resistant mobile attendance ecosystem designed to replace manual roll-call with layered, server-side verification.",
    focus: "8-step validation pipeline",
    stack: ["Spring Boot", "React Native", "PostgreSQL", "AWS", "Terraform", "Docker", "BLE"],
    kind: "presence",
    detail: "Combines secure REST APIs, role-based access control, BLE proximity detection, biometric device binding, attendance analytics, and AWS infrastructure provisioned with Terraform.",
    status: "CAPSTONE PROJECT"
  },
  {
    no: "02",
    name: "Containerized Web App",
    type: "PERSONAL PROJECT",
    year: "2026",
    description: "A multi-container development environment that brings a web application and database together through a repeatable Docker workflow.",
    focus: "Multi-container orchestration",
    stack: ["Docker", "Docker Compose", "Nginx", "Node.js", "MySQL", "Linux"],
    kind: "containers",
    detail: "Covers custom Dockerfiles, image tagging and publishing, Docker Compose services, container networking, port mapping, and environment-based configuration. This project is ongoing.",
    status: "IN PROGRESS",
    repo: "https://github.com/HMGChamidu/docker-node-mysql-app"
  },
  {
    no: "03",
    name: "Wolf CS Sri Lanka",
    type: "PERSONAL PROJECT",
    year: "2025",
    description: "A responsive static storefront concept for a clothing brand, built around a simple product-led browsing experience.",
    focus: "Responsive storefront interface",
    stack: ["HTML5", "CSS3", "Responsive Design"],
    kind: "commerce",
    detail: "A foundational frontend project focused on semantic HTML, custom CSS, responsive page structure, and a clean presentation of clothing categories.",
    status: "COMPLETED",
    repo: "https://github.com/HMGChamidu/MyFirstWebSite"
  }
];

const groups = [
  {
    no: "01",
    title: "Product engineering",
    copy: "Turning product requirements into useful interfaces and maintainable application logic.",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "React", "React Native", "TypeScript"]
  },
  {
    no: "02",
    title: "Cloud & delivery",
    copy: "Packaging applications, automating infrastructure, and building repeatable delivery workflows.",
    skills: ["Docker", "Docker Compose", "AWS", "Terraform", "Linux", "Git", "CI/CD"]
  },
  {
    no: "03",
    title: "Data & security",
    copy: "Designing reliable data layers and implementing secure application access patterns.",
    skills: ["PostgreSQL", "MySQL", "Flyway", "JWT", "OAuth2", "Biometric authentication"]
  }
];

function IconArrow({ down = false }: { down?: boolean }) {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d={down ? "M10 3v13m0 0 5-5m-5 5-5-5" : "M5 15 15 5M6 5h9v9"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Visual({ kind }: { kind: string }) {
  if (kind === "presence") return <div className="mock mock-presence">
    <div className="mock-top"><b><i /> SMART / PRESENCE</b><span>LIVE SYSTEM</span></div>
    <div className="mock-presence-grid">
      <div><small>TODAY'S ATTENDANCE</small><div className="mock-number">96<span>%</span></div><div className="mock-progress"><i /></div><div className="mock-stats"><span>Verified check-ins</span><b>248 / 258</b></div><div className="mock-bars">{[34,55,44,72,61,88,67,100,78,91,73,84].map((n,i)=><i key={i} style={{height:n+"%"}} />)}</div></div>
      <div className="mock-verify"><div className="verify-ring">✓</div><small>IDENTITY VERIFIED</small><b>BLE + DEVICE</b><div className="signal">{[1,2,3,4,5].map(n=><i key={n}/>)}</div><small>Secure validation</small></div>
    </div>
    <div className="mock-foot"><span>01 / ATTENDANCE ANALYTICS</span><span>ENCRYPTED SESSION <b>●</b></span></div>
  </div>;
  if (kind === "containers") return <div className="mock mock-terminal">
    <div className="terminal-head"><span>● ● ●</span><b>deployment / compose.yaml</b><i>● RUNNING</i></div>
    <div className="terminal-lines">
      <div><span>01</span><b>services:</b></div><div><span>02</span>  <b>web:</b></div><div><span>03</span>    image: <em>chamidu/web-app</em></div><div><span>04</span>    ports: <i>&quot;8081:3000&quot;</i></div><div><span>05</span>  <b>database:</b></div><div><span>06</span>    image: <em>mysql:8.0</em></div><div><span>07</span>    environment: <u>.env</u></div><div><span>08</span>    volumes: <i>./data</i></div><div><span>09</span><b className="green">networks:</b></div><div><span>10</span>  app-network: <i>bridge</i></div>
    </div>
    <div className="terminal-services"><span>◇ WEB CONTAINER <b>UP</b></span><span>◉ MYSQL DATABASE <b>UP</b></span><span>⌘ APP NETWORK <b>ACTIVE</b></span></div>
  </div>;
  return <div className="mock mock-commerce">
    <div className="commerce-nav"><b>WOLF<span>CS.</span></b><span>NEW ARRIVALS　 COLLECTIONS　 ABOUT</span><i>BAG (0)</i></div>
    <div className="commerce-hero"><small>WOLF CS / SRI LANKA</small><strong>FIND YOUR<br/><em>EVERYDAY.</em></strong><span>EXPLORE COLLECTION　↗</span></div>
    <div className="commerce-items"><i/><i/><i/></div>
    <div className="commerce-foot"><span>DENIM / TEES / SHIRTS / SHORTS</span><span>01 — 03</span></div>
  </div>;
}

function Project({ p, index }: { p: typeof projects[number]; index: number }) {
  return <Reveal delay={index * .07}><article className="project">
    <div className={"project-visual " + p.kind}><Visual kind={p.kind}/><span className="project-counter">{p.no} / 03</span></div>
    <div className="project-info">
      <div className="project-meta"><span>{p.type}</span><span>{p.year}</span></div>
      <div className="project-title"><h3>{p.name}</h3><span>{p.status}</span></div>
      <p>{p.description}</p>
      <div className="project-focus"><small>KEY FOCUS</small><b>{p.focus}</b></div>
      <div className="chips">{p.stack.map(s=><span key={s}>{s}</span>)}</div>
      <details><summary>Explore the build <b>＋</b></summary><p>{p.detail}</p>{p.repo ? <a href={p.repo} target="_blank" rel="noreferrer" className="inline-link">View source on GitHub ↗</a> : <small className="pending">University project · Repository link pending confirmation</small>}</details>
    </div>
  </article></Reveal>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: .001 });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = "mailto:" + EMAIL;
    }
  }

  return <main id="top">
    <motion.div className="progress" style={{scaleX}}/>
    <header className="header">
      <a className="logo" href="#top">CS<span>.</span></a>
      <a className="header-title" href="#top">CHAMIDU SANDEEPA <i>/ SOFTWARE ENGINEER</i></a>
      <nav className={menu ? "nav nav-open" : "nav"}>
        <a onClick={()=>setMenu(false)} href="#work">Work <small>01</small></a>
        <a onClick={()=>setMenu(false)} href="#about">About <small>02</small></a>
        <a onClick={()=>setMenu(false)} href="#capabilities">Capabilities <small>03</small></a>
        <a onClick={()=>setMenu(false)} href="#contact">Contact <small>04</small></a>
      </nav>
      <a className="header-cta" href={"mailto:"+EMAIL}>LET'S TALK <IconArrow/></a>
      <button className="menu" onClick={()=>setMenu(v=>!v)} aria-expanded={menu}>{menu ? "CLOSE" : "MENU"}</button>
    </header>

    <section className="hero shell">
      <div className="topline"><span><i/> COMPUTING & INFORMATION SYSTEMS</span><span>BASED IN SRI LANKA · AVAILABLE WORLDWIDE</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.6}}>DEVOPS & FULL-STACK ENGINEER INTERN</motion.p>
          <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8,ease:[.22,1,.36,1]}}>Engineering<br/><span>with intention.</span></motion.h1>
          <motion.p className="hero-description" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.18,duration:.7}}>I'm Chamidu — a Computing & Information Systems undergraduate exploring full-stack engineering, cloud infrastructure, and the craft of building dependable digital products.</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.3,duration:.7}}><a className="button-primary" href="#work">EXPLORE SELECTED WORK <IconArrow down/></a><a className="button-quiet" href={"mailto:"+EMAIL}>GET IN TOUCH ↗</a></motion.div>
        </div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{delay:.15,duration:.9}}>
          <div className="art-grid"/><motion.div className="orbit orbit-a" animate={{rotate:360}} transition={{duration:36,repeat:Infinity,ease:"linear"}}/><motion.div className="orbit orbit-b" animate={{rotate:-360}} transition={{duration:48,repeat:Infinity,ease:"linear"}}/><div className="art-core"><span>CS</span><i/></div><div className="art-card card-top"><span>BUILD SYSTEMS</span><b>01—03</b></div><div className="art-card card-bottom"><i/> THINK / BUILD / SHIP</div><span className="coordinate coord-a">06° 54' N</span><span className="coordinate coord-b">80° 46' E</span><i className="cross cross-a"/><i className="cross cross-b"/>
        </motion.div>
      </div>
      <div className="hero-bottom"><div><small>FOCUS</small><b>FULL-STACK / CLOUD / DEVOPS</b></div><a href="#work">SCROLL TO EXPLORE ↓</a><span>PORTFOLIO — 2026</span></div>
    </section>

    <div className="ticker"><div className="ticker-track">{[0,1].map(n=><div className="ticker-run" key={n} aria-hidden={n===1}><span>SOFTWARE ENGINEERING</span><i>✳</i><span>CLOUD INFRASTRUCTURE</span><i>✳</i><span>PRODUCT THINKING</span><i>✳</i><span>RELIABLE SYSTEMS</span><i>✳</i><span>CONTINUOUS LEARNING</span><i>✳</i></div>)}</div></div>

    <section className="section shell" id="work">
      <Reveal><div className="section-head"><div><p className="kicker"><span>01</span> / SELECTED WORK</p><h2>Built with<br/><em>purpose.</em></h2></div><p className="section-intro">A selection of projects that show how I approach problems — from application logic and mobile experiences to infrastructure and deployment.</p></div></Reveal>
      <div className="projects">{projects.map((p,i)=><Project key={p.no} p={p} index={i}/>)}</div>
      <div className="work-foot"><span>MORE BUILDS ARE TAKING SHAPE.</span><a href={GITHUB} target="_blank" rel="noreferrer">EXPLORE ALL REPOSITORIES ↗</a></div>
    </section>

    <section className="section about-section shell" id="about">
      <Reveal><div className="section-head"><div><p className="kicker"><span>02</span> / A LITTLE ABOUT ME</p><h2>Curious by nature.<br/><em>Engineer by practice.</em></h2></div></div></Reveal>
      <div className="about-grid">
        <Reveal><div className="statement"><span>“</span><p>I enjoy seeing the whole picture — understanding a problem, shaping a solution, writing the code, and thinking about how it runs in the real world.</p><div className="signature">CHAMIDU SANDEEPA <b>CS.</b></div></div></Reveal>
        <Reveal delay={.1}><div className="about-copy"><p>I'm studying Computing & Information Systems at Sabaragamuwa University of Sri Lanka. My interests sit at the intersection of software engineering and cloud-native practices: building useful products, designing backend services, and making deployments repeatable.</p><p>I value clear thinking, careful implementation, and continuous learning. I'm especially interested in the details that make software secure, maintainable, and reliable.</p><div className="education"><small>EDUCATION</small><b>BSc (Hons) in Computing & Information Systems</b><span>Sabaragamuwa University of Sri Lanka</span><i>EXPECTED 2028 · SRI LANKA</i></div></div></Reveal>
      </div>
    </section>

    <section className="section shell" id="capabilities">
      <Reveal><div className="section-head"><div><p className="kicker"><span>03</span> / WHAT I WORK WITH</p><h2>Tools are a means.<br/><em>Good work is the goal.</em></h2></div><p className="section-intro">A growing toolkit across the product lifecycle — from application development to infrastructure and secure data systems.</p></div></Reveal>
      <div className="capabilities">{groups.map((g,i)=><Reveal key={g.no} delay={i*.07}><article className="capability"><span className="capability-no">{g.no}</span><div><h3>{g.title}</h3><p>{g.copy}</p></div><div className="skill-chips">{g.skills.map(s=><span key={s}>{s}</span>)}</div><b>↗</b></article></Reveal>)}</div>
    </section>

    <section className="approach">
      <div className="shell">
        <Reveal><p className="kicker"><span>04</span> / HOW I APPROACH THE WORK</p><h2>Think beyond<br/><em>the commit.</em></h2></Reveal>
        <div className="approach-grid"><Reveal><small>01 / UNDERSTAND</small><h3>Start with the why.</h3><p>Understand the problem and the people using the product before choosing the tools.</p></Reveal><Reveal delay={.08}><small>02 / ENGINEER</small><h3>Make it make sense.</h3><p>Build clear, maintainable software with thoughtful architecture and reliable data flows.</p></Reveal><Reveal delay={.16}><small>03 / DELIVER</small><h3>Make it dependable.</h3><p>Think about testing, security, infrastructure, and the path from code to production.</p></Reveal></div>
      </div>
    </section>

    <section className="contact shell" id="contact">
      <Reveal><p className="kicker"><span>05</span> / START A CONVERSATION</p><div className="contact-head"><h2>Have something<br/>good in <em>mind?</em></h2><p>I'm open to conversations about software, meaningful projects, and opportunities to build useful things together.</p></div><a className="email" href={"mailto:"+EMAIL}>{EMAIL}<IconArrow/></a><div className="contact-bottom"><button onClick={copyEmail}>{copied ? "EMAIL COPIED ✓" : "COPY EMAIL +"}</button><div><a href={LINKEDIN} target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href={GITHUB} target="_blank" rel="noreferrer">GITHUB ↗</a><a href={"mailto:"+EMAIL}>EMAIL ↗</a></div></div></Reveal>
    </section>

    <footer className="footer shell"><a href="#top">CS<span>.</span></a><span>DESIGNED & BUILT WITH INTENTION.</span><span>© 2026 CHAMIDU SANDEEPA</span><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}
