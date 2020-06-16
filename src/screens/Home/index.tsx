import React from "react";
import {
  MaterialCommunityIcons as MCIcon,
  AntDesign,
} from "@expo/vector-icons";

import {
  Wrapper,
  ContainerScroll,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from "./styles";
import Suggestions from "../../components/Suggestions";
import Activities from "../../components/Activities"
import Tips from "../../components/Tips";
import Banner from "../../components/Banner"

export default function () {
  return (
    <Wrapper>
      <ContainerScroll>
        <Header>
          <MCIcon name="qrcode-scan" color="#10c86d" size={30} />
          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 100,00</Balance>
          </BalanceContainer>
          <AntDesign name="gift" color="#10c86d" size={30} />
        </Header>
        <Suggestions/>
        <Activities />
        <Tips />
        <Banner />
      </ContainerScroll>
    </Wrapper>
  );
}
