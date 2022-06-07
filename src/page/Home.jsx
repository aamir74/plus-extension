import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { Time } from "../components/Time";
import { UserDetails } from "../components/UserDetails";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <BackgroundImage />
      <div className="main-container">
        <div className="center-container">
          <Time />
          <UserDetails/>
        </div>
      </div>
    </div>
  );
};

export { Home };
