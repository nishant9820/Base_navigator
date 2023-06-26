import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomTab from "./BottomTabs/BottomTab";
import MaterialBottomTab from "./BottomTabs/MaterialBottomTab";
const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <MaterialBottomTab />
      {/* <BottomTab /> */}
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
