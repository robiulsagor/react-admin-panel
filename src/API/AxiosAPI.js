import axios, { Axios } from "axios"

// const token = (localStorage.getItem('persist:root') &&
// JSON.parse(JSON.parse(localStorage.getItem('persist:root')).authSlice).token))

// const token = (JSON.parse(localStorage.getItem('persist:root')) && JSON.parse(JSON.parse(localStorage.getItem('persist:root').authSlice).token)) || ''
// console.log(token);
const token = (localStorage.getItem('persist:root') && JSON.parse(localStorage.getItem('persist:root')).authSlice && JSON.parse(JSON.parse(localStorage.getItem('persist:root')).authSlice).token) || ''

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

// get list like doctors, hospitals and specialities
export const getList = (url) => {
    return AxiosAPI.post(url).then(res => res)
}

// login user
export const fetchUser = (url, data) => {
    return axios.post(url, data).then(res => res)
}

// create elements like - create specialities
export const createRecord = (url, data) => {
    return AxiosAPI.post(url, data).then(res => res)
}

// for get single hospital details
export const getDetails = url => {
    return AxiosAPI.get(url).then(res => res)
}

// const data = { name: "Apolo", address: "Khulna" }

export const updateDetails = (url, data) => {
    return AxiosAPI.put(url, data).then(res => res)
}

export const deleteRecord = url => {
    return AxiosAPI.delete(url).then(res => res)
}
