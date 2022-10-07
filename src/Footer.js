import facebook from './photos/2956108.png'
import whatsapp from './photos/unnamed.png'

const Footer=()=>{
    return(
        <div>
            <div style={{textAlign:"center",
                            backgroundColor:"#1d274a",
                            color:"white",
                            paddingTop:"5px"
            }}>
                <h1>Jayamma Education Trust</h1>
                <hr></hr>
                <p style={{fontSize:"17.5px", color:"#ffe7ff"}}>Jayamma Education Trust has been providing quality education to students through JKids Preschool since 2016.<br></br> Our objective is to nurture inspired young minds who can grow to heights and inspire society.<br></br> We have strong belief in our vision and we guarantee that we inculcate the right morals and values in students whilst making sure they smartly adapt to modern society.</p>
                <br></br>
                 
                <h3>SOCIAL MEDIA</h3>
                <a style={{display:"block",width:"32px"}} href="https://www.facebook.com/vkidsmanjunathnagar">
                    <div style={{backgroundImage:"url("+facebook+")",marginLeft:"720px",width:"32px",height:"32px",}}>
                    </div>
                </a> 
                <a style={{display:"block",width:"32px"}} href="https://api.whatsapp.com/send?phone=919036870902">
                    <div style={{backgroundImage:"url("+whatsapp+")",marginLeft:"770px",marginTop:"-32px",width:"32px",height:"55px",}}>
                    </div>
                </a>
                <hr></hr>
            </div>
            
            <div style={{backgroundColor:"#1d274a",
                        marginTop:"-25px",
                        paddingTop:"50px",
                        display:"flex",
                            }}>
                <div>
                    <h2 style={{color:"#ff5c40",paddingLeft:"520px"}}>CONTACT US</h2>
                    <p style={{color:"white",paddingLeft:"530px",fontSize:"18px"}}>+91 9036 870 902<br></br><br></br>+91 9844 754 950<br></br><br></br></p>
                    <p style={{color:"white",paddingLeft:"500px",fontSize:"18px",marginTop:"-15px"}}>lathashivakumar1972@gmail.com</p>
                </div>
                <div>
                    <h2 style={{color:"#ff5c40",paddingLeft:"100px"}}>ADDRESS</h2>
                    <p style={{color:"white",paddingLeft:"100px",fontSize:"18px"}}>J-Kids Manjunathnagar,<br></br>1st Main,7th Cross,<br></br> Manjunathnagar,<br></br> Bengaluru-560010.</p>
                    <br></br>
                    <p style={{display:"block",color:"white"}}>© Jayamma Education Trust</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;