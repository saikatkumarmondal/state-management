import { StyleSheet, Text, View } from "react-native";
import Home from "./component/Home";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text style={styles.overlayText}>Om Namah Shivaya</Text>
        <Home />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlayText: {
    position: "absolute",
    top: 40, // safe for most devices
    alignSelf: "center",
    zIndex: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
