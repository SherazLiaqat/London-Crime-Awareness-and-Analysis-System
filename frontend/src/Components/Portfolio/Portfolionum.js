import './Portfolio.css';
import React from 'react';
import { useEffect, useState } from 'react';
import {FaTasks,FaHistory} from 'react-icons/fa';
import {ImUsers} from 'react-icons/im';
import {FaUsers} from 'react-icons/fa';
const  Portfolionum =()=>{
    const [count, setCount] = useState("0");
let number = "100";
let duration = 2;
    useEffect(() => {
        let start = 0;
        // first three numbers from props
        const end = parseInt(number.substring(0,3))
        // if zero, return
        if (start === end) return;
    
        // find duration per increment
        let totalMilSecDur = parseInt(duration);
        let incrementTime = (totalMilSecDur / end) * 2000;
        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + number.substring(3))
            if (start === end) clearInterval(timer)       
          }, incrementTime);
      
          // dependency array
        }, [number, duration]);    


    return(



        <>
        <div className="numconatiner" >
            <div className="row text-center">
                    <div className="col-sm-3 ">
                        <FaTasks style={{width:'40px',height:"40px",marginBottom:"10px"}} />
                        <h1 style={{color:'black',fontWeight:'bold'}} >{count}<sup style={{color:'#1E978C',fontSize:'40px'}}>+</sup></h1>

      <p > Successful Projects </p>
                    </div>
                    <div className="col-sm-3">
                        <ImUsers  style={{width:'40px',height:"40px",marginBottom:"10px"}}/>
                        <h1 style={{color:'black',fontWeight:'bold'}}>{count}<sup style={{color:'#1E978C',fontSize:'40px'}}>+</sup></h1>

      <p > Qualified Employees And Developers With Us </p>
                    </div>
                    <div className="col-sm-3">
                        <FaUsers style={{width:'40px',height:"40px",marginBottom:"10px"}}/>
                        <h1 style={{color:'black',fontWeight:'bold'}}>{count+2}<sup style={{color:'#1E978C',fontSize:'40px'}}>+</sup></h1>

      <p > Satisfied Clients We Have Served Globally </p>
                    </div>
                    <div className="col-sm-3">
                        <FaHistory style={{width:'40px',height:"40px",marginBottom:"10px"}}/>
                        <h1 style={{color:'black',fontWeight:'bold'}}>{count}<sup style={{color:'#1E978C',fontSize:'40px'}}>+</sup></h1>

      <p>Years Of Experience In The IT & Software Industry</p>
                    </div>
      
            </div>
        </div>
        </>
    )}

export default Portfolionum;