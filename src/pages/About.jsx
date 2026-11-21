import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users } from 'lucide-react';

const experiences = [
  { role: 'Data Mining and Analyst Intern', company: 'UptoSkills', period: 'Oct 2026 – Present' },
  { role: 'Data Analytics Intern', company: 'BharatCares® (AICTE × IBM)', period: 'Aug 2026 – Sep 2026' },
  { role: 'Sports Analyst (Wyscout)', company: 'Hudl India Pvt Ltd', period: 'Apr 2026 – May 2026' },
  { role: 'Data Science & Analytics Intern', company: 'Amdox Technologies', period: 'Dec 2025 – Mar 2026' },
  { role: 'Junior Data Analyst (Python)', company: 'YuvaIntern', period: 'Dec 2025' },
  { role: 'Data Analyst Intern', company: 'Oasis Infobyte', period: 'Nov 2025 – Dec 2025' },
];

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institute: 'Savitribai Phule Pune University (SPPU)',
    period: 'Sep 2026 – Apr 2028',
  },
  {
    degree: 'Bachelor of Science in Information Technology (B.Sc. IT)',
    institute: 'University of Mumbai',
    period: 'Jun 2022 – Apr 2025',
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 bg-[#07060f] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute top-20 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px]" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-14">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300 mb-2">
            ABOUT ME
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Driven by{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Data &amp; Curiosity
            </span>
          </h1>
          <p className="text-zinc-400 mt-4 max-w-3xl mx-auto leading-relaxed">
            I&apos;m <strong className="text-white">Priyanshu Dubey</strong>, an MCA&apos;28 student passionate about
            Data Analytics, Business Intelligence, and Machine Learning. I enjoy exploring complex datasets,
            building predictive models, and sharing practical tech insights with{' '}
            <strong className="text-purple-300">7,000+ followers as a LinkedIn Content Creator</strong>.
          </p>
        </motion.div>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-400/25">
                <Briefcase size={22} />
              </div>
              <h2 className="text-2xl font-bold">Experience</h2>
            </div>

            <div className="space-y-5">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-purple-500/40 pl-4">
                  <p className="text-xs font-mono text-purple-300">{exp.period}</p>
                  <h3 className="font-bold text-white mt-0.5">{exp.role}</h3>
                  <p className="text-sm text-zinc-400">{exp.company}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education + Creator Highlight */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-indigo-500/15 text-indigo-300 border border-indigo-400/25">
                  <GraduationCap size={22} />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="space-y-5">
                {education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-indigo-500/40 pl-4">
                    <p className="text-xs font-mono text-indigo-300">{edu.period}</p>
                    <h3 className="font-bold text-white mt-0.5">{edu.degree}</h3>
                    <p className="text-sm text-zinc-400">{edu.institute}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600/20 to-indigo-600/10 backdrop-blur-xl border border-purple-400/30 rounded-3xl p-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <Users size={22} className="text-pink-400" />
                <h3 className="text-xl font-bold">7K+ LinkedIn Creator</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Recently started my LinkedIn content creation journey — sharing Data Analytics projects,
                internship learnings, and tech insights with over 7,000+ connections and followers.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}