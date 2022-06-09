import axios from "axios"

export const getVals = (url, apiKey) => {
    return axios.get(url, {
        headers: { "X-CSCAPI-KEY": apiKey }
    }).then(res => res.data)
}