import { StyleSheet, Text, View } from "react-native";
import Home from "./component/Home";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import HomeScreen from "./component/HomeScreen";

export default function App() {
  return (
    // <ThemeProvider>
    //   <View style={styles.container}>
    //     <Text style={styles.overlayText}>Om Namah Shivaya</Text>
    //     <Home />
    //   </View>
    // </ThemeProvider>
    <Provider store={store}>
      <HomeScreen />
    </Provider>
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
