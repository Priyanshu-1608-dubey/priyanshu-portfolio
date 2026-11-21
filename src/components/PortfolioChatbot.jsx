import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const quickQuestions = [
  'What are Priyanshu’s core skills?',
  'Tell me about his top projects',
  'Education & Location?',
  'How can I contact him?',
];

function getBotReply(input) {
  const q = input.toLowerCase();

  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('tool')) {
    return 'Priyanshu specializes in Python (Pandas, NumPy, Scikit-Learn), SQL / PostgreSQL, Power BI, Excel Dashboards, and Machine Learning (EDA, Predictive Modeling & Forecasting).';
  }
  if (q.includes('project') || q.includes('work') || q.includes('ml') || q.includes('fraud') || q.includes('crypto')) {
    return 'His key projects include Financial Fraud Detection Pipelines, Multi-Coin Crypto Time-Series Forecasting, and interactive Power BI Business Dashboards. Check the Projects page for full details!';
  }
  if (q.includes('education') || q.includes('mca') || q.includes('college') || q.includes('location') || q.includes('pune')) {
    return 'Priyanshu is pursuing MCA (2028 batch) at SPPU, Pune, and is actively open to Data Analyst, BI Analyst, and Data Science opportunities in Pune or Remote.';
  }
  if (q.includes('linkedin') || q.includes('follower') || q.includes('creator') || q.includes('content')) {
    return 'Priyanshu is a LinkedIn Content Creator with 7,000+ followers, regularly sharing actionable insights on Data Analytics, AI, and tech careers.';
  }
  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
    return 'You can reach Priyanshu directly at dubeypriyanshu58463@gmail.com or connect via LinkedIn (linkedin.com/in/priyanshudubey1608).';
  }
  if (q.includes('cert') || q.includes('offer') || q.includes('intern')) {
    return 'You can view all of Priyanshu’s verified Offer Letters & Certifications directly in the Offer Letters & Certs tab on this portfolio!';
  }

  return 'I’m Priyanshu’s Emoji AI Buddy! Ask me about his skills (Python, SQL, Power BI, ML), projects, MCA at SPPU Pune, 7K+ LinkedIn journey, or contact details.';
}

// Hilta-dulta Animated Emoji Character
function AnimatedBotEmoji({ isTyping = false, sizeClass = 'text-3xl sm:text-4xl' }) {
  return (
    <motion.span
      role="img"
      aria-label="AI Bot"
      animate={
        isTyping
          ? {
              y: [0, -5, 0, -3, 0],
              rotate: [-6, 8, -8, 6, -6],
              scale: [1, 1.08, 1, 1.05, 1],
            }
          : {
              y: [0, -7, 0],
              rotate: [-5, 6, -5],
              scale: [1, 1.04, 1],
            }
      }
      transition={{
        duration: isTyping ? 1.1 : 2.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`inline-block select-none leading-none drop-shadow-[0_6px_14px_rgba(168,85,247,0.45)] ${sizeClass}`}
    >
      🤖
    </motion.span>
  );
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hey! 👋 Main hoon Priyanshu ka AI Buddy. Skills, ML projects, ya availability ke baare mein kuch bhi poochho!',
    },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  const sendMessage = (textToSend) => {
    const query = (textToSend ?? input).trim();
    if (!query || isTyping) return;

    const userMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: getBotReply(query),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 320, damping: 25 }}
            style={{ transformOrigin: 'bottom right' }}
            className="mb-3 w-[calc(100vw-2rem)] sm:w-96 max-h-[78dvh] rounded-3xl bg-[#0e0c1d]/95 backdrop-blur-2xl border border-purple-400/35 shadow-[0_20px_60px_rgba(139,92,246,0.3)] overflow-hidden flex flex-col"
          >
            {/* Header with Hilta-dulta Emoji */}
            <div className="px-4 py-3 bg-gradient-to-r from-indigo-600/35 via-purple-600/30 to-pink-600/25 border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center">
                  <AnimatedBotEmoji isTyping={isTyping} sizeClass="text-2xl" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none flex items-center gap-1.5">
                    PD AI Buddy
                    <Sparkles size={13} className="text-purple-300" />
                  </h4>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 mt-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    {isTyping ? 'Soch raha hoon...' : 'Zinda & Ready • Ask Anything'}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition"
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Messages Area */}
            <div className="p-4 flex-1 min-h-56 max-h-72 overflow-y-auto space-y-3 text-sm">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className={`flex items-end gap-2 ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {msg.sender === 'bot' && (
                      <span className="text-xl leading-none select-none shrink-0">🤖</span>
                    )}

                    <div
                      className={`px-3.5 py-2.5 rounded-2xl max-w-[82%] leading-relaxed text-xs sm:text-sm ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-sm shadow-md shadow-purple-600/20'
                          : 'bg-white/[0.06] border border-white/10 text-zinc-200 rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {msg.sender === 'user' && (
                      <span className="text-lg leading-none select-none shrink-0">🙋‍♂️</span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Dots */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <AnimatedBotEmoji isTyping={true} sizeClass="text-xl" />
                  <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white/[0.06] border border-white/10 flex items-center gap-1.5">
                    <motion.span
                      animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 0.7, repeat: Infinity, delay: 0 }}
                      className="w-1.5 h-1.5 rounded-full bg-purple-300"
                    />
                    <motion.span
                      animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 0.7, repeat: Infinity, delay: 0.15 }}
                      className="w-1.5 h-1.5 rounded-full bg-purple-300"
                    />
                    <motion.span
                      animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 0.7, repeat: Infinity, delay: 0.3 }}
                      className="w-1.5 h-1.5 rounded-full bg-purple-300"
                    />
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 pb-2.5 flex gap-1.5 overflow-x-auto shrink-0">
              {quickQuestions.map((q) => (
                <motion.button
                  key={q}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => sendMessage(q)}
                  className="shrink-0 text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-purple-500/20 border border-white/10 hover:border-purple-400/40 text-zinc-300 transition"
                >
                  {q}
                </motion.button>
              ))}
            </div>

            {/* Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="p-3 border-t border-white/10 flex items-center gap-2 bg-[#090814] shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-white/[0.06] border border-white/10 rounded-full px-3.5 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 transition"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.08, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-95 transition shrink-0 shadow-md shadow-purple-600/30"
              >
                <Send size={15} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hilta-dulta Emoji Floating Button */}
      <div className="relative flex justify-end">
        {!isOpen && (
          <motion.span
            animate={{ scale: [1, 1.22, 1], opacity: [0.3, 0.65, 0.3] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-md pointer-events-none"
          />
        )}

        <motion.button
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex items-center gap-2 pl-2.5 pr-4 py-2 rounded-full bg-gradient-to-r from-[#171330] via-[#221946] to-[#2c1b4e] text-white font-semibold shadow-xl shadow-purple-900/50 border border-purple-400/45"
        >
          {isOpen ? (
            <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <X size={18} />
            </span>
          ) : (
            <AnimatedBotEmoji isTyping={false} sizeClass="text-2xl sm:text-3xl" />
          )}
          <span className="text-xs sm:text-sm">{isOpen ? 'Close' : 'Ask AI'}</span>
        </motion.button>
      </div>
    </div>
  );
}