import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import hospitalListReducer from "../features/hospitalList/hospitalListSllice";
import hospitalRegiReducer from "../features/hospitalRegister/hospitalRegiSlice";
import doctorListReducer from "../features/doctorList/doctorListSlice";
import authReducer from "../features/auth/authSlice";


const reducers = combineReducers({
    hospitalRegi: hospitalRegiReducer,
    hospitalList: hospitalListReducer,
    doctorList: doctorListReducer,
    authSlice: authReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer

})

export default store

// export default configureStore({
//     reducer: {
//         hospitalRegi: hospitalRegiReducer,
//         hospitalList: hospitalListReducer,
//         doctorList: doctorListReducer,
//         authSlice: authReducer
//     }
// })