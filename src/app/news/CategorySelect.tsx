"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFilter } from "react-icons/fa";

type Props = { cl: any[]; ac: any };

export default function CategorySelect({ cl, ac }: Props) {
  const router = useRouter();
  return (
    <section id="category">
      <img src="/d/glow1.png" alt="" className="glow ni" />
      <div className="confine">
        <div className="cl">
          <button
            className={`btn btn-cat ${ac === "all" || ac === null ? "act" : ""}`}
            onClick={() => {
              router.push("/news", {
                scroll: false,
              });
              router.refresh();
            }}
          >
            All
          </button>
          {cl.map((c: any) => {
            return (
              <button
                className={`btn btn-cat ${c.slug.current === ac ? "act" : ""}`}
                key={c._id}
                onClick={() => {
                  router.push("/news?cat=" + c.slug.current, {
                    scroll: false,
                  });
                  router.refresh();
                }}
              >
                {c.name}
              </button>
            );
          })}
        </div>
        <div className="fil">
          <button className="btn btn-fil">
            <FaFilter />
          </button>
        </div>
      </div>
    </section>
  );
}
