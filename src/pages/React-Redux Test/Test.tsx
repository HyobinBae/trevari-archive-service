import React from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

interface IProp {
  name: string;
  age: number;
}

type Iprops = Array<IProp>


const TestSlice = createSlice({
  name:'counter',
  initialState: {value:0},
  reducers:{
    up:(state,action)=>{
      state.value = state.value+action.step;
    }
  }
});

const store = configureStore ({
  reducer: {
    counter:TestSlice.reducer
  }
})

const Counter = () =>{
 const dispatch = useDispatch();
 const count = useSelector(state => state.value);

 return(
   <div>
     <button onClick={() => {dispatch({type:'up',step:2})}}>+</button>
     {count}
   </div>
 )
}

export const Test = () => {
  return(
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  )
}
