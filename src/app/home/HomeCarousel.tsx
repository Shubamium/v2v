"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { urlFor } from "../services/db";
import { useMediaQuery } from "react-responsive";

type Props = {};

// const data = [
//   {
//     title: "Re:Vive DEBUT PV",
//     link: "#",
//     img: "/g/art1.png",
//   },
//   {
//     title: "Re:Vive DEBUT PV 2 ",
//     link: "#",
//     img: "https://picsum.photos/id/30/1920/1080",
//   },
//   {
//     title: "Re:Vive DEBUT PV 3 ",
//     link: "#",
//     img: "https://picsum.photos/id/50/1920/1080",
//   },
// ];

const desktopVariant = {
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 100% 100%, 0 100%, 0 100%)",
  },
  initial: {
    clipPath: "polygon(0 0, 0 0, 100% 100%, 100% 100%, 100% 100%, 0 0)",
  },
  exit: {
    clipPath: "polygon(0 0, 0 0, 100% 100%, 100% 100%, 100% 100%, 0 0)",
  },
  transition: {
    duration: 1,
    ease: "easeInOut",
  },
};
const mobileVariant = {
  animate: {
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.6,
    ease: "linear",
  },
};
export function HomeCarousel({ slide }: any) {
  const [page, setPage] = useState(0);

  const data = slide;
  const small = useMediaQuery({
    query: "(max-width:  550px)",
  });
  useEffect(() => {
    const loadImages = () => {
      data.forEach((item: any) => {
        const img = new Image();
        img.src = item.img;
      });
    };
    loadImages();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      next();
    }, 8000);
    return () => clearTimeout(timeout);
  }, [page]);
  const next = () => {
    setPage((p) => {
      if (p + 1 > data.length - 1) {
        return 0;
      }
      return p + 1;
    });
  };
  const prev = () => {
    setPage((p) => {
      if (p - 1 < 0) {
        return data.length - 1;
      }
      return p - 1;
    });
  };

  return (
    <section id="hero-carousel">
      <AnimatePresence mode="wait">
        <motion.img
          variants={small ? mobileVariant : desktopVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          key={data[page]._key + "img"}
          src={urlFor(data[page].i)
            .height(small ? 400 : 1380)
            .url()}
          alt=""
          className="current"
        />
      </AnimatePresence>
      <div className="shadow"></div>
      <div className="content">
        <AnimatePresence mode="wait">
          <motion.div
            animate={{
              clipPath: "inset(0% 0% 0% 0%)",
            }}
            initial={{
              clipPath: "inset(0% 0% 0% 100%)",
            }}
            exit={{
              clipPath: "inset(0% 100% 0% 0%)",
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="data"
            key={data[page].t}
          >
            <h2>{data[page].t}</h2>
            {data[page].url && (
              <a target="_blank" href={data[page].url} className="btn btn-main">
                Check it out here!
              </a>
            )}
          </motion.div>
        </AnimatePresence>
        <div className="pager">
          {data.map((d: any, index: number) => {
            return (
              <div
                className={`btn p ${index === page ? "act" : ""}`}
                onClick={() => {
                  setPage(index);
                }}
                key={d._key + "pager" + index}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default React.memo(HomeCarousel);
