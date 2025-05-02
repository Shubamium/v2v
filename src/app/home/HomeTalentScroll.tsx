"use client";
import {
  useAnimate,
  useMotionValue,
  motion,
  AnimationPlaybackControlsWithThen,
} from "motion/react";
import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

type Props = {};

export default function HomeTalentScroll({}: Props) {
  const [ref, bounds] = useMeasure();
  const [scope, animate] = useAnimate();
  const x = useMotionValue(0);
  const [ctr, setCTR] = useState<AnimationPlaybackControlsWithThen | null>(
    null
  );
  useEffect(() => {
    const target = -bounds.width;
    const amount = 4;
    const dur = 4 * 5;
    const control = animate(x, [0, target], {
      repeat: Infinity,
      duration: dur,
    });

    setCTR(control);
  }, [bounds]);
  return (
    <div id="tal-scroll">
      <img src="/d/glow.svg" alt="" className="glow" />
      <motion.div
        style={{ x }}
        className="wrapper"
        onPointerEnter={() => ctr?.pause()}
        onPointerLeave={() => ctr?.play()}
      >
        <div className="scroller" ref={ref}>
          <div className="btn tc">
            <div className="art-part">
              <img src="/g/pfpf.png" alt="" className="pfp" />
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings l"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>

              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings r"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="info">
              <h2>Milz Malakite</h2>
            </div>
          </div>
          <div className="btn tc">
            <div className="art-part">
              <img src="/g/pfpf.png" alt="" className="pfp" />
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings l"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>

              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings r"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="info">
              <h2>Milz Malakite</h2>
            </div>
          </div>
          <div className="btn tc">
            <div className="art-part">
              <img src="/g/pfpf.png" alt="" className="pfp" />
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings l"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>

              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings r"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="info">
              <h2>Milz Malakite</h2>
            </div>
          </div>
          <div className="btn tc">
            <div className="art-part">
              <img src="/g/pfpf.png" alt="" className="pfp" />
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings l"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>

              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings r"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="info">
              <h2>Milz Malakite</h2>
            </div>
          </div>
        </div>
        <div className="scroller">
          <div className="btn tc">
            <div className="art-part">
              <img src="/g/pfpf.png" alt="" className="pfp" />
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings l"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>

              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings r"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="info">
              <h2>Milz Malakite</h2>
            </div>
          </div>
          <div className="btn tc">
            <div className="art-part">
              <img src="/g/pfpf.png" alt="" className="pfp" />
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings l"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>

              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings r"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="info">
              <h2>Milz Malakite</h2>
            </div>
          </div>
          <div className="btn tc">
            <div className="art-part">
              <img src="/g/pfpf.png" alt="" className="pfp" />
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings l"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>

              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings r"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="info">
              <h2>Milz Malakite</h2>
            </div>
          </div>
          <div className="btn tc">
            <div className="art-part">
              <img src="/g/pfpf.png" alt="" className="pfp" />
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings l"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>

              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings r"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="info">
              <h2>Milz Malakite</h2>
            </div>
          </div>
        </div>
        {/* <div className="scroller">
          <div className="btn tc">
            <div className="art-part">
              <img src="/g/pfpf.png" alt="" className="pfp" />
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings l"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>

              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings r"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="info">
              <h2>Milz Malakite</h2>
            </div>
          </div>
          <div className="btn tc">
            <div className="art-part">
              <img src="/g/pfpf.png" alt="" className="pfp" />
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings l"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>

              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings r"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="info">
              <h2>Milz Malakite</h2>
            </div>
          </div>
          <div className="btn tc">
            <div className="art-part">
              <img src="/g/pfpf.png" alt="" className="pfp" />
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings l"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>

              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings r"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="info">
              <h2>Milz Malakite</h2>
            </div>
          </div>
          <div className="btn tc">
            <div className="art-part">
              <img src="/g/pfpf.png" alt="" className="pfp" />
              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings l"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>

              <svg
                width="109"
                height="104"
                viewBox="0 0 109 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wings r"
              >
                <path
                  d="M54.4963 8.12097L74.1946 43.058L35.1209 31.3064L2.18277 1.45117L54.4963 8.12097Z"
                  stroke="white"
                />
                <path
                  d="M80.9149 51.3894L95.7981 78.264L66.2758 69.2244L41.3892 46.2588L80.9149 51.3894Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M98.9017 87.4869L107 102.268L90.9363 97.2961L77.395 84.665L98.9017 87.4869Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="info">
              <h2>Milz Malakite</h2>
            </div>
          </div>
        </div> */}
      </motion.div>
    </div>
  );
}
