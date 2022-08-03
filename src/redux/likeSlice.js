import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: localStorage.getItem('like')?JSON.parse(localStorage.getItem('like')):[]
}

export const likeSlice = createSlice({
  name: 'likeId',
  initialState,
  reducers: {
    addLike:(state,action)=>{
      state.data.push(action.payload)

      localStorage.setItem('like',JSON.stringify(state.data))

    },
    
    removeLike:(state,action)=>{
      if(state.data.find((e)=>e.id===action.payload.id)){state.data.pop(state.data)}
    }

  },
})

export const { addLike,removeLike} = likeSlice.actions
export default likeSlice.reducer