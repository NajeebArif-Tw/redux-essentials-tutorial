import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, selectCount, incrementByAmount, incrementAmountAsync } from './features/counter/counterSlice';

function App() {
  const dispatch = useDispatch();
  const value = useSelector(selectCount);

  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className='App'>
      <h1>React App</h1>
      <p>Counter {value}</p>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <input type='text' value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
      <button onClick={()=> dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
      <button onClick={()=> dispatch(incrementAmountAsync(Number(incrementAmount)||0))}>Add Async</button>
    </div>
  );
}

export default App;
