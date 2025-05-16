import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ReactLenis from "lenis/react";

type Props = {};
import { MotionGlobalConfig } from "motion/react";

// MotionGlobalConfig.skipAnimations = true;
export default function template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ReactLenis
        root
        options={{
          duration: 2.5,
        }}
      >
        <Header />
        {children}
        <Footer />
      </ReactLenis>
    </div>
  );
}
