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
              raw reactions
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
              into entertainment
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


        {/* ==================================================
            RIGHT — NEW CINEMATIC EDITING ANIMATION
        ================================================== */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 35,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Large cinematic glow */}

          <motion.div
            className="hero-cinema-glow"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* Decorative orbital line */}

          <motion.div
            className="hero-cinema-orbit"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span />
          </motion.div>


          {/* =========================================
              FLOATING RAW LABEL
          ========================================= */}

          <motion.div
            className="hero-cinema-label hero-cinema-raw"
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="hero-cinema-status-dot" />
            RAW FOOTAGE
          </motion.div>


          {/* =========================================
              MAIN CINEMATIC EDITOR
          ========================================= */}

          <motion.div
            className="hero-cinema-editor"
            animate={{
              y: [-8, 8, -8],
              rotateX: [1, 2, 1],
              rotateY: [-2, -4, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            {/* Editor top bar */}

            <div className="hero-cinema-topbar">

              <div className="hero-cinema-window-buttons">
                <span />
                <span />
                <span />
              </div>

              <div className="hero-cinema-file">
                CREATOR_PROJECT / FINAL_EDIT
              </div>

              <div className="hero-cinema-resolution">
                4K
              </div>

            </div>


            {/* =====================================
                VIDEO PREVIEW
            ===================================== */}

            <div className="hero-cinema-preview">

              {/* Background image-like composition */}

              <div className="hero-cinema-preview-bg">

                <div className="hero-cinema-light-one" />

                <div className="hero-cinema-light-two" />

                <div className="hero-cinema-person">

                  <div className="hero-cinema-head" />

                  <div className="hero-cinema-body" />

                </div>

              </div>


              {/* Cinematic frame lines */}

              <div className="hero-cinema-frame-lines" />


              {/* Preview text */}

              <div className="hero-cinema-preview-copy">

                <span>
                  FRAME 0248
                </span>

                <strong>
                  TELL
                  <br />
                  YOUR STORY
                </strong>

              </div>


              {/* Center play button */}

              <motion.div
                className="hero-cinema-play"
                animate={{
                  scale: [1, 1.07, 1],
                  boxShadow: [
                    "0 0 0 rgba(137,118,253,0)",
                    "0 0 35px rgba(137,118,253,.4)",
                    "0 0 0 rgba(137,118,253,0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Play
                  size={22}
                  fill="currentColor"
                />
              </motion.div>


              {/* Timecode */}

              <div className="hero-cinema-timecode">
                00:01:24:18
              </div>


              {/* Editing status */}

              <div className="hero-cinema-editing">

                <span />

                EDITING

              </div>

            </div>


            {/* =====================================
                TIMELINE
            ===================================== */}

            <div className="hero-cinema-timeline">

              <div className="hero-cinema-timeline-header">

                <span>
                  TIMELINE
                </span>

                <span>
                  24 FPS
                </span>

              </div>


              {/* Timeline ruler */}

              <div className="hero-cinema-ruler">

                {[
                  "00",
                  "05",
                  "10",
                  "15",
                  "20",
                  "25",
                  "30",
                  "35",
                ].map((number) => (
                  <span key={number}>
                    {number}
                  </span>
                ))}

              </div>


              {/* Video track */}

              <div className="hero-cinema-track">

                <div className="hero-cinema-track-name">
                  V1
                </div>

                <div className="hero-cinema-clips">

                  <motion.div
                    className="hero-cinema-clip hero-cinema-clip-main"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    A-ROLL
                  </motion.div>

                  <div className="hero-cinema-clip hero-cinema-clip-two">
                    B-ROLL
                  </div>

                  <div className="hero-cinema-clip hero-cinema-clip-three">
                    CUT
                  </div>

                  <div className="hero-cinema-clip hero-cinema-clip-four">
                    FINAL
                  </div>

                </div>

              </div>


              {/* Audio track */}

              <div className="hero-cinema-track">

                <div className="hero-cinema-track-name">
                  A1
                </div>

                <div className="hero-cinema-waveform">

                  {Array.from({
                    length: 46,
                  }).map((_, index) => (

                    <motion.span
                      key={index}
                      animate={{
                        height: [
                          `${18 + Math.abs(
                            Math.sin(index * 1.4)
                          ) * 30}%`,
                          `${35 + Math.abs(
                            Math.sin(index * 1.8)
                          ) * 55}%`,
                          `${18 + Math.abs(
                            Math.sin(index * 1.4)
                          ) * 30}%`,
                        ],
                      }}
                      transition={{
                        duration:
                          0.9 +
                          (index % 5) * 0.12,
                        repeat: Infinity,
                        delay: index * 0.025,
                        ease: "easeInOut",
                      }}
                    />

                  ))}

                </div>

              </div>


              {/* Moving playhead */}

              <motion.div
                className="hero-cinema-playhead"
                animate={{
                  left: [
                    "12%",
                    "88%",
                    "12%",
                  ],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span />
              </motion.div>

            </div>

          </motion.div>


          {/* =========================================
              FLOATING CUT CARD
          ========================================= */}

          <motion.div
            className="hero-cinema-floating-card hero-cinema-cut-card"
            animate={{
              y: [-12, 12, -12],
              rotate: [-3, 1, -3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="hero-cinema-card-icon">
              <Scissors size={17} />
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


          {/* =========================================
              FLOATING AUDIO CARD
          ========================================= */}

          <motion.div
            className="hero-cinema-floating-card hero-cinema-audio-card"
            animate={{
              y: [10, -10, 10],
              rotate: [3, -1, 3],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="hero-cinema-card-icon hero-cinema-card-dark">
              <Waves size={17} />
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


          {/* =========================================
              FINAL CUT BADGE
          ========================================= */}

          <motion.div
            className="hero-cinema-final"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <span>
              ✓
            </span>

            <div>
              <strong>
                FINAL CUT
              </strong>

              <small>
                READY TO PUBLISH
              </small>
            </div>

          </motion.div>


          {/* =========================================
              FLOATING FRAME
          ========================================= */}

          <motion.div
            className="hero-cinema-frame-card"
            animate={{
              rotate: [6, 9, 6],
              y: [-5, 8, -5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="hero-cinema-frame-inner">

              <span>
                01
              </span>

              <div />

              <small>
                STORY
              </small>

            </div>

          </motion.div>


          {/* Decorative dots */}

          <div className="hero-cinema-dot hero-cinema-dot-one" />
          <div className="hero-cinema-dot hero-cinema-dot-two" />
          <div className="hero-cinema-dot hero-cinema-dot-three" />

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