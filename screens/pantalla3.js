import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorChangingScreen = () => {
  const [colors, setColors] = useState({
    button1: "#FF5733",
    button2: "#33FF57",
    button3: "#3357FF",
    button4: "#FF33A8",
  });

  const changeColor = (buttonKey) => {
    setColors((prevColors) => ({
      ...prevColors,
      [buttonKey]: generateRandomColor(),
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Botones</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.button1 }]}
        onPress={() => changeColor("button1")}
      >
        <Text style={styles.buttonText}>Botón 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.button2 }]}
        onPress={() => changeColor("button2")}
      >
        <Text style={styles.buttonText}>Botón 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.button3 }]}
        onPress={() => changeColor("button3")}
      >
        <Text style={styles.buttonText}>Botón 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.button4 }]}
        onPress={() => changeColor("button4")}
      >
        <Text style={styles.buttonText}>Botón 4</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282828",
  },
  title: {
    fontSize: 28,
    color: "#00ff00",
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    width: 200,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ColorChangingScreen;