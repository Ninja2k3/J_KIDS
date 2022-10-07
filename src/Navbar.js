import logo from './photos/logo.jpg'
import { NavLink } from 'react-router-dom';
const Navbar=()=>{
    return(
        <div className="flex-container" style={{display:"flex",
                                        //background: "linear-gradient(to right, #66ffff 0%, #6699ff 84%)",
                                        background:"#40abe2",
                                        color:"white",
                                        textAlign:"center",
                                        fontSize:"2rem",
                                        border:"2px solid black",
                                        borderRadius:"10px",
                                        width:"100vw",
                                        height:"auto"
                                           
                                 }}> 
        <NavLink to="/">
            <div style={{backgroundImage:"url("+logo+")",
                        backgroundSize:"auto",
                        width:"150px",
                        height:"95px",
                        backgroundRepeat:"no-repeat",
                        border:"2px solid black",
                        borderRadius:"10px",
                        }}>
                            
            </div>
        </NavLink>
            <div style={{paddingLeft:"170px",paddingTop:"30px",fontWeight:"bold",   textShadow:"0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",fontFamily:"cursive"}}>
                <NavLink to="/" style={{color:"white",textDecoration:"none"}}>HOME</NavLink>
            </div>
                    
                
            <div style={{paddingLeft:"120px",paddingTop:"30px",fontWeight:"bold",   textShadow:"0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",fontFamily:"cursive"}}>
                <NavLink to="/AboutUs" style={{color:"white",textDecoration:"none"}}>ABOUT US</NavLink></div>
                
            <div style={{paddingLeft:"120px",paddingTop:"30px",fontWeight:"bold",   textShadow:"0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",fontFamily:"cursive"}}>
                <NavLink to="/Gallery" style={{color:"white",textDecoration:"none"}}>GALLERY</NavLink></div>
            
            <div style={{paddingLeft:"120px",paddingTop:"30px",fontWeight:"bold",   textShadow:"0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",fontFamily:"cursive"}}>
                <NavLink to="/ContactUs" style={{color:"white",textDecoration:"none"}}>CONTACT US</NavLink></div>


        </div>
    )
}

export default Navbar;