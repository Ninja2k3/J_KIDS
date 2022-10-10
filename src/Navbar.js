import logo from './photos/logo.jpg'
import { NavLink } from 'react-router-dom';
import "./Gallery.css"
import "./font/Letters\ for\ Learners.ttf"
import "./font/Letters\ for\ Learners\ Outline\ Bold.ttf"

const Navbar=()=>{
    return(
        <div>
            <div className="flex-container" style={{display:"flex",
                                        position:"fixed",
                                        zIndex:"1",
                                        //background: "linear-gradient(to right, #66ffff 0%, #6699ff 84%)",
                                        background:"linear-gradient(to right, #396afc, #2948ff)",
                                        //background:"#007bff",
                                        color:"white",
                                        textAlign:"center",
                                        fontSize:"3rem",
                                        border:"3px solid blue",
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
            <div style={{paddingLeft:"7.5rem",paddingTop:"30px",fontWeight:"bold",   textShadow:"0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",fontFamily:"defolt-bold"}}>
                <NavLink to="/" style={{color:"white",textDecoration:"none"}}>HOME</NavLink>
            </div>
                    
                
            <div style={{paddingLeft:"120px",paddingTop:"30px",fontWeight:"bold",   textShadow:"0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",fontFamily:"defolt-bold"}}>
                <NavLink to="/AboutUs" style={{color:"white",textDecoration:"none"}}>ABOUT US</NavLink></div>
                
            <div style={{paddingLeft:"120px",paddingTop:"30px",fontWeight:"bold",   textShadow:"0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",fontFamily:"defolt-bold"}}>
                <NavLink to="/Gallery" style={{color:"white",textDecoration:"none"}}>GALLERY</NavLink></div>
            
            <div style={{paddingLeft:"120px",paddingTop:"30px",fontWeight:"bold",   textShadow:"0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",fontFamily:"defolt-bold"}}>
                <NavLink to="/ContactUs" style={{color:"white",textDecoration:"none"}}>CONTACT US</NavLink></div>

        </div>
    </div>
    )
}

export default Navbar;
