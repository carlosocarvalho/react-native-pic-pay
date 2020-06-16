import React from "react";
import { Wrapper } from "./styles";
import { MaterialCommunityIcons as MCIcon } from "@expo/vector-icons";

import { Header, SearchInput, Container } from "./styles";

export default function () {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MCIcon name="qrcode-scan" color="#10c86d" size={30} />
          <SearchInput placeholder="O que você quer pagar ?"/>
        </Header>
      </Container>
    </Wrapper>
  );
}
