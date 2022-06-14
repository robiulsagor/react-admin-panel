import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import hospitalListReducer from "../features/hospitalList/hospitalListSlice";
import hospitalRegiReducer from "../features/hospitalRegister/hospitalRegiSlice";
import doctorListReducer from "../features/doctorList/doctorListSlice";
import authReducer from "../features/auth/authSlice";
import specialitiesReducer from "../features/departments/specialitiesSlice";
import getDetailsReducer from "../features/getDetails/getDetailsSlice";
import updateInfoReducer from "../features/updateInfo/updateInfo";
import deleteRecordReducer from "../features/deleteRecord/deleteRecordSlice";


const reducers = combineReducers({
    hospitalRegi: hospitalRegiReducer,
    hospitalList: hospitalListReducer,
    doctorList: doctorListReducer,
    specialities: specialitiesReducer,
    getDetails: getDetailsReducer,
    updateSlice: updateInfoReducer,
    deleteRecord: deleteRecordReducer,
    authSlice: authReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authSlice']
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