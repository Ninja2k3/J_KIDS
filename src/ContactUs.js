import facebook from './photos/2956108.png'
import whatsapp from './photos/unnamed.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import map from './photos/map.png'

const ContactUs=()=>{
    return(
        <AnimationOnScroll animateIn="animate__zoomInUp">
        <div style={{display:"flex",
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,250,255,0.1856092778908438) 0%)",}}>
            <a style={{display:"block",width:"516px",height:"317px"}} href='https://goo.gl/maps/aFH6rhNJdkR2SYXb9'>
                <div style={{backgroundImage:"url("+map+")",width:"516px",height:"317px",border:"3px solid black",marginTop:"30px",marginBottom:"30px",borderRadius:"10px",}}>
                </div>
            </a>
            <div style={{paddingBottom:"400px"}}></div>
            <div>
                <p style={{paddingLeft:"150px",color:"#ff5c40",textAlign:"center"}}><h1>CLICK THE MAP TO VIEW SCHOOL LOCATION</h1>
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
                </p>
            </div>

        </div>
        </AnimationOnScroll>
        
    )
}

export default ContactUs;