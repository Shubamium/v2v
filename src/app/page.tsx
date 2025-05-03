import "./home.scss";
import HomeCarousel from "./home/HomeCarousel";
import HomeAbout from "./home/HomeAbout";
import HomeTalentScroll from "./home/HomeTalentScroll";
import { FaArrowRight } from "react-icons/fa";
import { getRandomArts } from "./util/utility";
import Link from "next/link";

export default function Home() {
  const auArt = getRandomArts();
  return (
    <main id="p_home">
      <HomeCarousel />
      <HomeAbout />
      <HomeTalentScroll />
      <section id="about-us">
        <div className="confine">
          <div className="la">
            <img src={auArt[0]} alt="" className="art" />
          </div>
          <div className="c">
            <svg
              width="481"
              height="88"
              viewBox="0 0 481 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="aut"
            >
              <path
                d="M81 0.999997L-3.78552e-06 87.6025L0 0.999996L81 0.999997Z"
                fill="white"
              />
              <path d="M480.5 1H109" stroke="white" />
            </svg>

            <svg
              width="481"
              height="88"
              viewBox="0 0 481 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="aub"
            >
              <path
                d="M480.5 1.2666L480.5 86.1025L401.152 86.1025L480.5 1.2666Z"
                stroke="white"
              />
              <path d="M371.5 87H0" stroke="white" />
            </svg>

            <div className="panel">
              <h2>About Us</h2>
              <p>
                Vir2alVerse supports its <u>talents</u> in{" "}
                <strong> creating quality content</strong> that entertains
                across a variety of interests!
              </p>
              <Link href={"/about"} className="btn btn-main">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="ra">
            <img src={auArt[1]} alt="" className="art" />
          </div>
        </div>
      </section>
    </main>
  );
}
