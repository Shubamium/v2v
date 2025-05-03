import React from "react";

type Props = {};

import "./contacts.scss";
export default function page({}: Props) {
  return (
    <main id="p_contacts">
      <section id="ch" className="confine">
        <img src="/d/bar.svg" alt="" className="bar l" />
        <img src="/d/bar.svg" alt="" className="bar r" />
        <div className="h">
          <div className="l"></div>
          <h2>Contact</h2>
          <div className="r"></div>
        </div>
      </section>
      <section id="cform">
        <form id="mainform" className="confine">
          <div className="lightbar ni">
            <img src="/d/fgl.png" alt="" />
            <img src="/d/fgr.png" alt="" />
          </div>
          <div className="sidel"></div>
          <div className="sider"></div>
          <div className="ig">
            <div className="i">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Write your name here . . ."
              />
            </div>
            <div className="i">
              <label htmlFor="email">Name</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your_email@mail.com"
              />
            </div>
          </div>
          <div className="i">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="The subject of your message. . . "
            />
          </div>

          <div className="i">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your message here . . ."
            ></textarea>
          </div>

          <div className="act">
            <img src="/g/logo_w.png" alt="" className="logo" />
            <button className="btn btn-main" type="submit">
              {" "}
              SEND
            </button>
          </div>
        </form>
      </section>
      <section id="ctban">
        <img src="/d/ctf.png" alt="" />
      </section>
    </main>
  );
}
