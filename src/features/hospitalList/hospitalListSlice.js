import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetails, getList } from "../../API/AxiosAPI";

const initialState = {
    hospitals: [],
    isLoading: false,
    isSuccess: false,
    isError: false
}

export const getAllHospitals = createAsyncThunk(
    'hospitalList/getAllHospitals',
    async () => {
        return getList('hospital/list').then(res => res.data.data.data)
    }
)

const hospitalListSlice = createSlice({
    name: "hospitalList",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllHospitals.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        },
        [getAllHospitals.fulfilled]: (state, action) => {
            state.hospitals = action.payload
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
        },
        [getAllHospitals.rejected]: (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        },
    }
})

export default hospitalListSlice.reducer