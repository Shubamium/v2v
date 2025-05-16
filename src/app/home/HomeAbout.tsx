"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useReducedMotion,
} from "motion/react";
// import { getRandomArts } from "../util/utility";
import { useMediaQuery } from "react-responsive";
type Props = {
  arts: string[];
};

export default function HomeAbout({ arts }: Props) {
  const contRef = useRef(null);
  const progress = useScroll({
    target: contRef,
    offset: ["start end", "end start"],
    axis: "y",
    // container: contRef
  });

  const small = useMediaQuery({
    query: "(max-width:  550px)",
  });
  const lP = useTransform(
    progress.scrollYProgress,
    [0, 1],
    small ? [-100, 50] : [-50, 100]
  );
  const rP = useTransform(
    progress.scrollYProgress,
    [0, 1],
    small ? [50, -100] : [100, -200]
  );

  const sideL = useTransform(progress.scrollYProgress, [0, 1], [-100, -300]);
  const sideR = useTransform(progress.scrollYProgress, [0, 1], [100, 300]);

  const [artL, setArtL] = useState("/b/zigs.png");
  const [artR, setArtR] = useState("/b/zigs.png");
  useEffect(() => {
    // const arts = arts();
    setArtL(arts[0]);
    setArtR(arts[1]);
  }, []);

  const smoll = useMediaQuery({
    query: "(max-width:  550px)",
  });

  return (
    <section id="about" ref={contRef}>
      {!small && (
        <>
          <motion.div
            style={smoll ? {} : { x: sideL }}
            className="side-l"
          ></motion.div>
          <motion.div
            style={smoll ? {} : { x: sideR }}
            className="side-r"
          ></motion.div>
        </>
      )}
      <div className="confine">
        <div className="lart char">
          <motion.img
            style={smoll ? {} : { y: lP }}
            src={artL}
            alt=""
            className="art"
          />
          {/* <img src={artL} alt="" className="art" /> */}
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
          <motion.img
            style={smoll ? {} : { y: rP }}
            src={artR}
            alt=""
            className="art"
          />
          {/* <img src={artR} alt="" className="art" /> */}
        </div>
      </div>
    </section>
  );
}
