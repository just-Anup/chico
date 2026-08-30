"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Play,
  X,
} from "lucide-react";


/*
|--------------------------------------------------------------------------
| PORTFOLIO DATA
|--------------------------------------------------------------------------
| Replace these values with your real projects later.
*/

const projects = [
  {
    id: 1,
    title: "Meesh & Dee",
    creator: "Meesh & Dee",
    category: "Long-Form Editing",
    description:
      "Dynamic creator-focused editing with strong pacing, reactions and storytelling.",
    youtubeUrl: "",
    accent: "purple",
  },

  {
    id: 2,
    title: "Reel Rejects",
    creator: "Reel Rejects",
    category: "Reaction Editing",
    description:
      "Fast-paced reaction editing with visual effects, comedic timing and engaging cuts.",
    youtubeUrl: "",
    accent: "dark",
  },

  {
    id: 3,
    title: "Creator Stories",
    creator: "Creator Project",
    category: "YouTube Editing",
    description:
      "A cinematic YouTube edit built around storytelling, pacing and visual rhythm.",
    youtubeUrl: "",
    accent: "purple",
  },

  {
    id: 4,
    title: "Talking Head",
    creator: "Educational Project",
    category: "Talking Head Editing",
    description:
      "Clean talking-head editing with punch-ins, captions, b-roll and audio polish.",
    youtubeUrl: "",
    accent: "light",
  },

  {
    id: 5,
    title: "Made To Move",
    creator: "Shorts Project",
    category: "Shorts / Reels",
    description:
      "Fast vertical content designed around retention, hooks and visual energy.",
    youtubeUrl: "",
    accent: "purple",
  },
];


export default function Work() {

  const [activeProject, setActiveProject] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);


  const nextProject = () => {

    setCurrentIndex((prev) =>
      prev === projects.length - 1
        ? 0
        : prev + 1
    );

  };


  const previousProject = () => {

    setCurrentIndex((prev) =>
      prev === 0
        ? projects.length - 1
        : prev - 1
    );

  };


  return (
    <section
      id="work"
      className="work-section"
    >

      {/* Background decoration */}

      <div className="work-background-text">
        WORK
      </div>

      <div className="work-glow" />


      <div className="work-container">


        {/* =====================================
            HEADER
        ===================================== */}

        <motion.div
          className="work-header"

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

          <div>

            <div className="section-eyebrow work-eyebrow">
              <span />
              SELECTED WORK
            </div>


            <h2>
              Check out
              <br />
              our <span>work.</span>
            </h2>

          </div>


          <div className="work-header-right">

            <p>
              A collection of projects we've
              helped shape, edit and bring to life.
            </p>


            <div className="work-counter">

              <strong>
                {String(currentIndex + 1).padStart(2, "0")}
              </strong>

              <span>
                /
              </span>

              <span>
                {String(projects.length).padStart(2, "0")}
              </span>

            </div>

          </div>

        </motion.div>


        {/* =====================================
            PORTFOLIO SLIDER
        ===================================== */}

        <div className="work-slider-wrapper">

          <motion.div
            className="work-slider"

            drag="x"

            dragConstraints={{
              left: -500,
              right: 0,
            }}

            dragElastic={0.12}
          >

            {projects.map((project, index) => (

              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={() =>
                  setActiveProject(project)
                }
              />

            ))}

          </motion.div>

        </div>


        {/* =====================================
            CONTROLS
        ===================================== */}

        <div className="work-controls">

          <div className="work-drag-label">

            <motion.span
              animate={{
                x: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              ←
            </motion.span>

            DRAG TO EXPLORE

          </div>


          <div className="work-arrows">

            <button
              onClick={previousProject}
              aria-label="Previous project"
            >
              <ArrowLeft size={18} />
            </button>


            <button
              onClick={nextProject}
              aria-label="Next project"
            >
              <ArrowRight size={18} />
            </button>

          </div>

        </div>


        {/* =====================================
            BOTTOM CTA
        ===================================== */}

        <motion.div
          className="work-cta"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <div>

            <span>
              LIKE WHAT YOU SEE?
            </span>

            <h3>
              Your project could be next.
            </h3>

          </div>


          <a
            href="/contact"
            className="work-cta-button"
          >

            Start a Project

            <ArrowUpRight size={18} />

          </a>

        </motion.div>

      </div>


      {/* =====================================
          VIDEO MODAL
      ===================================== */}

      <AnimatePresence>

        {activeProject && (

          <VideoModal
            project={activeProject}
            onClose={() =>
              setActiveProject(null)
            }
          />

        )}

      </AnimatePresence>

    </section>
  );
}


/*
|--------------------------------------------------------------------------
| PROJECT CARD
|--------------------------------------------------------------------------
*/

function ProjectCard({
  project,
  index,
  onOpen,
}) {

  return (

    <motion.article
      className="project-card"

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
        amount: 0.2,
      }}

      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}

      whileHover={{
        y: -10,
      }}
    >

      {/* Video visual */}

      <div
        className={`project-visual project-${project.accent}`}
      >

        {/* Decorative frame */}

        <div className="project-grid" />


        {/* Fake video composition */}

        <div className="project-scene">

          <div className="scene-shape shape-one" />

          <div className="scene-shape shape-two" />

          <div className="scene-shape shape-three" />


          <div className="scene-content">

            <span>
              {project.category}
            </span>

            <strong>

              {project.title
                .split(" ")
                .slice(0, 2)
                .join(" ")
              }

            </strong>

          </div>

        </div>


        {/* Play button */}

        <motion.button
          className="project-play"

          onClick={onOpen}

          whileHover={{
            scale: 1.12,
          }}

          whileTap={{
            scale: 0.95,
          }}

          aria-label={`Play ${project.title}`}
        >

          <Play
            size={19}
            fill="currentColor"
          />

        </motion.button>


        {/* Number */}

        <div className="project-number">

          {String(index + 1).padStart(2, "0")}

        </div>


        {/* Corner label */}

        <div className="project-type">

          <span />

          VIDEO

        </div>

      </div>


      {/* Project information */}

      <div className="project-info">

        <div>

          <span>
            {project.category}
          </span>

          <h3>
            {project.title}
          </h3>

          <p>
            {project.creator}
          </p>

        </div>


        <button
          className="project-open"
          onClick={onOpen}
          aria-label={`Open ${project.title}`}
        >

          <ArrowUpRight size={18} />

        </button>

      </div>

    </motion.article>
  );
}


/*
|--------------------------------------------------------------------------
| VIDEO MODAL
|--------------------------------------------------------------------------
*/

function VideoModal({
  project,
  onClose,
}) {

  const hasVideo =
    project.youtubeUrl &&
    project.youtubeUrl.trim() !== "";


  return (

    <motion.div
      className="video-modal-overlay"

      initial={{
        opacity: 0,
      }}

      animate={{
        opacity: 1,
      }}

      exit={{
        opacity: 0,
      }}

      onClick={onClose}
    >

      <motion.div
        className="video-modal"

        initial={{
          opacity: 0,
          scale: 0.9,
          y: 30,
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
          duration: 0.35,
        }}

        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* Close */}

        <button
          className="video-modal-close"
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={20} />
        </button>


        {/* Video */}

        <div className="video-frame">

          {hasVideo ? (

            <iframe
              src={convertToEmbedUrl(
                project.youtubeUrl
              )}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

          ) : (

            <div className="video-placeholder">

              <div className="video-placeholder-icon">

                <Play
                  size={24}
                  fill="currentColor"
                />

              </div>

              <span>
                VIDEO PREVIEW
              </span>

              <strong>
                Add your YouTube URL
              </strong>

              <p>
                Replace the empty
                <code>youtubeUrl</code>
                value in the project data.
              </p>

            </div>

          )}

        </div>


        {/* Modal information */}

        <div className="video-modal-info">

          <div>

            <span>
              {project.category}
            </span>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.creator}
            </p>

          </div>


          <a
            href={
              hasVideo
                ? project.youtubeUrl
                : "#"
            }
            target={
              hasVideo
                ? "_blank"
                : undefined
            }
            rel={
              hasVideo
                ? "noopener noreferrer"
                : undefined
            }
            className={
              `modal-youtube-link ${
                !hasVideo
                  ? "disabled"
                  : ""
              }`
            }
          >

            Watch on YouTube

            <ArrowUpRight size={17} />

          </a>

        </div>

      </motion.div>

    </motion.div>
  );
}


/*
|--------------------------------------------------------------------------
| YOUTUBE URL HELPER
|--------------------------------------------------------------------------
*/

function convertToEmbedUrl(url) {

  if (!url) {
    return "";
  }

  try {

    const parsed =
      new URL(url);

    if (
      parsed.hostname.includes(
        "youtu.be"
      )
    ) {

      return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;

    }

    if (
      parsed.hostname.includes(
        "youtube.com"
      )
    ) {

      const videoId =
        parsed.searchParams.get(
          "v"
        );

      if (videoId) {

        return `https://www.youtube.com/embed/${videoId}`;

      }
    }

  } catch (error) {

    console.error(
      "Invalid YouTube URL:",
      error
    );

  }

  return url;
}