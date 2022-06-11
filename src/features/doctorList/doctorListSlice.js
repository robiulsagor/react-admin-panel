import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getList } from "../../API/AxiosAPI";

const initialState = {
    doctors: [],
    isLoading: false
}

export const getAllDoctors = createAsyncThunk(
    'doctorList/getAllDoctors',
    async () => {
        return getList('user/list').then(res => {
            const allUsers = res.data.data.data;
            const doctors = allUsers.filter(data => data.userType === 2)
            return doctors
        }
        )
    }
)

const doctorListSlice = createSlice({
    name: "doctorList",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllDoctors.pending]: (state) => {
            state.isLoading = true
        },
        [getAllDoctors.fulfilled]: (state, action) => {
            state.isLoading = false
            state.doctors = action.payload
        },
        [getAllDoctors.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export default doctorListSlice.reducer