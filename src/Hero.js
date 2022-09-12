import React, { useContext } from "react";
import { AppContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const data = useContext(AppContext);
  console.log(data);

  return <h2>hero component</h2>;
};

export default Hero;
