import React from "react";
import "./apply.scss";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ApplyPage() {
  return (
    <main id="page_apply">
      <div className="apply-glow" aria-hidden="true" />
      <section className="apply-content" aria-labelledby="apply-title">
        <img
          className="apply-logo"
          src="/g/logo_w.png"
          alt="Vir2alVerse logo placeholder"
        />

        <div className="apply-heading">
          <span className="heading-arrows l" aria-hidden="true">
            <span>◀</span>
            <span className="outline-arrow">◀</span>
            <span>◀</span>
          </span>
          <h1 id="apply-title">
            <span>Join Our</span> <span className="outlined">Team</span>
          </h1>
          <span className="heading-arrows r" aria-hidden="true">
            <span>▶</span>
            <span className="outline-arrow">▶</span>
            <span>▶</span>
          </span>
        </div>

        <p className="apply-prompt">I want to apply as ...</p>

        <div className="apply-options">
          <section
            className="apply-option open"
            aria-label="Staff applications"
          >
            <Link
              href="/apply/staff"
              type="button"
              className="btn apply-button"
            >
              <span>Staff</span>
              <span className="button-arrow" aria-hidden="true">
                <FaArrowRight />
              </span>
            </Link>
            <Link href={"/apply/staff"} className="option-details">
              <span className="dropdown-chevron" aria-hidden="true" />
              <p>Staff applications are open</p>
            </Link>
          </section>

          <section
            className="apply-option closed"
            aria-label="Talent applications"
          >
            <button type="button" className="btn apply-button" disabled>
              <span>Talent</span>
            </button>
            <div className="option-details">
              <span className="dropdown-chevron" aria-hidden="true" />
              <p>Talent auditions are closed</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
