"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Play,
} from "lucide-react";


/*
|--------------------------------------------------------------------------
| TESTIMONIAL DATA
|--------------------------------------------------------------------------
| To add a real testimonial:
|
| 1. Drop the video file in   public/testimonials/name.mp4
| 2. Drop the channel logo in public/testimonials/name.jpg
| 3. Fill in the fields below:
|
|      video  — "/testimonials/name.mp4"   (self-hosted mp4)
|      poster — "/testimonials/name-poster.jpg"  (optional still frame)
|      logo   — "/testimonials/name.jpg"   (optional, falls back to initials)
|
| Leave "video" empty and the card shows a placeholder instead.
*/

const testimonials = [
  {
    name: "Reel Rejects",
    subscribers: "1.17M Subscribers",
    logo: "",
    video: "",
    poster: "",
  },
  {
    name: "Meesh & Dee",
    subscribers: "480K Subscribers",
    logo: "",
    video: "",
    poster: "",
  },
  {
    name: "Creator Name",
    subscribers: "250K Subscribers",
    logo: "",
    video: "",
    poster: "",
  },
  {
    name: "Creator Name",
    subscribers: "120K Subscribers",
    logo: "",
    video: "",
    poster: "",
  },
  {
    name: "Creator Name",
    subscribers: "95K Subscribers",
    logo: "",
    video: "",
    poster: "",
  },
  {
    name: "Creator Name",
    subscribers: "60K Subscribers",
    logo: "",
    video: "",
    poster: "",
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

      {/* Background decoration */}

      <div className="testimonials-glow" />


      <div className="testimonials-container">


        {/* =====================================
            LEFT — COPY + STATS
        ===================================== */}

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
            TESTIMONIALS
          </div>


          <h2>
            Hear from the
            {" "}
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
            kinds of content — reaction videos, vlogs,
            shorts/reels, talking head, and more.
          </p>


          <p className="testimonials-subcopy">
            Here's what they have to say!
          </p>



        </motion.div>


        {/* =====================================
            RIGHT — VIDEO CAROUSEL
        ===================================== */}

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


          {/* Video + arrows */}

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
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === active}
              />

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}
