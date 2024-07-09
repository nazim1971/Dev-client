import { configureStore } from '@reduxjs/toolkit';
import  userDetails  from './userDetailsSlice';

const store = configureStore({
  reducer: {
    app: userDetails,
  },
});

export default store;
