"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaFilter, FaTag } from "react-icons/fa";

type Props = { cl: any[]; ac: any; tl: string[] };

export default function CategorySelect({ cl, ac, tl }: Props) {
  const router = useRouter();

  const [of, setOf] = useState(false);

  const [tags, setTags] = useState<string[]>(tl);
  const [curTag, setCurTag] = useState("");

  useEffect(() => {}, [tags]);
  useEffect(() => {
    setTags(tl);
  }, [cl]);

  const updateTags = (updated: string[]) => {
    if (updated.length > 0) {
      router.push(
        `/news?${ac ? "cat=" + ac + "&" : ""}tags=` + updated.join(","),
        {
          scroll: false,
        }
      );
    } else {
      router.push(`/news${ac ? "?cat=" + ac : ""}`, {
        scroll: false,
      });
    }
  };
  return (
    <>
      <section id="category">
        <img src="/d/glow1.png" alt="" className="glow ni" />
        <div className="confine ">
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
            <button
              className="btn btn-fil"
              onClick={() => {
                setOf(true);
              }}
            >
              <FaFilter />
            </button>
          </div>
        </div>
      </section>

      <section
        className={`filter-pop ${of ? "open" : "closed"}`}
        onClick={() => {
          setOf(false);
        }}
      >
        <div
          className="panel"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h2>Filter News</h2>
          <input
            type="text"
            maxLength={12}
            placeholder="Write the tag to filter!"
            value={curTag}
            onChange={(e) => {
              setCurTag(e.target.value);
            }}
          />
          <div className="action">
            <button
              className="btn btn-main"
              onClick={() => {
                setOf(false);
              }}
            >
              {" "}
              Close
            </button>
            <button
              className="btn btn-main"
              onClick={() => {
                if (curTag != "") {
                  const updated = [...tags, curTag.toUpperCase()];
                  setTags(updated);
                  updateTags(updated);
                  setCurTag("");
                }
              }}
            >
              {" "}
              Add
            </button>
          </div>
          <div className="tl">
            {tags.map((t) => {
              return (
                <div
                  className="btn tag"
                  key={t}
                  onClick={() => {
                    const updated = tags.filter((tt) => tt !== t);
                    setTags(updated);
                    updateTags(updated);
                  }}
                >
                  <p>{t}</p>
                  <CgClose />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
