import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import SavedScreen from "./screens/SavedScreen";
import BookingsScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import PlacesScreen from "./screens/PlacesScreen";


const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                tabBarLabel: "Home",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? (
                    <Entypo name="home" size={24} color="#003580" />
                    ) : (
                    <AntDesign name="home" size={24} color="black" />
                    ),
                }}
            />

            <Tab.Screen
                name="Saved"
                component={SavedScreen}
                options={{
                tabBarLabel: "Saved",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? (
                    <Entypo name="heart" size={24} color="#003580" />
                    ) : (
                    <AntDesign name="hearto" size={24} color="black" />
                    ),
                }}
            />

            <Tab.Screen
                name="Bookings"
                component={BookingsScreen}
                options={{
                tabBarLabel: "Bookings",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? (
                    <Ionicons name="notifications" size={24} color="#003580" />
                    ) : (
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                tabBarLabel: "Profile",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                    focused ? (
                    <Ionicons name="person" size={24} color="#003580" />
                    ) : (
                    <Ionicons name="person-outline" size={24} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Places" component={PlacesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
