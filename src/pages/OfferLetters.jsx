import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Eye, X, Calendar } from 'lucide-react';

const offerLetters = [
  {
    id: 1,
    title: 'Data Mining and Analyst Intern',
    issuer: 'UptoSkills',
    date: 'Oct 2026 – Jan 2027 (3 Months)',
    refId: 'Ref: US/HR/2026/T5KUM8',
    fileUrl: '/docs/uptoskills-offer.pdf',
  },
  {
    id: 2,
    title: 'IBM SkillsBuild Data Analytics with AI Intern',
    issuer: 'BharatCares® × AICTE × IBM',
    date: 'Aug 2026 – Sep 2026 (6 Weeks)',
    refId: 'ID: IBMUEDA0932',
    fileUrl: '/docs/bharatcares-offer.pdf',
  },
  {
    id: 3,
    title: 'Wyscout Soccer Analyst Traineeship',
    issuer: 'Hudl India Pvt. Ltd. (Mumbai)',
    date: 'Apr 2026 – May 2026 (1 Month)',
    refId: 'Traineeship Offer',
    fileUrl: '/docs/hudl-offer.pdf',
  },
  {
    id: 4,
    title: 'Junior Data Analyst — Financial Analytics (Python)',
    issuer: 'YuvaIntern (NSDC)',
    date: 'Dec 2025 (6 Weeks • Remote)',
    refId: 'Internship Offer',
    fileUrl: '/docs/yuvaintern-offer.pdf',
  },
  {
    id: 5,
    title: 'Data Analytics Intern',
    issuer: 'Oasis Infobyte',
    date: 'Nov 2025 (1 Month)',
    refId: 'ID: OIB/N1/IP3477',
    fileUrl: '/docs/oasis-offer.pdf',
  },
];

export default function OfferLetters() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 bg-[#07060f] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute top-24 left-10 w-96 h-96 bg-pink-600/15 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-300 mb-2">
            INDUSTRY EXPERIENCE
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Internship{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Offer Letters
            </span>
          </h1>
          <p className="text-zinc-400 mt-3">
            Verified internship &amp; traineeship offer letters across Data Analytics, AI, and Sports Analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerLetters.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -7, scale: 1.02 }}
              className="bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-pink-400/50 hover:shadow-[0_0_28px_rgba(236,72,153,0.18)] rounded-2xl p-6 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-pink-500/15 border border-pink-400/25 text-pink-300 flex items-center justify-center">
                    <Briefcase size={22} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border text-pink-300 bg-pink-500/15 border-pink-500/25">
                    Offer Letter
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">{doc.title}</h3>
                <p className="text-purple-300 font-semibold text-sm mt-1">{doc.issuer}</p>

                <p className="text-zinc-400 text-xs mt-2.5 flex items-center gap-1.5">
                  <Calendar size={14} className="text-zinc-500" /> {doc.date}
                </p>
                <p className="text-zinc-500 text-xs font-mono mt-1">{doc.refId}</p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  <Eye size={16} /> Preview PDF
                </button>
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/15 transition flex items-center justify-center"
                  title="Open PDF in New Tab"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dark PDF Preview Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#110f1f] border border-white/15 rounded-2xl max-w-4xl w-full h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-white">{selectedDoc.title}</h3>
                <p className="text-xs text-purple-300">{selectedDoc.issuer}</p>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="p-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <iframe
              src={selectedDoc.fileUrl}
              title={selectedDoc.title}
              className="w-full flex-1 bg-zinc-900"
            />
          </div>
        </div>
      )}
    </div>
  );
}