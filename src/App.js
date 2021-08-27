import './App.css';
import React from 'react';
import { store } from './Store/Index';
import Counter from './Counter/Index';
import { useDispatch, useSelector } from 'react-redux';

function App (){
  const dispatch = useDispatch();
 useSelector(state=>state)
  const onIncrement =()=>{
    dispatch ({type: 'INCREMENT'})
  }
  const onDecrement =()=>{
    dispatch({type: 'DECREMENT'})
  }
  return(
    <>
    <Counter value={store.getState()}
    onIncrement={onIncrement}
    onDecrement={onDecrement}/>
    </>
  )
}

export default App;
