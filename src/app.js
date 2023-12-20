import React, { useState ,useEffect, useRef} from 'react';
// import Button from './button';
// import Text from './text';
// import Timer from './timer';
// import ButtonWithTooltip from './buttonwithtooltip';
// import SecondParent from './SecondParent';
import Printtable from './printtable';
const App = ()=>{
  const [counter1,setCounter1]=useState(0)
  const [counter2,setCounter2]=useState(0)
 return <>
   Counter1:{counter1} <button onClick={()=>setCounter1((prev)=>prev+1)}>counter1++</button>
   <br/>
   Counter2:{counter2} <button onClick={()=>setCounter2((prev)=>prev+1)}>counter2++</button>
   <br/>
   <Printtable num={counter1}></Printtable>
 </>
}
export default App;