import { createSlice } from '@reduxjs/toolkit'

export const details = [
  { day: 'Mon', status: 'none' },
  { day: 'Tue', status: 'none' },
  { day: 'Wed', status: 'none' },
  { day: 'Thu', status: 'none' },
  { day: 'Fri', status: 'none' },
  { day: 'Sat', status: 'none' },
  { day: 'Sun', status: 'none' },
]

// load habits from local storage if there are any
const initialState = {
  habits: [],
}

// habitsSlice contains store, actions and reducers
const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, { payload }) => {
      state.habits = [...state.habits, payload]
    },
    deleteHabit: (state, action) => {
      state.habits = state.habits.filter(
        (habit) => habit.title !== action.payload,
      )
    },
    changeStatus: (state, { payload }) => {
      const { status, HabitIndex, index } = payload
      state.habits[HabitIndex].details[index].status = status
    },
  },
})

export const { addHabit, deleteHabit, changeStatus } = habitsSlice.actions

export default habitsSlice.reducer
