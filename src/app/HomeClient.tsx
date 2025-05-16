"use client";
import React from "react";
import DHomeCarousel from "./home/DHomeCarousel";
import HomeAbout from "./home/HomeAbout";
import { HomeTalentScroll } from "./home/HomeTalentScroll";
import HomeAboutUs from "./home/HomeAboutUs";
import dynamic from "next/dynamic";

type Props = {};

const DHomeAbout = dynamic(() => import("./home/HomeAbout"), { ssr: false });
const DHomeTalentScroll = dynamic(() => import("./home/HomeTalentScroll"), {
  ssr: false,
});
export default function HomeClient({ gd, td }: any) {
  return (
    <>
      <DHomeCarousel slide={gd.hs ?? []} />
      <DHomeAbout arts={[]} />
      <DHomeTalentScroll tl={td} />
      <HomeAboutUs />
    </>
  );
}
