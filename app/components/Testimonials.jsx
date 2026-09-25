"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Play,
  X,
} from "lucide-react";


/* =========================================================
   TESTIMONIAL DATA
========================================================= */

const testimonials = [
  {
    name: "TRC Reaction TV",
    subscribers: "3.14k subscribers",
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
    name: "AlsoMij Reacts",
    subscribers: "44.4k subscribers",
    logo: "/creator/alsomj.jpg",
    image: "/testimony/testimony3.png",
    videoLink: "https://youtu.be/fDK7YHYrFBw",
  },
  {
    name: "Centane",
    subscribers: "112k subscribers",
    logo: "/creator/certane.jpg",
    image: "/testimony/testimony4.png",
    videoLink: "https://www.youtube.com/watch?v=a6KafazILBs&feature=youtu.be",
  },
  {
    name: "Dee Reax",
    subscribers: "6.4k subscribers",
    logo: "/creator/dee Reax.jpg",
    image: "/testimony/testimony5.png",
    videoLink: "https://www.youtube.com/watch?v=wbFl45P-jJA",
  },
];


/* =========================================================
   TOP CREATOR CHANNELS
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
    url: "https://www.youtube.com/@popcornroulettereactions",
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
    url: "https://www.youtube.com/@MeeshDeeGL",
  },

  {
    name: "dee Reax",
    logo: "/creator/dee Reax.jpg",
    url: "https://www.youtube.com/@dee_reax",
  },

  {
    name: "Gek POP",
    logo: "/creator/geekpop.jpg",
    url: "https://www.youtube.com/@GeK-Pop",
  },

  {
    name: "yogiiWaifu",
    logo: "/creator/yogii.jpg",
    url: "https://www.youtube.com/@YogiiWaifu",
  },

  {
    name: "Cara & prez Reacts",
    logo: "/creator/cara&prez.jpg",
    url: "https://www.youtube.com/@CaraPrezReacts",
  },
];


/* =========================================================
   DUPLICATE CREATOR LIST
========================================================= */

const infiniteChannels = [
  ...channels,
  ...channels,
];


/* =========================================================
   GET YOUTUBE EMBED URL
========================================================= */

function getYoutubeEmbedUrl(url) {

  try {

    const parsedUrl = new URL(url);

    let videoId = "";

    /* youtu.be/VIDEO_ID */

    if (parsedUrl.hostname.includes("youtu.be")) {

      videoId =
        parsedUrl.pathname.replace("/", "");

    }

    /* youtube.com/watch?v=VIDEO_ID */

    else if (
      parsedUrl.hostname.includes("youtube.com")
    ) {

      videoId =
        parsedUrl.searchParams.get("v");

      /* youtube.com/shorts/VIDEO_ID */

      if (
        !videoId &&
        parsedUrl.pathname.includes("/shorts/")
      ) {

        videoId =
          parsedUrl.pathname.split("/shorts/")[1];

      }

      /* youtube.com/embed/VIDEO_ID */

      if (
        !videoId &&
        parsedUrl.pathname.includes("/embed/")
      ) {

        videoId =
          parsedUrl.pathname.split("/embed/")[1];

      }

    }

    if (!videoId) {
      return "";
    }

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  } catch {

    return "";

  }

}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Testimonials() {

  const [active, setActive] = useState(0);

  /* Controls YouTube modal */

  const [isVideoOpen, setIsVideoOpen] =
    useState(false);


  const current =
    testimonials[active];


  /* =======================================================
     CHANGE TESTIMONIAL
  ======================================================= */

  const goTo = (index) => {

    setIsVideoOpen(false);

    setActive(index);

  };


  /* =======================================================
     NEXT
  ======================================================= */

  const nextTestimonial = () => {

    setIsVideoOpen(false);

    setActive(
      active === testimonials.length - 1
        ? 0
        : active + 1
    );

  };


  /* =======================================================
     PREVIOUS
  ======================================================= */

  const previousTestimonial = () => {

    setIsVideoOpen(false);

    setActive(
      active === 0
        ? testimonials.length - 1
        : active - 1
    );

  };


  /* =======================================================
     OPEN VIDEO
  ======================================================= */

  const openVideo = () => {

    setIsVideoOpen(true);

    document.body.style.overflow = "hidden";

  };


  /* =======================================================
     CLOSE VIDEO
  ======================================================= */

  const closeVideo = () => {

    setIsVideoOpen(false);

    document.body.style.overflow = "";

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

            <AnimatePresence
              mode="wait"
              initial={false}
            >

              <motion.div
                className="testimonial-creator"

                key={`creator-${active}`}

                initial={{
                  opacity: 0,
                  y: 10,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -10,
                }}

                transition={{
                  duration: 0.22,
                  ease: "easeOut",
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


            {/* =================================================
                VIDEO ROW
            ================================================= */}

            <div className="testimonial-video-row">


              {/* ================= PREVIOUS ================= */}

              <button
                type="button"
                className="testimonial-arrow"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >

                <ArrowLeft size={19} />

              </button>


              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="testimonial-video-wrapper">

                <AnimatePresence
                  mode="wait"
                  initial={false}
                >

                  <motion.button
                    type="button"

                    className="testimonial-video testimonial-image-link"

                    key={`testimonial-image-${active}`}

                    onClick={openVideo}

                    initial={{
                      opacity: 0,
                      x: 12,
                      scale: 0.985,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}

                    exit={{
                      opacity: 0,
                      x: -12,
                      scale: 0.985,
                    }}

                    transition={{
                      duration: 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >

                    {/* ================= IMAGE ================= */}

                    <img
                      src={current.image}
                      alt={`${current.name} testimonial`}
                      className="testimonial-preview-image"
                    />


                    {/* ================= DARK OVERLAY ================= */}

                    <div className="testimonial-image-overlay" />


                    {/* ================= PLAY BUTTON ================= */}

                    <span className="testimonial-play">

                      <Play
                        size={26}
                        fill="currentColor"
                      />

                    </span>


                    {/* ================= WATCH LABEL ================= */}

                    <span className="testimonial-watch-label">
                      WATCH TESTIMONIAL
                    </span>

                  </motion.button>

                </AnimatePresence>

              </div>


              {/* ================= NEXT ================= */}

              <button
                type="button"
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

                    type="button"

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


      {/* =========================================================
          YOUTUBE FLOATING VIDEO MODAL
      ========================================================= */}

      <AnimatePresence>

        {isVideoOpen && (

          <motion.div
            className="testimonial-video-modal"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 0.25,
            }}

            onMouseDown={(e) => {

              if (
                e.target === e.currentTarget
              ) {

                closeVideo();

              }

            }}
          >

            <motion.div
              className="testimonial-video-modal-content"

              initial={{
                opacity: 0,
                scale: 0.92,
                y: 25,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}

              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* ================= CLOSE BUTTON ================= */}

              <button
                type="button"
                className="testimonial-video-modal-close"
                onClick={closeVideo}
                aria-label="Close video"
              >

                <X size={24} />

              </button>


              {/* ================= YOUTUBE ================= */}

              <iframe
                src={getYoutubeEmbedUrl(
                  current.videoLink
                )}

                title={`${current.name} testimonial`}

                className="testimonial-youtube-frame"

                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share
                "

                allowFullScreen
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}