import React from "react";
import styles from "./styles/mainStyle";
import IPInput from "./components/IPInput";
import LinkInput from "./components/LinkInput";
import { View, Button, Alert } from "react-native";
import PauseButton from "./components/PauseButton";
import checkBeforeSend from "./functions/checkBeforeSend";

class App extends React.Component {
  ip = null;
  state = {
    url: "",
  };

  send_data(input, ip) {
    return checkBeforeSend(ip, input)
      ? null
      : Alert.alert(
          "Invalid IP",
          "IP address: '" + (this.ip ? this.ip : " ") + "' is invalid!"
        );
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
      <View style={styles.main_container}>
        <IPInput onPress={(value) => this.setIP(value)} />
        <LinkInput onPress={(value) => this.setState({ url: value })} />
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

export default App;
