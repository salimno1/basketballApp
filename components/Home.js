import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Button,
} from "react-native";
import Main from "./main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Home({ navigation }) {
  return (
    <ImageBackground source={require("../img/jordan.jpg")} style={styles.img}>
      <View>
        <Text style={styles.container}>Ready to put in some work ?</Text>
      </View>
      <Button
        title="Say no more"
        onPress={() => navigation.navigate("Main")}
      ></Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    color: "White",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    color: "black",
    fontSize: 20,
    backgroundColor: "white",
    marginBottom: 100,
  },
  addWrapper: {
    marginTop: 100,
    width: 120,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 50,
  },
});
