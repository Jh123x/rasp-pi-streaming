import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ClickerApp from "./components/clickerComponent";
import Test from "./components/testcomponent"

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ClickerApp style={{flex: 0.25}} />
        <Test style={{flex: 0.25}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flex: 1
  }
})


export default App;
