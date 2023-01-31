import axios from "axios";

const url = 'https://api.unsplash.com/search/photos?page=1&'

const key = 'V0oq38UJUNC7H_Q12YsaXuskaWZuUh1u7Ltq_h_RYbE'


export default {
    getCityImg: async (city: string) => {
        let response = await axios.get(`${url}query=${city}&client_id=${key}`)
        return response.data
    }
}