import { createSlice } from "@reduxjs/toolkit";

const txtSlice = createSlice({
    name: 'txt',
    initialState: '',
    reducers: {
        toggleTxt(_, {payload}){
            return payload
        },
        resetTxt(){
            return ''
        }
    }
})

export const selectTxt = state => state.txt

export const {toggleTxt, resetTxt} = txtSlice.actions

export const txtReducer = txtSlice.reducer