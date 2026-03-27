import { createSlice } from "@reduxjs/toolkit";


//başlangıç state'i
const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    //slice altındaki reducer metorlar.
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByValue : (state, action) => {
            state.value += action.payload;
        },
    },
});
export const {increment, decrement, incrementByValue} = counterSlice.actions;