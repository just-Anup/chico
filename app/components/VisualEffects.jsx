"use client";

import { useEffect, useState } from "react";

export default function VisualEffects() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVisible, setCursorVisible] =
    useState(false);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });

      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    const handleScroll = () => {
      const scrollTop =
        window.scrollY;

      const documentHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) *
            100
          : 0;

      setScrollProgress(progress);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      {/* ===============================
          SCROLL PROGRESS
      =============================== */}

      <div
        className="global-scroll-progress"
        style={{
          width: `${scrollProgress}%`,
        }}
      />


      {/* ===============================
          CURSOR
      =============================== */}

      <div
        className={`premium-cursor ${
          cursorVisible
            ? "cursor-visible"
            : ""
        }`}
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      >
        <span />
      </div>


      {/* ===============================
          CURSOR GLOW
      =============================== */}

      <div
        className={`cursor-glow ${
          cursorVisible
            ? "cursor-glow-visible"
            : ""
        }`}
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      />


      {/* ===============================
          AMBIENT LIGHT
      =============================== */}

      <div className="global-ambient-light" />
    </>
  );
}