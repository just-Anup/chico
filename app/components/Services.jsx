"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Film,
  Headphones,
  Image,
  Smartphone,
  PlaySquare,
} from "lucide-react";
const services = [
  {
    number: "01",
    title: "Long-Form Video Editing",
    description:
      "Turn hours of raw footage into engaging videos with strong pacing, storytelling, sound design, motion graphics and a polished cinematic finish.",
    tag: "YOUTUBE • DOCUMENTARY • EDUCATION",
    icon: Film,
    visual: "timeline",
  },
  {
    number: "02",
    title: "Podcast Video Editing",
    description:
      "Multi-camera podcast editing with dynamic cuts, clean audio, captions, punch-ins and visual moments that keep viewers watching.",
    tag: "PODCAST • MULTI-CAM • AUDIO",
    icon: Headphones,
    visual: "podcast",
  },
  {
    number: "03",
    title: "Thumbnail Designing",
    description:
      "Eye-catching thumbnails built around strong visual hierarchy, curiosity and clear messaging to help your videos earn the click.",
    tag: "THUMBNAILS • CTR • DESIGN",
    icon: Image,
    visual: "thumbnail",
  },
  {
    number: "04",
    title: "Shorts / Reel Video Editing",
    description:
      "Fast, engaging vertical edits designed for retention — from the opening hook to captions, sound effects, transitions and the final frame.",
    tag: "SHORTS • REELS • TIKTOK",
    icon: Smartphone,
    visual: "shorts",
  },
  {
    number: "05",
    title: "YouTube Channel Management",
    description:
      "Take the editing burden off your shoulders with end-to-end YouTube support including uploads, thumbnails, optimization and content management.",
    tag: "YOUTUBE • SEO • MANAGEMENT",
    icon: PlaySquare,
    visual: "youtube",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  const current = services[active];

  return (
    <section id="services" className="services-section">

      {/* Background decoration */}
      <div className="services-bg-number">
        05
      </div>

      <div className="services-container">

        {/* ================= HEADER ================= */}

        <motion.div
          className="services-heading"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="section-eyebrow">
            <span />
            WHAT WE DO
          </div>

          <h2>
            Everything your
            <br />
            content <span>needs.</span>
          </h2>

          <p>
            From raw footage to the final upload,
            we help creators turn ideas into content
            worth watching.
          </p>

        </motion.div>


        {/* ================= MAIN ================= */}

        <div className="services-layout">

          {/* LEFT SERVICE LIST */}

          <div className="services-list">

            {services.map((service, index) => {

              const Icon = service.icon;
              const isActive = active === index;

              return (
                <motion.div
                  key={service.number}
                  className={`service-item ${
                    isActive ? "active" : ""
                  }`}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                >

                  <div className="service-number">
                    {service.number}
                  </div>

                  <div className="service-title-area">

                    <div className="service-icon-mobile">
                      <Icon size={17} />
                    </div>

                    <h3>
                      {service.title}
                    </h3>

                  </div>

                  <motion.div
                    className="service-arrow"
                    animate={{
                      rotate: isActive ? 45 : 0,
                      scale: isActive ? 1 : 0.9,
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>


                  {/* Mobile description */}

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="service-mobile-description"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                      >
                        <p>
                          {service.description}
                        </p>

                        <span>
                          {service.tag}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>


          {/* RIGHT VISUAL */}

          <div className="services-visual-wrapper">

            <AnimatePresence mode="wait">

              <motion.div
                key={current.visual}
                className="services-visual"
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: -15,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* Visual heading */}

                <div className="visual-top">

                  <div>
                    <span>
                      NOW EDITING
                    </span>

                    <strong>
                      {current.number}
                    </strong>
                  </div>

                  <div className="visual-status">
                    <span />
                    LIVE
                  </div>

                </div>


                {/* Dynamic visual */}

                <ServiceVisual
                  type={current.visual}
                />


                {/* Visual information */}

                <div className="visual-bottom">

                  <div>
                    <span>
                      {current.tag}
                    </span>

                    <h3>
                      {current.title}
                    </h3>
                  </div>

                  <p>
                    {current.description}
                  </p>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================
   SERVICE VISUAL
========================================= */

function ServiceVisual({ type }) {

  if (type === "timeline") {
    return (
      <div className="service-graphic timeline-graphic">

        <div className="graphic-screen">

          <div className="graphic-video">

            <div className="graphic-video-text">
              <span>
                STORY
              </span>

              <strong>
                FRAME
                <br />
                BY FRAME
              </strong>
            </div>

            <motion.div
              className="graphic-play"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              ▶
            </motion.div>

          </div>

          <div className="graphic-timeline">

            <div className="graphic-track">
              <span />
              <span />
              <span />
            </div>

            <div className="graphic-track second">
              <span />
              <span />
              <span />
              <span />
            </div>

            <motion.div
              className="graphic-playhead"
              animate={{
                left: ["5%", "93%", "5%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

          </div>

        </div>

        <div className="graphic-floating-tag">
          24 FPS
        </div>

      </div>
    );
  }


  if (type === "podcast") {
    return (
      <div className="service-graphic podcast-graphic">

        <div className="podcast-frame">

          <div className="podcast-person one">
            <div className="person-head" />
            <div className="person-body" />
          </div>

          <div className="podcast-person two">
            <div className="person-head" />
            <div className="person-body" />
          </div>

          <div className="podcast-center">
            <div className="podcast-mic">
              🎙
            </div>

            <strong>
              THE
              <br />
              CONVERSATION
            </strong>
          </div>

        </div>

        <div className="podcast-wave">

          {Array.from({
            length: 34,
          }).map((_, i) => (

            <motion.span
              key={i}
              animate={{
                height: [
                  `${10 + (i % 5) * 4}px`,
                  `${22 + (i % 8) * 5}px`,
                  `${10 + (i % 5) * 4}px`,
                ],
              }}
              transition={{
                duration:
                  0.8 + (i % 4) * 0.12,
                repeat: Infinity,
              }}
            />

          ))}

        </div>

      </div>
    );
  }


  if (type === "thumbnail") {
    return (
      <div className="service-graphic thumbnail-graphic">

        <motion.div
          className="thumbnail-card back"
          animate={{
            rotate: [-8, -4, -8],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          <span>
            BEFORE
          </span>
        </motion.div>

        <motion.div
          className="thumbnail-card main"
          animate={{
            rotate: [4, 1, 4],
            y: [5, -5, 5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >

          <div className="thumbnail-image">
            <div />
          </div>

          <div className="thumbnail-text">
            <small>
              YOUR NEXT
            </small>

            <strong>
              BIG
              <br />
              VIDEO
            </strong>
          </div>

          <div className="thumbnail-badge">
            CLICK
          </div>

        </motion.div>

        <div className="thumbnail-stats">
          <span>CTR</span>
          <strong>+42%</strong>
        </div>

      </div>
    );
  }


  if (type === "shorts") {
    return (
      <div className="service-graphic shorts-graphic">

        <div className="phone-frame">

          <div className="phone-top">
            <span />
            <small>
              00:17
            </small>
          </div>

          <div className="phone-video">

            <div className="shorts-text">
              STOP
              <br />
              <span>SCROLLING.</span>
            </div>

            <motion.div
              className="shorts-play"
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              ▶
            </motion.div>

          </div>

          <div className="phone-caption">
            This is your sign
            to start creating.
          </div>

        </div>


        <motion.div
          className="shorts-speed"
          animate={{
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          0.5x → 1x → 1.5x
        </motion.div>

      </div>
    );
  }


  return (
    <div className="service-graphic youtube-graphic">

      <div className="youtube-dashboard">

        <div className="dashboard-top">
          <span>
            CHANNEL ANALYTICS
          </span>

          <strong>
            THIS MONTH
          </strong>
        </div>

        <div className="dashboard-number">
          128.4K
          <small>
            views
          </small>
        </div>

        <div className="growth">
          <span>
            +38.7%
          </span>

          vs last month
        </div>

        <div className="growth-chart">

          <motion.div
            className="chart-line"
            animate={{
              y: [5, -4, 2, -12, -5, -18, -10],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {Array.from({
            length: 7,
          }).map((_, i) => (
            <span
              key={i}
              style={{
                height:
                  `${30 + i * 10}px`,
              }}
            />
          ))}

        </div>

      </div>

      <div className="youtube-floating">
        <PlaySquare size={16} />
        <span>
          CHANNEL
          <strong>
            GROWTH
          </strong>
        </span>
      </div>

    </div>
  );
}