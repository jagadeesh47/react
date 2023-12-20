import React,{useState,useEffect,useRef} from "react";
const Input=(props)=>{
    return <input ref={props.ref} type="text"></input>
}
export default Input;