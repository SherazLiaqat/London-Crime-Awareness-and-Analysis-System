import React,{useState,useEffect} from 'react'
import './Blog.css';


export default function Blogpagination({showperpage,onPaginationChange,total}) {
    const[counter,setCounter]=useState(1)
    const[numofbtn, setNumbtn]=useState(Math.ceil(total/showperpage))
    
useEffect(()=>{
const value = showperpage * counter;
 onPaginationChange(value-showperpage,value);
},[counter])


const onbtn=(type)=>{
    if (type==="prev"){
        if(counter===1){
            setCounter(1);
        }else {
            setCounter(counter - 1)
        }
    }else if(type==="next") 
    {
        if(numofbtn === counter){
            setCounter(counter);
        }else {
            setCounter(counter + 1)
        }
    }
}

    return (
        <div className='d-flex justify-content-center'>

           <button className='blog-button-all'  onClick={()=>onbtn("prev")}>Previous</button>
          {
              new Array(numofbtn).fill("").map((el, index)=>(
                <button class={`blog-button-all ${index + 1 === counter ? "active" : null }`}  onClick={() => setCounter(index + 1)}>

                    {index + 1}</button>
             
                ))
          }
     
     <button className='blog-button-all'
     onClick={()=>onbtn("next")}
     >Next</button>
        </div>
    )
}
