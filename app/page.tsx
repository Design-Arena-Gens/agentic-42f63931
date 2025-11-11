'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.2) setCurrentScene(0);
      else if (latest < 0.4) setCurrentScene(1);
      else if (latest < 0.6) setCurrentScene(2);
      else if (latest < 0.8) setCurrentScene(3);
      else setCurrentScene(4);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <main ref={containerRef} className="relative">
      {/* Scene 1: Opening - iPhone reveal */}
      <Section>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center h-screen"
        >
          <motion.div
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-64 h-[500px] bg-gradient-to-br from-slate-800 to-slate-950 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-slate-900"
          >
            {/* iPhone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10" />

            {/* iPhone screen with gradient */}
            <div className="absolute inset-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-[2.5rem] flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white text-6xl"
              >

              </motion.div>
            </div>

            {/* Reflection effect */}
            <motion.div
              animate={{
                x: [-200, 200],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{ transform: 'skewX(-20deg)' }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-6xl md:text-8xl font-bold mt-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            iPhone 16 Pro
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl md:text-2xl text-gray-400 mt-4"
          >
            Titanium. So strong. So light. So Pro.
          </motion.p>
        </motion.div>
      </Section>

      {/* Scene 2: Camera capabilities */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center h-screen px-8"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-80 h-80 mb-12"
          >
            {/* Camera lens representation */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full shadow-2xl">
              <div className="absolute inset-8 bg-gradient-to-br from-blue-900 to-black rounded-full flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-50"
                />
              </div>
              {/* Lens rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute inset-0 border-4 border-blue-500 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6"
          >
            48MP Main Camera
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 text-center max-w-2xl"
          >
            Capture every detail with unprecedented clarity.
            <br />
            Professional-grade photography in your pocket.
          </motion.p>
        </motion.div>
      </Section>

      {/* Scene 3: A17 Pro chip performance */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center h-screen px-8"
        >
          <div className="relative w-96 h-96 mb-12">
            {/* Chip visualization */}
            <motion.div
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-3xl shadow-2xl border border-blue-500/50"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Circuit pattern */}
              <div className="absolute inset-0 opacity-40">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="absolute bg-blue-500 h-0.5"
                    style={{
                      width: `${Math.random() * 60 + 20}%`,
                      top: `${(i + 1) * 12}%`,
                      left: `${Math.random() * 30}%`,
                    }}
                  />
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  A17
                </motion.div>
              </div>
            </motion.div>

            {/* Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute w-2 h-2 bg-blue-500 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '50%',
                }}
              />
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6"
          >
            A17 Pro Chip
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 text-center max-w-2xl"
          >
            The most powerful chip in a smartphone.
            <br />
            Desktop-class performance. Console-quality gaming.
          </motion.p>
        </motion.div>
      </Section>

      {/* Scene 4: Titanium design */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center h-screen px-8"
        >
          <div className="relative w-full max-w-4xl h-96 mb-12">
            {/* Titanium bars */}
            <div className="absolute inset-0 flex items-center justify-center gap-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: i * 0.1,
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="w-16 h-64 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-700 rounded-lg shadow-2xl"
                  style={{
                    transformOrigin: 'bottom',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent rounded-lg" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6"
          >
            Aerospace-Grade Titanium
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 text-center max-w-2xl"
          >
            The same alloy used in spacecraft.
            <br />
            Incredibly strong. Remarkably light.
          </motion.p>
        </motion.div>
      </Section>

      {/* Scene 5: Final CTA */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center h-screen px-8"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-16"
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                fill="currentColor"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="text-white"
              />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-9xl font-bold text-center mb-8"
          >
            Think Different
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-400 text-center max-w-3xl mb-12"
          >
            The future of innovation is here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-6 flex-wrap justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-full transition-colors"
            >
              Buy Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border-2 border-blue-600 text-blue-600 hover:bg-blue-600/10 text-xl font-semibold rounded-full transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-gray-600 text-sm mt-16"
          >
            Starting at $999
          </motion.p>
        </motion.div>
      </Section>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: currentScene === 4 ? 0 : 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-gray-500 text-sm">Scroll</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen w-full relative">
      {children}
    </section>
  );
}
