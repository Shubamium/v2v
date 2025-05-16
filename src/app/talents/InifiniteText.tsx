"use client";
import { useAnimate, useMotionValue, motion } from "motion/react";
import React, { useEffect } from "react";
import useMeasure from "react-use-measure";

type Props = {};

function InifiniteText({}: Props) {
  const [scope, animate] = useAnimate();
  const x = useMotionValue(0);
  const x1 = useMotionValue(0);
  const x3 = useMotionValue(0);

  const [ref, bounds] = useMeasure({ debounce: 1000, scroll: false });
  useEffect(() => {
    animate(x, [0, -bounds.width], {
      duration: 31 * 15,
      repeat: Infinity,
      ease: "linear",
    });
    animate(x1, [-bounds.width / 3, 0], {
      duration: 31 * 7,
      repeat: Infinity,
      ease: "linear",
    });
    animate(x3, [0, -bounds.width], {
      duration: 31 * 25,
      repeat: Infinity,
      ease: "linear",
    });
  }, [bounds]);
  return (
    <div ref={scope} className="infitext">
      <motion.h2 style={{ x }} ref={ref}>
        VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE
        VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE
        VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE
        VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE
      </motion.h2>
      <motion.h2 style={{ x: x1 }}>
        VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE
        VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE
        VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE
        VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE
      </motion.h2>
      <motion.h2 style={{ x: x3 }}>
        VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE
        VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE
        VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE
        VIR2ALVERSE VIR2ALVERSE VIR2ALVERSE
      </motion.h2>
    </div>
  );
}

export default InifiniteText;
