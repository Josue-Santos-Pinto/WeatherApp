import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "../components/Header";
import { WeatherSearch } from "../components/WeatherSearch";

export function Home() {
  const date = new Date();
  const Hour = date.getHours();

  const [img, setImg] = useState<HTMLInputElement>();

  useEffect(() => {
    if (Hour >= 5 && Hour < 12) {
      setImg(require("../assets/bg/morning.jpg"));
    } else if (Hour >= 12 && Hour < 18) {
      setImg(require("../assets/bg/afternoon.jpg"));
    } else {
      setImg(require("../assets/bg/night.jpg"));
    }
  }, [Hour]);

  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView>
        <WeatherSearch />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
