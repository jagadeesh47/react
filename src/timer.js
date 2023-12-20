import React,{useState,useEffect,useRef} from "react";
import Input from "./Input";
const Timer=(props)=>{
  const {customeText}=props;
   const [counter,setCounter]=useState(0);
   let interval=useRef(4);
   const inputref=useRef();
   console.log(interval);
   useEffect(()=>{
         console.log("hi");
         interval.current=setInterval(()=>{
                console.log("i am running setinterval");
                setCounter((prev) => prev+1);
        },1000)
        return ()=>{
          clearInterval(interval.current);
        }
   },[])
   console.log("sdfg");
   const stopTimer=()=>{
       console.log("its going clear");
       clearInterval(interval.current);
   }
   return <>
   <span>Current time is:{counter}</span>
    <span>{customeText}</span>
   <button onClick={stopTimer}>stopTimer</button>
   <Input ref={inputref}></Input>
   <button onClick={()=>{console.log(inputref); inputref.current.focus()}}>Focus the input</button>
   </>
}
export default Timer;