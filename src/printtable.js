import React, { useState ,useEffect, useRef} from 'react'
const generateTable=(number)=>{
  const arr=[]
   for(let i=1;i<=10;i++)
   {
      arr.push(<div>{number*i}</div>)
   }
   return arr;
}
const Printtable=(props)=>{
  console.log("asdf");
  const {num}=props
  const table=generateTable(num);
  return <>
      {table}
    </>
}
export default Printtable;