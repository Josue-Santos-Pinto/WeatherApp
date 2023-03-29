import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "./Button";

export function WeatherSearch() {
  const navigation = useNavigation();

  const [city, setCity] = useState("");

  const mainCities = [
    {
      name: "Rio de Janeiro",
      img: require("../assets/cities/riodejaneiro.jpg"),
    },
    { name: "São Paulo", img: require("../assets/cities/saopaulo.jpg") },
    { name: "Nova Iorque", img: require("../assets/cities/novaiorque.jpg") },
    { name: "Tokyo", img: require("../assets/cities/tokyo.jpg") },
  ];

  const handleSubmit = () => {
    if (city.trim() !== "") {
      navigation.navigate("Weather", { city });
      setCity("");
    } else {
      alert("Digite uma cidade");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        <Text style={styles.text}>Pesquisar cidade: </Text>
        <TextInput
          style={styles.searchInput}
          placeholder="ex.: São Paulo"
          onChangeText={(e) => setCity(e)}
          value={city}
        />
        <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
          <Text style={{ color: "#FFF", fontSize: 15 }}>Pesquisar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainCitiesButtons}>
        {mainCities.map((city, index) => (
          <Button key={index} city={city} activeOpacity={0.7} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  searchArea: {
    flex: 1,
    maxHeight: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 20,
  },
  searchInput: {
    width: "95%",
    height: 50,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginTop: 15,
  },
  Button: {
    width: "50%",
    height: 50,
    backgroundColor: "#00B37E",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mainCitiesButtons: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },
});
