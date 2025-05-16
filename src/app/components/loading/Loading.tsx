"use client";
import React, { useEffect, useState } from "react";

type Props = {};

import "./loading.scss";
import { FaSpinner } from "react-icons/fa";

export default function Loading({}: Props) {
  const [load, setLoad] = useState(false);
  const [safeToRemove, setSafeToRemove] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoad(true), 1400);
    setTimeout(() => setSafeToRemove(true), 3000);
  }, []);
  return (
    !safeToRemove && (
      <div id="loading" className={`${load ? "done" : "loading"}`}>
        <img src="/g/logo_w.png" alt="" className="logo" />
        <p className="note">- Initializing -</p>
        <div className="lights"></div>
        <FaSpinner className="spin" />
        <div className="circle"></div>
      </div>
    )
  );
}
