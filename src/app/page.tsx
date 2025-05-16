import "./home.scss";
import { fetchData } from "./services/db";
import HomeClient from "./HomeClient";

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
      <HomeClient gd={gd} td={td} />
    </main>
  );
}
