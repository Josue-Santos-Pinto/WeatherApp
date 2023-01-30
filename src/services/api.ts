import axios from "axios";

const url = 'https://api.openweathermap.org/data/2.5/weather?'

const key = '59fb371af4cd2ab9b19d557dc0a1e706'


export default {
    getWeather: async (city: string) => {
        let response = await axios.get(`${url}q=${city}&units=metric&appid=${key}&lang=pt_br`)
        return response.data
    }
}