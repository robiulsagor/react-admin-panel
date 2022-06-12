import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getList, createRecord } from "../../API/AxiosAPI";

const initialState = {
    specialities: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

// export const getSpecialities= createAsyncThunk(
//     'specialities/getSpecialities',
//     async () => {
//         return getList('departments/list').then(res => {
//             const allUsers = res.data.data.data;
//             const doctors = allUsers.filter(data => data.userType === 2)
//             return doctors
//         }
//         )
//     }
// )

export const createSpecialites = createAsyncThunk(
    'specialities/createSpecialites',
    async (data, { rejectWithValue }) => {
        try {
            const create = await createRecord('/hospitaldepartments/create', data)
            console.log(create.data);
            return await create.data
        } catch (error) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error.response)
        }
    }
)

const specialitiesSlice = createSlice({
    name: "specialities",
    initialState,
    reducers: {},
    extraReducers: {
        [createSpecialites.pending]: state => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        },
        [createSpecialites.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            // to get department/specialites name
            // console.log(action.payload.data.departmentName);
        },
        [createSpecialites.rejected]: state => {
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.payload.message
        },
        // [getSpecialities.pending]: (state) => {
        //     state.isLoading = true
        // },
        // [getSpecialities.fulfilled]: (state, action) => {
        //     state.isLoading = false
        //     state.departments = action.payload
        // },
        // [getSpecialities.rejected]: (state) => {
        //     state.isLoading = false
        // },

    }
})

export default specialitiesSlice.reducer