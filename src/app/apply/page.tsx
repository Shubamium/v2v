import React from "react";
import "./apply.scss";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { fetchData } from "../services/db";

type ApplicationSettings = {
  staffAccessEnabled?: boolean;
  staffClosedText?: string;
  talentAccessEnabled?: boolean;
  talentClosedText?: string;
} | null;

type ApplyOptionProps = {
  label: string;
  href: string;
  isOpen: boolean;
  statusText: string;
};

function ApplyOption({ label, href, isOpen, statusText }: ApplyOptionProps) {
  return (
    <section
      className={`apply-option ${isOpen ? "open" : "closed"}`}
      aria-label={`${label} applications`}
    >
      {isOpen ? (
        <Link href={href} className="btn apply-button">
          <span>{label}</span>
          <span className="button-arrow" aria-hidden="true">
            <FaArrowRight />
          </span>
        </Link>
      ) : (
        <button type="button" className="btn apply-button" disabled>
          <span>{label}</span>
        </button>
      )}
      <div className="option-details">
        <span className="dropdown-chevron" aria-hidden="true" />
        <p>{statusText}</p>
      </div>
    </section>
  );
}

export default async function ApplyPage() {
  const settings = await fetchData<ApplicationSettings>(`
    *[_type == "general" && preset == "main"][0]{
      staffAccessEnabled,
      staffClosedText,
      talentAccessEnabled,
      talentClosedText
    }
  `);
  const staffOpen = settings?.staffAccessEnabled ?? true;
  const talentOpen = settings?.talentAccessEnabled ?? false;

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
          <ApplyOption
            label="Staff"
            href="/apply/staff"
            isOpen={staffOpen}
            statusText={
              staffOpen
                ? "Staff applications are open"
                : settings?.staffClosedText || "Staff applications are closed"
            }
          />
          <ApplyOption
            label="Talent"
            href="/apply/auditions"
            isOpen={talentOpen}
            statusText={
              talentOpen
                ? "Talent auditions are open"
                : settings?.talentClosedText || "Talent auditions are closed"
            }
          />
        </div>
      </section>
    </main>
  );
}
