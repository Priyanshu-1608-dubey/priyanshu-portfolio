import { motion } from 'framer-motion';
import { Trophy, Award, TrendingUp, GraduationCap, ExternalLink, Sparkles } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Aavishkar 2026 — Inter-University Research Competition (CML PG 6)',
    event: 'Savitribai Phule Pune University (SPPU) • IQAC',
    description:
      'Represented Dr. D. Y. Patil Institute of Management and Entrepreneur Development (Varale Campus) in the MCA category at Aavishkar 2026 and earned the CML PG 6 milestone in research and innovation.',
    badge: 'Research & Innovation',
    icon: Sparkles,
    color: 'text-purple-300 bg-purple-500/15 border-purple-400/30',
    link: 'https://lnkd.in/p/d3birhcU',
  },
  {
    id: 2,
    title: '6+ Industry Internships & Analytical Roles',
    event: 'UptoSkills • BharatCares® • Hudl India • Amdox • Yuva Intern • Oasis Infobyte',
    description:
      'Gained hands-on industry experience across data mining, financial analytics, sports performance analysis, and business intelligence reporting.',
    badge: 'Career Milestone',
    icon: TrendingUp,
    color: 'text-indigo-300 bg-indigo-500/15 border-indigo-400/30',
  },
  {
    id: 3,
    title: 'Tata Data Visualisation Job Simulation',
    event: 'Empowering Business with Effective Insights',
    description:
      'Completed industry-grade data visualization simulation focused on framing business scenarios and presenting clear executive visuals.',
    badge: 'Industry Simulation',
    icon: Trophy,
    color: 'text-amber-300 bg-amber-500/15 border-amber-400/30',
  },
  {
    id: 4,
    title: 'High-Accuracy Sports Event Data Analyst',
    event: 'Hudl India Pvt Ltd',
    description:
      'Delivered high-accuracy football match event tagging, rigorous QA data validation, and player performance reporting.',
    badge: 'Data Quality',
    icon: Award,
    color: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30',
  },
  {
    id: 5,
    title: '5+ Verified Data & Python Certifications',
    event: 'Python • SQL for Data Analysis • Data Analytics Essentials',
    description:
      'Strengthened core technical foundations in Python for Data Science, SQL querying, and statistical data analysis alongside MCA at SPPU.',
    badge: 'Certifications',
    icon: GraduationCap,
    color: 'text-pink-300 bg-pink-500/15 border-pink-400/30',
  },
];

export default function Achievements() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 bg-[#07060f] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute top-20 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-[130px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300 mb-2">
            MILESTONES &amp; HONORS
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            My{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>
          <p className="text-zinc-400 mt-3">
            Key milestones, research competitions, industry simulations, and recognitions.
          </p>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.015, x: 8 }}
                className="bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)] rounded-3xl p-6 md:p-8 transition-all flex flex-col md:flex-row gap-6 items-start"
              >
                <div className={`p-4 rounded-2xl border shrink-0 ${item.color}`}>
                  <Icon size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.08] text-purple-200 border border-white/10">
                      {item.badge}
                    </span>
                    <span className="text-sm font-medium text-zinc-400">{item.event}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-zinc-400 mt-2 leading-relaxed">{item.description}</p>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition shadow-lg shadow-purple-600/25"
                    >
                      <span>View LinkedIn Post</span>
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}