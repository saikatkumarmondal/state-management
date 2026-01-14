import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
const HomeScreen = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const backgroundColor = theme === "light" ? "white" : "black";
  const textColor = theme === "light" ? "black" : "white";
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>Home Screen</Text>
      <Button title="Toggle Theme" onPress={() => dispatch(toggleTheme())} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
});
export default HomeScreen;
