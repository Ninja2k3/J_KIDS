import React,{useState} from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import image1 from './photos/image1.jpg'
import image2 from './photos/image2.jpg'
import image3 from './photos/image3.jpg'
import image4 from './photos/image4.jpg'
import image5 from './photos/image5.jpg'
import image6 from './photos/image6.jpg'
import image7 from './photos/image7.jpg'
import image8 from './photos/image8.jpg'
import image9 from './photos/image9.jpg'
import image10 from './photos/image10.jpg'
import image11 from './photos/image11.jpg'


import logo1 from './photos/logo1.jpg'

const Background=()=>{
  return(
    <div style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,250,255,0.1856092778908438) 0%)",}}>
      <AnimationOnScroll animateIn="animate__fadeInRight">
      <div style={{display:"flex",}}>
        <img style={{display:"block",marginLeft:"128px",marginTop:"32px",width:"480px",height:"auto"}} src={image4}></img>
        <p style={{paddingLeft:"100px",alignContent:"center",fontSize:"1.2rem"}}>
          <h1 style={{paddingLeft:"200px",textDecoration:"underline"}}>JKIDS PRESCHOOL</h1><br></br>
          JKids is an international standard Preschool located in Manjunathnagar. We offer children a safe and fun atmosphere to enhance their learning. Our preschool has four levels:<br></br>
          <ul>
          <li>Pre-Nursery (1.8-3 Years old)</li>
          <li>Nursery (2.5-4 Years old)</li>
          <li>Junior (3.5-5 Years old)</li>
          <li>Senior (4.5-6 years old)</li>            
          </ul> 
          Children are guaranteed to think smarter and work harder due to our non-intensive approach towards teaching. We make sure our students excel at both academics and non-curricular activities by prioritizing hollistic development.
          <br></br><br></br><span style={{textDecoration:"underline",fontWeight:"bold"}}>We also offer daycare services</span>, working parents can rest assured that our staff will keep the children entertained until the parents can pick them up.
          </p>
      </div>
      <br></br>
      <hr></hr>
      </AnimationOnScroll>
      <br></br>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
      <div style={{display:"flex",}}>
        <p style={{display:"block",width:"952px",marginTop:"35px",fontSize:"1.2rem"}}>
          <h1 style={{textAlign:"center",textDecoration:"underline",fontSize:"2rem"}}>FUN LEARNING</h1><br></br>
          Our classrooms are spacious and accomodating, we distribute children into more sections so we can offer more individual attention to our students.<span style={{textDecoration:"underline",fontWeight:"bold"}}> Our syllabus consists of cambridge approved books</span> and we combine learning and playing so children will adapt to enjoy the process of learning. <br></br><br></br> Our syllabus engages all 5 senses of the students in their process of learning and ensures children can approach problems through various angles. Learning takes place through all 5 senses as our children visualise, hear, feel, think and comprehend the knowledge we teach them.
        </p>
        <img style={{display:"block",marginTop:"32px",width:"480px",height:"auto",}} src={image9}></img>
      
      </div>
      </AnimationOnScroll>
      <br></br>
      <hr></hr>
      <AnimationOnScroll animateIn="animate__fadeInRight">
        <div style={{display:"flex", 
      }}>
        <img style={{display:"block",marginLeft:"128px",marginTop:"32px",width:"480px",height:"auto"}} src={image5}></img>
        <p style={{display:"block",marginLeft:"50px",marginTop:"20px",fontSize:"1.2rem",}}>
          <h1 style={{textDecoration:"underline",fontSize:"2rem",textAlign:"center"}}>EXCITING CAMPUS</h1><br></br>
          <span style={{textDecoration:"underline",fontWeight:"bold"}}>We have spacious playrooms full of toys for children to relax and have fun.</span> We provide puzzles and other toys so children can have fun while they relax and learn, but our play area is not just full of toys. We use the recreational area to teach children rhymes daily through a projector while also teaching them to sing and dance to these rhymes.<br></br> We ensure children focus on such important activities and keep themselves entertained to improve their skills.
        </p>
      </div>
      </AnimationOnScroll>
      <br></br>
    </div>
  )
}

export default Background;