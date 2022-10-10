import React, {useState} from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Faq from './faq'
import "./Gallery.css"
import "./font/Letters\ for\ Learners.ttf"
import img2 from './photos/bg2.jpg'
const AboutUs=()=>{
  
  return(
  <div>
    <div style={{paddingTop:"6.5rem"}}></div>
    <AnimationOnScroll animateIn='animate__backInRight'> 
      <div style={{background:"url("+img2+")",backgroundRepeat:"no-repeat",height:"100%",color:"white",marginRight:"0.5vw",marginTop:"0.5vh",marginBottom:"0.5vh",border:"1px solid black",borderRadius:"5px",}}>  
      <Faq/>

      </div>
    
    </AnimationOnScroll>
    </div>


  )
}

export default AboutUs;