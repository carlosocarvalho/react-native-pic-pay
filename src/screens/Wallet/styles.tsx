import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled.ScrollView`
  background-color: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 260px;
`;
export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Balance = styled.Text`
  color: #fff;
  font-size: 40px;
  font-weight: 200;
  margin: 10px 0px;
`;
export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 45px;
  border: 1px solid #fff;
  border-radius: 25px;
  margin: 0 10px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;

export const UserBalance = styled.View`
  background: #1c1c2e;
  flex-direction: row;
  height: 60px;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
`;

export const UserBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

export const PaymentContainer = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;
export const PaymentTitle = styled.Text`
  color: #8e8e92;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background-color: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin: 10px 0px;
`;

export const CardBody = styled.View`
  flex-direction: row;
  flex:1;
`;
export const CardDetail = styled.View`
  flex: 1;
  margin-right: 20px;
`;
export const CardFooter = styled.View`
  flex: 1;
  margin-right: 20px;
`;
export const CardTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const CardInfo = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 15px;
`;

export const Img = styled.Image`
  width: 60px;
`;
export const CardButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.1,
}))`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;
export const CardButtonLabel = styled.Text`
  color: #0db060;
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonTicket = styled.TouchableOpacity`
  flex-direction: row;
  
  margin: 15px 0 20px 0;
`;

export const ButtonTicketLabel = styled.Text`
  color: #0db060;
  font-size: 16px;
  margin-left: 10px;
  text-decoration-line: underline;
`;

export const ButtonTicketContainer = styled.View`
   align-items: center;
`

// export const CardButton = styled.``
// export const CardHeader = sty
