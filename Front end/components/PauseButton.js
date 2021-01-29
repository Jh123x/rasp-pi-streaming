import React from "react";
import { Button, StyleSheet } from "react-native";


const PauseButton = (prop) => {
  return (
    <Button
      title="Pause/Resume"
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