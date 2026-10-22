"use client";
import {
  useMotionValue,
  motion,
  animate,
  AnimationPlaybackControlsWithThen,
} from "motion/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { urlFor } from "../services/db";
import { useMediaQuery } from "react-responsive";
import { TalentScrollCard } from "./TalentScrollCard";
import "./homeTalentScroll.scss";
export function HomeTalentScroll({ tl }: any) {
  const [ref, bounds] = useMeasure({ debounce: 1000, scroll: false });
  const x = useMotionValue(0);
  const [ctr, setCTR] = useState<AnimationPlaybackControlsWithThen | null>(
    null,
  );

  const small = useMediaQuery({
    query: "(max-width:  550px)",
  });
  useEffect(() => {
    const target = -bounds.width;
    const dur = 4 * 3;

    const control = animate(x, [0, target], {
      ease: "linear",
      repeat: Infinity,
      duration: dur,
    });

    setCTR(control);
  }, [bounds]);
  const router = useRouter();
  return (
    <div className="talent-scroll">
      <img src="/d/glow1.png" alt="" className="glow" />
      <motion.div
        style={{ x, willChange: "transform" }}
        // animate={{ x: ["0%", "100%"] }}
        // transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="wrapper"
        onPointerEnter={() => ctr?.pause()}
        onPointerLeave={() => ctr?.play()}
      >
        <div className="scroller" ref={ref}>
          {tl.map((t: any) => {
            return (
              <TalentScrollCard
                key={t._id}
                name={t.n}
                accent={t.ca}
                imageUrl={urlFor(t.arts.pfp)
                  .height(small ? 300 : 800)
                  .url()}
                loading="lazy"
                action={() =>
                  router.push("/talent/" + t.slug.current, { scroll: false })
                }
              />
            );
          })}
        </div>
        <div className="scroller">
          {tl.map((t: any) => {
            return (
              <TalentScrollCard
                key={t._id + "a"}
                name={t.n}
                accent={t.ca}
                imageUrl={urlFor(t.arts.pfp).url()}
                action={() => router.push("/talent/" + t.slug.current)}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default React.memo(HomeTalentScroll);
