import React from 'react';

function Counter (props){
 
    const incrementifOdd =()=>{
        if(props.value%2 !== 0){
            props.onIncrement()
        }
    }
    const incrementAsync =()=>{
        setTimeout(props.onIncrement,2000)
    }
    const {value, onIncrement, onDecrement} =props
    return (
        <p> Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        {' '}
        <button onClick={incrementifOdd}>inc if odd</button>
        {''}
        <button onClick={incrementAsync}>inc Async</button>
        </p>
    )
}

export default Counter