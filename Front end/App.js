import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

const send_data = async (data) => {
  //  Send data to the raspberry pi
  data = JSON.stringify(data);
  console.log(data);
  return fetch("http://192.168.1.184:8080/video", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Content-Length': 105,
    },
    body: data,
  }).then(response => response.json()).catch(error => { console.log(error) });
}

class App extends React.Component {
  state = {
    textInputValue: "",
  };

  setState(value) {
    this.state = {
      textInputValue: value,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          placeholder="Link here"
          onChangeText={(value) => this.setState({ url: value })}
        />
        <Button
          title="Click me"
          onPress={() =>
            send_data(this.state.textInputValue)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
  textinput: {
    alignItems: "center",
    height: 30,
    width: 300,
    fontSize: 30,
  },
});

export default App;
