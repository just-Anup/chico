"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Play,
} from "lucide-react";


/* =========================================================
   TESTIMONIAL DATA
========================================================= */
const testimonials = [
  {
    name: "TRC Reaction TV",
    subscribers: " 3.14k subscribers",
    logo: "/creator/TRC.jpg",

    image: "/testimony/testimony1.png",

    videoLink: "https://youtu.be/SYwW6IL85Ys",
  },
  {
    name: "Kris Kilins",
    subscribers: "46.3k subscribers",
    logo: "/creator/kris.jpg",

    image: "/testimony/testimony2.png",

    videoLink: "https://youtu.be/BHAKeN3sboA",
  },
  {
    name: "AlsoMij Reacts ",
    subscribers: "44.4k subscribers ",
    logo: "/creator/alsomj.jpg",

    image: "/testimony/testimony3.png",

    videoLink: "https://youtu.be/fDK7YHYrFBw",
  },

];


/* =========================================================
   TOP CREATOR CHANNELS

   Add as many creators as you want here.
========================================================= */

const channels = [
  {
    name: "AlsoMij Reacts",
    logo: "/creator/alsomj.jpg",
    url: "https://www.youtube.com/@mijreacts",
  },


  {
    name: "Studio Gek",
    logo: "/creator/studiogek.jpg",
    url: "https://www.youtube.com/@StudioGek",
  },
 

  
  {
    name: "kriskilins",
    logo: "/creator/kris.jpg",
    url: "https://www.youtube.com/@kriskilins",
  },
  
  
  
  {
    name: "Kaliwali",
    logo: "/creator/kaliwali.jpg",
    url: "https://www.youtube.com/@Kaliwali",
  },
  
  {
    name: "Cinema Gek",
    logo: "/creator/cinemagek.jpg",
    url: "https://www.youtube.com/@CinemaGek",
  },
    {
    name: "Meesh & Dee",
    logo: "/creator/meeshdee.jpg",
   url: "https://www.youtube.com/@MeeshAndDee",
  },
 
  {
    name: "Popcorn Roulette",
    logo: "/creator/popcorn.jpg",
    url: "https://www.youtube.com/@PopcornRoulette",
  },
  {
    name: "Certane",
    logo: "/creator/certane.jpg",
    url: "https://www.youtube.com/@Centane",
  },
  {
    name: "C X B",
    logo: "/creator/cxb.jpg",
    url: "https://www.youtube.com/channel/UCamK-IRB6jFXXjV2GJzf6vw",
  },
  {
    name: "TRC Reaction TV",
    logo: "/creator/TRC.jpg",
    url: "https://www.youtube.com/@TRCReactionsTV",
  },
  {
    name: "Meesh & Dee GL",
    logo: "/creator/meeshdeegl.jpg",
    url: "https://www.youtube.com/@MeeshAndDee",
  },
  {
    name: "dee Reax.jpg",
    logo: "/creator/dee Reax.jpg",
    url: "https://www.youtube.com/@dee_reax",
  },
  
];


/* =========================================================
   DUPLICATE CREATOR LIST

   This creates the seamless infinite loop.
========================================================= */

const infiniteChannels = [
  ...channels,
  ...channels,
];


export default function Testimonials() {

  const [active, setActive] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);


  const current = testimonials[active];


  const hasVideo =
    current.video &&
    current.video.trim() !== "";


  const goTo = (index) => {

    setIsPlaying(false);

    setActive(index);

  };


  const nextTestimonial = () => {

    goTo(
      active === testimonials.length - 1
        ? 0
        : active + 1
    );

  };


  const previousTestimonial = () => {

    goTo(
      active === 0
        ? testimonials.length - 1
        : active - 1
    );

  };


  const startVideo = () => {

    if (videoRef.current) {

      videoRef.current.play();

    }

  };


  return (
    <section
      id="testimonials"
      className="testimonials-section"
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="testimonials-glow" />

      <div className="testimonials-background-line" />


      <div className="testimonials-container">


        {/* =================================================
            CREATOR LOGO STRIP
        ================================================= */}

        <motion.div
          className="testimonial-channel-strip"

          initial={{
            opacity: 0,
            y: -35,
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
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* =================================================
              MOVING CREATOR TRACK
          ================================================= */}

          <div className="testimonial-channel-strip-inner">

            {infiniteChannels.map(
              (channel, index) => (

                <motion.a
                  key={`${channel.name}-${index}`}

                  href={channel.url}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="testimonial-channel"

                  whileHover={{
                    y: -8,
                    scale: 1.06,
                  }}

                  whileTap={{
                    scale: 0.94,
                  }}
                >

                  {/* ================= GLOWING ORBIT ================= */}

                  <span className="testimonial-channel-orbit" />

                  <span className="testimonial-channel-orbit-two" />


                  {/* ================= LOGO ================= */}

                  <span className="testimonial-channel-logo">

                    {channel.logo ? (

                      <img
                        src={channel.logo}
                        alt={channel.name}
                      />

                    ) : (

                      <span className="testimonial-channel-initial">
                        {channel.name.charAt(0)}
                      </span>

                    )}

                  </span>


                  {/* ================= CREATOR NAME ================= */}

                  <span className="testimonial-channel-info">

                    <strong>
                      {channel.name}
                    </strong>

                    <small>
                      Visit Channel
                      <ExternalLink size={9} />
                    </small>

                  </span>


                  {/* ================= BOTTOM LINE ================= */}

                  <span className="testimonial-channel-line" />

                </motion.a>

              )
            )}

          </div>


          {/* =================================================
              DECORATIVE MOVING LIGHT
          ================================================= */}

          <motion.div
            className="testimonial-channel-scan"

            animate={{
              x: [
                "-120%",
                "220%",
              ],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 2,
            }}
          />

        </motion.div>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="testimonials-main">


          {/* =================================================
              LEFT — COPY
          ================================================= */}

          <motion.div
            className="testimonials-copy"

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
              amount: 0.25,
            }}

            transition={{
              duration: 0.8,
            }}
          >

            <div className="testimonials-label">

              <span />

              TESTIMONIALS

            </div>


            <h2>

              Hear from the{" "}

              <span className="testimonials-underline">

                creators

                <motion.i

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
                    duration: 0.8,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

              </span>

            </h2>


            <p>
              Creators worldwide trust us across all
              kinds of content — reaction videos,
              vlogs, shorts/reels, talking head,
              and more.
            </p>


            <p className="testimonials-subcopy">
              Here's what they have to say!
            </p>


          </motion.div>


          {/* =================================================
              RIGHT — VIDEO CAROUSEL
          ================================================= */}

          <motion.div
            className="testimonials-showcase"

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
              duration: 0.8,
              delay: 0.15,
            }}
          >


            {/* =================================================
                CREATOR IDENTITY
            ================================================= */}

            <AnimatePresence mode="wait">

              <motion.div
                className="testimonial-creator"

                key={`creator-${active}`}

                initial={{
                  opacity: 0,
                  y: 12,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -12,
                }}

                transition={{
                  duration: 0.3,
                }}
              >

                <div className="testimonial-creator-logo">

                  {current.logo ? (

                    <img
                      src={current.logo}
                      alt={current.name}
                    />

                  ) : (

                    <span>
                      {current.name.charAt(0)}
                    </span>

                  )}

                </div>


                <div className="testimonial-creator-meta">

                  <strong>
                    {current.name}
                  </strong>

                  <span>
                    {current.subscribers}
                  </span>

                </div>

              </motion.div>

            </AnimatePresence>


       <div className="testimonial-video-row">

  {/* PREVIOUS */}
  <button
    className="testimonial-arrow"
    onClick={previousTestimonial}
    aria-label="Previous testimonial"
  >
    <ArrowLeft size={19} />
  </button>


  {/* IMAGE / VIDEO LINK */}
  <div className="testimonial-video-wrapper">

    <AnimatePresence mode="wait">

      <motion.a
        href={current.videoLink}
        target="_blank"
        rel="noopener noreferrer"

        className="testimonial-video testimonial-image-link"

        key={`testimonial-image-${active}`}

        initial={{
          opacity: 0,
          scale: 0.96,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        exit={{
          opacity: 0,
          scale: 0.97,
        }}

        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {/* IMAGE */}

        <img
          src={current.image}
          alt={`${current.name} testimonial`}
          className="testimonial-preview-image"
        />


        {/* DARK OVERLAY */}

        <div className="testimonial-image-overlay" />


        {/* PLAY BUTTON */}

        <span
          className="testimonial-play"
        >
          <Play
            size={26}
            fill="currentColor"
          />
        </span>


        {/* WATCH LABEL */}

        <span className="testimonial-watch-label">
          WATCH TESTIMONIAL
        </span>

      </motion.a>

    </AnimatePresence>

  </div>


  {/* NEXT */}

  <button
    className="testimonial-arrow"
    onClick={nextTestimonial}
    aria-label="Next testimonial"
  >
    <ArrowRight size={19} />
  </button>

</div>


            {/* =================================================
                DOTS
            ================================================= */}

            <div className="testimonial-dots">

              {testimonials.map(
                (item, index) => (

                  <button
                    key={`${item.name}-${index}`}

                    className={`testimonial-dot ${
                      index === active
                        ? "testimonial-dot-active"
                        : ""
                    }`}

                    onClick={() =>
                      goTo(index)
                    }

                    aria-label={`Go to testimonial ${index + 1}`}

                    aria-current={
                      index === active
                    }
                  />

                )
              )}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}