import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteRecord } from "../../API/AxiosAPI"

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false
}

export const deleteInfo = createAsyncThunk(
    'deleteRecord/deleteInfo',
    async (id) => {
        const deleteData = deleteRecord(`/hospital/delete/${id}`)
        return deleteData.data
    }
)

const deleteRecordSlice = createSlice({
    name: "deleteRecord",
    initialState,
    reducers: {},
    extraReducers: {
        [deleteInfo.pending]: state => {
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        },
        [deleteInfo.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            console.log(action);
        },
        [deleteInfo.rejected]: state => {
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
        },
    }
})

export default deleteRecordSlice.reducer