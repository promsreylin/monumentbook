import { createSlice } from '@reduxjs/toolkit';
const initialState={
    bestSelling: [],
    bookOfTheWeek: [],
    newArrival :[],
    allBook:[]
    
}

export const BookSlice = createSlice({
name: "Book",
initialState,
reducers:{
    setBestSelling: (state, action)=>{
        state.bestSelling = action.payload
    },
    setBookOfTheWeek:(state,action)=>{
        state.bookOfTheWeek = action.payload
    },
    setNewArrival:(state,action)=>{
        state.newArrival = action.payload
    },
    setAllBook:(state,action)=>{
        state.allBook = action.payload
    }
 },
});
export const {setBestSelling,setBookOfTheWeek,setNewArrival,setAllBook} = BookSlice.actions;
export default BookSlice.reducer;
