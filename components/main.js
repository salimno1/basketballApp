import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Todo from "./Todo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Main() {
  const [todo, setTodo] = useState();
  const [todoItems, setTodoItems] = useState([]);

  const removeTodo = (index) => {
    console.log("salim");
  };

  const handleTodo = () => {
    Keyboard.dismiss();

    setTodoItems([...todoItems, todo]);
    setTodo(null);
    console.log(todoItems);
  };

  return (
    <ImageBackground source={require("../img/lebron.jpeg")} style={styles.img}>
      <View style={styles.container}>
        {}
        <ScrollView>
          <View style={styles.headTitle}>
            <Text style={styles.taskDiv}>DRILLS</Text>
            <View style={styles.items}>
              {todoItems.map((item, index) => {
                return <Todo key={index} text={item} removeTodo={removeTodo} />;
              })}
            </View>
            <View>
              <Text style={styles.taskDiv}>DONE</Text>
            </View>
          </View>
        </ScrollView>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboard}
        >
          <TextInput
            style={styles.input}
            placeholder={"WRITE A DRILL"}
            value={todo}
            onChangeText={(text) => setTodo(text)}
          />
          <TouchableOpacity onPress={() => handleTodo()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  inputSection: {
    backgroundColor: "black",
    height: 40,
    width: "100%",
  },
  container: {
    flex: 1,
  },
  taskDiv: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "white",
    width: 90,
    borderWidth: 2,

    alignItems: "center",
  },
  headTitle: { paddingTop: 100, paddingHorizontal: 25 },
  items: { marginTop: 20 },
  input: {
    width: 250,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "grey",
  },
  keyboard: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    aligntItems: "center",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    borderColor: "grey",
    borderWidth: 1,
  },
  addText: {},
  img: {
    width: "100%",
    height: "100%",
  },
});
