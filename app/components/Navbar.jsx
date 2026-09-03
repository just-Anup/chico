"use client";

import { useState } from "react";
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
];


export default function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  const router = useRouter();


  /* =====================================================
     GO TO SERVICES
  ===================================================== */

  const goToServices = (e) => {

    /*
      If we are already on the homepage,
      manually scroll to the services section.
    */

    if (pathname === "/") {

      e.preventDefault();

      const servicesSection =
        document.getElementById("services");

      if (servicesSection) {

        servicesSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

      setMobileOpen(false);

      return;
    }


    /*
      If we are on another page,
      go back to homepage and services section.
    */

    e.preventDefault();

    router.push("/#services");

    setMobileOpen(false);
  };


  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="navbar">


        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className="logo"
          onClick={() =>
            setMobileOpen(false)
          }
        >

          <div className="logo-mark">
            V
          </div>

          <span className="logo-text">
            YOUR BRAND
          </span>

        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div className="nav-links">


          {/* ================= HOME ================= */}

          <Link
            href="/"
            className="nav-link"
          >
            Home
          </Link>


          {/* ================= ABOUT ================= */}

          <Link
            href="/#about"
            className="nav-link"
          >
            About
          </Link>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="services-wrapper">

            <a
              href="/#services"
              className="nav-link"
              onClick={goToServices}
            >

              Services

              <ChevronDown
                size={14}
                strokeWidth={2.5}
                className="nav-arrow"
              />

            </a>


            {/* ================= DROPDOWN ================= */}

            <div className="services-dropdown">

              {services.map(
                (service, index) => (

                  <a
                    key={service}
                    href="/#services"
                    className="dropdown-item"
                    onClick={goToServices}
                  >

                    <span
                      style={{
                        marginRight: "10px",
                        color: "#8976FD",
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

<Link
  href="/#testimonials"
  className="nav-link"
>
  Testimonials
</Link>


          {/* ================= FAQ ================= */}

          <Link
            href="/#faq"
            className="nav-link"
          >
            FAQ
          </Link>

        </div>


        {/* =================================================
            DESKTOP CTA
        ================================================= */}

        <Link
          href="/contact"
          className="nav-cta magnetic-button"
        >

          Get in Touch

          <ArrowUpRight
            size={16}
            className="nav-cta-arrow"
          />

        </Link>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          className="mobile-menu-button"

          onClick={() =>
            setMobileOpen(!mobileOpen)
          }

          aria-label="Toggle menu"
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

      <div
        className={`mobile-menu ${
          mobileOpen
            ? "open"
            : ""
        }`}
      >


        {/* ================= HOME ================= */}

        <Link
          href="/"
          className="mobile-nav-link"

          onClick={() =>
            setMobileOpen(false)
          }
        >

          Home

          <ArrowUpRight size={22} />

        </Link>


        {/* ================= ABOUT ================= */}

        <Link
          href="/#about"
          className="mobile-nav-link"

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
          className="mobile-nav-link"
          onClick={goToServices}
        >

          <span>
            Services
          </span>

          <ChevronDown
            size={22}
          />

        </a>


        {/* ================= MOBILE SERVICE OPTIONS ================= */}

        <div className="mobile-services">

          {services.map(
            (service, index) => (

              <a
                key={service}
                href="/#services"
                className="mobile-service-link"

                onClick={goToServices}
              >

                0{index + 1} — {service}

              </a>

            )
          )}

        </div>

{/* ================= TESTIMONIALS ================= */}

<Link
  href="/#testimonials"
  className="mobile-nav-link"

  onClick={() =>
    setMobileOpen(false)
  }
>
  Testimonials

  <ArrowUpRight size={22} />

</Link>


        {/* ================= FAQ ================= */}

        <Link
          href="/#faq"
          className="mobile-nav-link"

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
          className="mobile-contact-button"

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