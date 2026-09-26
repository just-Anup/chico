"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
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
    videoLink:
      "https://youtu.be/SYwW6IL85Ys",
  },

  {
    name: "Kris Kilins",
    subscribers: "46.3k subscribers",
    logo: "/creator/kris.jpg",
    image: "/testimony/testimony2.png",
    videoLink:
      "https://youtu.be/BHAKeN3sboA",
  },

  {
    name: "AlsoMij Reacts",
    subscribers: "44.4k subscribers",
    logo: "/creator/alsomj.jpg",
    image: "/testimony/testimony3.png",
    videoLink:
      "https://youtu.be/fDK7YHYrFBw",
  },

  {
    name: "Centane",
    subscribers: "112k subscribers",
    logo: "/creator/certane.jpg",
    image: "/testimony/testimony4.png",
    videoLink:
      "https://www.youtube.com/watch?v=a6KafazILBs&feature=youtu.be",
  },

  {
    name: "Dee Reax",
    subscribers: "6.4k subscribers",
    logo: "/creator/dee Reax.jpg",
    image: "/testimony/testimony5.png",
    videoLink:
      "https://www.youtube.com/watch?v=wbFl45P-jJA",
  },

];


/* =========================================================
   CREATOR CHANNELS
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
    name: "Centane",
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
   DUPLICATE FOR INFINITE STRIP
========================================================= */

const infiniteChannels = [
  ...channels,
  ...channels,
];


/* =========================================================
   YOUTUBE URL → EMBED URL
========================================================= */

function getYoutubeEmbedUrl(url) {

  try {

    const parsedUrl = new URL(url);

    let videoId = "";


    if (
      parsedUrl.hostname.includes("youtu.be")
    ) {

      videoId =
        parsedUrl.pathname.replace("/", "");

    }

    else if (
      parsedUrl.hostname.includes("youtube.com")
    ) {

      videoId =
        parsedUrl.searchParams.get("v");


      if (
        !videoId &&
        parsedUrl.pathname.includes("/shorts/")
      ) {

        videoId =
          parsedUrl.pathname.split("/shorts/")[1];

      }


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


    return (
      `https://www.youtube.com/embed/${videoId}` +
      `?autoplay=1&rel=0`
    );

  }

  catch {

    return "";

  }

}


/* =========================================================
   RESPONSIVE HOOK
========================================================= */

function useViewport() {

  const [
    width,
    setWidth,
  ] = useState(1440);


  useEffect(() => {

    const update = () => {

      setWidth(window.innerWidth);

    };


    update();


    window.addEventListener(
      "resize",
      update
    );


    return () => {

      window.removeEventListener(
        "resize",
        update
      );

    };

  }, []);


  return {

    width,

    mobile:
      width <= 760,

    smallMobile:
      width <= 480,

    tablet:
      width <= 1050,

  };

}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Testimonials() {

  const [
    active,
    setActive,
  ] = useState(0);


  const [
    direction,
    setDirection,
  ] = useState(1);


  const [
    isVideoOpen,
    setIsVideoOpen,
  ] = useState(false);


  /* =======================================================
     CREATOR STRIP HOVER
  ======================================================= */

  const [
    creatorHovered,
    setCreatorHovered,
  ] = useState(false);


  const {
    mobile,
    smallMobile,
    tablet,
  } = useViewport();


  const current =
    testimonials[active];


  /* =======================================================
     CHANGE TESTIMONIAL
  ======================================================= */

  const goTo = (index) => {

    if (index === active) {
      return;
    }


    setDirection(
      index > active
        ? 1
        : -1
    );


    setIsVideoOpen(false);

    setActive(index);

  };


  /* =======================================================
     NEXT
  ======================================================= */

  const nextTestimonial = () => {

    setDirection(1);

    setIsVideoOpen(false);


    setActive(
      (active + 1) %
      testimonials.length
    );

  };


  /* =======================================================
     PREVIOUS
  ======================================================= */

  const previousTestimonial = () => {

    setDirection(-1);

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

    document.body.style.overflow =
      "hidden";

  };


  /* =======================================================
     CLOSE VIDEO
  ======================================================= */

  const closeVideo = () => {

    setIsVideoOpen(false);

    document.body.style.overflow =
      "";

  };


  /* =======================================================
     CLEANUP
  ======================================================= */

  useEffect(() => {

    return () => {

      document.body.style.overflow =
        "";

    };

  }, []);


  /* =======================================================
     SECTION
  ======================================================= */

  const sectionStyle = {

    position:
      "relative",

    width:
      "100%",

    minHeight:
      mobile
        ? "auto"
        : "780px",

    padding:
      mobile
        ? "55px 18px 80px"
        : "35px 4.5vw 90px",

    background:
      "#FFFFFF",

    overflow:
      "hidden",

  };


  /* =======================================================
     CREATOR STRIP
  ======================================================= */
const creatorStripStyle = {
  position: "relative",
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",

  /* Give the hover scale enough room */
  paddingTop: mobile ? "28px" : "38px",
  paddingBottom: mobile ? "25px" : "30px",

  /* Keep horizontal overflow hidden */
  overflowX: "hidden",

  /* Allow the enlarged creator to show vertically */
  overflowY: "visible",

  boxSizing: "border-box",
};

  /* =======================================================
     CREATOR TRACK
     
     IMPORTANT:
     We use CSS animation here instead of Framer Motion
     percentage animation.

     This gives us:
     - smooth infinite movement
     - proper pause on hover
     - no restart when leaving hover
     - seamless duplicated list
  ======================================================= */

  const creatorTrackStyle = {

    display:
      "flex",

    alignItems:
      "center",

    gap:
      mobile
        ? "28px"
        : "40px",

    width:
      "max-content",

    padding:
      mobile
        ? "15px 30px"
        : "10px 25px",

    animation:
      mobile
        ? "chicoCreatorSliderMobile 28s linear infinite"
        : "chicoCreatorSliderDesktop 38s linear infinite",

    animationPlayState:
      creatorHovered
        ? "paused"
        : "running",

    willChange:
      "transform",

  };


  /* =======================================================
     CREATOR ITEM
  ======================================================= */

  const creatorItemStyle = {

    position:
      "relative",

    flexShrink:
      0,

    display:
      "flex",

    flexDirection:
      "column",

    alignItems:
      "center",

    justifyContent:
      "center",

    width:
      mobile
        ? "76px"
        : "115px",

    textDecoration:
      "none",

    transition:
      "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",

  };


  /* =======================================================
     CREATOR CIRCLE
  ======================================================= */

  const creatorCircleStyle = {

    position:
      "relative",

    width:
      mobile
        ? "64px"
        : "108px",

    height:
      mobile
        ? "64px"
        : "108px",

    padding:
      mobile
        ? "4px"
        : "6px",

    borderRadius:
      "50%",

    background:
      "#FFFFFF",

    border:
      "1px solid rgba(137,118,253,0.12)",

    boxShadow:
      "0 0 0 5px rgba(137,118,253,0.035), 0 0 0 8px rgba(137,118,253,0.025)",

    transition:
      "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease, box-shadow 0.35s ease",

  };


  /* =======================================================
     CREATOR IMAGE
  ======================================================= */

  const creatorStripImageStyle = {

    width:
      "100%",

    height:
      "100%",

    borderRadius:
      "50%",

    objectFit:
      "cover",

    display:
      "block",

  };


  /* =======================================================
     CREATOR NAME
  ======================================================= */

  const creatorStripNameStyle = {

    marginTop:
      "7px",

    color:
      "#A3A3AB",

    fontSize:
      mobile
        ? "7px"
        : "10px",

    fontWeight:
      700,

    textAlign:
      "center",

    whiteSpace:
      "nowrap",

  };


  /* =======================================================
     MAIN CONTAINER
  ======================================================= */

  const containerStyle = {

    position:
      "relative",

    zIndex:
      2,

    width:
      "100%",

    maxWidth:
      "1400px",

    margin:
      "0 auto",

  };


  /* =======================================================
     MAIN GRID
  ======================================================= */

  const mainGridStyle = {

    display:
      "grid",

    gridTemplateColumns:
      tablet
        ? "1fr"
        : "0.85fr 1.15fr",

    alignItems:
      "center",

    gap:
      tablet
        ? "55px"
        : "70px",

    marginTop:
      mobile
        ? "80px"
        : "135px",

  };


  /* =======================================================
     LEFT TEXT
  ======================================================= */

  const copyStyle = {

    maxWidth:
      mobile
        ? "650px"
        : "530px",

  };


  /* =======================================================
     LABEL
  ======================================================= */

  const labelStyle = {

    display:
      "flex",

    alignItems:
      "center",

    gap:
      "9px",

    marginBottom:
      mobile
        ? "20px"
        : "26px",

    color:
      "#08080A",

    fontSize:
      mobile
        ? "10px"
        : "11px",

    fontWeight:
      800,

    letterSpacing:
      "0.19em",

  };


  const labelDotStyle = {

    width:
      "6px",

    height:
      "6px",

    borderRadius:
      "50%",

    background:
      "#8976FD",

  };


  /* =======================================================
     HEADING
  ======================================================= */

  const headingStyle = {

    margin:
      0,

    color:
      "#08080A",

    fontSize:
      smallMobile
        ? "44px"
        : mobile
          ? "52px"
          : "clamp(52px, 5vw, 74px)",

    lineHeight:
      "0.96",

    letterSpacing:
      "-0.06em",

    fontWeight:
      800,

  };


  /* =======================================================
     UNDERLINE
  ======================================================= */

  const underlineWrapperStyle = {

    position:
      "relative",

    display:
      "inline-block",

  };


  const underlineStyle = {

    position:
      "absolute",

    left:
      "-2px",

    right:
      "-2px",

    bottom:
      "0.03em",

    height:
      mobile
        ? "7px"
        : "9px",

    borderRadius:
      "2px",

    background:
      "rgba(137,118,253,0.48)",

    transformOrigin:
      "left center",

    zIndex:
      -1,

  };


  /* =======================================================
     DESCRIPTION
  ======================================================= */

  const descriptionStyle = {

    margin:
      mobile
        ? "28px 0 0"
        : "34px 0 0",

    maxWidth:
      "510px",

    color:
      "#777783",

    fontSize:
      mobile
        ? "15px"
        : "16px",

    lineHeight:
      "1.7",

  };


  const subTextStyle = {

    margin:
      "18px 0 0",

    color:
      "#08080A",

    fontSize:
      mobile
        ? "15px"
        : "16px",

    fontWeight:
      600,

  };


  /* =======================================================
     SHOWCASE
  ======================================================= */

  const showcaseStyle = {

    width:
      "100%",

    minWidth:
      "0",

  };


  /* =======================================================
     CREATOR HEADER
  ======================================================= */

  const creatorHeaderStyle = {

    display:
      "flex",

    alignItems:
      "center",

    gap:
      "14px",

    height:
      "58px",

    marginBottom:
      "16px",

  };


  const creatorLogoStyle = {

    width:
      "52px",

    height:
      "52px",

    flexShrink:
      0,

    borderRadius:
      "50%",

    overflow:
      "hidden",

    background:
      "#08080A",

  };


  const creatorMetaStyle = {

    display:
      "flex",

    flexDirection:
      "column",

    justifyContent:
      "center",

  };


  /* =======================================================
     VIDEO ROW
  ======================================================= */

  const videoRowStyle = {

    display:
      "flex",

    alignItems:
      "center",

    gap:
      mobile
        ? "8px"
        : "20px",

    width:
      "100%",

  };


  /* =======================================================
     VIDEO WRAPPER
  ======================================================= */

  const videoWrapperStyle = {

    position:
      "relative",

    flex:
      "1 1 auto",

    minWidth:
      "0",

    width:
      "100%",

    height:
      mobile
        ? "auto"
        : "410px",

    aspectRatio:
      mobile
        ? "16 / 9"
        : undefined,

    overflow:
      "hidden",

    borderRadius:
      mobile
        ? "15px"
        : "18px",

    background:
      "#08080A",

    boxShadow:
      "0 25px 65px rgba(8,8,10,0.16)",

  };


  /* =======================================================
     ARROW
  ======================================================= */

  const arrowStyle = {

    width:
      mobile
        ? "40px"
        : "48px",

    height:
      mobile
        ? "40px"
        : "48px",

    flexShrink:
      0,

    display:
      "flex",

    alignItems:
      "center",

    justifyContent:
      "center",

    border:
      "1px solid rgba(8,8,10,0.10)",

    borderRadius:
      "50%",

    background:
      "#F7F6FF",

    color:
      "#08080A",

    cursor:
      "pointer",

    zIndex:
      20,

  };


  /* =======================================================
     VIDEO BUTTON
  ======================================================= */

  const videoButtonStyle = {

    position:
      "absolute",

    inset:
      "0",

    width:
      "100%",

    height:
      "100%",

    padding:
      0,

    border:
      0,

    background:
      "#08080A",

    cursor:
      "pointer",

    overflow:
      "hidden",

  };


  const previewStyle = {

    position:
      "absolute",

    inset:
      "0",

    width:
      "100%",

    height:
      "100%",

    objectFit:
      "cover",

    display:
      "block",

  };


  /* =======================================================
     PLAY BUTTON
  ======================================================= */

  const playButtonStyle = {

    position:
      "absolute",

    left:
      "50%",

    top:
      "50%",

    transform:
      "translate(-50%, -50%)",

    width:
      mobile
        ? "62px"
        : "70px",

    height:
      mobile
        ? "62px"
        : "70px",

    display:
      "flex",

    alignItems:
      "center",

    justifyContent:
      "center",

    border:
      "0",

    borderRadius:
      "50%",

    background:
      "#8976FD",

    color:
      "#FFFFFF",

    boxShadow:
      "0 12px 35px rgba(137,118,253,0.35)",

    pointerEvents:
      "none",

  };


  /* =======================================================
     DOTS
  ======================================================= */

  const dotsStyle = {

    display:
      "flex",

    alignItems:
      "center",

    justifyContent:
      "center",

    gap:
      "10px",

    marginTop:
      "25px",

  };


  const dotStyle = {

    width:
      "10px",

    height:
      "10px",

    padding:
      0,

    border:
      "0",

    borderRadius:
      "50%",

    cursor:
      "pointer",

  };


  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <>

      {/* =====================================================
          LOCAL CSS FOR CREATOR SLIDER
          
          This stays inside this component.
          Nothing needs to be added to global.css.
      ===================================================== */}

      <style jsx>{`

        @keyframes chicoCreatorSliderDesktop {

          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }

        }


        @keyframes chicoCreatorSliderMobile {

          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }

        }

      `}</style>


      {/* =====================================================
          TESTIMONIAL SECTION
      ===================================================== */}

      <section
        id="testimonials"
        style={sectionStyle}
      >

        {/* ===================================================
            TOP CREATOR STRIP
        =================================================== */}

        <div
          style={creatorStripStyle}

          aria-label="Creators we work with"

          onMouseEnter={() => {
            setCreatorHovered(true);
          }}

          onMouseLeave={() => {
            setCreatorHovered(false);
          }}
        >

          <div
            style={creatorTrackStyle}
          >

            {infiniteChannels.map(
              (channel, index) => (

                <a
                  key={
                    `${channel.name}-${index}`
                  }

                  href={
                    channel.url
                  }

                  target="_blank"

                  rel="noopener noreferrer"

                  style={
                    creatorItemStyle
                  }

                  onMouseEnter={(e) => {

                    e.currentTarget.style.transform =
                      "translateY(-6px) scale(1.08)";

                  }}

                  onMouseLeave={(e) => {

                    e.currentTarget.style.transform =
                      "translateY(0) scale(1)";

                  }}
                >

                  {/* =================================================
                      CREATOR CIRCLE
                  ================================================= */}

                  <div
                    style={
                      creatorCircleStyle
                    }

                    onMouseEnter={(e) => {

                      e.currentTarget.style.borderColor =
                        "rgba(137,118,253,0.75)";

                      e.currentTarget.style.boxShadow =
                        "0 0 0 6px rgba(137,118,253,0.08), 0 0 30px rgba(137,118,253,0.35), 0 0 55px rgba(137,118,253,0.15)";

                      e.currentTarget.style.transform =
                        "scale(1.08)";

                    }}

                    onMouseLeave={(e) => {

                      e.currentTarget.style.borderColor =
                        "rgba(137,118,253,0.12)";

                      e.currentTarget.style.boxShadow =
                        "0 0 0 5px rgba(137,118,253,0.035), 0 0 0 8px rgba(137,118,253,0.025)";

                      e.currentTarget.style.transform =
                        "scale(1)";

                    }}
                  >

                    <img
                      src={
                        channel.logo
                      }

                      alt={
                        channel.name
                      }

                      draggable="false"

                      style={
                        creatorStripImageStyle
                      }
                    />

                  </div>


                  {/* =================================================
                      CREATOR NAME
                  ================================================= */}

                  <span
                    style={
                      creatorStripNameStyle
                    }
                  >

                    {channel.name}

                  </span>

                </a>

              )
            )}

          </div>

        </div>


        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          style={
            containerStyle
          }
        >

          <div
            style={
              mainGridStyle
            }
          >

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <motion.div
              style={
                copyStyle
              }

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
                amount: 0.2,
              }}

              transition={{
                duration: 0.7,

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            >

              {/* LABEL */}

              <div
                style={
                  labelStyle
                }
              >

                <span
                  style={
                    labelDotStyle
                  }
                />

                TESTIMONIALS

              </div>


              {/* HEADING */}

              <h2
                style={
                  headingStyle
                }
              >

                Hear from the

                <br />

                <span
                  style={
                    underlineWrapperStyle
                  }
                >

                  <span
                    style={{
                      position:
                        "relative",

                      zIndex:
                        1,
                    }}
                  >

                    creators

                  </span>

                  <span
                    style={
                      underlineStyle
                    }
                  />

                </span>

              </h2>


              {/* DESCRIPTION */}

              <p
                style={
                  descriptionStyle
                }
              >

                Creators worldwide trust us
                across all kinds of content —
                reaction videos, vlogs,
                shorts/reels, talking head,
                and more.

              </p>


              {/* SUBTEXT */}

              <p
                style={
                  subTextStyle
                }
              >

                Here's what they have to say!

              </p>

            </motion.div>


            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <motion.div
              style={
                showcaseStyle
              }

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
                amount: 0.2,
              }}

              transition={{
                duration: 0.75,

                delay: 0.1,

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            >

              {/* =================================================
                  CREATOR HEADER
              ================================================= */}

              <div
                style={
                  creatorHeaderStyle
                }
              >

                {/* CREATOR LOGO */}

                <AnimatePresence
                  mode="wait"
                  initial={false}
                >

                  <motion.div
                    key={
                      `logo-${active}`
                    }

                    style={
                      creatorLogoStyle
                    }

                    initial={{
                      opacity: 0,
                      scale: 0.75,
                    }}

                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}

                    exit={{
                      opacity: 0,
                      scale: 0.75,
                    }}

                    transition={{
                      duration:
                        0.25,

                      ease:
                        "easeOut",
                    }}
                  >

                    <img
                      src={
                        current.logo
                      }

                      alt={
                        current.name
                      }

                      draggable="false"

                      style={{
                        width:
                          "100%",

                        height:
                          "100%",

                        objectFit:
                          "cover",

                        display:
                          "block",
                      }}
                    />

                  </motion.div>

                </AnimatePresence>


                {/* CREATOR META */}

                <AnimatePresence
                  mode="wait"
                  initial={false}
                >

                  <motion.div
                    key={
                      `meta-${active}`
                    }

                    style={
                      creatorMetaStyle
                    }

                    initial={{
                      opacity: 0,

                      x:
                        direction > 0
                          ? 12
                          : -12,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    exit={{
                      opacity: 0,

                      x:
                        direction > 0
                          ? -12
                          : 12,
                    }}

                    transition={{
                      duration:
                        0.25,

                      ease:
                        "easeOut",
                    }}
                  >

                    <strong
                      style={{
                        color:
                          "#08080A",

                        fontSize:
                          mobile
                            ? "14px"
                            : "16px",

                        lineHeight:
                          "1.2",

                        fontWeight:
                          750,
                      }}
                    >

                      {current.name}

                    </strong>


                    <span
                      style={{
                        marginTop:
                          "5px",

                        color:
                          "#898993",

                        fontSize:
                          mobile
                            ? "12px"
                            : "13px",

                        lineHeight:
                          "1.2",
                      }}
                    >

                      {current.subscribers}

                    </span>

                  </motion.div>

                </AnimatePresence>

              </div>


              {/* =================================================
                  VIDEO + ARROWS
              ================================================= */}

              <div
                style={
                  videoRowStyle
                }
              >

                {/* LEFT ARROW */}

                <motion.button
                  type="button"

                  aria-label="Previous testimonial"

                  onClick={
                    previousTestimonial
                  }

                  style={
                    arrowStyle
                  }

                  whileHover={{
                    scale: 1.08,

                    background:
                      "#8976FD",

                    color:
                      "#FFFFFF",

                    borderColor:
                      "#8976FD",
                  }}

                  whileTap={{
                    scale: 0.92,
                  }}
                >

                  <ArrowLeft
                    size={
                      mobile
                        ? 18
                        : 20
                    }

                    strokeWidth={1.8}
                  />

                </motion.button>


                {/* VIDEO */}

                <div
                  style={
                    videoWrapperStyle
                  }
                >

                  <AnimatePresence
                    mode="sync"
                    initial={false}
                    custom={
                      direction
                    }
                  >

                    <motion.button
                      key={
                        `video-${active}`
                      }

                      type="button"

                      aria-label={
                        `Play ${current.name} testimonial`
                      }

                      onClick={
                        openVideo
                      }

                      custom={
                        direction
                      }

                      initial={{
                        opacity: 0,

                        x:
                          direction > 0
                            ? "105%"
                            : "-105%",

                        scale:
                          0.985,
                      }}

                      animate={{
                        opacity: 1,

                        x:
                          "0%",

                        scale:
                          1,
                      }}

                      exit={{
                        opacity: 0,

                        x:
                          direction > 0
                            ? "-105%"
                            : "105%",

                        scale:
                          0.985,
                      }}

                      transition={{
                        x: {
                          duration:
                            0.48,

                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        },

                        opacity: {
                          duration:
                            0.3,
                        },

                        scale: {
                          duration:
                            0.48,

                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        },
                      }}

                      style={
                        videoButtonStyle
                      }
                    >

                      <img
                        src={
                          current.image
                        }

                        alt={
                          `${current.name} testimonial`
                        }

                        draggable="false"

                        style={
                          previewStyle
                        }

                        onError={(e) => {

                          e.currentTarget.style.background =
                            "#16161A";

                        }}
                      />


                      {/* DARK OVERLAY */}

                      <div
                        style={{
                          position:
                            "absolute",

                          inset:
                            "0",

                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.10) 100%)",

                          pointerEvents:
                            "none",
                        }}
                      />


                      {/* PLAY */}

                      <motion.div
                        style={
                          playButtonStyle
                        }

                        whileHover={{
                          scale:
                            1.08,

                          background:
                            "#7A67F0",
                        }}

                        transition={{
                          duration:
                            0.2,
                        }}
                      >

                        <Play
                          size={
                            mobile
                              ? 22
                              : 26
                          }

                          fill="currentColor"

                          strokeWidth={0}
                        />

                      </motion.div>

                    </motion.button>

                  </AnimatePresence>

                </div>


                {/* RIGHT ARROW */}

                <motion.button
                  type="button"

                  aria-label="Next testimonial"

                  onClick={
                    nextTestimonial
                  }

                  style={
                    arrowStyle
                  }

                  whileHover={{
                    scale: 1.08,

                    background:
                      "#8976FD",

                    color:
                      "#FFFFFF",

                    borderColor:
                      "#8976FD",
                  }}

                  whileTap={{
                    scale: 0.92,
                  }}
                >

                  <ArrowRight
                    size={
                      mobile
                        ? 18
                        : 20
                    }

                    strokeWidth={1.8}
                  />

                </motion.button>

              </div>


              {/* =================================================
                  DOTS
              ================================================= */}

              <div
                style={
                  dotsStyle
                }

                role="tablist"

                aria-label="Testimonial navigation"
              >

                {testimonials.map(
                  (
                    testimonial,
                    index
                  ) => (

                    <motion.button
                      key={
                        testimonial.name
                      }

                      type="button"

                      role="tab"

                      aria-selected={
                        active === index
                      }

                      aria-label={
                        `Show ${testimonial.name} testimonial`
                      }

                      onClick={() =>
                        goTo(index)
                      }

                      style={{
                        ...dotStyle,

                        background:
                          active === index
                            ? "#8976FD"
                            : "#D8D6E3",

                        transform:
                          active === index
                            ? "scale(1.12)"
                            : "scale(1)",
                      }}

                      whileHover={{
                        scale:
                          1.25,
                      }}

                      whileTap={{
                        scale:
                          0.85,
                      }}
                    />

                  )
                )}

              </div>

            </motion.div>

          </div>

        </div>


        {/* =====================================================
            VIDEO MODAL
        ===================================================== */}

        <AnimatePresence>

          {isVideoOpen && (

            <motion.div
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
                duration:
                  0.25,
              }}

              onClick={
                closeVideo
              }

              style={{
                position:
                  "fixed",

                inset:
                  "0",

                zIndex:
                  99999,

                display:
                  "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                padding:
                  mobile
                    ? "15px"
                    : "40px",

                background:
                  "rgba(0,0,0,0.82)",

                backdropFilter:
                  "blur(12px)",

                WebkitBackdropFilter:
                  "blur(12px)",
              }}
            >

              <motion.div
                initial={{
                  opacity: 0,

                  scale:
                    0.94,

                  y:
                    20,
                }}

                animate={{
                  opacity: 1,

                  scale:
                    1,

                  y:
                    0,
                }}

                exit={{
                  opacity: 0,

                  scale:
                    0.94,

                  y:
                    20,
                }}

                transition={{
                  duration:
                    0.3,

                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}

                onClick={(e) =>
                  e.stopPropagation()
                }

                style={{
                  position:
                    "relative",

                  width:
                    "100%",

                  maxWidth:
                    "1100px",

                  aspectRatio:
                    "16 / 9",

                  background:
                    "#000000",

                  borderRadius:
                    mobile
                      ? "12px"
                      : "18px",

                  overflow:
                    "hidden",

                  boxShadow:
                    "0 35px 100px rgba(0,0,0,0.45)",
                }}
              >

                {/* CLOSE BUTTON */}

                <motion.button
                  type="button"

                  aria-label="Close video"

                  onClick={
                    closeVideo
                  }

                  whileHover={{
                    scale:
                      1.08,

                    background:
                      "rgba(137,118,253,0.9)",
                  }}

                  whileTap={{
                    scale:
                      0.92,
                  }}

                  style={{
                    position:
                      "absolute",

                    top:
                      mobile
                        ? "10px"
                        : "15px",

                    right:
                      mobile
                        ? "10px"
                        : "15px",

                    zIndex:
                      20,

                    width:
                      mobile
                        ? "38px"
                        : "44px",

                    height:
                      mobile
                        ? "38px"
                        : "44px",

                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "center",

                    border:
                      "1px solid rgba(255,255,255,0.2)",

                    borderRadius:
                      "50%",

                    background:
                      "rgba(0,0,0,0.55)",

                    color:
                      "#FFFFFF",

                    cursor:
                      "pointer",

                    backdropFilter:
                      "blur(10px)",
                  }}
                >

                  <X
                    size={
                      mobile
                        ? 18
                        : 21
                    }
                  />

                </motion.button>


                {/* YOUTUBE */}

                <iframe
                  src={
                    getYoutubeEmbedUrl(
                      current.videoLink
                    )
                  }

                  title={
                    `${current.name} testimonial`
                  }

                  allow="
                    autoplay;
                    encrypted-media;
                    picture-in-picture;
                    web-share
                  "

                  allowFullScreen

                  style={{
                    position:
                      "absolute",

                    inset:
                      "0",

                    width:
                      "100%",

                    height:
                      "100%",

                    border:
                      "0",
                  }}
                />

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </section>

    </>
  );
}