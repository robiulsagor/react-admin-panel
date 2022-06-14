import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetails, getList } from "../../API/AxiosAPI";

const initialState = {
    data: {},
    isLoading: false,
    isSuccess: false,
    isError: false
}

export const getHospitalDetails = createAsyncThunk(
    'getDetails/gethHospitalDetails',
    async (id, { rejectWithValue }) => {
        try {
            const getData = await getDetails(`/hospital/${id}`)
            return await getData.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const getDoctorDetails = createAsyncThunk(
    'getDetails/getDoctorDetails',
    async (id, { rejectWithValue }) => {
        try {
            const getData = await getDetails(`/user/${id}`)
            return await getData.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const getDetailsSlice = createSlice({
    name: "getDetails",
    initialState,
    reducers: {},
    extraReducers: {
        [getHospitalDetails.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        },
        [getHospitalDetails.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.data = action.payload.data
        },
        [getHospitalDetails.rejected]: (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.data = {}
        },
        [getDoctorDetails.pending]: state => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.data = {}
        },
        [getDoctorDetails.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.data = action.payload.data
        },
        [getDoctorDetails.rejected]: state => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.data = {}
        }
    }
})

export default getDetailsSlice.reducer