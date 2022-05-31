import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  ImageBackground,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "react-native/Libraries/NewAppScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
const COLORS = { primary: "#1f145c", white: "#fff" };

export default function Drillsite() {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [processItem, setProcessItem] = useState([]);
  const [processNext, setProcessNext] = useState([]);

  const [doneTodo, setDoneTodo] = useState([]);

  const ListItem = ({ todo }) => {
    return (
      <View style={styles.listItem}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              textDecorationLine: todo?.completed ? "line-through" : "none",
              color: "white",
            }}
          >
            {todo?.task}
          </Text>
        </View>
        {!todo?.completed && (
          <TouchableOpacity
            style={[styles.actionIcon]}
            onPress={() => markProcessItem(todo?.id)}
          >
            <Icon name="done" size={20} color="white"></Icon>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.actionIcon, { backgroundColor: "black" }]}
          onPress={() => deleteTodo(todo?.id)}
        >
          <Icon name="delete" size={20} color="white"></Icon>
        </TouchableOpacity>
      </View>
    );
  };

  const ProccesItem = ({ process }) => {
    return (
      <View style={styles.listItem2}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,

              color: "white",
            }}
          >
            {process?.task}
          </Text>
        </View>
        {process?.completed && (
          <TouchableOpacity
            style={[styles.actionIcon]}
            onPress={() => markTodoComplete(process?.id)}
          >
            <Icon name="done" size={20} color="white"></Icon>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const DoneItem = ({ done }) => {
    return (
      <View style={styles.listItem1}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              textDecorationLine: done?.completed ? "none" : "line-through",
              color: "black",
            }}
          >
            {done?.task}
          </Text>
        </View>
      </View>
    );
  };
  const addDrill = () => {
    if (textInput == "") {
      Alert.alert("Please, write a drill");
    } else {
      const newDrill = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newDrill]);
      setTextInput("");
    }
  };
  const markProcessItem = (todoId) => {
    const newTodos = todos.map((item) => {
      if (item.id == todoId) {
        return { ...item, completed: true };
      }
      return item;
    });

    const klart = newTodos.filter((item) => item.completed == true);
    const newTodos1 = todos.filter((item) => item.id != todoId);
    setTodos(newTodos1);

    setProcessNext([...processNext, klart[0]]);
  };
  const markTodoComplete = (todoId) => {
    const newTodos = processNext.map((item) => {
      if (item.id == todoId) {
        return { ...item, completed: false };
      }
      return item;
    });

    const klart = newTodos.filter((item) => item.completed == false);
    const newTodos1 = processNext.filter((item) => item.id != todoId);
    setProcessNext(newTodos1);

    setDoneTodo([...doneTodo, klart[0]]);

    console.log(doneTodo);
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((item) => item.id != todoId);
    setTodos(newTodos);
  };

  const DeleteAll = () => {
    setTodos([]);
    setDoneTodo([]);
    setProcessNext([]);
  };
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../img/lebron.jpeg")}
        style={styles.img}
      >
        <View style={styles.header}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
              backgroundColor: "white",
              width: 90,
              borderWidth: 2,
            }}
          >
            DRILLS
          </Text>
          <Icon
            name="delete"
            size={25}
            color="black"
            style={{
              borderColor: "black",
              borderWidth: 1,
              backgroundColor: "white",
            }}
            onPress={DeleteAll}
          ></Icon>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
          data={todos}
          renderItem={({ item }) => <ListItem todo={item} />}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            width: 95,
            borderWidth: 2,
            marginLeft: 50,
          }}
        >
          Process
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
          data={processNext}
          renderItem={({ item }) => <ProccesItem process={item} />}
        />

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            width: 75,
            borderWidth: 2,
            marginLeft: 50,
          }}
        >
          DONE
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
          data={doneTodo}
          renderItem={({ item }) => <DoneItem done={item} />}
        />

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Add a drill"
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
              style={{ fontSize: 25 }}
            ></TextInput>
          </View>

          <TouchableOpacity onPress={addDrill}>
            <View style={styles.iconContainer}>
              <Icon name="add" color={COLORS.white} size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    marginLeft: 50,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    height: 70,
    color: COLORS.white,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "black",
    opacity: 0.8,
  },
  inputContainer: {
    backgroundColor: "white",
    elevation: 40,
    flex: 1,
    height: 40,
    marginVertical: 20,
    marginRight: 20,
    borderradius: 30,
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    elevation: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    padding: 2,
    paddingLeft: 10,
    width: 300,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 1,
    marginVertical: 5,
    height: "auto",
    borderColor: "white",
    borderWidth: 1,
    opacity: 0.7,
  },
  listItem2: {
    padding: 2,
    paddingLeft: 10,
    width: 300,
    backgroundColor: "grey",
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 1,
    marginVertical: 5,
    height: "auto",
    borderColor: "white",
    borderWidth: 1,
    opacity: 0.7,
  },
  listItem1: {
    padding: 2,
    paddingLeft: 10,
    width: 300,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 1,
    marginVertical: 5,
    height: "auto",
    borderColor: "black",
    borderWidth: 1,
    opacity: 0.7,
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    borderRadius: 3,
    opacity: 0.9,
  },

  img: {
    color: "White",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});
