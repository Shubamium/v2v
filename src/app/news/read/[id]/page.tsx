import React from "react";

type Props = {};

import "./read.scss";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { LuArrowUpToLine } from "react-icons/lu";
export default function page({}: Props) {
  return (
    <main id="p_read">
      <div id="top"></div>
      <section id="newsh">
        <div className="ban">
          <img src="/g/art1.png" alt="" className="banner" />
        </div>
        <div className="title-part">
          <div className="confine">
            <h2 className="t">Write the news Title Here!</h2>
            <div className="b">
              <p className="d">27 June 2025</p>
              <div className="tags">
                <p className="btn">Category Here</p>
                <p className="btn">Tag 1</p>
                <p className="btn">Tag 2</p>
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
        </p>
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
