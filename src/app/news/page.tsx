import React from "react";

import "./news.scss";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { fetchData, urlFor } from "../services/db";
import CategorySelect from "./CategorySelect";
type Props = {
  searchParams: Promise<{
    cat: string;
    tags?: string;
  }>;
};

export default async function page({ searchParams }: Props) {
  const params = await searchParams;
  let cat: string | null = params.cat ?? null;

  const tl = params.tags?.split(",") ?? [];

  if (cat === "all") cat = null;
  const listedTag = tl.map((t: any) => `"${t}"`).join(",");

  const categoryCheck = cat ? `&& cat->slug.current == '${cat}'` : "";
  const tagCheck = listedTag
    ? `&& count((tags[])[@ in [${listedTag}]]) > 0`
    : "";
  console.log(tagCheck);

  const data = await fetchData<any[]>(`
		*[_type == 'news' ${categoryCheck} ${tagCheck}] {
			_id,
			t,
			bl,
			slug,
			tags,
			cat,
			ex,
			d,
			'cat': cat->slug.current,
			'catName': cat->name
		}
	`);
  const cl = await fetchData<any[]>(`
		*[_type == 'news_category']{
			...
		}
	`);

  return (
    <main id="p_news">
      <section id="heading">
        <img src="/g/art1.png" alt="" className="banner" />
        <div className="h confine">
          <div className="l"></div>
          <h2>NEWS</h2>
          <div className="r"></div>
        </div>
      </section>
      <CategorySelect cl={cl} ac={cat} tl={tl} />
      {tl && tl.length > 0 && (
        <div className="applied-tags confine">
          <p>Searching tags:</p>
          {tl.map((t: any) => {
            return (
              <p className="t" key={t}>
                {t}
              </p>
            );
          })}
        </div>
      )}

      <section id="nl" className="confine">
        {data.map((n: any) => {
          return (
            <div className="btn n" key={n._id}>
              <div className="l"></div>
              <div className="r"></div>
              <div className="np">
                <div className="date">
                  <p>{new Date(n.d).toDateString()}</p>
                </div>
                <div className="info">
                  <img
                    src={n.bl && urlFor(n.bl).url()}
                    alt=""
                    className="banner"
                  />
                  <div className="grad"></div>
                  <h2 className="news">{n.t}</h2>
                  <p className="excerpt">{n.ex}</p>

                  <div className="tags">
                    <p>{n.catName}</p>
                    {n.tags?.map((n: any) => {
                      return <p key={n}>{n}</p>;
                    })}
                  </div>
                </div>
              </div>
              <div className="nf">
                <img src="/d/nshape.svg" alt="" />
                <Link href={`/news/read/${n.slug.current}`}>
                  READ MORE <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
        {/* <div className="btn n">
          <div className="l"></div>
          <div className="r"></div>
          <div className="np">
            <div className="date">
              <p>27 June 2025</p>
            </div>
            <div className="info">
              <img src="/g/art1.png" alt="" className="banner" />
              <div className="grad"></div>
              <h2 className="news">News Title Here . .</h2>
              <p className="excerpt">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, ea
              </p>

              <div className="tags">
                <p>Category</p>
                <p>Tags</p>
                <p>Tags 2</p>
              </div>
            </div>
          </div>
          <div className="nf">
            <img src="/d/nshape.svg" alt="" />
            <a href="#">
              {" "}
              READ MORE <BsArrowRight />
            </a>
          </div>
        </div>
        <div className="btn n">
          <div className="l"></div>
          <div className="r"></div>

          <div className="np">
            <div className="date">
              <p>27 June 2025</p>
            </div>
            <div className="info">
              <img src="/g/art1.png" alt="" className="banner" />
              <div className="grad"></div>
              <h2 className="news">News Title Here . .</h2>
              <p className="excerpt">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, ea
              </p>

              <div className="tags">
                <p>Category</p>
                <p>Tags</p>
                <p>Tags 2</p>
              </div>
            </div>
          </div>
          <div className="nf">
            <img src="/d/nshape.svg" alt="" />
            <a href="#">
              {" "}
              READ MORE <BsArrowRight />
            </a>
          </div>
        </div>
        <div className="btn n">
          <div className="l"></div>
          <div className="r"></div>

          <div className="np">
            <div className="date">
              <p>27 June 2025</p>
            </div>
            <div className="info">
              <img src="/g/art1.png" alt="" className="banner" />
              <div className="grad"></div>
              <h2 className="news">News Title Here . .</h2>
              <p className="excerpt">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, ea
              </p>

              <div className="tags">
                <p>Category</p>
                <p>Tags</p>
                <p>Tags 2</p>
              </div>
            </div>
          </div>
          <div className="nf">
            <img src="/d/nshape.svg" alt="" />
            <a href="#">
              {" "}
              READ MORE <BsArrowRight />
            </a>
          </div>
        </div>
        <div className="btn n">
          <div className="l"></div>
          <div className="r"></div>

          <div className="np">
            <div className="date">
              <p>27 June 2025</p>
            </div>
            <div className="info">
              <img src="/g/art1.png" alt="" className="banner" />
              <div className="grad"></div>
              <h2 className="news">News Title Here . .</h2>
              <p className="excerpt">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, ea
              </p>

              <div className="tags">
                <p>Category</p>
                <p>Tags</p>
                <p>Tags 2</p>
              </div>
            </div>
          </div>
          <div className="nf">
            <img src="/d/nshape.svg" alt="" />
            <a href="#">
              {" "}
              READ MORE <BsArrowRight />
            </a>
          </div>
        </div> */}
      </section>
    </main>
  );
}
