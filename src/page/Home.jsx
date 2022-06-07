import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { Quote } from "../components/Quote";
import { Time } from "../components/Time";
import { UserDetails } from "../components/UserDetails";
import { Weather } from "../components/Weather";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <BackgroundImage />
      <div className="main-container">
        <Weather />
        <div className="center-container">
          <Time />
          <UserDetails />
          <Quote />
        </div>
      </div>
    </div>
  );
};

export { Home };
