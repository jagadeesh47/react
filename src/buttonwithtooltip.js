import React, { useState ,useEffect} from 'react';
import Tooltip  from './Tooltip';
const ButtonWithTooltip=(props)=>{
     const {tooltipContent,children}=props;
    return <>
    <button>{children}</button>
    <Tooltip>{tooltipContent}</Tooltip>
    </>
}
export default ButtonWithTooltip