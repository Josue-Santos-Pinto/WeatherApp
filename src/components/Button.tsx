import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  city: {
    name: string;
    img: HTMLImageElement;
  };
}

export function Button({ city }: ButtonProps) {
  const navigation = useNavigation();

  const handleSubmitButtons = (city: string) => {
    navigation.navigate("Weather", { city });
  };

  return (
    <View style={styles.cardItem}>
      <Text style={styles.mainCityName}>{city.name}</Text>
      <ImageBackground
        style={{
          flex: 1,
          overflow: "hidden",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        source={city.img}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleSubmitButtons(city.name)}
        >
          <Text style={styles.text}>Ver clima {">>>"}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
  mainCityName: {
    color: "#000",
    fontSize: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  Button: {
    width: "50%",
    height: 50,
    position: "absolute",
    bottom: 0,
    right: 0,

    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  searchInput: {
    width: "95%",
    height: 50,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
