"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  Play,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";


/* =========================================================
   COMMENT IMAGES
   Put your comment images inside:

   public/comments/

   comment-01.webp
   comment-02.webp
   comment-03.webp
   ...
   comment-32.png
========================================================= */

/* =========================================================
   COMMENT IMAGES
========================================================= */

const comments = Array.from(
  { length: 19 },
  (_, index) => ({
    id: index,
    image: `/comments/comment-${String(index + 1).padStart(2, "0")}.webp`,
  })
);


/* =========================================================
   COMMENT POSITIONS
========================================================= */

const commentPositions = [
  {
    id: "top-left",
    style: {
      top: "18%",
      left: "-2%",
    },
  },

  {
    id: "top-right",
    style: {
      top: "11%",
      right: "-2%",
    },
  },

  {
    id: "bottom-left",
    style: {
      bottom: "14%",
      left: "-2%",
    },
  },

  {
    id: "bottom-right",
    style: {
      bottom: "9%",
      right: "-2%",
    },
  },
];


/* =========================================================
   SINGLE HERO COMMENT
========================================================= */

function HeroComment({
  comment,
  position,
  delay = 0,
  onHoverStart,
  onHoverEnd,
}) {
  return (
<motion.div
  style={{
    position: "absolute",
    ...position.style,
    width: "195px",
    zIndex: 9999,
    pointerEvents: "auto",
  }}

  onMouseEnter={onHoverStart}
  onMouseLeave={onHoverEnd}

  initial={{
    opacity: 0,
    scale: 0.65,
  }}

  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -5, 0],
  }}

  exit={{
    opacity: 0,
    scale: 0.7,
  }}

  transition={{
    opacity: {
      duration: 0.3,
      delay,
    },

    scale: {
      duration: 0.45,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },

    y: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay + 0.3,
    },
  }}
>

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: "15%",
          borderRadius: "50%",
          background:
            "rgba(137,118,253,0.25)",
          filter: "blur(20px)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      {/* Comment image */}
  <motion.img
  src={comment.image}
  alt="Creator comment"
  draggable="false"

  style={{
    display: "block",
    width: "100%",
    height: "auto",
    cursor: "pointer",
    borderRadius: "10px",
    userSelect: "none",
    WebkitUserDrag: "none",

    filter:
      "drop-shadow(0 12px 25px rgba(0,0,0,0.16))",
  }}

  whileHover={{
    scale: 2.2,
  }}

  transition={{
    duration: 0.35,
    ease: [0.22, 1, 0.36, 1],
  }}
/>

    </motion.div>
  );
}


/* =========================================================
   MAIN HERO
========================================================= */

export default function Hero() {

  const [commentSet, setCommentSet] = useState([
    0,
    1,
    2,
    3,
  ]);

const [isCommentHovered, setIsCommentHovered] = useState(false);
/* =========================================================
   CHANGE COMMENTS EVERY 2 SECONDS
   PAUSE WHEN USER HOVERS
========================================================= */

useEffect(() => {

  if (isCommentHovered) {
    return;
  }

  const timer = setInterval(() => {

    setCommentSet((current) => {

      return current.map(
        (index) =>
          (index + 4) % comments.length
      );

    });

  }, 3000);

  return () => {
    clearInterval(timer);
  };

}, [isCommentHovered]);

  return (
    <section className="hero">

      {/* ==================================================
          AMBIENT DECORATIVE ELEMENTS
      ================================================== */}

      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />

      <div className="hero-glow hero-glow-two" />


      <div className="hero-container">


        {/* ==================================================
            LEFT
        ================================================== */}

        <div className="hero-content">


          {/* ================= EYEBROW ================= */}

          <motion.div
            className="hero-eyebrow"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <span className="eyebrow-dot" />

            VIDEO EDITING STUDIO

            <span className="eyebrow-line" />

          </motion.div>


          {/* ================= TITLE ================= */}

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
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
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
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
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
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  },
                },
              }}
            >
              into content
            </motion.span>

          </motion.h1>


          {/* ================= DESCRIPTION ================= */}

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
          </motion.p>


          {/* ================= BUTTON ================= */}

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
              href="#services"
              className="hero-secondary-button"
            >

              <span className="hero-play-icon">
                <Play
                  size={13}
                  fill="currentColor"
                />
              </span>

              View Our Work

            </a>

          </motion.div>


          {/* ================= BOTTOM NOTE ================= */}

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
            RIGHT — CINEMATIC EDITING ANIMATION
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
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >


          {/* ==================================================
              CINEMATIC GLOW
          ================================================== */}

          <motion.div
            className="hero-cinema-glow"
            animate={{
              scale: [
                1,
                1.15,
                1,
              ],

              opacity: [
                0.35,
                0.55,
                0.35,
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* ==================================================
              ORBIT
          ================================================== */}

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


          {/* ==================================================
              FOUR FLOATING COMMENTS
          ================================================== */}
{/* ==================================================
    FOUR FLOATING COMMENTS
================================================== */}

<div className="hero-comments-layer">

  <AnimatePresence mode="sync">

    {commentPositions.map(
      (position, index) => {

        const comment =
          comments[commentSet[index]];

        return (
        <HeroComment
  key={`${position.id}-${comment.id}`}
  comment={comment}
  position={position}
  delay={index * 0.08}
  onHoverStart={() => setIsCommentHovered(true)}
  onHoverEnd={() => setIsCommentHovered(false)}
/>
        );

      }
    )}

  </AnimatePresence>

</div>


          {/* ==================================================
              MAIN CINEMATIC EDITOR
          ================================================== */}

          <motion.div
            className="hero-cinema-editor"
            animate={{
              y: [
                -8,
                8,
                -8,
              ],

              rotateX: [
                1,
                2,
                1,
              ],

              rotateY: [
                -2,
                -4,
                -2,
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >


            {/* ================= EDITOR TOP BAR ================= */}

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


            {/* ==================================================
                VIDEO PREVIEW
            ================================================== */}

            <div className="hero-cinema-preview">


              {/* Background composition */}

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
                  scale: [
                    1,
                    1.07,
                    1,
                  ],

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


            {/* ==================================================
                TIMELINE
            ================================================== */}

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
                      opacity: [
                        0.7,
                        1,
                        0.7,
                      ],
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
                          `${
                            18 +
                            Math.abs(
                              Math.sin(
                                index * 1.4
                              )
                            ) *
                              30
                          }%`,

                          `${
                            35 +
                            Math.abs(
                              Math.sin(
                                index * 1.8
                              )
                            ) *
                              55
                          }%`,

                          `${
                            18 +
                            Math.abs(
                              Math.sin(
                                index * 1.4
                              )
                            ) *
                              30
                          }%`,
                        ],
                      }}
                      transition={{
                        duration:
                          0.9 +
                          (index % 5) *
                            0.12,

                        repeat: Infinity,

                        delay:
                          index * 0.025,

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


          {/* ==================================================
              DECORATIVE DOTS
          ================================================== */}

          <div className="hero-cinema-dot hero-cinema-dot-one" />

          <div className="hero-cinema-dot hero-cinema-dot-two" />

          <div className="hero-cinema-dot hero-cinema-dot-three" />


        </motion.div>

      </div>


      {/* ==================================================
          SCROLL INDICATOR
      ================================================== */}

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
            y: [
              0,
              7,
              0,
            ],
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