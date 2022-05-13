import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Home from "./Home";
const Todo = (props) => {
  const { removeTodo, key, text } = props;
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
      </View>
      <Text style={styles.itemText}>{props.text}</Text>
      <View style={styles.buttonDiv}>
        <TouchableOpacity onPress={removeTodo}>
          <View style={styles.circular1}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.circular2}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "green",
    opacity: 0.5,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular1: {
    width: 20,
    height: 12,

    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "red",
  },
  circular2: {
    width: 20,
    height: 12,
    backgroundColor: "#AAFF00",
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonDiv: {
    width: 50,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
export default Todo;
