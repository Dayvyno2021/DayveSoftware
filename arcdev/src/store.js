import { configureStore } from '@reduxjs/toolkit';
import {sendMessageReducer} from './reducers/emailReducers'

const store = configureStore({
  reducer: {
    sendMessageReducer: sendMessageReducer
  },
})

export default store