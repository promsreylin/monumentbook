import { createSlice } from '@reduxjs/toolkit';
const initialState={
    allCategory: [],
    
}

export const CategorySlice = createSlice({
name: "Category",
initialState,
reducers:{
    setAllCategory: (state, action)=>{
        state.allCategory = action.payload
    },
  
 },
});
export const {setAllCategory} = CategorySlice.actions;
export default CategorySlice.reducer;
