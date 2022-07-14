import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="/videos/video-2.mp4"
        controls
        muted
        autoPlay={"autoplay"}
        preload="auto"
        loop
      ></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--outline"
        >
          GET STARTED
        </Button>

        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--primary"
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
}
export default HeroSection;
