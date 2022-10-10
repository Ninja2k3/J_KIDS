import facebook from './photos/2956108.png'
import whatsapp from './photos/unnamed.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./Gallery.css"
import "./font/Letters\ for\ Learners.ttf"
import map from './photos/map.png'
import img from './photos/location.jpg'

const ContactUs=()=>{
    return(
        <div style={{fontFamily:"defolt",fontSize:"1.5rem"}}>
            <div style={{paddingTop:"6.5rem"}}></div>
      <div style={{backgroundColor:"white",width:"98vw",height:"0.2rem",paddingTop:"0.2rem"}}></div>
        <AnimationOnScroll animateIn="animate__zoomInUp">
        <div style={{display:"flex",marginRight:"0.5vw",marginBottom:"2px",
        backgroundImage:"url("+img+")",backgroundSize:"cover",border:"1px solid black",borderRadius:"5px"}}>
            <a style={{display:"block",width:"516px",height:"317px"}} href='https://goo.gl/maps/aFH6rhNJdkR2SYXb9'>
                <div style={{backgroundImage:"url("+map+")",width:"516px",height:"317px",border:"3px solid black",marginTop:"6.5rem",marginLeft:"4rem",borderRadius:"10px",}}>
                </div>
            </a>
            <div style={{paddingBottom:"400px"}}></div>
            <div>
                <p style={{paddingLeft:"150px",color:"black",textAlign:"center"}}><h1 style={{fontWeight:"bold"}}>CLICK THE MAP TO VIEW SCHOOL LOCATION</h1><br></br>
                <div style={{border:"2px solid black",background:"rgb(255,255,255,0.7)",borderRadius:"1.5rem"}}>
                    <h2>OFFICE TIMINGS : </h2><br></br>
                    <h3>MORNING :<br></br>
                    9AM to 1:30 PM<br></br><br></br>
                    EVENING:<br></br>
                    5PM to 7PM<br></br><br></br></h3>
                </div>
                <br></br>
                <div style={{border:"2px solid black",background:"rgb(255,255,255,0.7)",borderRadius:"1.5rem",fontWeight:"bold"}}>
                CONTACT OUR PRINCIPAL THROUGH PHONE OR SOCIAL MEDIA: <br></br>
                +91 9036 870 902<br></br>
                +91 9844 754 950

                
                <a style={{display:"block",width:"32px"}} href="https://www.facebook.com/vkidsmanjunathnagar">
                    <div style={{backgroundImage:"url("+facebook+")",marginLeft:"320px",width:"32px",height:"32px",marginTop:"20px"}}>
                    </div>
                </a> 
                <a style={{display:"block",width:"32px"}} href="https://api.whatsapp.com/send?phone=9036870902">
                    <div style={{backgroundImage:"url("+whatsapp+")",marginLeft:"370px",marginTop:"-32px",width:"32px",height:"32px",}}>
                    </div>
                </a>
                <br></br>
                </div>
                <p style={{fontSize:"2rem",fontWeight:"bold"}}>Visit the office anytime, we will answer any and all queries!</p><br></br>
                </p>
                
            </div>

        </div>
        </AnimationOnScroll>
    </div>   
    )
}

export default ContactUs;