"use client";
import React from "react";
import { urlFor } from "../services/db";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";

type Props = {
  n: any;
};

export default function NewsButton({ n }: Props) {
  const router = useRouter();
  return (
    <div
      className="btn n"
      key={n._id}
      onClick={() => {
        router.push(`/news/read/${n.slug.current}`);
      }}
    >
      <div className="l"></div>
      <div className="r"></div>
      <div className="np">
        <div className="date">
          <p>{new Date(n.d).toDateString()}</p>
        </div>
        <div className="info">
          <img src={n.bl && urlFor(n.bl).url()} alt="" className="banner" />
          <div className="grad"></div>
          <h2 className="news">{n.t}</h2>
          <p className="excerpt">{n.ex}</p>

          <div className="tags">
            <p>{n.catName}</p>
            {n.tags?.map((n: any) => {
              return <p key={n}>{n}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="nf">
        <img src="/d/nshape.svg" alt="" />
        <Link href={`/news/read/${n.slug.current}`}>
          READ MORE <BsArrowRight />
        </Link>
      </div>
    </div>
  );
}
