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

 const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  const formData = new FormData(form);

  const name = formData.get("name");
  const email = formData.get("email");
  const social = formData.get("social");
  const service = formData.get("service");
  const message = formData.get("message");

  const whatsappMessage = `
New CHICO Project Enquiry

Name / Company:
${name}

Email:
${email}

YouTube / Social:
${social || "Not provided"}

Service:
${service}

Project Details:
${message}
  `.trim();

  try {

    /* =========================================
       SEND ENQUIRY TO EMAIL
    ========================================= */

    const response = await fetch(
      "https://formsubmit.co/ajax/chicoyash@gmail.com",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          social,
          service,
          message,

          _subject: `New CHICO Project Enquiry from ${name}`,

          _template: "table",

          _captcha: "false",
        }),
      }
    );


    if (!response.ok) {
      throw new Error("Email submission failed");
    }


    /* =========================================
       OPEN WHATSAPP WITH SAME ENQUIRY
    ========================================= */

    const whatsappUrl =
      `https://wa.me/919873736263?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );


    /* =========================================
       SUCCESS MESSAGE
    ========================================= */

    setSubmitted(true);

    form.reset();

    setSelectedService("");


    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

  } catch (error) {

    console.error(
      "CONTACT FORM ERROR:",
      error
    );

    alert(
      "Something went wrong while sending your enquiry. Please try again."
    );

  }
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

  <a href="mailto:chicoyash@gmail.com">
    chicoyash@gmail.com
    <ArrowUpRight size={15} />
  </a>

</div>

<div className="contact-detail">

  <span>
    SOCIAL
  </span>

  <div className="contact-socials">

    <a
      href="https://www.instagram.com/chidori.yash"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      IG
    </a>

    <a
      href="https://discord.com/users/357101038173683722(ch1dor1)"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discord"
    >
      DS
    </a>

  </div>

</div>

<div className="contact-detail">

  <span>
    WHATSAPP
  </span>

  <a
    href="https://wa.me/919873736263"
    target="_blank"
    rel="noopener noreferrer"
  >
    +91 98737 36263
    <ArrowUpRight size={15} />
  </a>

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