import { configureStore } from "@reduxjs/toolkit";
import hospitalListReducer from "../features/hospitalList/hospitalListSllice";
import hospitalRegiReducer from "../features/hospitalRegister/hospitalRegiSlice";
import doctorListReducer from "../features/doctorList/doctorListSlice";

export default configureStore({
    reducer: {
        hospitalRegi: hospitalRegiReducer,
        hospitalList: hospitalListReducer,
        doctorList: doctorListReducer
    }
})