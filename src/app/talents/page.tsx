import React, { CSSProperties } from "react";

type Props = {};
import "./talents.scss";
import InifiniteText from "./InifiniteText";
import Link from "next/link";
import { fetchData, urlFor } from "../services/db";
export default async function page({}: Props) {
  const td = await fetchData<any>(`
			*[_type == 'talents']  | order(_createdAt asc){
				_id,
				n,
				ca,
				slug,
				arts{
					st,
					logo,
				}
			}
		`);

  return (
    <main id="p_talents">
      <InifiniteText />
      <section id="tal-list">
        <div className="tl">
          {td.map((t: any) => {
            return (
              <Link
                href={"/talent/" + t.slug.current}
                className="btn tal"
                key={t._id}
                style={{ "--accent": t.ca } as CSSProperties}
              >
                <img
                  src={t.arts.logo && urlFor(t.arts.logo).height(800).url()}
                  alt=""
                  className="logo"
                />
                <img
                  src={t.arts.st && urlFor(t.arts.st).height(800).url()}
                  alt=""
                  className="talart"
                />
              </Link>
            );
          })}
          {/* <Link href={"/talent/zuri-fuyuki"} className="btn tal">
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
          </Link> */}
        </div>
      </section>
    </main>
  );
}
