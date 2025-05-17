import "./home.scss";
import { fetchData } from "./services/db";
import { HomeCarousel } from "./home/HomeCarousel";
import HomeAbout from "./home/HomeAbout";
import { HomeTalentScroll } from "./home/HomeTalentScroll";
import HomeAboutUs from "./home/HomeAboutUs";

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
      <HomeAbout arts={[]} />
      <HomeTalentScroll tl={td} />
      <HomeAboutUs />
    </main>
  );
}
