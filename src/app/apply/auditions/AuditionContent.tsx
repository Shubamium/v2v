"use client";

import { useState, type CSSProperties } from "react";
import { FaCaretDown } from "react-icons/fa";
import "./audition.scss";

type AuditionListItem = {
  _key?: string;
  title?: string;
  description?: string;
};

type FaqItem = {
  _key?: string;
  question?: string;
  answer?: string;
};

export type AuditionPageData = {
  statusText: string;
  videoId: string;
  leftArt: string;
  rightArt: string;
  benefits: AuditionListItem[];
  requirements: AuditionListItem[];
  requirementsArt: string;
  faq: FaqItem[];
  faqArt: string;
  applyLink: string;
  applyBackgroundArt: string;
};

export default function AuditionContent({ data }: { data: AuditionPageData }) {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(
    () => new Set(data.faq.length ? [0] : []),
  );

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

  const applyBackgroundStyle: CSSProperties = {
    backgroundImage: `url("${data.applyBackgroundArt}")`,
  };

  return (
    <main id="page_audition">
      <section className="audition-hero" aria-labelledby="audition-title">
        <h1 id="audition-title">
          <span>Talent</span> <span className="outlined">Auditions</span>
        </h1>
        <p className="audition-status">
          <span> - Audition Status -</span> {data.statusText}
        </p>

        <div className="audition-art audition-art-left" aria-hidden="true">
          <img src={data.leftArt} alt="" />
        </div>
        <div className="audition-art audition-art-right" aria-hidden="true">
          <img src={data.rightArt} alt="" />
        </div>

        <div className="audition-video">
          <div className="corner tl" aria-hidden="true" />
          <div className="corner tr" aria-hidden="true" />
          <div className="corner bl" aria-hidden="true" />
          <div className="corner br" aria-hidden="true" />
          <iframe
            src={`https://www.youtube.com/embed/${encodeURIComponent(data.videoId)}`}
            title="Audition information video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
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
          {data.benefits.map((benefit, index) => (
            <article
              className="benefit-card"
              key={benefit._key ?? `${benefit.title}-${index}`}
            >
              {benefit.title && <h3>{benefit.title}</h3>}
              {benefit.description && <p>{benefit.description}</p>}
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
          {data.requirements.map((requirement, index) => (
            <article
              className="requirement-row"
              key={requirement._key ?? `${requirement.title}-${index}`}
            >
              {requirement.title && <h3>{requirement.title}</h3>}
              {requirement.description && <p>{requirement.description}</p>}
            </article>
          ))}
        </div>
        <div
          className="audition-art audition-art-requirements"
          aria-hidden="true"
        >
          <img src={data.requirementsArt} alt="" />
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
            <img src={data.faqArt} alt="" />
          </div>
          <div className="faq-list">
            {data.faq.map((item, index) => {
              const isOpen = openFaqs.has(index);
              const answerId = `faq-answer-${index}`;

              return (
                <article
                  className={`faq-item${isOpen ? " is-open" : ""}`}
                  key={item._key ?? `${item.question}-${index}`}
                >
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
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
                    id={answerId}
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-answer">
                      {item.answer && <p>{item.answer}</p>}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="audition-cta" aria-labelledby="audition-cta-title">
        <div className="audition-cta-top-trim" aria-hidden="true" />
        <div
          className="audition-cta-backdrop"
          aria-hidden="true"
          style={applyBackgroundStyle}
        />
        <div className="audition-cta-bottom-trim" aria-hidden="true" />
        <div className="audition-cta-copy">
          <p>Ready for</p>
          <h2 id="audition-cta-title">
            The <span>Next Step?</span>
            <span className="audition-cta-arrow" aria-hidden="true" />
          </h2>
          <a href={data.applyLink}>Apply Now →</a>
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
