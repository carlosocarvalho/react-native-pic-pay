import React from "react";
import {
  Feather,
  MaterialCommunityIcons as Icon,
  AntDesign,
} from "@expo/vector-icons";
import { Switch } from "react-native-gesture-handler";

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Balance,
  Bold,
  EyeButton,
  Info,
  Actions,
  Button,
  ButtonLabel,
  UserBalance,
  UserBalanceTitle,
  PaymentContainer,
  PaymentTitle,
  Card,
  CardBody,
  CardTitle,
  CardInfo,
  Img,
  CardDetail,
  CardFooter,
  CardButton,
  CardButtonLabel,
  ButtonTicket,
  ButtonTicketLabel,
  ButtonTicketContainer,
} from "./styles";

const creditCard = require("../../images/credit-card.png");

export default function () {

  const [visible, setVisible] = React.useState(true)
  const [balance, setBalance] = React.useState(true)
  const toggleVisible = () => setVisible((prevState) => !prevState) 
  const toggleBalance = () => setBalance((prevState) => !prevState)

  return (
    <Wrapper>
      <Header 
      colors={
          balance ? ["#52e78c", "#1ab563"] : ["#d3d3d3", "#868686"]
        }
      >
        <HeaderContainer>
          <Title>Saldo Pic Pay</Title>
          <BalanceContainer>
            <Balance>
              R$
              <Bold> { visible ?  `0,00` : `----` }</Bold>
            </Balance>
            <EyeButton onPress={toggleVisible}>
              <Feather color="#fff" size={28} name={visible ? 'eye' : 'eye-off'} />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Button>
              <Icon name="toolbox-outline" size={25} color="#fff" />
              <ButtonLabel>Adicionar</ButtonLabel>
            </Button>

            <Button>
              <Icon name="bank-outline" size={25} color="#fff" />
              <ButtonLabel>Retirar</ButtonLabel>
            </Button>
          </Actions>
        </HeaderContainer>
      </Header>
      <UserBalance>
        <UserBalanceTitle>Usar seu saldo</UserBalanceTitle>
        <Switch 
          value={balance}
          onValueChange={toggleBalance}
          thumbColor={balance ? '#1ab563' : '#868686'}
        />
      </UserBalance>
      <PaymentContainer>
        <PaymentTitle>Formas de Pagamentos</PaymentTitle>
        <Card>
          <CardBody>
            <CardDetail>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre um cartão de crédito para poder fazer pagamentos mesmo
                quando não tiver saldo no seu picpay.
              </CardInfo>
            </CardDetail>
            <Img source={creditCard} resizeMode="contain" />
          </CardBody>
          <CardFooter>
            <CardButton>
              <AntDesign size={30} color="#0db060" name="pluscircleo" />
              <CardButtonLabel>Adicionar cartão de crédito</CardButtonLabel>
            </CardButton>
          </CardFooter>
        </Card>
        <ButtonTicketContainer>
        <ButtonTicket>
          <Icon size={20} color="#0db060" name="ticket-outline" />
          <ButtonTicketLabel>Usar código promocional</ButtonTicketLabel>
        </ButtonTicket>
        </ButtonTicketContainer>
      </PaymentContainer>
    </Wrapper>
  );
}
