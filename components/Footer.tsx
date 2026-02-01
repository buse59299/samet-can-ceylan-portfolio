import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const [lines, setLines] = useState<string[]>([
    "user@portfolio:~$ ./init_comms.sh",
    "Connecting to neural network...",
    "Connection established."
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, input]);

  const handleCommand = (cmd: string, action: () => void) => {
    if (isTyping) return;
    setIsTyping(true);
    setInput("");

    let i = 0;
    const typeInterval = setInterval(() => {
      setInput(cmd.substring(0, i + 1));
      i++;
      if (i === cmd.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setLines(prev => [...prev, `user@portfolio:~$ ${cmd}`, "Executing protocol...", "Done."]);
          setInput("");
          setIsTyping(false);
          action();
        }, 500);
      }
    }, 50);
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-black border-t border-neon-cyan/30 mt-12 pb-8" data-purpose="footer">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0c0c0c] rounded-t-lg border border-gray-800 shadow-2xl overflow-hidden font-mono text-sm"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-gray-400 text-xs">user@portfolio:~</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 h-64 overflow-y-auto space-y-2 font-mono" ref={scrollRef}>
            {lines.map((line, index) => (
              <div key={index} className="text-gray-300 break-all">
                {line.startsWith("user@portfolio") ? (
                  <span className="text-green-500">{line.split(" ")[0]} <span className="text-white">{line.split(" ").slice(1).join(" ")}</span></span>
                ) : (
                  <span className="text-neon-cyan pl-4">{line}</span>
                )}
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2">
              <span className="text-green-500">user@portfolio:~$</span>
              <span className="text-white">{input}</span>
              <span className="animate-pulse w-2 h-4 bg-white inline-block"></span>
            </div>
          </div>

          {/* Command Buttons Area */}
          <div className="bg-[#1a1a1a] p-4 border-t border-gray-800">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleCommand("mail sametcanceylan@icloud.com", () => {
                  setTimeout(() => {
                    window.location.href = 'mailto:sametcanceylan@icloud.com';
                  }, 100);
                })}
                disabled={isTyping}
                className="group flex items-center gap-2 text-gray-400 hover:text-neon-orange hover:bg-white/5 px-2 py-1 border border-transparent hover:border-neon-orange transition-all text-xs cursor-pointer disabled:opacity-50"
              >
                <span className="text-neon-orange opacity-0 group-hover:opacity-100">&gt;</span>
                [ {t('footer.send_email')} ]
              </button>
              <button
                onClick={() => handleCommand("open https://github.com/MrDancheva", () => {
                  setTimeout(() => {
                    window.open('https://github.com/MrDancheva', '_blank');
                  }, 100);
                })}
                disabled={isTyping}
                className="group flex items-center gap-2 text-gray-400 hover:text-neon-cyan hover:bg-white/5 px-2 py-1 border border-transparent hover:border-neon-cyan transition-all text-xs cursor-pointer disabled:opacity-50"
              >
                <span className="text-neon-cyan opacity-0 group-hover:opacity-100">&gt;</span>
                [ --view_github ]
              </button>
              <button
                onClick={() => handleCommand("open https://grabcad.com/samet.can.ceylan-1", () => {
                  setTimeout(() => {
                    window.open('https://grabcad.com/samet.can.ceylan-1', '_blank');
                  }, 100);
                })}
                disabled={isTyping}
                className="group flex items-center gap-2 text-gray-400 hover:text-neon-orange hover:bg-white/5 px-2 py-1 border border-transparent hover:border-neon-orange transition-all text-xs cursor-pointer disabled:opacity-50"
              >
                <span className="text-neon-orange opacity-0 group-hover:opacity-100">&gt;</span>
                [ --view_grabcad ]
              </button>
              <button
                onClick={() => handleCommand("open https://www.instagram.com/mrdancheva", () => {
                  setTimeout(() => {
                    window.open('https://www.instagram.com/mrdancheva', '_blank');
                  }, 100);
                })}
                disabled={isTyping}
                className="group flex items-center gap-2 text-gray-400 hover:text-neon-cyan hover:bg-white/5 px-2 py-1 border border-transparent hover:border-neon-cyan transition-all text-xs cursor-pointer disabled:opacity-50"
              >
                <span className="text-neon-cyan opacity-0 group-hover:opacity-100">&gt;</span>
                [ --view_instagram ]
              </button>
            </div>
          </div>
        </motion.div>
        <div className="text-center text-gray-600 text-xs mt-8 font-mono">
          © {year} Samet Can Ceylan. {t('header.status_online')}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;