import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { CITY_IMG_KEY, WEATHER_KEY } from "../keys";
import axios from "axios";

interface Params {
  city: string;
}

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

const CITY_IMG_URL = "https://api.unsplash.com/search/photos?page=1&";

const API_COUNTRY_FLAG = "https://countryflagsapi.com/png/";

export function Weather() {
  const navigation = useNavigation();

  const route = useRoute();

  const { city } = route.params as Params;

  const getWeatherInfo = async (city: string) => {
    let response = await axios.get(
      `${WEATHER_URL}q=${city}&units=metric&appid=${WEATHER_KEY}&lang=pt_br`
    );
    return response.data;
  };

  const getCityImg = async (city: string) => {
    let response = await axios.get(
      `${CITY_IMG_URL}query=${city}&client_id=${CITY_IMG_KEY}`
    );
    return response.data;
  };

  const weatherReq = useQuery(["weather-data", city], () =>
    getWeatherInfo(city)
  );

  const imgReq = useQuery(["city-data", city], () => getCityImg(city));

  const n = Math.floor(Math.random() * 5);

  if (weatherReq.isError) {
    alert("Cidade não encontrada");
    navigation.reset({ index: 1, routes: [{ name: "Home" }] });
  }
  if (imgReq.isError) {
    alert("Cidade não encontrada");
    navigation.reset({ index: 1, routes: [{ name: "Home" }] });
  }

  return (
    <View style={styles.container}>
      {!weatherReq.isLoading &&
      !imgReq.isLoading &&
      !imgReq.isError &&
      !weatherReq.isError ? (
        <>
          <View style={styles.imgCity}>
            {!imgReq.isError && (
              <Image
                source={{ uri: imgReq.data.results[n].urls.full }}
                style={{ width: "100%", height: "110%" }}
                resizeMode="cover"
              />
            )}
          </View>
          <View style={styles.weatherInfo}>
            <View style={styles.titleView}>
              <FontAwesome
                name="map-marker"
                size={25}
                color="#333"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.titleText}>{weatherReq.data.name}</Text>
              <Image
                source={{ uri: API_COUNTRY_FLAG + weatherReq.data.sys.country }}
                style={{ width: 25, height: 25, marginLeft: 10 }}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.temp}>
              {parseInt(weatherReq.data.main.temp)} ºC
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.tempInfo}>
                {weatherReq.data.weather[0].description}
              </Text>
              <Image
                source={{
                  uri: `http://openweathermap.org/img/wn/${weatherReq.data.weather[0].icon}.png`,
                }}
                style={{ width: 50, height: 50 }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: 100,
                justifyContent: "space-around",
                marginTop: 30,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo
                  name="drop"
                  size={25}
                  color="#333"
                  style={{ marginRight: 10 }}
                />
                <Text>{weatherReq.data.main.humidity}%</Text>
              </View>

              <View
                style={{ width: 1, height: "100%", backgroundColor: "#000" }}
              ></View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5
                  name="wind"
                  size={25}
                  color="#333"
                  style={{ marginRight: 10 }}
                />
                <Text>{weatherReq.data.wind.speed} km/h</Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#FFF" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imgCity: {
    flex: 1,
  },
  weatherInfo: {
    width: "100%",
    height: "60%",
    minHeight: 400,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    padding: 15,
  },
  titleView: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 25,
    color: "#000",
  },

  temp: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  tempInfo: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    color: "#CCC",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});
