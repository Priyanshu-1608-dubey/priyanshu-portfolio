import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, FolderGit2, Building2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Supermarket Sales Analysis',
    organization: 'BharatCares® (Internship)',
    role: 'Data Analytics Intern',
    description:
      'Data Analytics project for supermarket sales analysis uncovering revenue trends, customer behavior, and KPI insights.',
    tech: ['Python', 'Excel', 'Power BI', 'Data Analytics'],
    githubUrl: 'https://github.com/Priyanshu-1608-dubey/Supermarket-Sales-Analysis',
  },
  {
    id: 2,
    name: 'Krishi Sahayak',
    organization: 'MCA College Project (Ongoing)',
    role: 'Masters Project',
    description:
      'Currently developing this Masters (MCA) project focused on smart agricultural assistance and data-driven farmer support.',
    tech: ['Python', 'Data Analytics', 'Web App'],
    githubUrl: 'https://github.com/Priyanshu-1608-dubey/Krishi-Sahayak',
  },
  {
    id: 3,
    name: 'AIKORA — PayPal Family Wallet',
    organization: 'Hackathon Project',
    role: 'Full-Stack & Voice AI',
    description:
      'A cross-border family wallet and voice shopping app built with PayPal integration, React frontend, Spring Boot backend, and Capacitor Android.',
    tech: ['TypeScript', 'React', 'Spring Boot', 'PayPal API', 'Capacitor'],
    githubUrl: 'https://github.com/Priyanshu-1608-dubey/aikora-paypal',
  },
  {
    id: 4,
    name: 'Crypto Multi-Coin Forecast System',
    organization: 'Amdox Technologies',
    role: 'Data Science & Analytics Intern',
    description:
      'Cryptocurrency price prediction system using data analysis and machine learning techniques to forecast multiple coin trends from historical data.',
    tech: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas'],
    githubUrl: 'https://github.com/Priyanshu-1608-dubey/Crypto-Multi-Coin-Forecast-System',
  },
  {
    id: 5,
    name: 'Financial Fraud Detection',
    organization: 'Yuva Intern',
    role: 'Junior Data Analyst Intern',
    description:
      'Machine learning system focused on detecting fraudulent financial transactions using data preprocessing, feature analysis, and classification models.',
    tech: ['Python', 'Machine Learning', 'Data Preprocessing', 'Scikit-Learn'],
    githubUrl: 'https://github.com/Priyanshu-1608-dubey/financial-fraud-detection-main',
  },
  {
    id: 6,
    name: 'Plywood Marketplace',
    organization: 'Graduation Project (B.Sc. IT)',
    role: 'Final Year Project',
    description:
      'Modern web application for buying and selling plywood materials with responsive UI and structured database management.',
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Drizzle ORM'],
    githubUrl: 'https://github.com/Priyanshu-1608-dubey/Plywodmarketplace',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const organizations = ['All', ...new Set(projects.map((p) => p.organization))];
  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.organization === filter);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 bg-[#07060f] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-20 left-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300 mb-2">
            SELECTED WORK
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
            Real-world Data Analytics, Machine Learning, and Full-Stack projects built across internships, hackathons, and academics.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2.5 mt-7 flex-wrap">
            {organizations.map((org) => (
              <button
                key={org}
                onClick={() => setFilter(org)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  filter === org
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-white/[0.04] text-zinc-400 border border-white/10 hover:border-purple-400/50 hover:text-white'
                }`}
              >
                {org}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)] rounded-3xl p-6 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-purple-500/15 border border-purple-400/25 text-purple-300 flex items-center justify-center shrink-0">
                    <FolderGit2 size={22} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/25 text-pink-300">
                    <Building2 size={12} /> {project.organization}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <p className="text-xs font-semibold text-purple-300 mt-1">{project.role}</p>
                <p className="text-zinc-400 mt-2.5 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-indigo-500/15 border border-indigo-400/20 text-indigo-300 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/[0.08] hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 border border-white/10"
                >
                  <Code2 size={16} /> View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}