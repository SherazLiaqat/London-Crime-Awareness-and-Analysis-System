import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import { FaMedrt,FaFacebookF,FaYoutube,FaInstagram,FaLinkedin,FaPhoneAlt} from 'react-icons/fa';
import {IoLocationSharp} from 'react-icons/io5'
import {IoMailSharp} from 'react-icons/io5'
import { VscTwitter} from 'react-icons/vsc';
import { FiMap } from "react-icons/fi";

function Footer() {
  return (
    <div className='footer-container'>
     
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
       
          <div className='footer-link-items'>
            <h2>Project</h2>
            <LinkS to='Portfolio' target="_blank"> Latest Release</LinkS>
            
            <LinkS style={{color:'#fff'}} spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='Portfolio' >Update</LinkS>
            
            
            <LinkS to='Portfolio'>GitHubProject</LinkS>
          </div>
          <div className='footer-link-items'>
            <h2>Company</h2>
            <LinkS to='Home'>Home</LinkS>
            <LinkS to='Portfolio'>Portfolio</LinkS>
            <LinkS to='Blog'>Technology</LinkS>
            
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Quick_Links</h2>
            <LinkS to='Service' target="_blank">Services</LinkS>
            <LinkS to='About' target="_blank">About-Us</LinkS>
            <LinkS to='Contact' target="_blank">Contact</LinkS>
            
            
          </div>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <LinkR to={{ pathname: "https://www.instagram.com/" }} target="_blank">
<IoLocationSharp/>&nbsp;111 Service Rd E, h-19/3, Islamabad </LinkR>
            
            <LinkR  to={{ pathname: "https://www.facebook.com/" }} target="_blank"><IoMailSharp/>&nbsp;@gmail.com</LinkR>
            
            <LinkR  to={{ pathname: "https://twitter.com/" }} target="_blank"><FaPhoneAlt/>&nbsp;+92 11 1111111</LinkR>
            
          </div>
        </div>
      </div>
      
      <section class='social-media' >
        <div class='social-media-wrap'>
         
          <ul className="website-rights">
            &copy;{new Date().getFullYear()} website | All rights reserved |
            Terms Of Service | Privacy Policy
          </ul>
        
          <div class='social-icons'>
            <LinkR
              class='social-icon-link facebook'
              to={{ pathname: "https://www.facebook.com/" }} 
              target="_blank"
              aria-label='Facebook'
            >
              <FaFacebookF/>
            </LinkR>
            <LinkR
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/" }}
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram/>
            </LinkR>
            <LinkR
              class='social-icon-link youtube'
              to={{ pathname: "https://www.youtube.com/" }}
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube/>
            </LinkR>
            <LinkR
              class='social-icon-link twitter'
              to={{ pathname: "https://twitter.com/" }}
              target='_blank'
              aria-label='Twitter'
            >
              <VscTwitter/>
            </LinkR>
            <LinkR
              class='social-icon-link twitter'
              to={{ pathname:'https://www.linkedin.com/'}}
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin/>
            </LinkR>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;