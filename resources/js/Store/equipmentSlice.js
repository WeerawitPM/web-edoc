import { createSlice } from "@reduxjs/toolkit";

export const equipmentSlice = createSlice({
  name: "equipment",
  initialState: {
    data: [],
  },
  reducers: {
    addEquipment: (state, action) => {
      const obj = action.payload;
      const newTodo = {
        id: state.data.length + 1,
        name: obj.asset.name,
        asset: obj.asset,
        remark: obj.remark,
        qty: obj.qty,
      };
      let index = state.data.findIndex((el) => el.name == obj.asset.name);
      if (index < 0) {
        state.data.push(newTodo);
      }
    },
    deleteEquipment: (state, action) => {
      console.dir(action.payload);
      const index = state.data.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
    deleteAll: (state) => {
      state.data = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEquipment, deleteEquipment, deleteAll } =
  equipmentSlice.actions;
export default equipmentSlice.reducer;
