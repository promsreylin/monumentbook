import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/BookSlice";
import NewsSlices from "./slices/NewsSlices.js";
import  AuthorSlices  from "./slices/AuthorSlice.js";
import CategorySlice from "./slices/CategorySlice.js";
export const store = configureStore({
    reducer: {
       book: bookSlice,
       news: NewsSlices,
       author: AuthorSlices,
       category: CategorySlice,
    }
});
export default store;