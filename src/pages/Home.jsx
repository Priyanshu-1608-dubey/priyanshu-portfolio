import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  FileText,
  Sparkles,
  Users,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  BarChart3,
  TrendingUp,
  RotateCcw,
  Copy,
  Check,
  Mail,
} from 'lucide-react';

const roles = [
  'Data Analyst',
  'Aspiring Data Scientist',
  'Business Intelligence (BI) Analyst',
  'LinkedIn Content Creator',
];

const processSteps = [
  {
    num: '01',
    title: 'Discover',
    subtitle: 'DATA & PROBLEM FRAMING',
    desc: 'Every insight starts with the right business question. I gather datasets from SQL databases, APIs, and Excel sheets to understand the exact goal before writing a single line of code.',
    tags: ['SQL & PostgreSQL', 'DATA SOURCING', 'BUSINESS KPIs'],
    offset: 'md:-translate-y-4',
  },
  {
    num: '02',
    title: 'Clean & EDA',
    subtitle: 'WRANGLING & PATTERNS',
    desc: 'Raw data is messy. I handle missing values, outliers, and anomalies using Python (Pandas & NumPy) while running Exploratory Data Analysis to uncover hidden trends.',
    tags: ['PYTHON', 'PANDAS & NUMPY', 'STATISTICAL EDA'],
    offset: 'md:translate-y-10',
  },
  {
    num: '03',
    title: 'Visualize',
    subtitle: 'BI & STORYTELLING',
    desc: 'Numbers only matter when decision-makers understand them. I build interactive Power BI dashboards and visual reports that turn complex metrics into clear stories.',
    tags: ['POWER BI', 'EXCEL DASHBOARDS', 'DATA STORYTELLING'],
    offset: 'md:-translate-y-2',
  },
  {
    num: '04',
    title: 'Model',
    subtitle: 'ML & FORECASTING',
    desc: 'From financial fraud detection to multi-coin crypto forecasting, I apply supervised and unsupervised Machine Learning models to predict outcomes accurately.',
    tags: ['SCIKIT-LEARN', 'PREDICTIVE MODELING', 'FEATURE ENGINEERING'],
    offset: 'md:translate-y-10',
  },
  {
    num: '05',
    title: 'Impact',
    subtitle: 'INSIGHTS & SHARING',
    desc: 'Delivering actionable business recommendations — and sharing my data, analytics, and career learnings with a growing community of 7,000+ followers on LinkedIn.',
    tags: ['BUSINESS IMPACT', '7K+ LINKEDIN', 'CONTINUOUS GROWTH'],
    offset: 'md:-translate-y-4',
  },
];

const domains = [
  {
    num: '01',
    title: 'Data Analytics & BI',
    desc: 'End-to-end EDA, KPI tracking, and executive Power BI dashboards.',
  },
  {
    num: '02',
    title: 'Machine Learning & Forecasting',
    desc: 'Fraud detection pipelines and multi-coin time-series prediction models.',
  },
  {
    num: '03',
    title: 'LinkedIn Content Creation',
    desc: 'Breaking down data, tech, and career insights for 7K+ followers.',
  },
];

const analyticsTabs = [
  {
    id: 'fraud',
    label: 'Fraud Detection',
    badge: 'ML • Scikit-Learn',
    metrics: [
      { name: 'Model Precision', value: '96.4%', note: 'Imbalanced txn tune' },
      { name: 'False Positives', value: '-28%', note: 'Threshold optimization' },
      { name: 'Pipeline Stack', value: 'Python + SQL', note: 'EDA & feature flags' },
    ],
    summary:
      'Flagging high-risk transaction anomalies early using engineered behavioral features and clean SQL joins.',
  },
  {
    id: 'crypto',
    label: 'Crypto Forecasting',
    badge: 'Time-Series • EDA',
    metrics: [
      { name: 'Assets Tracked', value: 'Multi-Coin', note: 'Rolling volatility' },
      { name: 'Feature Window', value: '7D / 30D', note: 'Lag & momentum stats' },
      { name: 'Workflow', value: 'Pandas + NumPy', note: 'Outlier-safe cleaning' },
    ],
    summary:
      'Comparing multi-coin trend momentum and drawdown windows to separate noise from directional signals.',
  },
  {
    id: 'bi',
    label: 'Executive BI',
    badge: 'Power BI • KPIs',
    metrics: [
      { name: 'Reporting Layer', value: 'Power BI', note: 'Interactive drilldowns' },
      { name: 'Data Source', value: 'PostgreSQL', note: 'Aggregated KPI views' },
      { name: 'Audience', value: '7K+ LinkedIn', note: 'Visual storytelling' },
    ],
    summary:
      'Turning raw operational tables into clear KPI cards and decision-ready visual breakdowns.',
  },
];

const linkedinHighlights = [
  {
    tag: 'SYSTEM & DATA BREAKDOWN',
    title: 'Backend Structural Crises of Top Tech Giants',
    takeaway:
      'Deconstructing scale bottlenecks, infrastructure trade-offs, and revenue realities across global enterprises into crisp visual takeaways.',
  },
  {
    tag: 'FINANCIAL ANALYTICS',
    title: 'Market Data Cleaning, Indicators & Visual EDA',
    takeaway:
      'Turning raw market feeds into candlestick patterns, moving averages, and momentum signals with clean Python workflows.',
  },
  {
    tag: 'CAREER & GROWTH',
    title: 'Practical Roadmap for Aspiring Data Analysts',
    takeaway:
      'How to pair SQL + Python + BI storytelling with real problem-solving instead of just tutorial-following.',
  },
];

const techStackGroups = [
  {
    category: 'Programming & Data',
    tools: ['Python', 'Pandas', 'NumPy', 'SQL', 'PostgreSQL'],
  },
  {
    category: 'BI & Analytics',
    tools: ['Power BI', 'Excel Dashboards', 'Exploratory Data Analysis', 'KPI Storytelling'],
  },
  {
    category: 'Machine Learning',
    tools: ['Scikit-Learn', 'Fraud Detection', 'Time-Series Forecasting', 'Feature Engineering'],
  },
];

// Interactive Glowing Node Canvas (Inspired by Experiments Section)
function DataConstellation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const mouse = { x: -999, y: -999 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const nodes = Array.from({ length: 24 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2 + 1.5,
    }));

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dist = Math.hypot(n.x - m.x, n.y - m.y);
          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.22 * (1 - dist / 115)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        const mDist = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        if (mDist < 140) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(244, 114, 182, ${0.55 * (1 - mDist / 140)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = mDist < 140 ? '#f472b6' : '#c4b5fd';
        ctx.shadowColor = '#8b5cf6';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-72 sm:h-80 rounded-3xl bg-gradient-to-br from-[#0e0c1d] via-[#090814] to-[#130d24] border border-white/10 cursor-crosshair"
    />
  );
}

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [activeAnalyticsTab, setActiveAnalyticsTab] = useState('fraud');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [pathKey, setPathKey] = useState(0);
  const [cursor, setCursor] = useState({ x: 500, y: 300, active: false });
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dubeypriyanshu58463@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const currentAnalytics =
    analyticsTabs.find((t) => t.id === activeAnalyticsTab) || analyticsTabs[0];

  return (
    <div className="min-h-screen bg-[#07060f] text-white overflow-x-hidden">
      {/* ================= 1. CINEMATIC SPOTLIGHT REVEAL HERO ================= */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={() => setCursor((prev) => ({ ...prev, active: false }))}
        className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden"
      >
        {/* Base Dark Atmospheric Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(139,92,246,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.18) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Cursor Spotlight Hover-Reveal Layer */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: cursor.active ? 1 : 0,
            background:
              'radial-gradient(circle at 20% 30%, rgba(99,102,241,0.35), transparent 50%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.32), transparent 50%), radial-gradient(circle at 50% 50%, rgba(168,85,247,0.28), transparent 60%)',
            WebkitMaskImage: `radial-gradient(280px circle at ${cursor.x}px ${cursor.y}px, black 0%, transparent 75%)`,
            maskImage: `radial-gradient(280px circle at ${cursor.x}px ${cursor.y}px, black 0%, transparent 75%)`,
          }}
        />

        {/* Ambient Static Glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] bg-indigo-600/20 rounded-full blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-600/15 rounded-full blur-[130px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6 min-w-0"
            >
              {/* Top Badges: 7K+ LinkedIn & Creator */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/priyanshudubey1608"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-purple-400/30 hover:border-purple-400 hover:bg-white/[0.1] transition-all text-xs sm:text-sm font-bold text-purple-200 backdrop-blur-md"
                >
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500" />
                  </span>
                  <Users size={15} className="text-purple-300 shrink-0" />
                  <span>7K+ LinkedIn Followers</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-pink-400">LinkedIn Content Creator</span>
                </a>

                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-300">
                  <MapPin size={14} className="shrink-0" /> Open to Opportunities • Pune
                </span>
              </div>

              {/* Cinematic Headline */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-[1px] bg-purple-400/70 shrink-0" />
                  <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-purple-300/90">
                    MCA&apos;28 • DATA ANALYTICS • BI
                  </p>
                </div>
                <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.12] sm:leading-[1.06]">
                  Where Data Meets{' '}
                  <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                    Intelligence.
                  </span>
                </h1>
              </div>

              {/* Rotating Role (Mobile-safe wrapping & height) */}
              <div className="min-h-12 sm:min-h-10 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="text-base sm:text-2xl font-bold text-zinc-200 flex flex-wrap items-center gap-2 leading-snug"
                  >
                    <Sparkles size={18} className="text-purple-400 shrink-0" />
                    <span>Priyanshu Dubey —</span>
                    <span className="text-purple-300">{roles[roleIndex]}</span>
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Bio */}
              <p className="text-zinc-400 text-sm sm:text-lg leading-relaxed max-w-2xl">
                Pursuing <strong className="text-white">MCA at SPPU, Pune</strong>. I transform raw datasets
                into clear business insights using{' '}
                <strong className="text-white">Python, SQL, Power BI &amp; Machine Learning</strong> — while
                sharing data &amp; tech insights with <strong className="text-purple-300">7,000+ followers on LinkedIn</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <Link
                  to="/projects"
                  className="group px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/certificates"
                  className="px-5 sm:px-6 py-3.5 rounded-full bg-white/[0.06] text-white font-semibold border border-white/15 hover:border-purple-400 hover:bg-white/[0.1] transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  <FileText size={18} /> Offer Letters &amp; Certs
                </Link>

                <a
                  href="https://github.com/Priyanshu-1608-dubey"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition-all flex items-center gap-2 text-sm font-semibold"
                >
                  <Code2 size={16} /> GitHub
                </a>
              </div>
            </motion.div>

            {/* Right Side: 3D Floating Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="lg:col-span-5 flex justify-center relative py-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute w-72 h-72 sm:w-[400px] sm:h-[400px] rounded-full border border-dashed border-purple-400/25 pointer-events-none"
              />

              <motion.div
                whileHover={{ rotateY: 6, rotateX: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="relative bg-white/[0.04] backdrop-blur-2xl p-4 rounded-[2rem] shadow-2xl border border-white/15 w-72 sm:w-80"
              >
                <div className="overflow-hidden rounded-3xl bg-zinc-900 aspect-[4/4.3] relative">
                  <img
                    src="/priyanshu.jpg"
                    alt="Priyanshu Dubey"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07060f]/60 via-transparent to-transparent" />
                </div>

                <div className="mt-4 px-2 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-purple-300">
                      DATA ANALYST • CREATOR
                    </p>
                    <h3 className="text-lg font-extrabold text-white">Priyanshu Dubey</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-200 font-extrabold flex items-center justify-center border border-purple-400/30">
                    PD
                  </div>
                </div>

                {/* Floating 3D Badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="hidden sm:flex absolute -top-4 -left-10 bg-[#121024]/90 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-xl border border-purple-400/25 items-center gap-2 text-xs font-bold text-white"
                >
                  <Database size={15} className="text-purple-400" />
                  Python &amp; SQL
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                  className="hidden sm:flex absolute top-1/2 -right-12 bg-[#121024]/90 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-xl border border-pink-400/25 items-center gap-2 text-xs font-bold text-white"
                >
                  <TrendingUp size={15} className="text-pink-400" />
                  7K+ LinkedIn
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  className="hidden sm:flex absolute -bottom-4 -right-8 bg-[#121024]/90 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-xl border border-indigo-400/25 items-center gap-2 text-xs font-bold text-white"
                >
                  <BarChart3 size={15} className="text-indigo-400" />
                  Power BI &amp; ML
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 2. 5-STEP GLOWING PATH PROCESS SECTION ================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 relative border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-purple-400/70" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300">
                ANALYTICS PROCESS
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              From raw data to{' '}
              <span className="text-zinc-400">actionable insight.</span>
            </h2>
            <p className="text-zinc-400 mt-3 max-w-xl text-sm sm:text-base">
              Five steps, one continuous workflow. Click any step to explore how I turn datasets into business value.
            </p>
          </div>

          {/* 5 Capsules + Animated Glowing SVG Path */}
          <div className="relative py-8">
            <svg
              key={pathKey}
              viewBox="0 0 1000 180"
              fill="none"
              className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-44 pointer-events-none z-0"
            >
              <defs>
                <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 80 70 C 190 70, 210 140, 300 140 C 390 140, 410 75, 500 75 C 590 75, 610 140, 700 140 C 790 140, 810 70, 920 70"
                stroke="url(#glowLine)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.3 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </svg>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 relative z-10">
              {processSteps.map((step, index) => {
                const isSelected = activeStep === index;
                return (
                  <motion.button
                    key={step.num}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className={`group text-center flex flex-col items-center justify-center rounded-[2.5rem] sm:rounded-[3rem] py-8 sm:py-10 px-3 sm:px-4 border transition-all duration-300 backdrop-blur-xl ${
                      step.offset
                    } ${
                      isSelected
                        ? 'bg-gradient-to-b from-purple-600/25 via-[#141129]/90 to-[#0c0a18]/90 border-purple-400/60 shadow-[0_0_35px_rgba(168,85,247,0.28)]'
                        : 'bg-white/[0.03] border-white/10 hover:border-purple-400/40'
                    }`}
                  >
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold transition-colors ${
                        isSelected ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-200'
                      }`}
                    >
                      {step.num}
                    </span>
                    <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-bold text-white">{step.title}</h3>
                    <p className="mt-1 text-[9px] sm:text-[10px] font-semibold tracking-widest text-purple-300/80 uppercase">
                      {step.subtitle}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Active Step Detail Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-14 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between gap-8 items-start md:items-center"
          >
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.2em] text-purple-300 uppercase">
                STEP {processSteps[activeStep].num} / 05
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {processSteps[activeStep].title} —{' '}
                <span className="text-zinc-400 text-xl sm:text-2xl">
                  {processSteps[activeStep].subtitle}
                </span>
              </h3>
              <p className="text-zinc-400 mt-3 text-sm sm:text-base leading-relaxed">
                {processSteps[activeStep].desc}
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              <ul className="space-y-1.5 text-xs font-semibold tracking-wider text-zinc-300">
                {processSteps[activeStep].tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % processSteps.length)}
                  className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-purple-200 transition flex items-center gap-1.5"
                >
                  NEXT STEP <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => {
                    setActiveStep(0);
                    setPathKey((k) => k + 1);
                  }}
                  className="px-4 py-2.5 rounded-full bg-white/[0.06] border border-white/15 text-zinc-300 text-xs font-semibold hover:text-white transition flex items-center gap-1.5"
                >
                  <RotateCcw size={13} /> REPLAY PATH
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 3. INTERACTIVE AI / DATA NETWORK SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300 mb-2">
              INTERACTIVE LAB
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold">
              Data <span className="text-zinc-600">/</span> ML{' '}
              <span className="text-zinc-600">/</span> BI{' '}
              <span className="text-zinc-600">/</span> Creator
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative">
              <DataConstellation />
              <p className="text-[11px] uppercase tracking-widest text-zinc-500 mt-2.5">
                Move cursor across the canvas to connect data nodes
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {domains.map((item) => (
                <div
                  key={item.num}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-purple-400">{item.num}</span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-zinc-400 mt-1.5">{item.desc}</p>
                </div>
              ))}

              <a
                href="https://www.linkedin.com/in/priyanshudubey1608"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-purple-300 hover:text-white transition"
              >
                Follow my 7K+ LinkedIn Journey <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. INTERACTIVE ANALYTICS PREVIEW ================= */}
      <section className="py-20 px-4 sm:px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300 mb-2">
                LIVE METRICS SNAPSHOT
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold">
                Analytics <span className="text-zinc-500">in action.</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {analyticsTabs.map((tab) => {
                const active = activeAnalyticsTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveAnalyticsTab(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                      active
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-purple-300/40 shadow-md shadow-purple-600/25'
                        : 'bg-white/[0.04] text-zinc-300 border-white/10 hover:border-purple-400/40'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={currentAnalytics.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-xl space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-400/25">
                  {currentAnalytics.badge}
                </span>
                <p className="text-zinc-300 text-sm sm:text-base mt-3 max-w-2xl">
                  {currentAnalytics.summary}
                </p>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-purple-300 hover:text-white transition"
              >
                Explore Projects <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentAnalytics.metrics.map((m) => (
                <div
                  key={m.name}
                  className="p-5 rounded-2xl bg-[#0c0a1a]/90 border border-white/10"
                >
                  <p className="text-xs text-zinc-400 font-medium">{m.name}</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5">
                    {m.value}
                  </p>
                  <p className="text-[11px] text-purple-300/80 mt-1">{m.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 5. FEATURED LINKEDIN INSIGHTS ================= */}
      <section className="py-20 px-4 sm:px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300 mb-2">
                7K+ COMMUNITY INSIGHTS
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold">
                Featured <span className="text-zinc-500">LinkedIn themes.</span>
              </h2>
            </div>

            <a
              href="https://www.linkedin.com/in/priyanshudubey1608"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/15 hover:border-purple-400 text-xs sm:text-sm font-semibold text-purple-200 transition"
            >
              Visit LinkedIn Profile <ExternalLink size={15} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {linkedinHighlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 transition-all flex flex-col justify-between gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-pink-400">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{item.takeaway}</p>
                </div>

                <a
                  href="https://www.linkedin.com/in/priyanshudubey1608"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-300 hover:text-white transition"
                >
                  Read on LinkedIn <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. CATEGORIZED TECH STACK ================= */}
      <section className="py-20 px-4 sm:px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300 mb-2">
              CORE TOOLKIT
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold">
              Tech stack <span className="text-zinc-500">I work with.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {techStackGroups.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4"
              >
                <h3 className="text-base font-bold text-white">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#0e0c1d] text-purple-200 border border-purple-400/25"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. QUICK CONNECT & 1-CLICK EMAIL COPY ================= */}
      <section className="py-20 px-4 sm:px-6 md:px-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-[#0e0c1d] border border-purple-400/30 p-6 sm:p-10 text-center space-y-6 backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300">
            OPEN TO OPPORTUNITIES • PUNE &amp; REMOTE
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Let&apos;s turn data into your next business win.
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
            Looking for a Data Analyst, BI Analyst, or ML intern/collaborator? Reach out directly or copy my email in one click.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="mailto:dubeypriyanshu58463@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-purple-600/30 hover:opacity-95 transition break-all"
            >
              <Mail size={16} className="shrink-0" />
              <span>dubeypriyanshu58463@gmail.com</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-xs sm:text-sm transition"
            >
              {copiedEmail ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-purple-300" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="https://www.linkedin.com/in/priyanshudubey1608"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:border-purple-400 border border-white/10 text-zinc-200 font-semibold text-xs sm:text-sm transition"
            >
              <span>LinkedIn DM</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}