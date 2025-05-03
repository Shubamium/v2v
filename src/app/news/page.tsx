import React from "react";

type Props = {};

import "./news.scss";
import { FaFilter } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
export default function page({}: Props) {
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

      <section id="category">
        <img src="/d/glow.svg" alt="" className="glow ni" />
        <div className="confine">
          <div className="cl">
            <button className="btn btn-cat act">All</button>
            <button className="btn btn-cat">CATEGORY 1</button>
            <button className="btn btn-cat">CATEGORY 2</button>
            <button className="btn btn-cat">CATEGORY 3</button>
            <button className="btn btn-cat">CATEGORY 4</button>
          </div>
          <div className="fil">
            <button className="btn btn-fil">
              <FaFilter />
            </button>
          </div>
        </div>
      </section>
      <section id="nl" className="confine">
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
            <Link href="/news/read/news-id">
              {" "}
              READ MORE <BsArrowRight />
            </Link>
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
      </section>
    </main>
  );
}
