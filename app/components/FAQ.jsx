"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Plus,
} from "lucide-react";

const faqs = [
  {
    question: "What type of videos do you edit?",
    answer:
      "We work on a wide range of creator content including YouTube videos, reaction videos, educational content, talking-head videos, Shorts, Reels and other social media content.",
  },
  {
    question: "How do I send you my footage?",
    answer:
      "You can share your footage through your preferred cloud storage or file-sharing platform. Once we receive your files and requirements, our editing process begins.",
  },
  {
    question: "How long does an edit usually take?",
    answer:
      "Turnaround depends on the length and complexity of the project. Simple short-form content can be completed quickly, while larger long-form YouTube projects may require more time. We'll confirm the expected turnaround before starting.",
  },
  {
    question: "Can you follow my existing editing style?",
    answer:
      "Absolutely. You can provide references, previous videos, editing examples, brand guidelines or anything else that represents your style. We'll use those references to keep your content consistent.",
  },
  {
    question: "Do you also create thumbnails?",
    answer:
      "Yes. Thumbnail designing is one of our services. We focus on strong visual hierarchy, curiosity and click-friendly compositions while keeping the design consistent with your channel.",
  },
  {
    question: "Can you edit Shorts and Reels from my long videos?",
    answer:
      "Yes. We can identify strong moments from your long-form content and turn them into engaging vertical clips optimized for Shorts, Reels and other short-form platforms.",
  },
  {
    question: "Do you offer monthly editing packages?",
    answer:
      "Yes. We can work on individual projects or ongoing monthly content depending on your publishing schedule and requirements.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply tell us about your project through the Get in Touch page. Share your requirements, content type and any useful references. We'll review everything and get back to you with the next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(
      openIndex === index
        ? null
        : index
    );
  };

  return (
    <section
      id="faq"
      className="faq-section"
    >

      {/* =====================================
          BACKGROUND
      ===================================== */}

      <div className="faq-grid-background" />

      <motion.div
        className="faq-orb faq-orb-one"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="faq-orb faq-orb-two"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      <div className="faq-container">

        {/* =====================================
            HEADING
        ===================================== */}

        <motion.div
          className="faq-heading"

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

          <div className="faq-heading-watermark">
            FAQ
          </div>

          <div className="faq-heading-content">

            <div className="section-eyebrow faq-eyebrow">

              <span />

              GOT QUESTIONS?

            </div>


            <h2>

              We've got
              <br />

              <span>
                answers.
              </span>

            </h2>


            <p>

              Everything you need to know
              before sending your footage our way.

            </p>

          </div>

        </motion.div>


        {/* =====================================
            FAQ LIST
        ===================================== */}

        <div className="faq-list-section">

          <div className="faq-list-header">

            <span>
              FREQUENTLY ASKED QUESTIONS
            </span>

            <strong>
              {String(faqs.length).padStart(2, "0")}
            </strong>

          </div>


          <div className="faq-list">

            {faqs.map(
              (faq, index) => {

                const isOpen =
                  openIndex === index;

                return (
                  <motion.div
                    key={index}
                    className={`faq-item ${
                      isOpen
                        ? "faq-item-open"
                        : ""
                    }`}

                    initial={{
                      opacity: 0,
                      y: 25,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}

                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.05,
                    }}
                  >

                    <button
                      className="faq-question"
                      onClick={() =>
                        toggleFAQ(index)
                      }
                      aria-expanded={isOpen}
                    >

                      <div className="faq-question-left">

                        <span className="faq-number">
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        <h3>
                          {faq.question}
                        </h3>

                      </div>


                      <motion.div
                        className="faq-plus"

                        animate={{
                          rotate:
                            isOpen
                              ? 45
                              : 0,
                          background:
                            isOpen
                              ? "#8976FD"
                              : "transparent",
                          color:
                            isOpen
                              ? "#ffffff"
                              : "#8976FD",
                        }}

                        transition={{
                          duration: 0.25,
                        }}
                      >

                        <Plus size={18} />

                      </motion.div>

                    </button>


                    <AnimatePresence>

                      {isOpen && (

                        <motion.div
                          className="faq-answer"

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

                          transition={{
                            duration: 0.35,
                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          }}
                        >

                          <div className="faq-answer-inner">

                            <div className="faq-answer-line" />

                            <p>
                              {faq.answer}
                            </p>

                          </div>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </motion.div>
                );
              }
            )}

          </div>

        </div>


        {/* =====================================
            FAQ CTA
        ===================================== */}

        <motion.div
          className="faq-cta"

          initial={{
            opacity: 0,
            scale: 0.97,
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
            duration: 0.7,
          }}
        >

          <div className="faq-cta-circle" />

          <div className="faq-cta-content">

            <span>
              STILL HAVE QUESTIONS?
            </span>

            <h3>
              Let's talk
              <br />
              about your <em>project.</em>
            </h3>

          </div>


          <a
            href="/contact"
            className="faq-cta-button magnetic-button"
          >

            Get in Touch

            <ArrowUpRight size={18} />

          </a>

        </motion.div>

      </div>

    </section>
  );
}
