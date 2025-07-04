"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./password.scss";
type Props = {
  children: React.ReactNode;
};

export default function Password({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [pass, setPass] = useState("");

  const checkPw = (pw: string) => {
    if (pw === "kuroneko1234-shubamium") {
      setOpen(true);
    } else {
      alert("Wrong Password");
    }
  };

  return !open ? (
    <div id="gate">
      <p>Enter the password:</p>
      <input
        type="password"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />
      <button className="btn btn-main" onClick={() => checkPw(pass)}>
        Enter
      </button>
    </div>
  ) : (
    children
  );
}
