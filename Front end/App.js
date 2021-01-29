import React from "react";
import checkBeforeSend from "./functions/checkBeforeSend";
import PauseButton from "./components/PauseButton";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";


class App extends React.Component {
  ip = null;
  state = {
    url: "",
  };

  send_data(input, ip) {
    return checkBeforeSend(ip, input) ? null : Alert.alert("Invalid IP", "Ip address " + this.ip + " is invalid!");
  }

  setIP(value) {
    this.ip = value;
  }

  setState(value) {
    this.state = {
      url: value,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          placeholder="IP"
          onChangeText={(value) => this.setIP(value)}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Link here"
          onChangeText={(value) => this.setState({ url: value })}
        />
        <Button
          title="Play Video"
          onPress={() => this.send_data(this.state.url, this.ip)}
        />
        <PauseButton
          onPress={() =>
            this.send_data(
              {
                pause: true,
                resume: false,
              },
              this.ip
            )
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
    height: 60,
    width: 300,
    fontSize: 30,
    padding: 10,
  },
});

export default App;
