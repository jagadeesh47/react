import React,{ useCallback } from 'react';
import ThirdParent from './ThirdParent';
const SecondParent=()=>
{
  // console.log("asdf");
    const handlechange=useCallback(()=>{
        console.log("heee heyy");
    },[])
  return <>
     I am 2nd parent
     <br/>
     <ThirdParent handlechange={handlechange}></ThirdParent>
  </>
}
export default SecondParent;