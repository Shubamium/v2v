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
            considered unacceptable or not.”
          </p>

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
            “Vir2alVerse values your privacy. We will never share your
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
