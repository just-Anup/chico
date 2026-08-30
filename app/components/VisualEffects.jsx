"use client";

import { useEffect, useState } from "react";

export default function VisualEffects() {
  const [scrollProgress, setScrollProgress] =
    useState(0);

  useEffect(() => {
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
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
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
          AMBIENT LIGHT
      =============================== */}

      <div className="global-ambient-light" />
    </>
  );
}
