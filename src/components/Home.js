import React from "react";
import Common from "../components/Common";
import web from "../images/img1.svg";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <Common
        name="Order your food with us"
        imgsrc={web}
        visit="/service"
        btname="Scroll Down to explore"
      />
      <br />
      <br />
      <br />
      <hr />
      <Service />
    </>
  );
};

export default Home;
