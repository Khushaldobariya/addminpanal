import React from 'react';
import  { useState, useEffect } from 'react';
import logo512 from  './Images/logo512.png'
function Home(props) {

    const [ Count , SetCount] = useState (0)
    const [Img , SetImage ] = useState (false)
  
    useEffect(() => {
        SetImage(true);
    
    },[Count])
    useEffect(() => {
        SetImage(false);
      
    },[])
   




    const IncrementCounter = () => {
            SetCount (() => Count+1)

    }   
    const   DecrementCounter  = () => {
        if (Count > 0) {
            SetCount (() => Count-1)
        }
    
    } 


   
   
    
    return (



        <div>
            <center>
                <h1>HOME</h1>
                 <button onClick={IncrementCounter} >+</button>
                 <span>{Count}</span>
                 <button onClick={DecrementCounter} >-</button> 
                 </center>


                 <img className={Img ? "d-block" : "d-none"} src={ logo512}/>
           
        </div>
    
    );
}

export default Home;