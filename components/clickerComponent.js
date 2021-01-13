import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

class ClickerApp extends React.Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("Rendering");
    return (
      <View style={style.container}>
        <Button title="Click me" color="red" onPress={this.onPress} />
        <View>
          <Text>You have clicked it {this.state.count} times!</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ClickerApp;
