import { createSlice } from '@reduxjs/toolkit'

export const homepageSlice = createSlice({
  name: 'modal',
  initialState: {
    value: "closed"
  },
  reducers: {
    openModal: (state, action) => {
        return {
            ...state,
            value: "open",
          };
    },
    closeModal: (state, action) => {
        return {
            ...state,
            value: "close",
          };
    }
  }
})

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = homepageSlice.actions

export default homepageSlice.reducer