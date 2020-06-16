import React from "react";
import { Feather, MaterialCommunityIcons as Icon, AntDesign } from '@expo/vector-icons'

import {
  Header,
  Container,
  Title,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Description,
  Bold,
  UserName,
  CardFooter,
  Value,
  Details,
  Divider,
  Date, 
  DateLabel,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

const avatar = require("../../images/avatar.png");

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>Iolanda Carvalho</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Carlos Carvalho</UserName>
        </CardBody>
        <CardFooter>
            <Details>
                <Value>R$ 10,00</Value>
                <Divider />
                <Date>
                    <Feather  color="#fff" size={14} name="lock" />
                    <DateLabel>Há 2 meses</DateLabel>
                </Date>
            </Details>
            <Actions>
                <Option>
                    <Icon size={14} name="comment-outline" color="#fff"/>
                    <OptionLabel>0</OptionLabel>
                </Option>
                <Option>
                    <AntDesign size={14} name="hearto" color="#fff"/>
                    <OptionLabel>0</OptionLabel>
                </Option>
            </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
