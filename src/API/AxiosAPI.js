import axios from "axios"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMThlNzEwMDM0NDJiMjI0NGY2Mzc2NCIsImVtYWlsIjoiR2VyaGFyZDQ0QGdtYWlsLmNvbSIsImlhdCI6MTY1NDc3MDc1MiwiZXhwIjoxNjU1MzcwNzUyfQ.q9ifAY-duzDfu5BvqapBmmeWo5soUJL2Fa63fjczkKs"

export const AxiosAPI = axios.create({
    baseURL: 'http://65.0.4.24:8080/admin',
    headers: {
        Authorization: `Bearer ${token}`
    }
})

// to get the states and cities of the country
export const getVals = (url, apiKey) => {
    return axios.get(url, {
        headers: { "X-CSCAPI-KEY": apiKey }
    }).then(res => res.data)
}

export const getList = (url) => {
    return AxiosAPI.post(url).then(res => res)
}