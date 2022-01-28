import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increament,decreament,increamentByAmmount} from './CounterSlice';

const Count = () => {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch();
  return (
      <div>
          <span>Count : {count} </span> <br />
          <button onClick={()=> dispatch(increament())}>
              +
          </button>
          <button onClick={()=> dispatch(decreament())}>
              -
          </button>
          <button onClick={()=> dispatch(increamentByAmmount(10))}>
              Incr by 10
          </button>
      </div>
  )
};

export default Count;
