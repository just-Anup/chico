"use client";

import { useState } from "react";
import Link from "next/link";
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

  return (
    <>
      <nav className="navbar">

        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className="logo"
          onClick={() => setMobileOpen(false)}
        >
          <div className="logo-mark">
            V
          </div>

          <span className="logo-text">
            YOUR BRAND
          </span>
        </Link>


        {/* ================= DESKTOP NAV ================= */}

        <div className="nav-links">

          <Link
            href="/"
            className="nav-link"
          >
            Home
          </Link>


          <Link
            href="/#about"
            className="nav-link"
          >
            About
          </Link>


          {/* SERVICES */}

          <div className="services-wrapper">

            <Link
              href="/#services"
              className="nav-link"
            >
              Services

              <ChevronDown
                size={14}
                strokeWidth={2.5}
                className="nav-arrow"
              />
            </Link>


            <div className="services-dropdown">

              {services.map(
                (service, index) => (

                  <Link
                    key={service}
                    href="/#services"
                    className="dropdown-item"
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

                  </Link>

                )
              )}

            </div>

          </div>


          {/* FAQ */}

          <Link
            href="/#faq"
            className="nav-link"
          >
            FAQ
          </Link>

        </div>


        {/* ================= DESKTOP CTA ================= */}

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


        {/* ================= MOBILE BUTTON ================= */}

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


      {/* ================= MOBILE MENU ================= */}

      <div
        className={`mobile-menu ${
          mobileOpen
            ? "open"
            : ""
        }`}
      >

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


        <Link
          href="/#services"
          className="mobile-nav-link"
          onClick={() =>
            setMobileOpen(false)
          }
        >
          <span>
            Services
          </span>

          <ArrowUpRight size={22} />
        </Link>


        <div className="mobile-services">

          {services.map(
            (service, index) => (

              <Link
                key={service}
                href="/#services"
                className="mobile-service-link"
                onClick={() =>
                  setMobileOpen(false)
                }
              >
                0{index + 1} — {service}
              </Link>

            )
          )}

        </div>


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