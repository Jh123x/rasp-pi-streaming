import React from "react";
import styles from "../styles/mainStyle";
import { TextInput, Text, View } from "react-native";

const IPInput = (prop) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ip address</Text>
      <TextInput
        style={styles.textinput}
        placeholder="IP"
        onChangeText={prop.onPress}
      />
    </View>
  );
};

export default IPInput;
