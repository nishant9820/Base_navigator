import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import MapScreen from "../Screens/MapScreen";
import SearchScreen from "../Screens/SearchScreen";
import PostScreen from "../Screens/PostScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Ionic from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1A1A23",
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          position: "absolute",
          borderTopColor: "transparent",
          elevation: 0,
          height: 54,
          overflow: "hidden",
        },
        tabBarIcon: ({ focused, colour }) => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = focused ? "home-sharp" : "home-outline";
            colour = focused && "#ffffff";
          } else if (route.name === "SearchScreen") {
            iconName = focused ? "ios-search-sharp" : "search-outline";
            colour = focused && "#ffffff";
          } else if (route.name === "PostScreen") {
            iconName = focused ? "md-add-sharp" : "md-add-outline";
            colour = focused && "#ffffff";
          } else if (route.name === "MapScreen") {
            iconName = focused ? "location-sharp" : "location-outline";
            colour = focused && "#ffffff";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "person-sharp" : "person-outline";
            colour = focused && "#ffffff";
          }

          return (
            <>
              <Ionic
                name={iconName}
                style={{ marginBottom: 4 }}
                size={22}
                color={colour ? colour : "#ffffff40"}
              />
              <Ionic
                name="ellipse"
                style={{ display: colour ? "flex" : "none" }}
                size={4}
                color={colour ? colour : "transparent"}
              />
            </>
          );
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="PostScreen" component={PostScreen} />
      <Tab.Screen name="MapScreen" component={MapScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default BottomTab;
