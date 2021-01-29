import React from "react";
import send_data from './sendData';
import { Button, StyleSheet } from "react-native";


const PauseButton = (prop) => {
  return (
    <Button
      title="Pause"
      style={styles.button}
      onPress={prop.onPress}
    />
  );
}

const styles = StyleSheet.create(
  {
    button: {
      height: 40,
    }
});

export default PauseButton;