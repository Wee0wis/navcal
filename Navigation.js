import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import ImgText from "./screens/pantalla1";
import VideoScreen from "./screens/pantalla2";
import ColorChangingScreen from "./screens/pantalla3";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStackNavigator = createNativeStackNavigator();

function Pantallaone() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="Pantalla1"
        >
            <HomeStackNavigator.Screen
                name="Pantalla1"
                component={ImgText}
            />
            <HomeStackNavigator.Screen
                name="pantalla1"
                component={ImgText}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}   


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions= {{
            tabBarActiveTintColor: 'purple',
        }}
      >
        <Tab.Screen 
            name="1" 
            component={Pantallaone} 
            options={{
                tabBarLabel: 'Pantalla1',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={30} />
                ),
                tabBarBadge: 10,
                headerShown: false,
            }}
        />
        <Tab.Screen 
            name="2" 
            component={VideoScreen}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
                ),
            }}
        />
         <Tab.Screen 
            name="3" 
            component={ColorChangingScreen}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
                ),
            }}
        />
    </Tab.Navigator>
    );
}


export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

