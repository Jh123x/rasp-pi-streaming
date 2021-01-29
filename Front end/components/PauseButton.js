import React from "react";
import { Button } from "react-native";
import styles from "../styles/mainStyle";

const PauseButton = (prop) => {
  return (
    <Button title="Pause/Resume" style={styles.button} onPress={prop.onPress} />
  );
};

export default PauseButton;
