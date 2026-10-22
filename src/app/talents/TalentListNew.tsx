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
type Props = {
  td: any;
};
export default function TalentListNew({ td }: Props) {
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
              <TalentListByGen />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function TalentListByGen() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="talent-list-gen">
      <div className="generation-card">
        <div className="top-panel">
          <div className="info">
            <p>Talent Title</p>
            <h2>Re:VIVE</h2>
          </div>
          <div className="pfp-list">
            <div className="tal-link">
              <img src="/g/faceshot.png" alt="" />
            </div>
            <div className="tal-link">
              <img src="/g/faceshot.png" alt="" />
            </div>
            <div className="tal-link">
              <img src="/g/faceshot.png" alt="" />
            </div>
            <div className="tal-link">
              <img src="/g/faceshot.png" alt="" />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-viewmore"
            aria-expanded={isExpanded}
            aria-controls="generation-details"
            onClick={() => setIsExpanded((expanded) => !expanded)}
          >
            {isExpanded ? <BiChevronUp /> : <BiChevronDown />}
          </button>
        </div>
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id="generation-details"
              className="generation-details-panel"
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden", transformOrigin: "top" }}
            >
              <div className="generation-details-content">
                <img src="/g/art1.png" alt="" className="bg" />
                <p className="main-desc">
                  Their dreams brought them together from four far corners of
                  the world. With a new journey in front of them, Re:Vive Rises
                  from the ashes to soak up the spotlight.
                </p>
                <hr />
                <div className="action">
                  <button className="btn btn-music">
                    <FaMusic />
                    <span>Spotlight</span>
                  </button>
                  <a href="#" className="btn btn-links">
                    <FaYoutube />
                  </a>

                  <a href="#" className="btn btn-links">
                    <FaApple />
                  </a>

                  <a href="#" className="btn btn-links">
                    <BsSpotify />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
