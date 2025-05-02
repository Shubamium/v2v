"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";

type Props = {};

const data = [
  {
    title: "Re:Vive DEBUT PV",
    link: "#",
    img: "/g/art1.png",
  },
  {
    title: "Re:Vive DEBUT PV 2 ",
    link: "#",
    img: "https://picsum.photos/id/30/1920/1080",
  },
  {
    title: "Re:Vive DEBUT PV 3 ",
    link: "#",
    img: "https://picsum.photos/id/50/1920/1080",
  },
];

export default function HomeCarousel({}: Props) {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const loadImages = () => {
      data.forEach((item) => {
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
          animate={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 100% 100%, 0 100%, 0 100%)",
          }}
          initial={{
            clipPath: "polygon(0 0, 0 0, 100% 100%, 100% 100%, 100% 100%, 0 0)",
          }}
          exit={{
            clipPath: "polygon(0 0, 0 0, 100% 100%, 100% 100%, 100% 100%, 0 0)",
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          key={data[page].title + "img"}
          src={data[page].img}
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
            key={data[page].title}
          >
            <h2>{data[page].title}</h2>
            <a href={data[page].link} className="btn btn-main">
              Check it out here!
            </a>
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
                key={d.title + index}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
