import "./home.scss";
import HomeCarousel from "./home/HomeCarousel";
import HomeAbout from "./home/HomeAbout";
import HomeTalentScroll from "./home/HomeTalentScroll";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import HomeAboutUs from "./home/HomeAboutUs";
import { fetchData } from "./services/db";

export default async function Home() {
  const gd = await fetchData(`
		*[_type == 'general' && preset == 'main'][0]{
		...
		}
	`);
  console.log(gd);
  return (
    <main id="p_home">
      <HomeCarousel slide={gd.hs ?? []} />
      <HomeAbout />
      <HomeTalentScroll />
      <HomeAboutUs />
    </main>
  );
}
