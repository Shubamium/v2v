"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./talentListNew.scss";
import { TalentScrollCard } from "../home/TalentScrollCard";
import { useRouter } from "next/navigation";
import { urlFor } from "../services/db";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaApple, FaMusic, FaYoutube } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import Link from "next/link";
type Talent = {
  _id: string;
  n?: string;
  slug?: { current: string };
  arts?: {
    pfp?: unknown;
    generationListView?: unknown;
  };
};

type Generation = {
  _id: string;
  generationName?: string;
  generationTitle?: string;
  generationDescription?: string;
  songTitle?: string;
  youtubeMusicUrl?: string;
  appleMusicUrl?: string;
  spotifyUrl?: string;
  generationArt?: unknown;
  talents?: Talent[];
};

type Props = {
  td: Talent[];
  generations: Generation[];
};

export default function TalentListNew({ td, generations }: Props) {
  const [activeTab, setActiveTab] = useState<"all" | "generations">("all");
  const [direction, setDirection] = useState(1);

  const selectTab = (tab: "all" | "generations") => {
    if (tab === activeTab) return;
    setDirection(tab === "generations" ? 1 : -1);
    setActiveTab(tab);
  };

  const tabVariants = {
    enter: (tabDirection: number) => ({ x: tabDirection * 40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (tabDirection: number) => ({ x: tabDirection * -40, opacity: 0 }),
  };

  return (
    <div id="talent-list_new">
      <div className="selector">
        <button
          type="button"
          className={`btn btn-main tal${activeTab === "all" ? " active" : ""}`}
          aria-pressed={activeTab === "all"}
          onClick={() => selectTab("all")}
        >
          All Talents
        </button>
        <button
          type="button"
          className={`btn btn-main tal${activeTab === "generations" ? " active" : ""}`}
          aria-pressed={activeTab === "generations"}
          onClick={() => selectTab("generations")}
        >
          By Generations
        </button>
      </div>

      <div className="list-wrapper">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={tabVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {activeTab === "all" ? (
              <TalentListAll td={td} />
            ) : (
              <TalentListByGen generations={generations} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function TalentListByGen({ generations }: { generations: Generation[] }) {
  if (!generations.length) {
    return (
      <p className="generation-empty">No generations are available yet.</p>
    );
  }

  return (
    <div className="talent-list-gen">
      {generations.map((generation) => (
        <GenerationCard key={generation._id} generation={generation} />
      ))}
    </div>
  );
}

function GenerationCard({ generation }: { generation: Generation }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = `generation-details-${generation._id}`;
  const generationArtUrl = generation.generationArt
    ? urlFor(generation.generationArt).url()
    : undefined;
  const talents = generation.talents ?? [];

  return (
    <div className="generation-card">
      <div className="top-panel">
        <div className="info">
          {generation.generationTitle && <p>{generation.generationTitle}</p>}
          <h2>{generation.generationName}</h2>
        </div>
        <div className="pfp-list">
          {talents.map((talent) => {
            const portrait = talent.arts?.generationListView;
            const portraitUrl = portrait ? urlFor(portrait).url() : undefined;
            const portraitContent = portraitUrl ? (
              <img src={portraitUrl} alt={talent.n ?? ""} />
            ) : (
              <span className="talent-image-fallback">{talent.n}</span>
            );

            return talent.slug?.current ? (
              <Link
                href={`/talent/${talent.slug.current}`}
                className="tal-link"
                aria-label={`View ${talent.n ?? "talent"}`}
                key={talent._id}
              >
                {portraitContent}
              </Link>
            ) : (
              <div className="tal-link" key={talent._id}>
                {portraitContent}
              </div>
            );
          })}
        </div>
        <button
          type="button"
          className="btn btn-viewmore"
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          aria-label={`${isExpanded ? "Hide" : "Show"} ${generation.generationName} details`}
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          {isExpanded ? <BiChevronUp /> : <BiChevronDown />}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={detailsId}
            className="generation-details-panel"
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden", transformOrigin: "top" }}
          >
            <div className="generation-details-content">
              {generationArtUrl && (
                <img src={generationArtUrl} alt="" className="bg" />
              )}
              {generation.generationDescription && (
                <p className="main-desc">{generation.generationDescription}</p>
              )}
              {(generation.songTitle ||
                generation.youtubeMusicUrl ||
                generation.appleMusicUrl ||
                generation.spotifyUrl) && (
                <>
                  <hr />
                  <div className="action">
                    {generation.songTitle && (
                      <span className="btn btn-music">
                        <FaMusic />
                        <span>{generation.songTitle}</span>
                      </span>
                    )}
                    {generation.youtubeMusicUrl && (
                      <a
                        href={generation.youtubeMusicUrl}
                        className="btn btn-links"
                        aria-label="Listen on YouTube"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaYoutube />
                      </a>
                    )}
                    {generation.appleMusicUrl && (
                      <a
                        href={generation.appleMusicUrl}
                        className="btn btn-links"
                        aria-label="Listen on Apple Music"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaApple />
                      </a>
                    )}
                    {generation.spotifyUrl && (
                      <a
                        href={generation.spotifyUrl}
                        className="btn btn-links"
                        aria-label="Listen on Spotify"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsSpotify />
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TalentListAll({ td }: { td: any }) {
  const router = useRouter();
  return (
    <div className="talent-list-all">
      {td.map((t: any) => (
        <TalentScrollCard
          key={t._id}
          name={t.n}
          accent={t.ca}
          imageUrl={t.arts.pfp && urlFor(t.arts.pfp).url()}
          action={() => router.push("/talent/" + t.slug.current)}
        />
      ))}
    </div>
  );
}
