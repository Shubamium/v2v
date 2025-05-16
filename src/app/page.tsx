import "./home.scss";
import HomeCarousel from "./home/HomeCarousel";
import HomeAbout from "./home/HomeAbout";
import HomeTalentScroll from "./home/HomeTalentScroll";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import HomeAboutUs from "./home/HomeAboutUs";
import { fetchData } from "./services/db";
import { getRandomArts } from "./util/utility";

export default async function Home() {
  const gd = await fetchData<any>(`
		*[_type == 'general' && preset == 'main'][0]{
		...
		}
	`);
  const td =
    await fetchData<any>(`*[_type == 'talents']  | order(_createdAt asc){
		_id,
		n,
		ca,
		slug,
		arts{
			pfp,
		}
	}`);
  return (
    <main id="p_home">
      <HomeCarousel slide={gd.hs ?? []} />
      <HomeAbout arts={getRandomArts()} />
      <HomeTalentScroll tl={td} />
      <HomeAboutUs />
    </main>
  );
}
