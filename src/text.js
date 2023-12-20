import React from 'react';

const Text=(props)=>{
    const {externaldata,children}=props
    console.log("ja");
    return <div >{externaldata}{children}</div>
}
export default Text;