import React from "react";

type Props = {};

import "./guidelines.scss";
export default function page({}: Props) {
  return (
    <main id="p_guidelines">
      <section id="main-g" className="confine">
        <div className="l">
          <div className="heading">
            <div className="dia ni"></div>
            <h2>Guidelines</h2>
          </div>
          <p>
            Vir2alVerse is extremely grateful for fans who wish to create
            derivative works of our brand or talents. However, for the
            protection of all involved, please carefully review our fanwork
            guidelines below.
          </p>
          <h3>What is considered “derivative work?”</h3>
          <ul>
            <li>
              Derivative works are defined as creations depicting characters,
              illustrations, clipped content, music, or other material that
              Vir2alVerse retains the rights to.
            </li>
            <li>
              In order to be defined as derivative work, the piece must have
              creative input that distinguishes it from official works owned by
              Vir2alVerse, unless otherwise granted permission from Vir2alVerse.
            </li>
            <li>
              Fans creating derivative works must agree that all content created
              by Vir2alVerse belongs to Vir2alVerse, and ultimately exercises
              ownership over the usage of derivative works.
            </li>
            <li>
              These guidelines apply only to individuals and non-corporate
              entities. For corporations who wish to create derivative work,
              please contact us here.
            </li>
          </ul>
          <h3>Clipping</h3>
          <ul>
            <li>Clipping of members-only content is strictly prohibited.</li>
          </ul>
          <h3>Fan Merchandise</h3>
          <ul>
            <li>
              Please keep the sale of derivative works at a solely hobbyist
              level. Vir2alVerse retains the right to determine what “hobbyist
              level” entails depending on various factors such as sales,
              popularity, or nature of the derivative work.
            </li>

            <li>Do not alter and resell official merchandise.</li>
            <li>
              Do not use official Vir2alVerse media to promote business or
              commercial ventures unless permitted by Vir2alVerse.
            </li>
            <li>
              Do not resell, alter, or otherwise reuse art commissioned by
              Vir2alVerse in a commercial manner.
            </li>
            <li>
              We reserve the right to request that the sale of fan merchandise
              stops.
            </li>
          </ul>

          <h3>Guidelines</h3>
          <ul>
            <li>
              Refrain from creating derivative work of a talent that the talent
              would find disagreeable.
            </li>
            <li>
              Do not attempt to impersonate or falsely represent Vir2alVerse or
              its members. Works that can be mistaken as official are
              prohibited.
            </li>
            <li>
              Refrain from creating works that damage the image of Vir2alVerse
              or its members.
            </li>
            <li>
              Do not create works that violate regulations of the platforms that
              they are posted on, or violate local laws against depictions of
              certain material in media.
            </li>
            <li>Do not create works that are socially unacceptable.</li>
            <li>
              Refrain from creating any derivative work that Vir2alVerse might
              find unacceptable. Vir2alVerse retains the final say in what is
              considered unacceptable or not.
            </li>
          </ul>
          {/* <p>
            Refrain from creating derivative work of a talent that the talent
            would find disagreeable.  Do not attempt to impersonate or falsely
            represent Vir2alVerse or its members. Works that can be mistaken as
            official are prohibited.
          </p>
          <p>
            Refrain from creating works that damage the image of Vir2alVerse or
            its members. Do not create works that violate regulations of the
            platforms that they are posted on, or violate local laws against
            depictions of certain material in media.
          </p>
          <p>Do not create works that are socially unacceptable.</p>
          <p>
            Refrain from creating any derivative work that Vir2alVerse might
            find unacceptable. Vir2alVerse retains the final say in what is
            considered unacceptable or not.
          </p> */}

          <div className="ap">
            <img src="/g/chib1.png" alt="" className="chib" />
            <img src="/d/bar.svg" alt="" className="bar" />
          </div>
        </div>
        <div className="r">
          <div className="ap">
            <img src="/g/chib4.png" alt="" className="chib" />
            <img src="/d/bar.svg" alt="" className="bar" />
          </div>
          <div className="heading">
            <div className="dia ni"></div>
            <h2>Privacy Policy</h2>
          </div>
          <p>
            Vir2alVerse values your privacy. We will never share your
            information without your permission unless legally mandated by the
            United States.
          </p>
          <p>
            We will not be held responsible for data collected from partner
            sites.
          </p>
          <p>
            You agree that any information you provide is voluntarily disclosed.
            By disclosing information to the site, you agree to receive
            electronic communications from Vir2alVerse.
          </p>
          <p>
            Information that is disclosed publicly will not identify any
            individual user.
          </p>
          <p>
            We do not collect data from those under 13 years of age. To access
            the site as a person under 18 years of age, please get a parent or
            guardian’s permission.
          </p>
          <p>
            You may request, via email, that all information regarding you be
            deleted from our databases. 
          </p>
          <p>
            Vir2alVerse collects information from users for the following
            purposes:
          </p>
          <ul>
            <li>Assessing talent, staff, artist, etc. applications</li>
            <li>Sending communications</li>
            <li>Shipping products</li>
            <li>Preventing fraud</li>
            <li>Improving services</li>
          </ul>
          <p>
            Vir2alVerse reserves the right to change the privacy policy at any
            time.
          </p>
        </div>
      </section>
    </main>
  );
}
