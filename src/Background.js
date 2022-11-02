import React,{useState} from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import image4 from './photos/image4.jpg'
import image5 from './photos/image9.jpg'
import image9 from './photos/image11.jpg'
import img from './photos/wotah1.jpg'
import "./Gallery.css"
import "./font/Letters\ for\ Learners.ttf"
import './Background.css'


const Background=()=>{
  return(
    <div className='bod'style={{}}>
      <div style={{marginTop:"7rem"}}></div>
      <AnimationOnScroll animateIn="animate__fadeInRight">
      
      <div style={{fontFamily:"defolt",backgroundColor:"rgb(0,0,0,0.48)",fontWeight:"900"
}}>
        
        
        <p style={{fontSize:"2rem",border:"2px solid black",display:"block",textAlign:"center",backgroundImage:"url("+img+")",backgroundSize:"cover",marginLeft:"0.2rem"}}>
          <h1 style={{paddingLeft:"200px",marginTop:"1rem"}}>JKIDS PRESCHOOL</h1><br></br>
          <hr style={{border:"1px solid black"}}></hr><br></br>
          JKids is an international standard Preschool located in Manjunathnagar, Rajajinagar. We strive to be the best school in bangalore and offer children a safe and fun atmosphere to enhance their learning. Our preschool has four levels:<br></br>
          <br></br>
          1) Pre-Nursery (1.8-3 Years old)
          <br></br>
          2) Nursery (2.5-4 Years old)
          <br></br>
          3) Junior (3.5-5 Years old)
          <br></br>
          4) Senior (4.5-6 years old)<br></br>            
          <span style={{textDecoration:"underline"}}> we also offer daycare services.</span>
          <br></br><br></br>
          Children are guaranteed to think smarter and work harder due to our non-intensive approach towards teaching. We make sure our students excel at both academics and non-curricular activities by prioritizing hollistic development.
          <br></br><br></br>
          </p>
          <img style={{display:"block",borderRadius:"0.5rem",border:"2px solid black",width:"100%",marginBottom:"0.5rem"}} src={image4}></img>
      </div>
      <hr style={{border:"2px solid black"}}></hr>
      </AnimationOnScroll>
      <br></br>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
      <div style={{ fontFamily:"defolt",backgroundColor:"rgb(0,0,0,0.48)",fontWeight:"900"}}>
        <p style={{display:"block",marginTop:"-2vh",fontSize:"2rem",border:"2px solid black",display:"block",backgroundImage:"url("+img+")",backgroundSize:"cover",marginLeft:"0.2rem",}}>
          <h1 style={{textAlign:"center",fontSize:"4rem",marginTop:"1rem"}}>FUN LEARNING</h1><br></br>
          <hr style={{border:"1px solid rgb(0,0,0)"}}></hr><br></br>

          <li>Our classrooms are spacious and accomodating, we distribute children into more sections so we can offer more individual attention to our students.</li><br></br><br></br><li>Our syllabus consists of <span style={{textDecoration:"underline",}}>cambridge approved books</span> and we combine learning and playing so children will adapt to enjoy the process of learning.</li> <br></br><br></br> <li>Our syllabus engages all 5 senses of the students in their process of learning and ensures children can approach problems through various angles. Learning takes place through all 5 senses as our children visualise, hear, feel, think and comprehend the knowledge we teach them.</li>
          <br></br><br></br>
        </p>
        <img style={{display:"block",borderRadius:"0.5rem",border:"2px solid black",width:"100%",marginBottom:"-2vh"}} src={image9}></img>

      </div>
      </AnimationOnScroll>
      <br></br>
      <hr style={{border:"2px solid black"}}></hr>
      <AnimationOnScroll animateIn="animate__fadeInRight">
        <div style={{ fontFamily:"defolt",backgroundColor:"rgb(0,0,0,0.48)",fontWeight:"900"
      }}>
        <p style={{display:"block",fontSize:"2rem",border:"2px solid rgb(0,0,0)",borderRadius:"0.5rem",display:"block",backgroundImage:"url("+img+")",backgroundSize:"cover",marginLeft:"0.2rem",marginTop:"0.5vh"}}>
          <h1 style={{fontSize:"4rem",textAlign:"center",marginTop:"1.75rem"}}>EXCITING CAMPUS</h1><br></br>
          <hr style={{border:"1px solid rgb(0,0,0)"}}></hr><br></br>
          <li>We have <span style={{textDecoration:"underline"}}>spacious playrooms</span> full of toys for children to relax and have fun. We provide puzzles and other toys so children can have fun while they relax and learn, but our play area is not just full of toys.</li><br></br> <li>We use the recreational area to teach children rhymes daily through a projector while also teaching them to sing and dance to these rhymes.</li><br></br><li>We ensure children focus on such important activities and keep themselves entertained to improve their skills.</li>
          <br></br><br></br>
        </p>
        <img style={{display:"block",marginTop:"0rem",borderRadius:"0.5rem",border:"2px solid black",width:" 100%"}} src={image5}></img>

      </div>
      </AnimationOnScroll>
      
    </div>
  )
}

export default Background;
