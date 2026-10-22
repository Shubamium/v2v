import React, { CSSProperties } from "react";

type Props = {};
import "./talents.scss";
import InifiniteText from "./InifiniteText";
import { fetchData, urlFor } from "../services/db";
import TalentList from "./TalentList";
import TalentListNew from "./TalentListNew";
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
					pfp
				}
			}
		`);
  const generations = await fetchData<any>(`
    *[_type == "generation"] | order(_createdAt asc) {
      _id,
      generationName,
      generationTitle,
      generationDescription,
      songTitle,
      youtubeMusicUrl,
      appleMusicUrl,
      spotifyUrl,
      generationArt,
      talents[]->{
        _id,
        n,
        slug,
        arts {
          generationListView
        }
      }
    }
  `);

  return (
    <main id="p_talents">
      <InifiniteText />
      <section id="tal-list">
        <TalentListNew td={td} generations={generations} />
      </section>
    </main>
  );
}
