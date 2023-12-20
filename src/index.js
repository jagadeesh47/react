import React from 'react';
import ReactDOM from 'react-dom/client';
// const div1=React.createElement('div',{className:'text'},"hello from vedant");
// console.log(div1);//it is an object;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(div1);
// const div2=<div>hello vedant from jagadeesh</div>
// console.log(div1);
// console.log(div2); 
// const root=ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);
// const apiData='hello2';
// const div=<div className='text'>{apiData}</div> // this is what jsx it is not an html it is like html syntax
// console.log(div); // here div is an object i.e react element object
// const isMorning=true;
// const morningtext="good morning user";
// const afternoontext="afternoon user";
// function handleClick(){
//   console.log("i was clicked");
// }
// const morningelement=<div onClick={()=> handleClick()}>{morningtext} it is 8AM</div>
// const afternoonelemnt=<div>{afternoontext} it is 6PM</div>
// const greetingElement= isMorning? morningelement : afternoonelemnt;
// console.log(greetingElement);
// const GreetingComponent= function(){
//      return <div>{greetingElement} i am inside the component</div>
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));  
// root.render(GreetingComponent());

import App from './app'  //import {App} from './app'
// console.log(App);
// console.log("jafa");
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);
// console.log("jafa");