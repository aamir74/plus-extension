import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { Quote } from "../components/Quote";
import { Time } from "../components/Time";
import { Todos } from "../components/Todos";
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
        <Todos />
      </div>
    </div>
  );
};

export { Home };
