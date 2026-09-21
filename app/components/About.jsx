"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clapperboard,
  MousePointer2,
  Sparkles,
  Upload,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "You Send",
    description:
      "Send us your raw footage, references, ideas and everything you want the final video to achieve.",
    icon: Upload,
  },
  {
    number: "02",
    title: "We Understand",
    description:
      "We study your content, audience and style so the edit feels like your brand — not a generic template.",
    icon: MousePointer2,
  },
  {
    number: "03",
    title: "We Edit",
    description:
      "Our editors shape the story with pacing, sound design, captions, motion graphics and visual polish.",
    icon: Clapperboard,
  },
  {
    number: "04",
    title: "We Grow Together",
    description:
      "You get content that is built to hold attention, communicate clearly and keep your audience coming back.",
    icon: Sparkles,
  },
];

const contentTypes = [
  "Anime",
  "Live-Action",
  "K-Dramas",
  "Thai Dramas",
  "K-Pop",
  "International Content",
];

const expertise = [
  "Video Editing",
  "Subtitles",
  "Audio",
  "Music",
  "Visual Effects",
];

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
    >
      {/* Background elements */}

      <div className="about-noise" />

      <div className="about-orb about-orb-one" />
      <div className="about-orb about-orb-two" />


      <div className="about-container">

        {/* =====================================
            ABOUT INTRO
        ===================================== */}

        <motion.div
          className="about-intro"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* =====================================
              LEFT SIDE — HEADING
          ===================================== */}

          <div className="about-intro-heading">

            <div className="about-intro-label">
              <span />
              A LITTLE ABOUT US
            </div>


            <h2>
              We handle the
              <br />
              <span>creative stuff.</span>
            </h2>


            <p className="about-heading-note">
              You focus on creating.
              <br />
              We focus on everything
              <br />
              after you hit record.
            </p>

          </div>


          {/* =====================================
              RIGHT SIDE — COMPANY DETAILS
          ===================================== */}

          <div className="about-intro-copy">

            {/* ================= MAIN DESCRIPTION ================= */}

            <p className="about-big-copy">
              Built by internet culture, for internet culture.{" "}
              <strong>2.5 years of experience</strong>{" "}
              specializing in reaction and entertainment
              content.
            </p>


            <p className="about-description">
              Over the 2.5 years "{" "}
              <strong>, we've edited 10,000+ videos</strong> across fandoms, reactions, and entertainment content. Whether it's anime, K-dramas, Thai GLs, movies, or K-pop, we know what keeps viewers hooked—and we edit with that in mind.
            </p>

{/* =====================================
    BIG STATS
===================================== */}

<div className="about-stats">

  {/* ================= LEFT COLUMN ================= */}

  <div className="about-stat-column">

    <div className="about-stat">

      <strong>
        2.5+
      </strong>

      <span>
        Years of Experience
      </span>

    </div>


    <div className="about-stat-divider-horizontal" />


    <div className="about-stat">

      <strong>
        10k+
      </strong>

      <span>
        Videos Edited
      </span>

    </div>

  </div>


  {/* ================= CENTER DIVIDER ================= */}

  <div className="about-stat-divider" />


  {/* ================= RIGHT COLUMN ================= */}

  <div className="about-stat-column">

    <div className="about-stat">

      <strong>
        100M+
      </strong>

      <span>
        Views Gained
      </span>

    </div>


    <div className="about-stat-divider-horizontal" />


    <div className="about-stat">

      <strong>
        1M+
      </strong>

      <span>
        Sub Gained
      </span>

    </div>

  </div>

</div>
            {/* =====================================
                CONTENT TYPES
            ===================================== */}

            <div className="about-detail-group">

              <span className="about-detail-label">
                CONTENT WE WORK WITH
              </span>


              <div className="about-tags">

                {contentTypes.map((item) => (

                  <span
                    key={item}
                    className="about-tag"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>


            {/* =====================================
                EXPERTISE
            ===================================== */}

            <div className="about-detail-group">

              <span className="about-detail-label">
                OUR EXPERTISE
              </span>


              <div className="about-expertise">

                {expertise.map((item) => (

                  <span
                    key={item}
                    className="about-expertise-item"
                  >

                    <Check size={14} />

                    {item}

                  </span>

                ))}

              </div>

            </div>


            {/* =====================================
                CTA
            ===================================== */}

            <a
              href="/contact"
              className="about-link"
            >
              Let's work together

              <ArrowUpRight size={17} />

            </a>

          </div>

        </motion.div>


        {/* =====================================
            PROCESS
        ===================================== */}

        <div className="process-section">

          <motion.div
            className="process-heading"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div className="section-eyebrow">
              <span />
              HOW IT WORKS
            </div>

            <h3>
              Simple process.
              <br />
              <span>Serious results.</span>
            </h3>

          </motion.div>


          <div className="process-line">

            <motion.div
              className="process-progress"
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            />

          </div>


          <div className="process-grid">

            {processSteps.map(
              (step, index) => {

                const Icon = step.icon;

                return (
                  <motion.div
                    className="process-card"
                    key={step.number}
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
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.6,
                      delay:
                        index * 0.12,
                    }}
                  >

                    <div className="process-top">

                      <span>
                        {step.number}
                      </span>

                      <div className="process-icon">
                        <Icon size={18} />
                      </div>

                    </div>


                    <h4>
                      {step.title}
                    </h4>


                    <p>
                      {step.description}
                    </p>

                  </motion.div>
                );

              }
            )}

          </div>

        </div>

      </div>

    </section>
  );
}