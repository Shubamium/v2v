import React, { CSSProperties } from "react";

import "./talent.scss";
import Link from "next/link";
import { FaArrowRight, FaShoppingBag, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsArrowLeft, BsArrowLeftShort } from "react-icons/bs";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { fetchData, urlFor } from "@/app/services/db";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};
export default async function page({ params }: Props) {
  const par = await params;
  const td = await fetchData<any>(`
		*[_type == 'talents' && slug.current == '${par.id}'][0]{
			...,
			arts{
			...,
			'ta':ta.asset ->url,
			'vid': vid.asset->url
			}
		}
	`);
  if (!td) {
    redirect("/");
  }
  console.log(td);
  return (
    <main id="p_talent" style={{ "--accent": td.ca } as CSSProperties}>
      <div className="confine">
        <div className="circt ni"></div>
        <div className="circb ni"></div>
        <div className="art">
          {/* <img src={"/g/tr3.webp"} alt="" className="main ni" /> */}
          <img
            src={td.arts.fb && urlFor(td.arts.fb).height(1300).url()}
            className="main ni shadow"
          />
          <picture className="main ni ">
            <source srcSet={td.arts.ta} type="image/webp" />
            {/* <source srcSet={"/g/kiyori2.webp"} type="image/webp" /> */}
            <img src={td.arts.fb && urlFor(td.arts.fb).height(1300).url()} />
          </picture>
          {/* <video
            className="main ni"
            autoPlay={true}
            // poster={
            //   td.arts.fb && urlFor(td.arts.fb).width(900).height(900).url()
            // }
            muted
            playsInline
            loop
            controls={false}
          >
            <source src={td.arts?.vid + ""} />
            <img
              src={td.arts.fb && urlFor(td.arts.st).height(1300).url()}
              // className="main ni"
              alt=""
            />
          </video> */}
        </div>
        <div className="info">
          <div className="top">
            <div className="logo-part">
              <img
                src={td.arts.logo && urlFor(td.arts.logo).height(500).url()}
                alt=""
              />
            </div>
            <div className="dia">
              <div className="ts"></div>
              <div className="bs"></div>
              <svg
                width="251"
                height="22"
                viewBox="0 0 251 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="talshape"
              >
                <path
                  d="M246.533 0H95.3217L83.9306 15.7584L88.6211 21.3785H238.715L251 5.73033L246.533 0Z"
                  fill="#D8FFFF"
                />
                <path
                  d="M73.9332 0H11.3604L0.00017059 15.7584L4.67789 21.3786H66.137L78.3882 5.73033L73.9332 0Z"
                  fill="#D8FFFF"
                />
              </svg>

              <p>
                {/* “Sitting upon her throne, the ruler of crystal dragons herself,
                is the hamster Milz Malakite. Although she might seem too cool
                for this world, you’ll be quickly charmed by her goofy hamster
                antics.” */}
                {td.bio}
              </p>
            </div>
          </div>
          <div className="bot">
            <div className="l">
              <div className="info-list">
                {td.il?.map((i: any) => {
                  return (
                    <div className="info" key={i._key}>
                      <h3>{i.t}</h3>
                      <p>{i.v}</p>
                    </div>
                  );
                })}
              </div>
              <Link href={"/talents"} scroll={true} className="btn btn-ext">
                <BsArrowLeft />
                TALENT LIST
              </Link>
            </div>
            <div className="r">
              <div className="vids">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${td.vid}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="ytembed"
                ></iframe>
              </div>
              <div className="misc">
                <div className="contacts">
                  <a href={td.links?.x} target="_blank" className="btn">
                    {" "}
                    <FaXTwitter />
                  </a>
                  <a href={td.links?.yt} className="btn">
                    {" "}
                    <FaYoutube />
                  </a>
                </div>
                <div className="external">
                  <a href={td.links?.d} className="btn btn-ext">
                    {" "}
                    <BiHeart />
                    DONATE
                  </a>
                  <a href={td.links?.m} className="btn btn-ext">
                    <FaShoppingBag />
                    MERCH
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
