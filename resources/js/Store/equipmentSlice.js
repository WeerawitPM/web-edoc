import { createSlice } from '@reduxjs/toolkit'

export const equipmentSlice = createSlice({
  name: 'equipment',
  initialState: {
    qty: 0,
    equipmentData: [

    ],
  },
  reducers: {
    addEquipment: (state, action) => {

    },
    increment: (state) => {
      state.qty += 1
    },
    decrement: (state) => {
      state.qty -= 1
    },
    incrementByAmount: (state, action) => {
      state.qty += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = equipmentSlice.actions

export default equipmentSlice.reducer
