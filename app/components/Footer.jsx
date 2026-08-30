"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
} from "lucide-react";

const services = [
  "Long-Form Editing",
  "Thumbnail Design",
  "Shorts / Reels",
  "Channel Management",
];

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "FAQ",
    href: "/#faq",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* =====================================
          TOP MARQUEE
      ===================================== */}

      <div className="footer-marquee">

        <motion.div
          className="footer-marquee-track"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          <span>
            EDIT. CREATE. REPEAT.
          </span>

          <i>✦</i>

          <span>
            EDIT. CREATE. REPEAT.
          </span>

          <i>✦</i>

          <span>
            EDIT. CREATE. REPEAT.
          </span>

          <i>✦</i>

          <span>
            EDIT. CREATE. REPEAT.
          </span>

          <i>✦</i>

        </motion.div>

      </div>


      <div className="footer-container">

        {/* =====================================
            HUGE CTA
        ===================================== */}

        <motion.div
          className="footer-big-cta"

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

          <div className="footer-cta-label">

            <span />

            GOT SOMETHING IN MIND?

          </div>


         <a
  href="/contact"
  className="footer-title-link magnetic-button"
>

            <h2>

              LET'S WORK

              <br />

              <span>
                TOGETHER
              </span>

            </h2>


            <div className="footer-title-arrow">

              <ArrowUpRight size={30} />

            </div>

          </a>

        </motion.div>


        {/* =====================================
            PURPLE LINE
        ===================================== */}

        <motion.div
          className="footer-line"

          initial={{
            scaleX: 0,
          }}

          whileInView={{
            scaleX: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
          }}
        />


        {/* =====================================
            FOOTER NAVIGATION
        ===================================== */}

        <div className="footer-main">

          {/* Brand */}

          <div className="footer-brand">

            <a
              href="/"
              className="footer-logo"
            >

              <div className="footer-logo-mark">
                V
              </div>

              <span>
                YOUR BRAND
              </span>

            </a>


            <p>
              Helping creators turn raw
              footage into content people
              actually want to watch.
            </p>


            <div className="footer-status">

              <span />

              AVAILABLE FOR PROJECTS

            </div>

          </div>


          {/* Pages */}

          <div className="footer-column">

            <h3>
              PAGES
            </h3>

            <div>

              {pages.map((page) => (

                <a
                  key={page.name}
                  href={page.href}
                >

                  {page.name}

                  <ArrowUpRight size={12} />

                </a>

              ))}

            </div>

          </div>


          {/* Services */}

          <div className="footer-column">

            <h3>
              SERVICES
            </h3>

            <div>

              {services.map(
                (service) => (

                  <a
                    key={service}
                    href="/#services"
                  >
                    {service}
                  </a>

                )
              )}

            </div>

          </div>


          {/* Social */}

          <div className="footer-column">

            <h3>
              FOLLOW ALONG
            </h3>
<div className="footer-socials">

  <a
    href="#"
    aria-label="Instagram"
  >
    Instagram
    <ArrowUpRight size={12} />
  </a>

  <a
    href="#"
    aria-label="YouTube"
  >
    YouTube
    <ArrowUpRight size={12} />
  </a>

</div>

          </div>

        </div>


        {/* =====================================
            BOTTOM
        ===================================== */}

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} YOUR BRAND.
            ALL RIGHTS RESERVED.
          </span>


          <span>
            MADE FOR CREATORS
          </span>


          <motion.a
            href="/"
            className="footer-back-top"

            whileHover={{
              y: -4,
            }}
          >

            BACK TO TOP

            <ArrowUpRight size={13} />

          </motion.a>

        </div>

      </div>

    </footer>
  );
}