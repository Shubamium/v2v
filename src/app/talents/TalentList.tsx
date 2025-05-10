"use client";
import React, { CSSProperties, useEffect, useState } from "react";
import { urlFor } from "../services/db";
import Link from "next/link";

type Props = { td: any[] };

import { AnimatePresence, motion } from "motion/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
export default function TalentList({ td }: Props) {
  if (!td) return <></>;

  const [visible, setVisible] = useState<any[]>([]);
  const [hidden, setHidden] = useState<any[]>([]);
  const sm = useMediaQuery({
    query: "(max-width: 550px)",
  });
  useEffect(() => {
    // let infinite = [...td, ...td];
    initialize();
  }, [td]);

  const initialize = () => {
    const tlist = [...td];
    const vis = tlist.splice(0, 4);
    setHidden(tlist.length > 0 ? tlist : [...td]);
    setVisible(vis);
  };

  const next = () => {
    let currVis = [...visible];
    let currHid = [...hidden];

    // Remove First element of visible then put it in hidden
    const c = currVis.shift();
    currHid.push(c);

    // Add last element to visible
    const a = currHid.shift();
    currVis.push(a);

    setHidden(currHid);
    setVisible(currVis);
    // console.log(currHid, currVis, c, a);
  };
  const prev = () => {
    let currVis = [...visible];
    let currHid = [...hidden];

    // Remove First element of visible then put it in hidden
    const c = currVis.pop();
    currHid.unshift(c);

    // Add last element to visible
    const a = currHid.pop();
    currVis.unshift(a);

    setHidden(currHid);
    setVisible(currVis);
    // console.log(currHid, currVis, c, a);
  };
  return (
    <>
      {sm && (
        <div className="th">
          <h2>Talent</h2>
          <p>{`(Press to view more detail)`}</p>
        </div>
      )}
      <div className="tl">
        <AnimatePresence>
          {!sm &&
            visible.map((t: any) => {
              return (
                <motion.div
                  key={t._id}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  layout
                  exit={{
                    y: 500,
                    opacity: 0,
                  }}
                  initial={{
                    opacity: 0,
                    y: -500,
                  }}
                >
                  <Link
                    href={"/talent/" + t.slug.current}
                    className="btn tal"
                    style={{ "--accent": t.ca } as CSSProperties}
                  >
                    <img
                      src={t.arts.logo && urlFor(t.arts.logo).height(800).url()}
                      alt=""
                      className="logo"
                    />
                    <img
                      src={t.arts.st && urlFor(t.arts.st).height(800).url()}
                      alt=""
                      className="talart"
                    />
                  </Link>
                </motion.div>
              );
            })}
          {sm &&
            td.map((t: any) => {
              return (
                <motion.div
                  key={t._id}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  layout
                  exit={{
                    y: 500,
                    opacity: 0,
                  }}
                  initial={{
                    opacity: 0,
                    y: -500,
                  }}
                >
                  <Link
                    href={"/talent/" + t.slug.current}
                    className="btn tal"
                    style={{ "--accent": t.ca } as CSSProperties}
                  >
                    <img
                      src={t.arts.logo && urlFor(t.arts.logo).height(800).url()}
                      alt=""
                      className="logo"
                    />
                    <img
                      src={t.arts.st && urlFor(t.arts.st).height(800).url()}
                      alt=""
                      className="talart"
                    />
                  </Link>
                </motion.div>
              );
            })}

          {/* {hidden.map((t: any) => {
            return (
              <motion.a
                href={"/talent/" + t.slug.current}
                className="btn tal"
                key={t._id}
                style={{ "--accent": t.ca } as CSSProperties}
                animate={{ opacity: 0.1 }}
              >
                <img
                  src={t.arts.logo && urlFor(t.arts.logo).height(800).url()}
                  alt=""
                  className="logo"
                />
                <img
                  src={t.arts.st && urlFor(t.arts.st).height(800).url()}
                  alt=""
                  className="talart"
                />
              </motion.a>
            );
          })} */}
        </AnimatePresence>

        {/* <Link href={"/talent/zuri-fuyuki"} className="btn tal">
        <img src="/g/logo2.png" alt="" className="logo" />
        <img src="/g/char1.png" alt="" className="talart" />
      </Link> */}
        {/* <Link href={"/talent/zuri-fuyuki"} className="btn tal">
            <img src="/g/logo3.png" alt="" className="logo" />
            <img src="/g/char2.png" alt="" className="talart" />
          </Link>
          <Link href={"/talent/zuri-fuyuki"} className="btn tal">
            <img src="/g/logo4.png" alt="" className="logo" />
            <img src="/g/char4.png" alt="" className="talart" />
          </Link>  */}
      </div>
      {!sm && (
        <div className="tl-control">
          <button className="btn btn-n" onClick={next}>
            <BsArrowRight />
          </button>
          <button className="btn btn-p" onClick={prev}>
            <BsArrowLeft />
          </button>
        </div>
      )}
    </>
  );
}
