import React from "react";
import { Container } from "./styles";

import { Option, Title, Img } from "./styles";

const options = [
  {
    key: String(Math.random()),
    title: "Pague suas contas sem sair de casa",
    img: require("../../images/08.png"),
    bgColor: '#172c4a'
  },
  {
    key: String(Math.random()),
    title: "Pague suas contas sem sair de casa",
    img: require("../../images/09.png"),
    bgColor: '#6a0159'
  },
  {
    key: String(Math.random()),
    title: "Pague suas contas sem sair de casa",
    img: require("../../images/10.png"),
    bgColor: '#4139c8'
  },
  {
    key: String(Math.random()),
    title: "Pague suas contas sem sair de casa",
    img: require("../../images/11.png"),
    bgColor: '#001b4b'
  },
  {
    key: String(Math.random()),
    title: "Pague suas contas sem sair de casa",
    img: require("../../images/11.png"),
    bgColor: '#ba2f76'
  },
];

export default function Tips() {
  return (
    <Container>
      {options.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}
