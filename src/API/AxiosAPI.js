import axios from "axios"

const token = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).authSlice).token

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

// get list like doctors and hospitals
export const getList = (url) => {
    return AxiosAPI.post(url).then(res => res)
}

// login user
export const fetchUser = (url, data) => {
    return AxiosAPI.post(url, data).then(res => res)
}