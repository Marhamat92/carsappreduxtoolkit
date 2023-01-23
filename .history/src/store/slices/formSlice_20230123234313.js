import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = '';
      state.cost = 0;
    })
  }
})

//extraReducers is a function that takes a builder object as an argument and we can use the builder object to add extra reducers to the formSlice
//addCase is a function that takes an action and a reducer as arguments and adds the reducer to the formSlice
//the reducer will be called when the action is dispatched


export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;