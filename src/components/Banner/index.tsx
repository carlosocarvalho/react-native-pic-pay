import React from "react";
import { Container, Details, Img, Title, Description } from "./styles";

const img13 = require("../../images/13.png");

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer cobrancas.
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
}
