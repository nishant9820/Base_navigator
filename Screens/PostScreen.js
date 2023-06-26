import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
