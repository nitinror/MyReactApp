import { useEffect, useState } from 'react';
import './App.css';

/*
const Person = () => {return<>  <h1>name : Nitin</h1> <h1>age: 24</h1> </>}*/
const Person = (props) =>
{return <> <h1>name : {props.name}</h1> <h1>Last Name : {props.lastName}</h1> 
<h1>age : {props.age}</h1> </> }

const App = () => {
  const [Counter, setCounter] =  useState(0);
 /*const name = 'Nitin'; const isNameShowing = 'true';*/
useEffect(() =>{
  /*setCounter(10)})
  setCounter(10);},[]) setCounter(10); {name});  
    </div><h1> Hello {isNameShowing ? name :'someone' }</h1> */
    alert("You have changed the counter to " +  Counter)},[Counter]);
    return (
      <div className="App">  
      <Person/>
      <Person name = {'Nitin Ror'} lastName = {'Rozra'} age = {24}/>
      <button onClick={() => setCounter((prevCount)=> prevCount  +1)}>---</button>
      <h1>{Counter}</h1>
      <button onClick={() => setCounter((prevCount)=> prevCount - 1)}>---</button>
    </div>
  );
}
export default App;
