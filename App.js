import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Clicked");
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text onPress={handlePress}>Hello World</Text>
      {/* <Image source={require("./assets/icon.png")}/> */}
      <TouchableHighlight onPress={handlePress}>
        <Image
          blurRadius={0}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button
        title="Click me"
        backgroundColor="red"
        onPress={() =>
          Alert.alert("Title", "Button pressed", [
            { text: "Yes", onPress: () => console.log("Yes pressed") },
            { text: "No", onPress: () => console.log("No pressed") },
          ])
        }
      />

      {/* This does not work on android as of now only IOS */}
      <Button
        title="Prompt me"
        onPress={() =>
          Alert.prompt("Prompt", "Enter your prompt", (text) =>
            console.log(text)
          )
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = {
  backgroundColor: "orange",
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Can grow to fit the area
    // backgroundColor: "#fff", // Color of the background
    alignItems: "center", // Align the properties at the center
    justifyContent: "center", // Put the text justified towards the center
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
