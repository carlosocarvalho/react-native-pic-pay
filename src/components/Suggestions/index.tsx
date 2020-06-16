import React from "react";
import { Container, Option, Img, Label } from "./styles";

const img1 = require("../../images/01.png");
const img2 = require("../../images/02.png");
const img3 = require("../../images/03.png");
const img4 = require("../../images/04.png");
const img5 = require("../../images/05.png");
const img6 = require("../../images/06.png");
const img7 = require("../../images/07.png");
const img8 = require("../../images/08.png");

const options = [
  {
    key: String(Math.random()),
    img: img1,
    label: "Recarga",
  },
  {
    key: String(Math.random()),
    img: img2,
    label: "Uber",
  },
  {
    key: String(Math.random()),
    img: img3,
    label: "Onibus",
  },
  {
    key: String(Math.random()),
    img: img4,
    label: "Tv",
  },
  {
    key: String(Math.random()),
    img: img5,
    label: "Doacões",
  },
  {
    key: String(Math.random()),
    img: img6,
    label: "Boletos",
  },
];
const Suggestions = () => {
  return (
    <Container>
      {options.map((item) => (
        <Option key={item.key}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
};

export default Suggestions;
