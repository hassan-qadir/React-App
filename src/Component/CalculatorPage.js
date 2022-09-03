import React, { useState } from 'react'

const CalculatorPage = () => {
       const[input, setInput]= useState("");

       const backspace = () =>{
              try{
                     setInput(input.slice(0,-1))
              }catch(error){
                setInput("");
              }
       }
        const calculate =()=>{
              try{
                     setInput(eval(input))
              }catch(error){
               setInput("error");
              }
        }
  return (
    <>
    <div className='container'>
       <div className='row'>
              <div className='col-12'>
                     <h1 className='display-5 text-center'> Calculator</h1>
              </div>
       </div>
    </div>
      <div className='row justify-content-center'>
       <div className='col-md-4'>
        <div className='card border-primary mb-3'>
        <div className='card-body text-primary'>
           <input type='text' className='form-control form-control-lg shadow' value={input}/>
           <div className='row'>
              <div  className='col-md-3 col-3'>
                 <button className='p-4 shadow mt-2 btn btn-light fs-4' value='1' onClick={(e)=> setInput(input + e.target.value)}>1</button>
              </div>
              <div  className='col-md-3 col-3'>
                 <button className='p-4 shadow mt-2 btn btn-light fs-4' value='2' onClick={(e)=> setInput(input + e.target.value)}>2</button>
              </div>
              <div  className='col-md-3 col-3'>
                 <button className='p-4 shadow mt-2 btn btn-light fs-4' value='3' onClick={(e)=> setInput(input + e.target.value)}>3</button>
              </div>
              <div  className='col-md-3 col-3'>
                 <button className='px-2 py-4 shadow mt-2 btn btn-light fs-4' value='c/ce' onClick={()=> backspace()}>C/CE</button>
              </div>
           </div>
           <div className='row'>
              <div  className='col-md-3 col-3'>
                 <button className='p-4 shadow mt-1 btn btn-light fs-4' value='4' onClick={(e)=> setInput(input + e.target.value)}>4</button>
              </div>
              <div  className='col-md-3 col-3'>
                 <button className='p-4 shadow mt-1 btn btn-light fs-4' value='5' onClick={(e)=> setInput(input + e.target.value)}>5</button>
              </div>
              <div  className='col-md-3 col-3'>
                 <button className='p-4 shadow mt-1 btn btn-light fs-4' value='6' onClick={(e)=> setInput(input + e.target.value)}>6</button>
              </div>
              <div  className='col-md-3 col-3'>
                 <button className='px-4 py-4 shadow mt-1 btn btn-light fs-4' value='+' onClick={(e)=> setInput(input + e.target.value)}>+</button>
              </div>
           </div>
           <div className='row'>
              <div  className='col-md-3 col-3'>
                 <button className='p-4 shadow mt-1 btn btn-light fs-4' value='7' onClick={(e)=> setInput(input + e.target.value)}>7</button>
              </div>
              <div  className='col-md-3 col-3'>
                 <button className='p-4 shadow mt-1 btn btn-light fs-4' value='8' onClick={(e)=> setInput(input + e.target.value)}>8</button>
              </div>
              <div  className='col-md-3 col-3'>
                 <button className='p-4 shadow mt-1 btn btn-light fs-4' value='9' onClick={(e)=> setInput(input + e.target.value)}>9</button>
              </div>
              <div  className='col-md-3 col-3'>
                 <button className='px-4 py-4 shadow mt-1 btn btn-light fs-4' value='*' onClick={(e)=> setInput(input + e.target.value)}>X</button>
              </div>
           </div>
           <div className='row'>
              <div  className='col-md-3 col-3'>
                 <button className='p-4 shadow mt-1 btn btn-light fs-4' value='.' onClick={(e)=> setInput(input + e.target.value)}>.</button>
              </div>
              <div  className='col-md-3 col-3'>
                 <button className='p-4 shadow mt-1 btn btn-light fs-4' value='0' onClick={(e)=> setInput(input + e.target.value)}>0</button>
              </div>
              <div  className='col-md-3 col-3'>
                 <button className='p-4 shadow mt-1 btn btn-light fs-4' value='=' onClick={()=> calculate()}>=</button>
              </div>
              <div  className='col-md-3 col-3'>
                 <button className='px-4 py-4 shadow mt-1 btn btn-light fs-4' value='/' onClick={(e)=> setInput(input + e.target.value)}>/</button>
              </div>
           </div>
       </div>
       </div>
       </div>
      </div>
    </>
  )
}

export default CalculatorPage