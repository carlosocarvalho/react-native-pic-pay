import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {AntDesign, Ionicons } from '@expo/vector-icons'


import HomeScreen from "./screens/Home";
import PayScreen from "./screens/Pay";
import WalletScreen from "./screens/Wallet";
import PayButton from "./components/PayButton";


const icons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard'
    },
    Notification: {
        lib: Ionicons,
        name: 'ios-notifications-outline'
    },
    Adjuste: {
        lib: AntDesign,
        name: 'setting'
    }

}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
    initialRouteName="Pay"
      tabBarOptions={{
          style:{
              backgroundColor: '#131418',
              borderTopColor: 'rgba(255,255,255,0.2)'
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#92929c'
      }}
      screenOptions={({route, navigation})=>({
        tabBarIcon: ({color, size, focused}) => {
            if( route.name === 'Pay') 
               return (
                      <PayButton
                        onPress={()=>navigation.navigate('Pay')}
                        focused={focused}

                      />
                    )
            const { lib: Icon , name} = icons[route.name]
            return <Icon name={name} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
        }}
      />
      <Tab.Screen
        name="Wallet"
        options={{
          title: "Carteira",
        }}
        component={WalletScreen}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
            title: "",
          }}
       
      />
      <Tab.Screen
        name="Notification"
        component={PayScreen}
        options={{
          title: "Notificações",
        }}
      />
      <Tab.Screen
        name="Adjuste"
        component={PayScreen}
        options={{
          title: "Ajustes",
        }}
      />
    </Tab.Navigator>
  );
}
