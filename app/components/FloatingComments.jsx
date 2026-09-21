"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/* =========================================================
   SAME COMMENT IMAGE — REUSED 20 TIMES
========================================================= */

const comments = Array.from(
  { length: 20 },
  (_, index) => ({
    id: index,
    image: "/comment.png",
  })
);


/* =========================================================
   SAFE FLOATING POSITIONS

   These are intentionally kept around the edges so
   the comments don't sit directly over your main content.
========================================================= */

const positions = [
  {
    top: "14%",
    left: "2%",
    rotate: -3,
  },

  {
    top: "19%",
    right: "2%",
    rotate: 3,
  },

  {
    top: "42%",
    left: "1%",
    rotate: -2,
  },

  {
    top: "48%",
    right: "1%",
    rotate: 2,
  },

  {
    top: "70%",
    left: "3%",
    rotate: -3,
  },

  {
    top: "73%",
    right: "3%",
    rotate: 3,
  },
];


/* =========================================================
   GET RANDOM POSITION
========================================================= */

function getRandomPosition(previousIndex = -1) {

  let index;

  do {
    index = Math.floor(
      Math.random() * positions.length
    );
  } while (
    index === previousIndex &&
    positions.length > 1
  );

  return {
    index,
    ...positions[index],
  };
}


/* =========================================================
   FLOATING COMMENT
========================================================= */

function FloatingComment({
  comment,
  position,
  delay,
}) {

  return (
    <motion.div
      className="floating-comment"
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
      }}

      initial={{
        opacity: 0,
        scale: 0.82,
        y: 25,
        rotate: position.rotate,
      }}

      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
        rotate: [
          position.rotate,
          position.rotate + 1,
          position.rotate,
        ],
      }}

      exit={{
        opacity: 0,
        scale: 0.86,
        y: -25,
      }}

      transition={{
        opacity: {
          duration: 0.55,
          delay,
        },

        scale: {
          duration: 0.65,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },

        y: {
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        },

        rotate: {
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        },
      }}
    >

      <div className="floating-comment-glow" />

      <img
        src={comment.image}
        alt="Creator comment"
        draggable="false"
      />

    </motion.div>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function FloatingComments() {

  const [visibleComments, setVisibleComments] =
    useState([]);

  const [cycle, setCycle] = useState(0);


  /* =======================================================
     CREATE INITIAL COMMENTS
  ======================================================= */

  useEffect(() => {

    const initial = [
      {
        ...comments[0],
        position: getRandomPosition(),
      },

      {
        ...comments[1],
        position: getRandomPosition(),
      },

      {
        ...comments[2],
        position: getRandomPosition(),
      },
    ];

    setVisibleComments(initial);

  }, []);


  /* =======================================================
     CHANGE COMMENTS EVERY FEW SECONDS
  ======================================================= */

  useEffect(() => {

    if (visibleComments.length === 0) {
      return;
    }


    const timer = setInterval(() => {

      setCycle((previous) => previous + 1);

    }, 5000);


    return () => {
      clearInterval(timer);
    };

  }, [visibleComments.length]);


  /* =======================================================
     CHANGE POSITIONS / COMMENTS
  ======================================================= */

  useEffect(() => {

    if (cycle === 0) {
      return;
    }


    setVisibleComments((current) => {

      const nextStart =
        (cycle * 3) % comments.length;


      const usedPositions = [];


      const next = Array.from(
        { length: 4 },
        (_, index) => {

          let position;

          do {

            position =
              getRandomPosition(
                usedPositions[
                  usedPositions.length - 1
                ]
              );

          } while (
            usedPositions.includes(
              position.index
            )
          );

          usedPositions.push(
            position.index
          );


          return {
            ...comments[
              (nextStart + index) %
              comments.length
            ],

            position,
          };

        }
      );


      return next;

    });

  }, [cycle]);


  return (
    <div
      className="floating-comments-layer"
      aria-hidden="true"
    >

      <AnimatePresence mode="sync">

        {visibleComments.map(
          (comment, index) => (

            <FloatingComment
              key={`${comment.id}-${cycle}`}
              comment={comment}
              position={comment.position}
              delay={index * 0.12}
            />

          )
        )}

      </AnimatePresence>

    </div>
  );
}