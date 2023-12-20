import React from 'react';

const Button =(props)=>
{
  console.log(props);
  const {children,clickAction}=props;
  function handleclick()
  {
    //  console.log("click inside the component");
        clickAction();
  }
  return <button  onClick={()=>{handleclick()}}>{children}</button>
}
export default Button;