import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector(state=>state.counterReducer.count)
  return (
    <div style={{height:'60vh' }} className='w-100 d-flex justify-content-center align-items-center'>
    <div className='border rounded p-5 w-25 d-flex justify-content-center align-items-center flex-column'>
    <h1>{count}</h1>
    <div className="d-flex justify-content-between w-100 mt-5">
        <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
        <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
    </div>
    </div>
    </div>
  )
}

export default Counter