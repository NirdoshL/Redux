import React from 'react'
import { increaseValue,decreaseValue,resetValue } from '../redux/action-creator';
import {useSelector,useDispatch} from "react-redux";

function Index() {
    //usedelector tells about our state
    const myState=useSelector(state=>state.ourState.count)
    const dispatch=useDispatch();
    console.log("++++MyState++++",myState);
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"50px"
    }

    }>
        <h1>Counter App</h1>
        <button 
        style={
            {
                backgroundColor:"green",
                color:"white",
                padding:"10px 30px"
            }}
        onClick={()=>dispatch(increaseValue())}>Increment</button>
        <p>{myState}</p>
        <button style={
            {
                backgroundColor:"crimson",
                color:"white",
                padding:"10px 30px"
            }}
            onClick={()=>dispatch(decreaseValue())}
            >Decrement</button>
            <p></p>
             <button style={
            {
                backgroundColor:"RED",
                color:"white",
                padding:"10px 30px"
            }}
            onClick={()=>dispatch(resetValue())}
            >Reset</button>
    </div>
  )
}

export default Index