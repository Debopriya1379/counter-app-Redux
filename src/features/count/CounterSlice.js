import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {
    count : 0,
}

export const CounterSlice = createSlice({
    name : 'Counter',
    initialState : initialStateValue,
    reducers : {
        increament : (state)=>{
            state.count +=1
        },
        decreament : (state)=>{
            state.count -=1
        },
        increamentByAmmount : (state,action)=>{
            state.count +=action.payload
        },
    },
})

export const {increament,decreament,increamentByAmmount} = CounterSlice.actions

export default CounterSlice.reducer