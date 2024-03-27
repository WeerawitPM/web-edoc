import { configureStore } from "@reduxjs/toolkit";
import equipmentSlice from "./equipmentSlice";

export default configureStore({
  reducer: {
    equipment: equipmentSlice,
  },
});
