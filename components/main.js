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
} from "react-native";
import Todo from "./Todo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Main() {
  const [todo, setTodo] = useState();
  const [todoItems, setTodoItems] = useState([]);

  const handleTodo = () => {
    Keyboard.dismiss();

    setTodoItems([...todoItems, todo]);
    setTodo(null);
  };

  return (
    <View style={styles.container}>
      {}
      <ScrollView>
        <View style={styles.headTitle}>
          <Text style={styles.taskDiv}>okej</Text>
          <View style={styles.items}>
            {todoItems.map((item, index) => {
              return <Todo key={index} text={item} />;
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboard}
      >
        <TextInput
          style={styles.input}
          placeholder={"write a task"}
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
    backgroundColor: "#ADD8E6",
  },
  taskDiv: {
    fontSize: 24,
    fontWeight: "bold",
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
});
