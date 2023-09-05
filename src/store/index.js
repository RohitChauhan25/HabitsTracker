import { configureStore } from '@reduxjs/toolkit'
import habitsReducer from './habitSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

let rootReducer = combineReducers({ allHabits: habitsReducer })

const persistConfig = {
  key: 'root',
  storage,
}

let persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
})

export default store
