import { createSlice } from "@reduxjs/toolkit";
const searSlice=createSlice({
    name :'search',
    initialState :{

    },
    reducers:{
        cacheResults:(state,action)=>{
            
         state=  Object.assign(state,action.payload);
        },
    },
});

export const {cacheResults}=searSlice.actions;
export default searSlice.reducer;