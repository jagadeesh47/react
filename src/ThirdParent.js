import React,{useState,memo} from 'react';
const ThirdParent=memo((props)=>{
     const {handlechange}=props;
     const [counter,setCounter]=useState(0);
     let starttime=performance.now();
     while(performance.now()-starttime<3000)
     {
       
     }
     const increment=()=>{
         setCounter((prev)=>prev+1)
         handlechange();
     }
  return <>
     I am super slow component
     <br/>

     {counter}
     <button onClick={increment}>INcrement me</button>
  </>
})
export default ThirdParent;