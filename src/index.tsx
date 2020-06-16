import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </React.Fragment>
  );
}
