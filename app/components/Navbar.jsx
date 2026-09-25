"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const services = [
  "Long-Form Video Editing",
  "Thumbnail Designing",
  "Shorts/Reel Video Editing",
  "YouTube Channel Management",
  "Content Strategy ",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hover states
  const [navbarHover, setNavbarHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);
  const [ctaArrowHover, setCtaArrowHover] = useState(false);
  const [navArrowHover, setNavArrowHover] = useState(false);

  const [dropdownHover, setDropdownHover] = useState(null);

  // Responsive state
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  // Reduced motion
  const [reducedMotion, setReducedMotion] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  /* =====================================================
     RESPONSIVE / REDUCED MOTION
  ===================================================== */

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 900);
      setIsSmallMobile(window.innerWidth <= 500);
    };

    const checkMotion = () => {
      setReducedMotion(
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      );
    };

    checkScreen();
    checkMotion();

    window.addEventListener("resize", checkScreen);

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    motionQuery.addEventListener("change", checkMotion);

    return () => {
      window.removeEventListener(
        "resize",
        checkScreen
      );

      motionQuery.removeEventListener(
        "change",
        checkMotion
      );
    };
  }, []);

  /* =====================================================
     GO TO SERVICES
  ===================================================== */

  const goToServices = (e) => {
    if (pathname === "/") {
      e.preventDefault();

      const servicesSection =
        document.getElementById("services");

      if (servicesSection) {
        servicesSection.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }

      setMobileOpen(false);

      return;
    }

    e.preventDefault();

    router.push("/#services");

    setMobileOpen(false);
  };

  /* =====================================================
     COLORS
  ===================================================== */

  const purple = "#8976FD";
  const black = "#08080A";
  const white = "#FFFFFF";
  const lightPurple = "#F0EDFF";

  /* =====================================================
     NAVBAR
  ===================================================== */

  const navbarStyle = {
    position: "fixed",
    top: isSmallMobile ? "12px" : "18px",
    left: "50%",
    transform: "translateX(-50%)",

    width: isMobile
      ? "calc(100% - 28px)"
      : "calc(100% - 48px)",

    maxWidth: "1380px",

    zIndex: 1000,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: isSmallMobile
      ? "10px 10px 10px 14px"
      : "14px 18px 14px 22px",

    border: `1px solid ${
      navbarHover
        ? "rgba(137, 118, 253, 0.25)"
        : "rgba(10, 10, 10, 0.08)"
    }`,

    borderRadius: "100px",

    background: "rgba(255, 255, 255, 0.72)",

    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",

    boxShadow:
      "0 10px 40px rgba(0, 0, 0, 0.05)",

    transition: reducedMotion
      ? "none"
      : [
          "background 0.35s ease",
          "box-shadow 0.35s ease",
          "border-color 0.35s ease",
          "transform 0.35s ease",
        ].join(", "),
  };

  /* =====================================================
     LOGO
  ===================================================== */

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    color: black,
  };

  const logoMarkStyle = {
    width: isSmallMobile ? "35px" : "38px",
    height: isSmallMobile ? "35px" : "38px",

    borderRadius: "12px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: black,
    color: white,

    fontSize: "15px",
    fontWeight: 800,

    position: "relative",
    overflow: "hidden",

    flexShrink: 0,
  };

  const logoImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    position: "relative",
    zIndex: 2,
  };

  const logoPurpleCircleStyle = {
    position: "absolute",

    width: "18px",
    height: "18px",

    background: purple,
    borderRadius: "50%",

    right: "-5px",
    bottom: "-5px",

    zIndex: 1,
  };

  const logoTextStyle = {
    fontSize: isSmallMobile ? "15px" : "17px",
    fontWeight: 800,
    letterSpacing: "-0.04em",
  };

  /* =====================================================
     DESKTOP NAVIGATION
  ===================================================== */

  const navLinksStyle = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
    gap: "6px",
  };

  const navLinkStyle = {
    position: "relative",

    display: "flex",
    alignItems: "center",
    gap: "5px",

    padding: "10px 14px",

    borderRadius: "50px",

    color: "#17171A",
    textDecoration: "none",

    fontSize: "13px",
    fontWeight: 600,

    transition: reducedMotion
      ? "none"
      : "color 0.25s ease, background 0.25s ease",
  };

  /* =====================================================
     SERVICES DROPDOWN
  ===================================================== */

  const servicesWrapperStyle = {
    position: "relative",
  };

  const servicesDropdownStyle = {
    position: "absolute",

    top: "calc(100% + 15px)",
    left: "50%",

    width: "300px",

    transform: servicesHover
      ? "translateX(-50%) translateY(0)"
      : "translateX(-50%) translateY(8px)",

    padding: "10px",

    border: "1px solid rgba(0, 0, 0, 0.08)",
    borderRadius: "22px",

    background: "rgba(255, 255, 255, 0.92)",

    backdropFilter: "blur(25px)",
    WebkitBackdropFilter: "blur(25px)",

    boxShadow:
      "0 25px 70px rgba(0, 0, 0, 0.12)",

    opacity: servicesHover ? 1 : 0,

    visibility: servicesHover
      ? "visible"
      : "hidden",

    transition: reducedMotion
      ? "none"
      : [
          "opacity 0.25s ease",
          "transform 0.25s ease",
          "visibility 0.25s ease",
        ].join(", "),

    pointerEvents: servicesHover
      ? "auto"
      : "none",
  };

  const getDropdownItemStyle = (index) => {
    const active = dropdownHover === index;

    return {
      display: "block",

      padding: "14px 15px",

      borderRadius: "14px",

      color: active ? purple : black,

      background: active
        ? lightPurple
        : "transparent",

      textDecoration: "none",

      fontSize: "13px",
      fontWeight: 700,

      transform: active
        ? "translateX(5px)"
        : "translateX(0)",

      transition: reducedMotion
        ? "none"
        : [
            "background 0.25s ease",
            "color 0.25s ease",
            "transform 0.25s ease",
          ].join(", "),
    };
  };

  /* =====================================================
     CTA
  ===================================================== */

  const navCtaStyle = {
    display: isMobile ? "none" : "inline-flex",

    alignItems: "center",
    gap: "8px",

    padding: "12px 19px",

    borderRadius: "100px",

    background: ctaHover ? purple : black,
    color: white,

    fontSize: "13px",
    fontWeight: 700,

    textDecoration: "none",

    transform: ctaHover
      ? "translateY(-2px)"
      : "translateY(0)",

    boxShadow: ctaHover
      ? "0 12px 30px rgba(137, 118, 253, 0.28)"
      : "none",

    transition: reducedMotion
      ? "none"
      : [
          "transform 0.25s ease",
          "background 0.25s ease",
          "box-shadow 0.25s ease",
        ].join(", "),
  };

  const navCtaArrowStyle = {
    transition: reducedMotion
      ? "none"
      : "transform 0.25s ease",

    transform: ctaArrowHover
      ? "translate(3px, -3px)"
      : "translate(0, 0)",
  };

  /* =====================================================
     MOBILE MENU BUTTON
  ===================================================== */

  const mobileMenuButtonStyle = {
    width: "44px",
    height: "44px",

    border: 0,
    borderRadius: "50%",

    background: black,
    color: white,

    display: isMobile ? "flex" : "none",

    alignItems: "center",
    justifyContent: "center",

    cursor: "pointer",

    padding: 0,

    flexShrink: 0,
  };

  /* =====================================================
     MOBILE MENU
  ===================================================== */

  const mobileMenuStyle = {
    position: "fixed",

    inset: 0,

    zIndex: 900,

    background: "rgba(255, 255, 255, 0.97)",

    backdropFilter: "blur(25px)",
    WebkitBackdropFilter: "blur(25px)",

    padding: "120px 25px 40px",

    transform: mobileOpen
      ? "translateY(0)"
      : "translateY(-100%)",

    transition: reducedMotion
      ? "none"
      : "transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)",

    overflowY: "auto",
  };

  const mobileNavLinkStyle = {
    display: "flex",

    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",

    padding: "18px 0",

    borderBottom:
      "1px solid rgba(0, 0, 0, 0.08)",

    color: black,

    textDecoration: "none",

    fontSize: "clamp(25px, 7vw, 40px)",

    fontWeight: 800,

    letterSpacing: "-0.05em",
  };

  const mobileServicesStyle = {
    padding: "15px 0",
  };

  const getMobileServiceLinkStyle = (index) => ({
    display: "block",

    padding: "10px 0",

    color:
      dropdownHover === `mobile-${index}`
        ? purple
        : "#666",

    textDecoration: "none",

    fontSize: "15px",
    fontWeight: 600,

    transition: reducedMotion
      ? "none"
      : "color 0.25s ease",
  });

  const mobileContactButtonStyle = {
    display: "inline-flex",

    alignItems: "center",

    marginTop: "35px",

    padding: "15px 24px",

    borderRadius: "100px",

    background: purple,
    color: white,

    textDecoration: "none",

    fontWeight: 700,
  };

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav
        style={navbarStyle}
        onMouseEnter={() =>
          setNavbarHover(true)
        }
        onMouseLeave={() =>
          setNavbarHover(false)
        }
      >
        {/* ================= LOGO ================= */}

        <a
          href="/"
          style={logoStyle}
          onClick={() =>
            setMobileOpen(false)
          }
        >
          <div style={logoMarkStyle}>
            <img
              src="/logo.png"
              alt="Chico"
              style={logoImageStyle}
            />

            {/* Replacement for .logo-mark::after */}
            <span
              style={logoPurpleCircleStyle}
            />
          </div>

          <span style={logoTextStyle}>
            CHICO
          </span>
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div style={navLinksStyle}>
          {/* HOME */}

          <a
            href="/"
            style={{
              ...navLinkStyle,
              color:
                pathname === "/"
                  ? purple
                  : "#17171A",
            }}
          >
            Home
          </a>

          {/* ABOUT */}

          <Link
            href="/#about"
            style={navLinkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color =
                purple;
              e.currentTarget.style.background =
                "rgba(137, 118, 253, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                "#17171A";
              e.currentTarget.style.background =
                "transparent";
            }}
          >
            About
          </Link>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div
            style={servicesWrapperStyle}
            onMouseEnter={() =>
              setServicesHover(true)
            }
            onMouseLeave={() => {
              setServicesHover(false);
              setDropdownHover(null);
            }}
          >
            <a
              href="/#services"
              style={{
                ...navLinkStyle,
                color: servicesHover
                  ? purple
                  : "#17171A",
                background: servicesHover
                  ? "rgba(137, 118, 253, 0.08)"
                  : "transparent",
              }}
              onClick={goToServices}
              onMouseEnter={() =>
                setNavArrowHover(true)
              }
              onMouseLeave={() =>
                setNavArrowHover(false)
              }
            >
              Services

              <ChevronDown
                size={14}
                strokeWidth={2.5}
                style={{
                  transition:
                    reducedMotion
                      ? "none"
                      : "transform 0.25s ease",

                  transform:
                    servicesHover ||
                    navArrowHover
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                }}
              />
            </a>

            {/* ================= DROPDOWN ================= */}

            <div
              style={servicesDropdownStyle}
            >
              {services.map(
                (service, index) => (
                  <a
                    key={service}
                    href="/#services"
                    style={getDropdownItemStyle(
                      index
                    )}
                    onClick={goToServices}
                    onMouseEnter={() =>
                      setDropdownHover(index)
                    }
                    onMouseLeave={() =>
                      setDropdownHover(null)
                    }
                  >
                    <span
                      style={{
                        marginRight: "10px",
                        color: purple,
                      }}
                    >
                      0{index + 1}
                    </span>

                    {service}
                  </a>
                )
              )}
            </div>
          </div>

          {/* TESTIMONIALS */}

          <Link
            href="/#testimonials"
            style={navLinkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color =
                purple;
              e.currentTarget.style.background =
                "rgba(137, 118, 253, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                "#17171A";
              e.currentTarget.style.background =
                "transparent";
            }}
          >
            Testimonials
          </Link>

          {/* FAQ */}

          <Link
            href="/#faq"
            style={navLinkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color =
                purple;
              e.currentTarget.style.background =
                "rgba(137, 118, 253, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                "#17171A";
              e.currentTarget.style.background =
                "transparent";
            }}
          >
            FAQ
          </Link>
        </div>

        {/* =================================================
            DESKTOP CTA
        ================================================= */}

        <Link
          href="/contact"
          style={navCtaStyle}
          onMouseEnter={() => {
            setCtaHover(true);
            setCtaArrowHover(true);
          }}
          onMouseLeave={() => {
            setCtaHover(false);
            setCtaArrowHover(false);
          }}
        >
          Reach Out

          <ArrowUpRight
            size={16}
            style={navCtaArrowStyle}
          />
        </Link>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          style={mobileMenuButtonStyle}
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </nav>

      {/* =================================================
          MOBILE MENU
      ================================================= */}

      <div style={mobileMenuStyle}>
        {/* HOME */}

        <Link
          href="/"
          style={mobileNavLinkStyle}
          onClick={() =>
            setMobileOpen(false)
          }
        >
          Home

          <ArrowUpRight size={22} />
        </Link>

        {/* ABOUT */}

        <Link
          href="/#about"
          style={mobileNavLinkStyle}
          onClick={() =>
            setMobileOpen(false)
          }
        >
          About

          <ArrowUpRight size={22} />
        </Link>

        {/* =================================================
            MOBILE SERVICES
        ================================================= */}

        <a
          href="/#services"
          style={mobileNavLinkStyle}
          onClick={goToServices}
        >
          <span>Services</span>

          <ChevronDown size={22} />
        </a>

        {/* MOBILE SERVICE OPTIONS */}

        <div style={mobileServicesStyle}>
          {services.map(
            (service, index) => (
              <a
                key={service}
                href="/#services"
                style={getMobileServiceLinkStyle(
                  index
                )}
                onClick={goToServices}
                onMouseEnter={() =>
                  setDropdownHover(
                    `mobile-${index}`
                  )
                }
                onMouseLeave={() =>
                  setDropdownHover(null)
                }
              >
                0{index + 1} — {service}
              </a>
            )
          )}
        </div>

        {/* TESTIMONIALS */}

        <Link
          href="/#testimonials"
          style={mobileNavLinkStyle}
          onClick={() =>
            setMobileOpen(false)
          }
        >
          Testimonials

          <ArrowUpRight size={22} />
        </Link>

        {/* FAQ */}

        <Link
          href="/#faq"
          style={mobileNavLinkStyle}
          onClick={() =>
            setMobileOpen(false)
          }
        >
          FAQ

          <ArrowUpRight size={22} />
        </Link>

        {/* =================================================
            CONTACT
        ================================================= */}

        <Link
          href="/contact"
          style={mobileContactButtonStyle}
          onClick={() =>
            setMobileOpen(false)
          }
        >
          Get in Touch

          <ArrowUpRight
            size={17}
            style={{
              marginLeft: 8,
            }}
          />
        </Link>
      </div>
    </>
  );
}