import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const SettingsScreen = () => {
    return (
        <View>
              
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Settings Screen</Text>
            <Image 
                source={{ uri: 'https://preview.redd.it/imo-this-is-the-best-sukuna-has-ever-looked-in-anime-the-v0-8rlq6aooua0c1.png?width=816&format=png&auto=webp&s=80fe2603fd95240f9a11e1ff0ed7e915d0413cb0' }} 
                style={{
                    width: 250,
                    height: 200,
                }}
            />
        </View>
    );
    }

export default SettingsScreen;