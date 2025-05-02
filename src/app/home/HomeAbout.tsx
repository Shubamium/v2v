"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "motion/react";
import { getRandomArts } from "../util/utility";
type Props = {};

export default function HomeAbout({}: Props) {
  const contRef = useRef(null);
  const progress = useScroll({
    axis: "y",
    target: contRef,
    offset: ["start end", "end start"],
  });

  const lP = useTransform(progress.scrollYProgress, [0, 1], [-200, 100]);
  const rP = useTransform(progress.scrollYProgress, [0, 1], [100, -200]);

  const sideL = useTransform(progress.scrollYProgress, [0, 1], [-100, -300]);
  const sideR = useTransform(progress.scrollYProgress, [0, 1], [100, 300]);

  const [artL, setArtL] = useState("/b/zigs.png");
  const [artR, setArtR] = useState("/b/zigs.png");
  useEffect(() => {
    const arts = getRandomArts();
    setArtL(arts[0]);
    setArtR(arts[1]);
  }, []);
  return (
    <section id="about" ref={contRef}>
      <motion.div style={{ x: sideL }} className="side-l"></motion.div>
      <motion.div style={{ x: sideR }} className="side-r"></motion.div>
      <div className="confine">
        <div className="lart char">
          <motion.img style={{ y: lP }} src={artL} alt="" className="art" />
        </div>
        <div className="content">
          <img src="/g/logo_w.png" alt="" />
          <p>
            Vir2alVerse is the next step in quality entertainment, bringing a
            <span> colorful collection</span> of <span>virtual talents</span> to
            new and greater heights!
          </p>
        </div>
        <div className="rart char">
          <motion.img style={{ y: rP }} src={artR} alt="" className="art" />
        </div>
      </div>
    </section>
  );
}
