import React, { useContext } from "react";
import { View, Button, StyleSheet, Text, SafeAreaView } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const backgroundColor = theme === "light" ? "black" : "white";
  const textColor = theme === "light" ? "white" : "black";
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>Home</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default Home;
