"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Send,
  Sparkles,
} from "lucide-react";

const services = [
  "Long-Form Video Editing",
  "Thumbnail Designing",
  "Shorts / Reel Video Editing",
  "YouTube Channel Management",
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="contact-page">

      {/* =====================================
          BACKGROUND
      ===================================== */}

      <div className="contact-grid" />

      <motion.div
        className="contact-orb contact-orb-one"
        animate={{
          x: [0, 70, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="contact-orb contact-orb-two"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      <div className="contact-container">

        {/* =====================================
            HERO
        ===================================== */}

        <motion.div
          className="contact-heading"
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="section-eyebrow contact-eyebrow">

            <span />

            LET'S CREATE SOMETHING

          </div>


          <h1>

            Have a project?

            <br />

            <span>
              Let's talk.
            </span>

          </h1>


          <p>
            Tell us what you're working on.
            We'll take care of the rest.
          </p>

        </motion.div>


        {/* =====================================
            CONTACT GRID
        ===================================== */}

        <div className="contact-layout">


          {/* =====================================
              LEFT — CONTACT INFO
          ===================================== */}

          <motion.aside
            className="contact-sidebar"

            initial={{
              opacity: 0,
              x: -40,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >

            <div className="contact-visual">

              <div className="contact-visual-grid" />

              <div className="contact-film">

                <motion.div
                  className="film-ring"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="film-ring film-ring-two"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="film-center">

                  <Sparkles size={25} />

                </div>

              </div>


              <div className="contact-visual-label">

                <span>
                  AVAILABLE
                </span>

                FOR NEW PROJECTS

              </div>


              <div className="contact-visual-number">
                24
              </div>

            </div>


            <div className="contact-details">

              <div className="contact-detail">

                <span>
                  EMAIL
                </span>

                <a href="mailto:hello@yourstudio.com">
                  hello@yourstudio.com
                  <ArrowUpRight size={15} />
                </a>

              </div>


              <div className="contact-detail">

                <span>
                  SOCIAL
                </span>

               <div className="contact-socials">

  <a
    href="#"
    aria-label="Instagram"
  >
    IG
  </a>

  <a
    href="#"
    aria-label="YouTube"
  >
    YT
  </a>

</div>

              </div>


              <div className="contact-response">

                <div className="contact-status">
                  <span />
                  ONLINE
                </div>

                <p>
                  Usually replying within
                  24 hours.
                </p>

              </div>

            </div>

          </motion.aside>


          {/* =====================================
              RIGHT — FORM
          ===================================== */}

          <motion.div
            className="contact-form-wrapper"

            initial={{
              opacity: 0,
              x: 40,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* Name */}

              <div className="contact-field">

                <label>
                  01 — YOUR NAME / COMPANY
                  <sup>*</sup>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  required
                />

              </div>


              {/* Email */}

              <div className="contact-field">

                <label>
                  02 — EMAIL ADDRESS
                  <sup>*</sup>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Where can we reach you?"
                  required
                />

              </div>


              {/* YouTube */}

              <div className="contact-field">

                <label>
                  03 — YOUTUBE / SOCIAL LINK
                </label>

                <input
                  type="url"
                  name="social"
                  placeholder="https://youtube.com/..."
                />

              </div>


              {/* Service */}

              <div className="contact-field">

                <label>
                  04 — WHAT DO YOU NEED?
                  <sup>*</sup>
                </label>


                <div className="contact-service-options">

                  {services.map(
                    (service) => (

                      <button
                        type="button"
                        key={service}

                        className={
                          selectedService === service
                            ? "service-selected"
                            : ""
                        }

                        onClick={() =>
                          setSelectedService(
                            service
                          )
                        }
                      >

                        {selectedService ===
                        service && (
                          <Check size={13} />
                        )}

                        {service}

                      </button>

                    )
                  )}

                </div>


                <input
                  type="hidden"
                  name="service"
                  value={selectedService}
                  required
                />

              </div>


              {/* Project */}

              <div className="contact-field">

                <label>
                  05 — TELL US ABOUT THE PROJECT
                  <sup>*</sup>
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your content, goals, timeline and anything else we should know..."
                  required
                />

              </div>


              {/* Submit */}

              <motion.button
  type="submit"
  className="contact-submit magnetic-button"

                whileHover={{
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.98,
                }}
              >

                <span>
                  Send Enquiry
                </span>

                <div>
                  <Send size={17} />
                </div>

              </motion.button>


              <p className="contact-form-note">

                By submitting this form,
                you agree to be contacted
                regarding your project.

              </p>

            </form>

          </motion.div>

        </div>


        {/* =====================================
            SUCCESS MESSAGE
        ===================================== */}

        <AnimatePresence>

          {submitted && (

            <motion.div
              className="contact-success"

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: 20,
              }}
            >

              <div>
                <Check size={20} />
              </div>

              <section>

                <strong>
                  Message received.
                </strong>

                <p>
                  Thanks for reaching out.
                  We'll get back to you soon.
                </p>

              </section>

            </motion.div>

          )}

        </AnimatePresence>


        {/* =====================================
            BOTTOM CTA
        ===================================== */}

        <div className="contact-bottom">

          <span>
            YOUR NEXT VIDEO STARTS HERE
          </span>

          <motion.div
            animate={{
              x: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            →
          </motion.div>

        </div>

      </div>

    </main>
  );
}