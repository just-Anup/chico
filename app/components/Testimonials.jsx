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
    name: "Reel Rejects",
    subscribers: "1.17M Subscribers",
    logo: "",
    video: "",
    poster: "",
    channelUrl: "https://www.youtube.com/",
  },

  {
    name: "Meesh & Dee",
    subscribers: "480K Subscribers",
    logo: "",
    video: "",
    poster: "",
    channelUrl: "https://www.youtube.com/",
  },

  {
    name: "MrBeast",
    subscribers: "515M Subscribers",
    logo: "",
    video: "",
    poster: "",
    channelUrl: "https://www.youtube.com/@MrBeast",
  },

  {
    name: "Creator Name",
    subscribers: "120K Subscribers",
    logo: "",
    video: "",
    poster: "",
    channelUrl: "https://www.youtube.com/",
  },

  {
    name: "Creator Name",
    subscribers: "95K Subscribers",
    logo: "",
    video: "",
    poster: "",
    channelUrl: "https://www.youtube.com/",
  },

  {
    name: "Creator Name",
    subscribers: "60K Subscribers",
    logo: "",
    video: "",
    poster: "",
    channelUrl: "https://www.youtube.com/",
  },
];


/* =========================================================
   TOP CHANNELS
   Add your actual channel logos here.

   Example:
   logo: "/testimonials/channels/reel-rejects.jpg"

   Put the image inside:
   public/testimonials/channels/
========================================================= */

const channels = [
  {
    name: "MrBeast",
    logo: "/mrbeast.png",
    url: "https://www.youtube.com/watch?v=82CX6WULNA0",
  },

  {
    name: "Ninja",
    logo: "/ninja.png",
    url: "https://www.youtube.com/@Ninja",
  },

  {
    name: "Cocomelon.webp",
    logo: "/Cocomelon.webp",
    url: "https://www.youtube.com/@Cocomelon",
  },

  {
    name: "Creator Name",
    logo: "",
    url: "https://www.youtube.com/",
  },

  {
    name: "Creator Name",
    logo: "",
    url: "https://www.youtube.com/",
  },

  {
    name: "Creator Name",
    logo: "",
    url: "https://www.youtube.com/",
  },

  {
    name: "Creator Name",
    logo: "",
    url: "https://www.youtube.com/",
  },
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
            CHANNEL LOGO STRIP
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

          <div className="testimonial-channel-strip-inner">

            {channels.map((channel, index) => (

              <motion.a
                key={`${channel.name}-${index}`}

                href={channel.url}

                target="_blank"

                rel="noopener noreferrer"

                className="testimonial-channel"

                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}

                whileTap={{
                  scale: 0.94,
                }}

                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * 0.07,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* Glowing orbit */}

                <span className="testimonial-channel-orbit" />

                <span className="testimonial-channel-orbit-two" />


                {/* Logo */}

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


                {/* Hover information */}

                <span className="testimonial-channel-info">

                  <strong>
                    {channel.name}
                  </strong>

                  <small>
                    Visit Channel
                    <ExternalLink size={9} />
                  </small>

                </span>


                {/* Bottom active line */}

                <span className="testimonial-channel-line" />

              </motion.a>

            ))}

          </div>


          {/* Decorative moving light */}

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


            {/* Creator identity */}

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


            {/* Video */}

            <div className="testimonial-video-row">

              <button
                className="testimonial-arrow"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={19} />
              </button>


              <div className="testimonial-video-wrapper">

                <AnimatePresence mode="wait">

                  <motion.div
                    className="testimonial-video"

                    key={`video-${active}`}

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

                    {hasVideo ? (

                      <>

                        <video
                          ref={videoRef}
                          src={current.video}
                          poster={
                            current.poster ||
                            undefined
                          }
                          controls
                          playsInline
                          preload="metadata"

                          onPlay={() =>
                            setIsPlaying(true)
                          }

                          onPause={() =>
                            setIsPlaying(false)
                          }

                          onEnded={() =>
                            setIsPlaying(false)
                          }
                        />


                        {!isPlaying && (

                          <button
                            className="testimonial-play"

                            onClick={startVideo}

                            aria-label={`Play ${current.name} testimonial`}
                          >

                            <Play
                              size={26}
                              fill="currentColor"
                            />

                          </button>

                        )}

                      </>

                    ) : (

                      <div className="testimonial-video-placeholder">

                        <div className="testimonial-placeholder-icon">

                          <Play
                            size={24}
                            fill="currentColor"
                          />

                        </div>

                        <span>
                          VIDEO TESTIMONIAL
                        </span>

                        <strong>
                          Add your video file
                        </strong>

                      </div>

                    )}

                  </motion.div>

                </AnimatePresence>

              </div>


              <button
                className="testimonial-arrow"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ArrowRight size={19} />
              </button>

            </div>


            {/* Dots */}

            <div className="testimonial-dots">

              {testimonials.map((item, index) => (

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

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}