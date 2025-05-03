import React from "react";

type Props = {};
import "./talents.scss";
import InifiniteText from "./InifiniteText";
import Link from "next/link";
export default function page({}: Props) {
  return (
    <main id="p_talents">
      <InifiniteText />
      <section id="tal-list">
        <div className="tl">
          <Link href={"/talent/zuri-fuyuki"} className="btn tal">
            <img src="/g/logo1.png" alt="" className="logo" />
            <img src="/g/char3.png" alt="" className="talart" />
          </Link>
          <Link href={"/talent/zuri-fuyuki"} v className="btn tal">
            <img src="/g/logo2.png" alt="" className="logo" />
            <img src="/g/char1.png" alt="" className="talart" />
          </Link>
          <Link href={"/talent/zuri-fuyuki"} className="btn tal">
            <img src="/g/logo3.png" alt="" className="logo" />
            <img src="/g/char2.png" alt="" className="talart" />
          </Link>
          <Link href={"/talent/zuri-fuyuki"} className="btn tal">
            <img src="/g/logo4.png" alt="" className="logo" />
            <img src="/g/char4.png" alt="" className="talart" />
          </Link>
        </div>
      </section>
    </main>
  );
}
