import React, { CSSProperties } from "react";

type Props = {};
import "./talents.scss";
import InifiniteText from "./InifiniteText";
import { fetchData, urlFor } from "../services/db";
import TalentList from "./TalentList";
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
        <TalentList td={td} />
      </section>
    </main>
  );
}
