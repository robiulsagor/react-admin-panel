import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getVals } from '../../API/AxiosAPI'

const STATES_API = {
    baseUrl: 'https://api.countrystatecity.in/v1/countries/IN/states',
    apiKey: 'Wnh1SktlTTZKanhvVFU3MGJDR2s1RkJoUmJ3VU5QTDNUc0t0dnpxQQ=='
}

const initialState = {
    states: [],
    cities: [],
    isLoading: null
}

const sortValue = data => {
    return data.sort(function (a, b) {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    })
}

export const getAllStates = createAsyncThunk(
    'hospitalRegi/getAllStates',
    async () => {
        return getVals(STATES_API.baseUrl, STATES_API.apiKey).then(res => sortValue(res))
    }
)

export const getAllCities = createAsyncThunk(
    'hospitalRegi/getAllCities',
    async state => {
        return getVals(`${STATES_API.baseUrl}/${state}/cities`, STATES_API.apiKey).then(res => sortValue(res))
    }
)

const hospitalRegiSlice = createSlice({
    name: "hospitalRegi",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllStates.pending]: (state) => {
            state.isLoading = true
        },
        [getAllStates.fulfilled]: (state, action) => {
            state.states = action.payload
            state.isLoading = false
        },
        [getAllCities.pending]: (state) => {
            state.isLoading = true
        },
        [getAllCities.fulfilled]: (state, action) => {
            state.cities = action.payload
            state.isLoading = false
        },
    }
})

export default hospitalRegiSlice.reducer