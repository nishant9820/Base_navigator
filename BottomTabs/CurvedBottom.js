import React from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import SearchScreen from "../Screens/SearchScreen";
import MapScreen from "../Screens/MapScreen";
import ProfileScreen from "../Screens/ProfileScreen";

const BaseNavigator = () => {
  const navigation = useNavigation();
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "Home":
        icon = "home";
        break;
      case "Search":
        icon = "business";
        break;
      case "Map":
        icon = "bookmark";
        break;
      case "profile":
        icon = "settings-sharp";
        break;
    }

    return (
      <>
        <Ionicons
          name={icon}
          size={25}
          color={routeName === selectedTab ? "#fff" : "#ffffff40"}
        />
      </>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          borderColor: "black",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBarExpo.Navigator
        style={styles.bottomBar}
        height={65}
        circleWidth={55}
        bgColor="#1A1A23"
        initialRouteName="Home"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View>
            <TouchableOpacity
              style={styles.btnCircle}
              onPress={() => navigation.navigate("PostScreen")}
            >
              <Ionicons name={"add"} color="white" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="Home"
          position="LEFT"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <CurvedBottomBarExpo.Screen
          name="Search"
          accessible={true}
          accessibilityLabel="Get more from ManageHub"
          position="LEFT"
          options={{
            headerShown: false,
          }}
          component={SearchScreen}
        />
        <CurvedBottomBarExpo.Screen
          name="Map"
          position="RIGHT"
          options={{
            headerShown: false,
          }}
          component={MapScreen}
        />
        <CurvedBottomBarExpo.Screen
          name="profile"
          component={ProfileScreen}
          position="RIGHT"
          options={{ headerShown: false }}
        />
      </CurvedBottomBarExpo.Navigator>
    </View>
  );
};
export default BaseNavigator;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {
    position: "absolute",
    borderRadius: 20,
    elevation: 1000,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#1A1A23",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  img: {
    width: 30,
    height: 30,
  },
});
