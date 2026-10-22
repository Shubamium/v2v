"use client";
import React, { CSSProperties } from "react";
import "./talentScrollCard.scss";
type Props = {};
type TalentScrollCardProps = {
  name: string;
  accent: string;
  imageUrl: string;
  action: () => void;
  loading?: "lazy";
};

export function TalentScrollCard({
  name,
  accent,
  imageUrl,
  action,
  loading,
}: TalentScrollCardProps) {
  return (
    <div
      className="talent-card"
      onClick={action}
      style={{ "--accent": accent } as CSSProperties}
    >
      <div className="art-part">
        <img src={imageUrl} alt="" loading={loading} className="pfp" />
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
        <h2>{name}</h2>
      </div>
    </div>
  );
}
