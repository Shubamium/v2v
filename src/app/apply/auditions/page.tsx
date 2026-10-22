"use client";

import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import "./audition.scss";

const benefits = [
  "Benefits 1",
  "Benefits 2",
  "Benefits 3",
  "Benefits 4",
  "Benefits 5",
];
const requirements = [
  "Requirement 1",
  "Requirement 2",
  "Requirement 3",
  "Requirement 4",
  "Requirement 5",
];
const frequentlyAskedQuestions = [
  "What is the question here?",
  "What is the question here?",
  "What is the question here?",
  "What is the question here?",
];

export default function AuditionPage() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(() => new Set([0]));

  const toggleFaq = (index: number) => {
    setOpenFaqs((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <main id="page_audition">
      <section className="audition-hero" aria-labelledby="audition-title">
        <h1 id="audition-title">
          <span>Talent</span> <span className="outlined">Auditions</span>
        </h1>
        <p className="audition-status">
          <span> - Audition Status -</span> CLOSED
        </p>

        <div className="audition-art audition-art-left" aria-hidden="true">
          <img src="/g/char4.png" alt="" />
        </div>
        <div className="audition-art audition-art-right" aria-hidden="true">
          <img src="/g/char2.png" alt="" />
        </div>

        <div className="audition-video">
          <div className="corner tl" aria-hidden="true" />
          <div className="corner tr" aria-hidden="true" />
          <div className="corner bl" aria-hidden="true" />
          <div className="corner br" aria-hidden="true" />
          <iframe
            src="https://www.youtube.com/embed/mc41FLYWPIQ?si=JR2KZYoDFDddAiZ4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section
        className="audition-benefits audition-section"
        aria-labelledby="benefits-title"
      >
        <h2 className="audition-section-title" id="benefits-title">
          Benefits
        </h2>
        <div className="benefits-list">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit}>
              <h3>{benefit}</h3>
              <p>
                If you think you have a skill you can contribute to the team,
                we’d love to hear about it!
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="audition-requirements audition-section"
        aria-labelledby="requirements-title"
      >
        <h2 className="audition-section-title" id="requirements-title">
          Requirements
        </h2>
        <div className="requirements-list">
          {requirements.map((requirement) => (
            <article className="requirement-row" key={requirement}>
              <h3>{requirement}</h3>
              <p>
                If you think you have a skill you can contribute to the team,
                we’d love to hear about it!
              </p>
            </article>
          ))}
        </div>
        <div
          className="audition-art audition-art-requirements"
          aria-hidden="true"
        >
          <img src="/g/char3.png" alt="" />
        </div>
      </section>

      <section
        className="audition-faq audition-section"
        aria-labelledby="faq-title"
      >
        <h2 className="audition-section-title" id="faq-title">
          Frequently Asked Questions
        </h2>
        <div className="faq-layout">
          <div className="audition-art audition-art-faq" aria-hidden="true">
            <img src="/g/char4.png" alt="" />
          </div>
          <div className="faq-list">
            {frequentlyAskedQuestions.map((question, index) => (
              <article
                className={`faq-item${openFaqs.has(index) ? " is-open" : ""}`}
                key={`${question}-${index}`}
              >
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={openFaqs.has(index)}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{question}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    <FaCaretDown />
                  </span>
                </button>
                <div className="faq-decoration" aria-hidden="true">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="faq-notch" aria-hidden="true" />
                <div
                  className="faq-answer-expand"
                  id={`faq-answer-${index}`}
                  aria-hidden={!openFaqs.has(index)}
                >
                  <div className="faq-answer">
                    <p>
                      If you think you have a skill you can contribute to the
                      team, we’d love to hear about it! Placeholder text here.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audition-cta" aria-labelledby="audition-cta-title">
        <div className="audition-cta-top-trim" aria-hidden="true" />
        <div className="audition-cta-backdrop" aria-hidden="true" />
        <div className="audition-cta-bottom-trim" aria-hidden="true" />
        <div className="audition-cta-copy">
          <p>Ready for</p>
          <h2 id="audition-cta-title">
            The <span>Next Step?</span>
            <span className="audition-cta-arrow" aria-hidden="true" />
          </h2>
          <a href="/apply">Apply Now →</a>
        </div>
        <img
          className="audition-cta-logo"
          src="/g/v2vlogo.png"
          alt="Vir2alVerse"
        />
      </section>
    </main>
  );
}
