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
    title: "You Grow",
    description:
      "You get content that is built to hold attention, communicate clearly and keep your audience coming back.",
    icon: Sparkles,
  },
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

          <div className="about-intro-label">
            <span />
            A LITTLE ABOUT US
          </div>

          <h2>
            We handle the
            <br />
            <span>boring stuff.</span>
          </h2>

          <div className="about-intro-copy">

            <p className="about-big-copy">
              You focus on creating.
              We focus on everything that
              happens after you hit record.
            </p>

            <p>
              From the first cut to the final export,
              we turn raw footage into content that
              looks professional, feels intentional
              and keeps people watching.
            </p>

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


        {/* =====================================
            FINAL ABOUT CTA
        ===================================== */}

        <motion.div
          className="about-final-cta"
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="cta-decoration">
            <div />
            <div />
            <div />
          </div>

          <div className="about-cta-content">

            <span>
              READY WHEN YOU ARE
            </span>

            <h3>
              Got footage?
              <br />
              <strong>
                Let's make something.
              </strong>
            </h3>

            <p>
              Tell us what you're working on
              and we'll take it from there.
            </p>

            <a
              href="/contact"
              className="about-final-button"
            >
              Get in Touch
              <ArrowUpRight size={18} />
            </a>

          </div>

          <div className="cta-check-list">

            <div>
              <Check size={14} />
              Fast turnaround
            </div>

            <div>
              <Check size={14} />
              Creator-focused editing
            </div>

            <div>
              <Check size={14} />
              Unlimited creativity
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
