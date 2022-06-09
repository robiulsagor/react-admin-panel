import { configureStore } from "@reduxjs/toolkit";
import hospitalRegiReducer from "../features/hospitalRegister/hospitalRegiSlice";

export default configureStore({
    reducer: {
        hospitalRegi: hospitalRegiReducer
    }
})