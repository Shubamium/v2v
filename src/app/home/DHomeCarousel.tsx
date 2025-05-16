"use client";
import dynamic from "next/dynamic";

const HomeCarousel = dynamic(() => import("./HomeCarousel"), {
  ssr: false,
});

export default function DHomeCarousel({ slide }: any) {
  return <HomeCarousel slide={slide} />;
}
