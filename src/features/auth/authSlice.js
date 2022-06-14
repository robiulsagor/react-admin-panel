import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from '../../API/AxiosAPI'

const initialState = {
    name: 'abc',
    email: '',
    id: '',
    mobile: '',
    token: '',
    isLoading: false,
    isSuccess: false,
    isError: false,
    isLoggedIn: false,
    message: '',
    reloaded: false
}

export const loginUser = createAsyncThunk(
    'authSlice/loginUser',
    async (data, { rejectWithValue }) => {
        try {
            const res = await fetchUser("http://65.0.4.24:8080/admin/auth/login", data)
            return await res.data.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logout(state) {
            state.email = ''
            state.mobile = ''
            state.id = ''
            state.token = ''
            state.isLoggedIn = false
            state.isSuccess = false
            state.isLoading = false
            state.isError = false

        },
        reload(state) {
            state.reloaded = true
        }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]: (state, action) => {
            const { email, id, mobileNo, token } = action.payload
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.email = email
            state.id = id
            state.mobile = mobileNo
            state.token = token
            state.isLoggedIn = true
            state.message = ''
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            console.log(action)
        }
    }
})

export const { logout, reload } = authSlice.actions
export default authSlice.reducer        