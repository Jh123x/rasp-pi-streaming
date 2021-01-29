import React from "react";
import styles from "../styles/mainStyle";
import { TextInput, Text, View } from "react-native";

const LinkInput = (prop) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Link</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Link here"
        onChangeText={prop.onPress}
      />
    </View>
  );
};

export default LinkInput;
