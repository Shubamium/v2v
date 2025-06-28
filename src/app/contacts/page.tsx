"use client";
import React, { useState } from "react";

type Props = {};

import "./contacts.scss";
import { submitForm } from "../services/mail";
import { FaSpinner } from "react-icons/fa";
export default function page({}: Props) {
  const [n, setN] = useState("");
  const [e, setE] = useState("");
  const [s, setS] = useState("");
  const [m, setM] = useState("");

  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const submit = async (fe: React.FormEvent) => {
    setLoading(true);
    fe.preventDefault();

    setOutput("Submitting Form");

    const res = await submitForm(n, e, s, m);
    setOutput(
      res
        ? "Your message has been submitted!"
        : "Something went wrong. Please try again or contact another way."
    );

    setTimeout(() => {
      setLoading(false);
    }, 2000);
    clearForm();
  };

  const clearForm = () => {
    setN("");
    setE("");
    setS("");
    setM("");
  };

  return (
    <main id="p_contacts">
      <div id="cont-load" className={loading ? "visible" : "hidden"}>
        {output !== "Your message has been submitted!" && (
          <FaSpinner className="spin" />
        )}
        <p>{output}</p>
      </div>
      <section id="ch" className="confine">
        <img src="/d/bar.svg" alt="" className="bar l" />
        <img src="/d/bar.svg" alt="" className="bar r" />
        <div className="h">
          <div className="l"></div>
          <h2>Contact</h2>
          <div className="r"></div>
        </div>
      </section>
      <section id=""></section>
      <section id="cform">
        <form id="mainform" className="confine" onSubmit={submit}>
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
                required
                placeholder="Write your name here . . ."
                value={n}
                onChange={(e) => setN(e.target.value)}
              />
            </div>
            <div className="i">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                id="email"
                placeholder="your_email@mail.com"
                value={e}
                onChange={(e) => setE(e.target.value)}
              />
            </div>
          </div>
          <div className="i">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="The subject of your message. . . "
              value={s}
              onChange={(e) => setS(e.target.value)}
            />
          </div>

          <div className="i">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              required
              id="message"
              placeholder="Write your message here . . ."
              value={m}
              onChange={(e) => setM(e.target.value)}
            ></textarea>
          </div>

          <div className="act">
            <img src="/g/logo_w.png" alt="" className="logo" />
            <button className="btn btn-main" type="submit">
              SEND
            </button>
          </div>
        </form>
      </section>
      <section id="ctban">
        <picture className="art">
          <source srcSet="/g/mobilecontact2.png" media="(max-width:550px)" />
          <img src="/d/ctart.png" alt="" />
        </picture>
      </section>
    </main>
  );
}

//
