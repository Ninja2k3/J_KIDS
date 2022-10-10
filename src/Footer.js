import facebook from './photos/2956108.png'
import whatsapp from './photos/unnamed.png'

const Footer=()=>{
    return(
        <div>
            <div style={{textAlign:"center",
                            backgroundColor:"rgb(40,44,47)",
                            color:"007bff",
                            paddingTop:"1rem",
                            border:"2px solid black",
                            borderRadius:"5px"
            }}>
                <h1 style={{color:" #ffe7ff"}}>Jayamma Education Trust</h1>
                <hr></hr>
                <br></br>
                <p style={{fontSize:"17.5px", color:"#ffe7ff"}}>JKids has been providing quality education to students since 2016. Our objective is to nurture inspired young minds who can grow to heights and inspire society.<br></br> Our vision is to inculcate the right morals and values in students whilst making sure they smartly adapt to modern society.</p>
                <br></br>
                 
                <a style={{display:"block",width:"32px"}} href="https://www.facebook.com/vkidsmanjunathnagar">
                    <div style={{backgroundImage:"url("+facebook+")",marginLeft:"48vw",width:"48px",height:"64px",backgroundRepeat:"no-repeat"}}>
                    </div>
                </a> 
                <a style={{display:"block",width:"32px"}} href="https://api.whatsapp.com/send?phone=919036870902">
                    <div style={{backgroundImage:"url("+whatsapp+")",marginLeft:"53vw",marginTop:"-65px",width:"48px",height:"64px",backgroundRepeat:"no-repeat"}}>
                    </div>
                </a>
                <hr></hr>
            </div>
            
            <div style={{backgroundColor:"rgb(40,44,47)",
                        marginTop:"-25px",
                        paddingTop:"2rem",
                        display:"flex",
                            }}>
                <div>
                    <h2 style={{color:" #ffe7ff",paddingLeft:"30rem"}}>CONTACT US</h2>
                    <p style={{color:" #ffe7ff",paddingLeft:"30rem",fontSize:"18px"}}>+91 9036 870 902<br></br>+91 9844 754 950<br></br><br></br></p>
                    <p style={{color:" #ffe7ff",paddingLeft:"30rem",fontSize:"18px",marginTop:"-15px"}}>lathashivakumar1972@gmail.com</p>
                </div>
                <div>
                    <h2 style={{color:" #ffe7ff",paddingLeft:"5rem"}}>ADDRESS</h2>
                    <p style={{color:" #ffe7ff",paddingLeft:"5rem",fontSize:"18px"}}>J-Kids Manjunathnagar,<br></br>1st Main,7th Cross,<br></br> Manjunathnagar,<br></br> Bengaluru-560010.</p>
                    <br></br>
                    <p style={{display:"block",color:" #ffe7ff"}}>© Jayamma Education Trust</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;