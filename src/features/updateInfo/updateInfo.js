import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { updateDetails } from "../../API/AxiosAPI"

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}
// const data = { name: "bagerrasera", address: "bagerhat" }

export const updateInfo = createAsyncThunk(
    'updateSlice/updateInfo',
    async (allData) => {
        const { data, id } = allData
        try {
            const updateData = await updateDetails(`/hospital/update/${id}`, data)
            console.log(updateData.data);
            return await updateData.data
        } catch (error) {
            console.log("error ", error);
        }
    }
)

const updateInfoSlice = createSlice({
    name: 'updateSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [updateInfo.pending]: state => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        },
        [updateInfo.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message = action.payload.message
        },
        [updateInfo.rejected]: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        },

    }
})

export default updateInfoSlice.reducer