import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ClickerApp from "./components/clickerComponent";
import Test from "./components/testcomponent"

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ClickerApp />
        <Test />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flex: 0.5
  }
})


export default App;
