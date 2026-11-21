import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink, Code2, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 bg-[#07060f] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute top-20 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[130px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300 mb-2">
            LET&apos;S CONNECT
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Have a data project or{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              opportunity?
            </span>
          </h1>
          <p className="text-zinc-400 mt-3">
            Open to Data Analyst, Business Intelligence, and Data Science roles &amp; collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <a
              href="mailto:dubeyji58463@gmail.com"
              className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-purple-400/50 transition-all flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-purple-500/15 text-purple-300">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Email</p>
                <p className="font-bold text-white text-sm sm:text-base">dubeypriyanshu58463@gmail.com</p>
              </div>
            </a>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-300">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Location</p>
                <p className="font-bold text-white text-sm sm:text-base">Pune / Pimpri-Chinchwad, India</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/priyanshudubey1608"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[160px] py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg shadow-purple-600/25"
            >
              LinkedIn (7K+) <ExternalLink size={16} />
            </a>
            <a
              href="https://github.com/Priyanshu-1608-dubey"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[160px] py-3.5 px-6 rounded-2xl bg-white/[0.06] border border-white/15 text-white font-semibold hover:border-purple-400 transition flex items-center justify-center gap-2"
            >
              <Code2 size={18} /> GitHub
            </a>
            <a
              href="https://x.com/Priyanshumca"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[160px] py-3.5 px-6 rounded-2xl bg-white/[0.06] border border-white/15 text-white font-semibold hover:border-purple-400 transition flex items-center justify-center gap-2"
            >
              <Send size={16} /> X (Twitter)
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}