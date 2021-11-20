import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SlantButton from "./SlantButton";
import VerticalTabs from "./VerticalTabs";

function Cube(props) {

  const { image } = props;

  return (
    <>
      <img className="w-full flex-grow" src={image} />
    </>
  );
}

export default Cube;
