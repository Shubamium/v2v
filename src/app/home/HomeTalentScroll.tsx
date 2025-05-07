"use client";
import {
  useMotionValue,
  motion,
  animate,
  AnimationPlaybackControlsWithThen,
} from "motion/react";
import { useRouter } from "next/navigation";
import React, { CSSProperties, useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { urlFor } from "../services/db";

type Props = {};

export function HomeTalentScroll({ tl }: any) {
  const [ref, bounds] = useMeasure({ debounce: 1000 });
  const x = useMotionValue(0);
  const [ctr, setCTR] = useState<AnimationPlaybackControlsWithThen | null>(
    null
  );
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
    <div id="tal-scroll">
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
              <div
                className="btn tc"
                onClick={() => {
                  router.push("/talent/" + t.slug.current);
                }}
                style={{ "--accent": t.ca } as CSSProperties}
                key={t._id}
              >
                <div className="art-part">
                  <img src={urlFor(t.arts.pfp).url()} alt="" className="pfp" />
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
                  <h2>{t.n}</h2>
                </div>
              </div>
            );
          })}
          {/* <div
            className="btn tc"
            onClick={() => {
              router.push("/talent/talent-id");
            }}
          >
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
          <div
            className="btn tc"
            onClick={() => {
              router.push("/talent/talent-id");
            }}
          >
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
          </div>{" "}
          <div
            className="btn tc"
            onClick={() => {
              router.push("/talent/talent-id");
            }}
          >
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
          </div> */}
        </div>
        <div className="scroller">
          {tl.map((t: any) => {
            return (
              <div
                className="btn tc"
                onClick={() => {
                  router.push("/talent/" + t.slug.current);
                }}
                style={{ "--accent": t.ca } as CSSProperties}
                key={t._id + "a"}
              >
                <div className="art-part">
                  <img src={urlFor(t.arts.pfp).url()} alt="" className="pfp" />
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
                  <h2>{t.n}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="scroller">
          {tl.map((t: any) => {
            return (
              <div
                className="btn tc"
                onClick={() => {
                  router.push("/talent/" + t.slug.current);
                }}
                style={{ "--accent": t.ca } as CSSProperties}
                key={t._id + "b"}
              >
                <div className="art-part">
                  <img src={urlFor(t.arts.pfp).url()} alt="" className="pfp" />
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
                  <h2>{t.n}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default React.memo(HomeTalentScroll);
