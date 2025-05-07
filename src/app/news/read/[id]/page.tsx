import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

import "./read.scss";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { LuArrowUpToLine } from "react-icons/lu";
import { fetchData, urlFor } from "@/app/services/db";
import { redirect } from "next/navigation";
import { PortableText } from "next-sanity";
export default async function page({ params }: Props) {
  const id = (await params).id;

  const n = await fetchData<any>(`
		*[_type == 'news' && slug.current == '${id}'][0]{
			...,
			'cat': cat->name
		}
	`);
  if (!n) {
    redirect("/");
  }
  return (
    <main id="p_read">
      <div id="top"></div>
      <section id="newsh">
        <div className="ban">
          <img src={n.bm && urlFor(n.bm).url()} alt="" className="banner" />
        </div>
        <div className="title-part">
          <div className="confine">
            <h2 className="t">{n.t}</h2>
            <div className="b">
              <p className="d">{new Date(n.d).toDateString()}</p>
              <div className="tags">
                <p className="btn">{n.cat}</p>
                {n.tags &&
                  n.tags.map((t: any) => {
                    return (
                      <p className="btn" key={t}>
                        {t}
                      </p>
                    );
                  })}
                {/* <p className="btn">Tag 2</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="decor-light">
        <img src="/d/fgl.png" alt="" />
        <img src="/d/fgr.png" alt="" />
      </div>
      <article className="confine">
        <PortableText
          value={n.a}
          components={{
            types: {
              image: ({ value }) => {
                return <img src={urlFor(value).url()} alt="" />;
              },
            },
          }}
        />
        {/* <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
        <p>
          <a href="#">[Links Sample] Ut enim ad minima dl</a>, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pdwdwariatur?
        </p>

        <img src="/g/art1.png" alt="" />
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p> */}
      </article>
      <div className="newsf confine">
        <div className="panel">
          <Link href="/news" className="btn btn-main">
            {" "}
            <IoArrowBack /> News List
          </Link>
          <a href="#top" className="btn btn-main">
            {" "}
            <LuArrowUpToLine /> Scroll To Top
          </a>
        </div>
        <div className="rgb-line"></div>
      </div>
    </main>
  );
}
