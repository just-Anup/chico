"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Play,
  Scissors,
  Sparkles,
  Waves,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">

      {/* Ambient decorative elements */}
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-container">

        {/* ================= LEFT ================= */}

        <div className="hero-content">

          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow-dot" />

            VIDEO EDITING STUDIO

            <span className="eyebrow-line" />
          </motion.div>


          <motion.h1
            className="hero-title"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >

            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 70,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              We turn
            </motion.span>


            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 70,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              raw footage
            </motion.span>


            <motion.span
              className="hero-title-accent"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 70,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              into stories.
            </motion.span>

          </motion.h1>


          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
              duration: 0.7,
            }}
          >
            You focus on creating. We handle everything
            behind the scenes — editing, motion, thumbnails
            and content that makes people stop scrolling.
          </motion.p>


          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.85,
              duration: 0.6,
            }}
          >

            <a
              href="#work"
              className="hero-secondary-button"
            >
              <span className="hero-play-icon">
                <Play size={13} fill="currentColor" />
              </span>

              View Our Work
            </a>

          </motion.div>


          {/* Small trust statement */}

          <motion.div
            className="hero-bottom-note"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
            }}
          >
            <Sparkles size={15} />

            <span>
              Built for creators who refuse to be average.
            </span>
          </motion.div>

        </div>


        {/* ================= RIGHT ================= */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.88,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Rotating ring */}

          <motion.div
            className="hero-ring"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="ring-dot ring-dot-one" />
            <span className="ring-dot ring-dot-two" />
            <span className="ring-dot ring-dot-three" />
          </motion.div>


          {/* Main editing window */}

          <motion.div
            className="editing-window"
            animate={{
              y: [-7, 7, -7],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            {/* Window top */}

            <div className="editing-topbar">

              <div className="window-controls">
                <span />
                <span />
                <span />
              </div>

              <div className="editing-title">
                PROJECT_001.mp4
              </div>

              <div className="editing-time">
                00:24:18
              </div>

            </div>


            {/* Main video preview */}

            <div className="video-preview">

              <div className="preview-noise" />

              <div className="preview-gradient" />

              <div className="preview-content">

                <span className="preview-label">
                  YOUR STORY
                </span>

                <strong>
                  MAKE IT
                  <br />
                  <span>WATCHABLE.</span>
                </strong>

              </div>


              {/* Play button */}

              <motion.div
                className="floating-play"
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Play
                  size={21}
                  fill="currentColor"
                />
              </motion.div>


              {/* Timecode */}

              <div className="preview-timecode">
                00:00:24:18
              </div>

            </div>


            {/* Timeline */}

            <div className="timeline">

              <div className="timeline-header">

                <span>
                  TIMELINE
                </span>

                <span>
                  4K / 24FPS
                </span>

              </div>


              <div className="timeline-track">

                <div className="timeline-label">
                  V1
                </div>

                <div className="timeline-clips">

                  <motion.div
                    className="clip clip-purple"
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />

                  <div className="clip clip-dark" />

                  <div className="clip clip-purple small" />

                  <div className="clip clip-light" />

                </div>

              </div>


              <div className="timeline-track">

                <div className="timeline-label">
                  A1
                </div>

                <div className="waveform">

                  {Array.from({
                    length: 48,
                  }).map((_, index) => (

                    <motion.span
                      key={index}
                      style={{
                        height: `${15 + Math.abs(
                          Math.sin(index * 1.7)
                        ) * 25}px`,
                      }}
                      animate={{
                        scaleY: [0.65, 1, 0.65],
                      }}
                      transition={{
                        duration:
                          0.8 + (index % 5) * 0.1,
                        repeat: Infinity,
                        delay: index * 0.02,
                      }}
                    />

                  ))}

                </div>

              </div>


              {/* Moving playhead */}

              <motion.div
                className="playhead"
                animate={{
                  left: ["8%", "90%", "8%"],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

            </div>

          </motion.div>


          {/* Floating Editing Card */}

          <motion.div
            className="floating-card floating-card-one"
            animate={{
              y: [-10, 10, -10],
              rotate: [-2, 1, -2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="floating-icon purple-icon">
              <Scissors size={18} />
            </div>

            <div>
              <strong>
                CUT
              </strong>

              <span>
                Precision editing
              </span>
            </div>

          </motion.div>


          {/* Floating audio card */}

          <motion.div
            className="floating-card floating-card-two"
            animate={{
              y: [8, -8, 8],
              rotate: [2, -1, 2],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="floating-icon black-icon">
              <Waves size={18} />
            </div>

            <div>
              <strong>
                AUDIO
              </strong>

              <span>
                Sound design
              </span>
            </div>

          </motion.div>


          {/* Floating 4K badge */}

          <motion.div
            className="floating-badge"
            animate={{
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>
              4K
            </span>

            <small>
              READY
            </small>
          </motion.div>


          {/* Purple floating orb */}

          <motion.div
            className="hero-orb"
            animate={{
              x: [-15, 15, -15],
              y: [10, -15, 10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </motion.div>

      </div>


      {/* Scroll indicator */}

      <motion.a
        href="#services"
        className="hero-scroll"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
      >

        <span>
          SCROLL TO EXPLORE
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={16} />
        </motion.div>

      </motion.a>

    </section>
  );
}