import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ImgText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esto es una lata de monster</Text>
      <Image
        source={{
          uri: "https://cache-aldryn-webs.s3.eu-west-1.amazonaws.com/gallery/media/image/product/monster-nitro-super-dry-500-ml-1-2-caja-1726496551.png",
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828", // Fondo oscuro
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: "#00ff00", // Color verde vibrante
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 400, // Ajusta para que sea más alta
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#00ff00", // Borde verde a juego con el tema Monster
  },
});

export default ImgText;