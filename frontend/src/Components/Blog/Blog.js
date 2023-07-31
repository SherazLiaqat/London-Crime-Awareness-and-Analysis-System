import React,{useState} from 'react'
import { Link as LinkR} from 'react-router-dom';
import TodayIcon from '@material-ui/icons/Today';
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
import {makeStyles} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import './Blog.css';
import Blogpagination from './Blogpagination';


const useSyles = makeStyles({
  blogicon:{
    fontSize:18,
    marginRight:5,
    marginLeft:5,
  }
})

const Blog = (props) => {
  const classes=useSyles()
  const [blog , setBlog]=useState([
    {
      id:1,
      src:"Images/webblog.jpg",
      para:"Blog content 1:Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      path:"/Fireinfo",
      text:"heading 1",
      target:"Blank"
    },
    {
      id:2,
      src:"Images/design.png",
      para:"Blog content 2:Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      path:"/Fireinfo",
      text:"heading 2",
      target:"Blank"
    },
    {
      id:3,
      src:"Images/webblog.jpg",
      para:"Blog content 3:Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      path:"/Fireinfo",
      text:"heading 3",
      target:"Blank"
    },
    {
      id:4,
      src:"Images/webblog.jpg",
    para:"Blog content 4:Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    path:"/Fireinfo",
    text:"heading 4 ",
    target:"Blank"
  },
  {
    id:5,
    src:"Images/webblog.jpg",
    para:"Blog content 5:Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    path:"/Fireinfo",
    text:"heading 5",
    target:"Blank"
  },
  {
    id:6,
      src:"Images/webblog.jpg",
      para:"Blog content 6:Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      path:"/Fireinfo",
      text:"heading 6",
      target:"Blank"
    
  },
  {
    id:7,
      src:"Images/webblog.jpg",
      para:"Blog content 7:Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      path:"/Fireinfo",
      text:"heading 7",
      target:"Blank"
    
  },
  {
    id:8,
      src:"Images/webblog.jpg",
      para:"Blog content 8:Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      path:"/Fireinfo",
      text:"heading 8",
      target:"Blank"
    
  },
  {
    id:9,
      src:"Images/webblog.jpg",
      para:"Blog content 9:Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      path:"/Fireinfo",
      text:"heading 9",
      target:"Blank"
    
  }
  
  ])
  const[showperpage,setshowperpage]=useState(3);
  const[pagination,setPagination]=useState({
    start:0,
    end:showperpage,
  })
const onPaginationChange =(start,end)=>{
  setPagination({start:start, end:end})
}
let url="";
    return (
        <>
        <div id="Blog" className="blog">
        <h5 style={{textAlign:'center',color:"#1E978C"}}> Blog</h5>
      <h1>Latest Blog </h1>
      <p style={{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
     
        <div>
        <div className="cards">
     
     <div className="cards__container">
       <div className="cards__wrapper">
        
         <ul className="cards__items">
         {blog.slice(pagination.start,pagination.end).map((blog)=>
       <li className='cards__item' key={blog.id}>
       <div className='cards__item__link' >
       <figure className='blog__item__pic-wrap'  >
           <img
             className='cards__item__img'
             alt='Blog image'
             src={blog.src}
           />
         </figure>
         <div className='cards__item__info'>
           <icon  className='cards__item__icon'>{props.icon}</icon>
         
           <p> <PermIdentitySharpIcon  className={classes.blogicon}/>
            By <span style={{color:'#1E978C'}}>admin</span>
            <TodayIcon  className={classes.blogicon} /> 
           9/20/21 
             </p>
           <h2 className='blog__item__text'>{blog.text}</h2>
           <p className='blog__item__para'>{blog.para}</p>
           <LinkR to='/Blogdetail' className='readmore'>
                  Read More <i className="fas fa-arrow-right" />
                </LinkR>
         </div>
       </div>
     </li>
 
      
      )}

 
         </ul>
       </div>
       <Blogpagination showperpage={showperpage}
      onPaginationChange={onPaginationChange}
      total={blog.length}
      />
     </div>
   </div>
 
        </div>
        </div>
        </>
    )
}

export default Blog

