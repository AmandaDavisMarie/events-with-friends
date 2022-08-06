import { configureStore } from '@reduxjs/toolkit'
import homepageReducer from '../features/homepage/homepageSlice'

export default configureStore({
  reducer: {
      homepage: homepageReducer
  }
})