import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetails, getList } from "../../API/AxiosAPI";

const initialState = {
    hospitals: [],
    isLoading: false
}

export const getAllHospitals = createAsyncThunk(
    'hospitalList/getAllHospitals',
    async () => {
        return getList('hospital/list').then(res => res.data.data.data)
    }
)

export const getHospitalDetails = createAsyncThunk(
    'hospitalList/gethHospitalDetails',
    async (id, { rejectWithValue }) => {
        try {
            const getData = await getDetails(`/hospital/${id}`)
            console.log(getData);
            return await getData
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const hospitalListSlice = createSlice({
    name: "hospitalList",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllHospitals.pending]: (state) => {
            state.isLoading = true
        },
        [getAllHospitals.fulfilled]: (state, action) => {
            state.isLoading = false
            state.hospitals = action.payload
        },
    }
})

export default hospitalListSlice.reducer