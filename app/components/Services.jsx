"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ArrowUpRight,
  Film,
  Image,
  Smartphone,
  PlaySquare,
} from "lucide-react";


/* =========================================================
   SERVICES
========================================================= */

const services = [

  /* =======================================================
     01 — LONG FORM
  ======================================================= */

  {
    number: "01",

    title:
      "Long-Form Video Editing",

    description:
      "Turn hours of raw footage into engaging videos with strong pacing, storytelling, sound design, motion graphics and a polished cinematic finish.",

    tag:
      "YOUTUBE • DOCUMENTARY • EDUCATION",

    icon: Film,

    visual:
      "video-carousel",

    videos: [

      {
        image:
          "/longVideo/Studiogeek.jpg",

        link:
          "https://www.youtube.com/watch?v=lbxRiMUDL6U&list=PLOStVJxe6EJFy59R_Z53hoRKs8xyawSRf&index=71",
      },
      {
        image:
          "/longVideo/kriskilins.jpg",

        link:
          "https://www.youtube.com/watch?v=wxPSOrhMOmA&t=1898s",
      },
      {
        image:
          "/longVideo/Kaliwali.jpg",

        link:
          "https://www.youtube.com/watch?v=Ok5NpkLWsqU&list=PLHLre5CJMz50&index=2",
      },
      {
        image:
          "/longVideo/Cinema Gek.jpg",

        link:
          "https://www.youtube.com/watch?v=TQ5ZtkPyGfA",
      },
      {
        image:
          "/longVideo/Meesh & Dee.jpg",

        link:
          "https://www.youtube.com/watch?v=6hcyUZMYTpk&list=PL9qbDV_vOetIHK4GlWV8FNReMCKXNQMB0&index=6",
      },
      {
        image:
          "/longVideo/Popcorn Roulette.jpg",

        link:
          "https://www.youtube.com/watch?v=E6kzFt5NvOA",
      },
      {
        image:
          "/longVideo/Certane.jpg",

        link:
          "https://www.youtube.com/watch?v=hUW3Vok2Ni0",
      },
      {
        image:
          "/longVideo/C X B.jpg",

        link:
          "https://www.youtube.com/watch?v=-MfmKBiI38g",
      },
      {
        image:
          "/longVideo/TRC Reaction TV.jpg",

        link:
          "https://youtu.be/ZCPSKcMT_RI?si=8pGTxyP5yJAgm3Ci",
      },
      {
        image:
          "/longVideo/Meesh & Dee GL.jpg",

        link:
          "https://www.youtube.com/watch?v=KCmklNyb9PE",
      },

     

    ],
  },


  /* =======================================================
     02 — THUMBNAIL
  ======================================================= */

  {
    number: "02",

    title:
      "Thumbnail Designing",

    description:
      "Eye-catching thumbnails built around strong visual hierarchy, curiosity and clear messaging to help your videos earn the click.",

    tag:
      "THUMBNAILS • CTR • DESIGN",

    icon: Image,

    visual:
      "thumbnail",
  },


  /* =======================================================
     03 — SHORT FORM
  ======================================================= */

  {
    number: "03",

    title:
      "Short-Form Video Editing",

    description:
      "Fast, engaging vertical edits designed for retention — from the opening hook to captions, sound effects, transitions and the final frame.",

    tag:
      "SHORTS • REELS • TIKTOK",

    icon: Smartphone,

    visual:
      "shorts-carousel",

    videos: [

  

      {
        image:
          "/shortVideo/md1.jpg",

        link:
          "https://youtube.com/shorts/_vtsWo1SNlg?si=TlDz2hKeDzfjU2mr",
      },

      {
        image:
          "/shortVideo/mdgl1.jpg",

        link:
          "https://youtube.com/shorts/w3yH_obm97U?si=P5Y7yhJ71kt7GH8u",
      },
          {
        image:
          "/shortVideo/gek1.jpg",

        link:
          "https://www.youtube.com/shorts/tUw3TzA5OC4",
      },
      {
        image:
          "/shortVideo/md2.jpg",

        link:
          "https://youtube.com/shorts/8FAN_682koc?si=OHxl13gRTBcwzzB7",
      },
      {
        image:
          "/shortVideo/mdgl2.jpg",

        link:
          "https://youtube.com/shorts/YaYdtzPd_4Q?si=j36Ea5Yi8TIn1r1j",
      },
         {
        image:
          "/shortVideo/ralax1.jpeg",

        link:
          "https://www.tiktok.com/@ralazreact/video/7628939046596709653",
      },
    
      {
        image:
          "/shortVideo/md3.jpg",

        link:
          "https://youtube.com/shorts/WVBNIXqOt9k?si=DOcJ7xG3TO-OKffp",
      },
      {
        image:
          "/shortVideo/mdgl3.jpg",

        link:
          "https://youtube.com/shorts/E6sYU57KQFo?si=JQpTAzQaUyVzIdWA",
      },
        {
        image:
          "/shortVideo/gek2.jpg",

        link:
          "https://www.youtube.com/shorts/oAToSFHuTuo",
      },
      {
        image:
          "/shortVideo/ralax3.jpeg",

        link:
          "https://www.tiktok.com/@ralazreact/video/7636584279715220757 ",
      },
      {
        image:
          "/shortVideo/gek4.jpg",

        link:
          "https://www.youtube.com/shorts/OY16k_005U0",
      },
        {
        image:
          "/shortVideo/ralax2.jpeg",

        link:
          "https://www.tiktok.com/@ralazreact/video/7635979258262867220",
      },
      {
        image:
          "/shortVideo/gek3.jpg",

        link:
          "https://www.youtube.com/shorts/6bren-ePsTM",
      },

    ],
  },


  /* =======================================================
     04 — CHANNEL MANAGEMENT
  ======================================================= */

  {
    number: "04",

    title:
      "YouTube Channel Management",

    description:
      "Take the editing burden off your shoulders with end-to-end YouTube support including uploads, thumbnails, optimization and content management.",

    tag:
      "YOUTUBE • SEO • MANAGEMENT",

    icon: PlaySquare,

    visual:
      "youtube",
  },


  /* =======================================================
     05 — CONTENT STRATEGY
  ======================================================= */

  {
    number: "05",

    title:
      "Content Strategy",

    description:
      "Turn hours of raw footage into engaging videos with strong pacing, storytelling, sound design, motion graphics and a polished cinematic finish.",

    tag:
      "YOUTUBE • DOCUMENTARY • EDUCATION",

    icon: PlaySquare,

    visual:
      "youtube",
  },

];


/* =========================================================
   MAIN SERVICES COMPONENT
========================================================= */

export default function Services() {

  const [
    active,
    setActive,
  ] = useState(0);


  /* =======================================================
     VIDEO INDEX FOR EACH CAROUSEL
  ======================================================= */

  const [
    videoIndexes,
    setVideoIndexes,
  ] = useState({

    0: 0,

    2: 0,

  });


  /* =======================================================
     CURRENT SERVICE
  ======================================================= */

  const current =
    services[active];


  /* =======================================================
     CURRENT VIDEO
  ======================================================= */

  const currentVideoIndex =
    videoIndexes[active] || 0;


  const currentVideo =
    current.videos?.[
      currentVideoIndex
    ];


  /* =======================================================
     NEXT VIDEO
  ======================================================= */

  const nextVideo = () => {

    if (!current.videos?.length) {
      return;
    }


    setVideoIndexes((prev) => ({

      ...prev,

      [active]:
        ((prev[active] || 0) + 1) %
        current.videos.length,

    }));

  };


  /* =======================================================
     PREVIOUS VIDEO
  ======================================================= */

  const previousVideo = () => {

    if (!current.videos?.length) {
      return;
    }


    setVideoIndexes((prev) => ({

      ...prev,

      [active]:
        ((prev[active] || 0) -
          1 +
          current.videos.length) %
        current.videos.length,

    }));

  };


  return (

    <section
      id="services"
      className="services-section"
    >


      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div className="services-bg-number">
        04
      </div>


      <div className="services-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="services-heading"

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


          <div className="section-eyebrow">

            <span />

            WHAT WE DO

          </div>


          <h2>

            Everything your

            <br />

            content{" "}

            <span>
              needs.
            </span>

          </h2>


          <p>

            From raw footage to the final upload,
            we help creators turn ideas into content
            worth watching.

          </p>


        </motion.div>



        {/* =================================================
            MAIN
        ================================================= */}

        <div className="services-layout">


          {/* =================================================
              LEFT SERVICE LIST
          ================================================= */}

          <div className="services-list">


            {services.map(
              (service, index) => {

                const Icon =
                  service.icon;

                const isActive =
                  active === index;


                return (

                  <motion.div

                    key={
                      service.number
                    }

                    className={`service-item ${
                      isActive
                        ? "active"
                        : ""
                    }`}

                    onMouseEnter={() =>
                      setActive(index)
                    }

                    onClick={() =>
                      setActive(index)
                    }


                    initial={{
                      opacity: 0,
                      x: -30,
                    }}

                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}

                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}

                    transition={{
                      duration: 0.6,
                      delay:
                        index * 0.08,
                    }}

                  >


                    {/* SERVICE NUMBER */}

                    <div className="service-number">

                      {service.number}

                    </div>



                    {/* SERVICE TITLE */}

                    <div className="service-title-area">

                      <div className="service-icon-mobile">

                        <Icon size={17} />

                      </div>


                      <h3>

                        {service.title}

                      </h3>

                    </div>



                    {/* SERVICE ARROW */}

                    <motion.div

                      className="service-arrow"

                      animate={{
                        rotate:
                          isActive
                            ? 45
                            : 0,

                        scale:
                          isActive
                            ? 1
                            : 0.9,
                      }}

                    >

                      <ArrowUpRight
                        size={18}
                      />

                    </motion.div>



                    {/* =================================================
                        MOBILE DESCRIPTION
                    ================================================= */}

                    <AnimatePresence>

                      {isActive && (

                        <motion.div

                          className="service-mobile-description"

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

                        >

                          <p>

                            {
                              service.description
                            }

                          </p>


                          <span>

                            {
                              service.tag
                            }

                          </span>

                        </motion.div>

                      )}

                    </AnimatePresence>


                  </motion.div>

                );

              }
            )}


          </div>



          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div className="services-visual-wrapper">


            <AnimatePresence mode="wait">


              <motion.div

                key={
                  current.visual
                }

                className="services-visual"

                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: -15,
                }}

                transition={{
                  duration: 0.45,

                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}

              >


                {/* =================================================
                    VISUAL HEADING
                ================================================= */}

                <div className="visual-top">


                  <div>

                    <span>

                      NOW EDITING

                    </span>


                    <strong>

                      {
                        current.number
                      }

                    </strong>

                  </div>


                  <div className="visual-status">

                    <span />

                    LIVE

                  </div>


                </div>



                {/* =================================================
                    DYNAMIC VISUAL
                ================================================= */}

                <ServiceVisual

                  type={
                    current.visual
                  }

                  video={
                    currentVideo
                  }

                  videoIndex={
                    currentVideoIndex
                  }

                  totalVideos={
                    current.videos?.length ||
                    0
                  }

                  onNext={
                    nextVideo
                  }

                  onPrevious={
                    previousVideo
                  }

                />



                {/* =================================================
                    VISUAL INFORMATION
                ================================================= */}

                <div className="visual-bottom">


                  <div>

                    <span>

                      {
                        current.tag
                      }

                    </span>


                    <h3>

                      {
                        current.title
                      }

                    </h3>

                  </div>


                  <p>

                    {
                      current.description
                    }

                  </p>


                </div>


              </motion.div>


            </AnimatePresence>


          </div>


        </div>


      </div>


    </section>

  );

}


/* =========================================================
   SERVICE VISUAL
========================================================= */

function ServiceVisual({

  type,

  video,

  videoIndex,

  totalVideos,

  onNext,

  onPrevious,

}) {


  /* =======================================================
     VIDEO CAROUSEL
  ======================================================= */

  if (
    type === "video-carousel" ||
    type === "shorts-carousel"
  ) {
    if (!video) {
      return null;
    }

    const handlePrevious = (event) => {
      event.preventDefault();
      event.stopPropagation();
      onPrevious?.();
    };

    const handleNext = (event) => {
      event.preventDefault();
      event.stopPropagation();
      onNext?.();
    };

    return (
      <div
        className={
          type === "shorts-carousel"
            ? "service-video-carousel shorts-video-carousel"
            : "service-video-carousel long-video-carousel"
        }
      >
        <div className="service-video-frame">
          <AnimatePresence mode="wait">
            <motion.a
              key={video.image}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="service-video-link"
              aria-label={`Watch ${type === "shorts-carousel" ? "short-form" : "long-form"} video`}
              initial={{
                opacity: 0,
                scale: 1.03,
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
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={video.image}
                alt="Video project"
                className="service-video-image"
                draggable="false"
              />

              <div className="service-video-overlay" />

              <motion.div
                className="service-video-play"
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span>▶</span>
              </motion.div>

              <div className="service-video-watch">
                WATCH PROJECT
              </div>
            </motion.a>
          </AnimatePresence>

          {totalVideos > 1 && (
            <>
              <button
                type="button"
                className="service-video-nav service-video-prev"
                onPointerDown={(event) => event.stopPropagation()}
                onClick={handlePrevious}
                aria-label="Previous video"
              >
                ←
              </button>

              <button
                type="button"
                className="service-video-nav service-video-next"
                onPointerDown={(event) => event.stopPropagation()}
                onClick={handleNext}
                aria-label="Next video"
              >
                →
              </button>

              <div className="service-video-counter">
                <span>
                  {String(videoIndex + 1).padStart(2, "0")}
                </span>

                <i>/</i>

                <span>
                  {String(totalVideos).padStart(2, "0")}
                </span>
              </div>
            </>
          )}
        </div>

        {totalVideos > 1 && (
          <div className="service-video-dots">
            {Array.from({ length: totalVideos }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to video ${index + 1}`}
                className={
                  index === videoIndex
                    ? "active"
                    : ""
                }
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();

                  if (index === videoIndex) {
                    return;
                  }

                  const difference =
                    index - videoIndex;

                  if (difference > 0) {
                    for (let i = 0; i < difference; i += 1) {
                      onNext?.();
                    }
                  } else {
                    for (let i = 0; i < Math.abs(difference); i += 1) {
                      onPrevious?.();
                    }
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>
    );
  }


  /* =======================================================
     ORIGINAL TIMELINE
  ======================================================= */

  if (type === "timeline") {

    return (

      <div className="service-graphic timeline-graphic">


        <div className="graphic-screen">


          <div className="graphic-video">


            <div className="graphic-video-text">

              <span>
                STORY
              </span>


              <strong>

                FRAME

                <br />

                BY FRAME

              </strong>

            </div>


            <motion.div

              className="graphic-play"

              animate={{
                scale: [
                  1,
                  1.1,
                  1,
                ],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
              }}

            >

              ▶

            </motion.div>


          </div>


          <div className="graphic-timeline">


            <div className="graphic-track">

              <span />
              <span />
              <span />

            </div>


            <div className="graphic-track second">

              <span />
              <span />
              <span />
              <span />

            </div>


            <motion.div

              className="graphic-playhead"

              animate={{
                left: [
                  "5%",
                  "93%",
                  "5%",
                ],
              }}

              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}

            />


          </div>


        </div>


        <div className="graphic-floating-tag">

          24 FPS

        </div>


      </div>

    );

  }



  /* =======================================================
     THUMBNAIL
  ======================================================= */

  if (type === "thumbnail") {

    return (

      <div className="service-graphic thumbnail-graphic">


        <motion.div

          className="thumbnail-card back"

          animate={{
            rotate: [
              -8,
              -4,
              -8,
            ],

            y: [
              -5,
              5,
              -5,
            ],
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
          }}

        >

          <span>
            BEFORE
          </span>

        </motion.div>



        <motion.div

          className="thumbnail-card main"

          animate={{
            rotate: [
              4,
              1,
              4,
            ],

            y: [
              5,
              -5,
              5,
            ],
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
          }}

        >


          <div className="thumbnail-image">

            <div />

          </div>


          <div className="thumbnail-text">


            <small>
              YOUR NEXT
            </small>


            <strong>

              BIG

              <br />

              VIDEO

            </strong>


          </div>


          <div className="thumbnail-badge">

            CLICK

          </div>


        </motion.div>


        <div className="thumbnail-stats">

          <span>
            CTR
          </span>

          <strong>
            +42%
          </strong>

        </div>


      </div>

    );

  }



  /* =======================================================
     ORIGINAL SHORTS VISUAL
  ======================================================= */

  if (type === "shorts") {

    return (

      <div className="service-graphic shorts-graphic">


        <div className="phone-frame">


          <div className="phone-top">

            <span />

            <small>
              00:17
            </small>

          </div>


          <div className="phone-video">


            <div className="shorts-text">

              STOP

              <br />

              <span>
                SCROLLING.
              </span>

            </div>


            <motion.div

              className="shorts-play"

              animate={{
                y: [
                  -8,
                  8,
                  -8,
                ],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
              }}

            >

              ▶

            </motion.div>


          </div>


          <div className="phone-caption">

            This is your sign
            <br />
            to start creating.

          </div>


        </div>



        <motion.div

          className="shorts-speed"

          animate={{
            x: [
              -10,
              10,
              -10,
            ],
          }}

          transition={{
            duration: 3,
            repeat: Infinity,
          }}

        >

          0.5x → 1x → 1.5x

        </motion.div>


      </div>

    );

  }



  /* =======================================================
     YOUTUBE
  ======================================================= */

  return (

    <div className="service-graphic youtube-graphic">


      <div className="youtube-dashboard">


        <div className="dashboard-top">


          <span>
            CHANNEL ANALYTICS
          </span>


          <strong>
            THIS MONTH
          </strong>


        </div>



        <div className="dashboard-number">

          128.4K

          <small>
            views
          </small>

        </div>



        <div className="growth">

          <span>
            +38.7%
          </span>

          vs last month

        </div>



        <div className="growth-chart">


          <motion.div

            className="chart-line"

            animate={{
              y: [
                5,
                -4,
                2,
                -12,
                -5,
                -18,
                -10,
              ],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}

          />


          {Array.from({
            length: 7,
          }).map(
            (_, i) => (

              <span

                key={i}

                style={{
                  height:
                    `${30 + i * 10}px`,
                }}

              />

            )
          )}


        </div>


      </div>



      <div className="youtube-floating">


        <PlaySquare
          size={16}
        />


        <span>

          CHANNEL

          <strong>
            GROWTH
          </strong>

        </span>


      </div>


    </div>

  );

}
/*
  MOBILE VISUAL NOTE:
  The service visual is intentionally kept in the same component so
  the selected Long-Form / Short-Form carousel also appears on mobile.
  Mobile visibility is controlled in globals.css.
*/
