import React from "react";

type Props = {};

import "./about.scss";
export default function page({}: Props) {
  return (
    <main id="p_about">
      <section id="tabout">
        <div className="lb"></div>
        <div className="rb"></div>
        <div className="confine">
          <div className="l">
            <h2 className="tagline">
              " FROM OUR <br />
              <span className="ol">
                UNIVERSE
                <br /> TO YOURS"
              </span>{" "}
              <br />
              {/* <span className="smoll"> MORE TAGLINE TEXT "</span> */}
            </h2>
            <img src="/g/chib2.png" alt="" className="chib" />
          </div>
          <div className="r">
            <img src="/g/logo_w.png" alt="" className="logo" />
            <img src="/d/bar.svg" alt="" className="bar b" />
            <img src="/d/bar.svg" alt="" className="bar t" />
            <h2>About Us</h2>
            <p>
              Vir2alVerse is a US-based VTuber agency that aims to create an
              environment where our talents can thrive! Our passion for the
              industry and persistent studying of trends makes us a powerhouse
              of VTuber knowledge.{" "}
            </p>
            <p>
              We strive to use that knowledge to produce high-quality content
              that creatively fulfills our talents and enthralls our audience.
              Our talents’ wide variety of skills and lovable personalities will
              charm their way into your heart!
            </p>
          </div>
        </div>
      </section>
      <section id="goals">
        <img src="/d/glow1.png" alt="" className="glow ni" />

        <div className="confine">
          <div className="l">
            <h2>Goals</h2>
            <img src="/d/bar.svg" alt="" className="bar" />
          </div>
          <div className="gl">
            <div className="g">
              <img src="/g/chib3.png" alt="" className="chib" />
              <h2>Freedom To Be Who You Are</h2>
              <p>
                At Vir2alVerse, we value talent freedom. When a talent proposes
                a great idea, that talent will get all the support they need to
                make that idea shine. Talents are also free to pursue a wide
                variety of niches at their discretion, including NSFW
                content.{" "}
              </p>
              <p>
                The last thing we want to do is place unnecessary restrictions
                on the creativity of our wonderful talents!
              </p>
            </div>
            <div className="g">
              <img src="/g/chib1.png" alt="" className="chib" />
              <h2>A Healthy Environment</h2>
              <p>
                It is of the utmost importance that our talents are happy,
                healthy, and feel supported by Vir2alVerse. As an agency, it is
                our duty to make sure that our talents are able to achieve their
                dreams without having to sacrifice their wellbeing. <br />{" "}
                <br />
                Talents work closely with management to assure that they are
                taking care of themselves while they create excellent content!
              </p>
            </div>
            <div className="g">
              <img src="/g/chib4.png" alt="" className="chib" />
              <h2>Ambitious Content Creation</h2>
              <p>
                We strive to constantly create high-quality content that
                enthralls our audience. Our talents are bright and ambitious
                creators who are dedicated to putting out the best work that
                they can.
                <br />
                <br />
                If it's worth doing, it's worth doing excellently - this is what
                all our talents believe in.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="ourtal">
        <div className="l">
          <img src="/g/art1.png" alt="" className="art" />
        </div>
        <div className="topl"></div>
        <div className="r">
          <svg
            width="81"
            height="80"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tang"
          >
            <path
              d="M0.500006 78.4102L0.5 0.500006L79.7783 0.5L0.500006 78.4102Z"
              stroke="white"
            />
          </svg>

          <h2>Our Talents</h2>
          <p>
            Vir2alVerse talents are passionate, talented individuals who are
            dedicated to their craft. Stronger together, they are a powerhouse
            team of creatives who always strive to entertain their fans.
          </p>
        </div>
      </section>
      <section id="request">
        <div className="bot"></div>
        <div className="confine">
          <div className="l">
            <img src="/g/requst.png" alt="" />
          </div>
          <div className="r">
            <h2>
              Request to <br />
              Minor
            </h2>
            <p>
              Some talents belonging to the Vir2alVerse brand may post content
              that must be purchased to view. In some specific cases, this
              content may be adult content that minors are not permitted to
              access. Please be mindful of content warnings when purchasing
              paywalled content.
            </p>
            <p>
              Please receive your parent’s permission before purchasing
              paywalled content. Never use your parent’s credit card without
              permission.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
