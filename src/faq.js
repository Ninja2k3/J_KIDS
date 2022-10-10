import icon from './photos/icon.png'
import "./Gallery.css"
import "./font/Letters\ for\ Learners.ttf"

const Faq=()=>{
    var i;
    const Answer1=()=>{
                
                if(document.getElementById("question1").innerHTML=="How important is preschool for my child?"){
                    document.getElementById("question1").innerHTML="Children will learn to be social and learn to be respectful, they will learn to make friends and boost their confidence while learning problem solving";}
                
                else
                {document.getElementById("question1").innerHTML="How important is preschool for my child?"}
                
    }
    
    const Answer2=()=>{
                
        if(document.getElementById("question2").innerHTML=="When do admissions take place?"){
            document.getElementById("question2").innerHTML="Admission process can be done anytime of the year";}
        
        else
        {document.getElementById("question2").innerHTML="When do admissions take place?"}
        
}

const Answer3=()=>{
                
    if(document.getElementById("question3").innerHTML=="How long will it take my child to adjust to their new surroundings?"){
        document.getElementById("question3").innerHTML="Our staff is experienced with making new kids feel at home, initially while the children might be hesitant to attend school, after a few days they will be comfortable enough to call our preschool their second home."}
    
    else
    {document.getElementById("question3").innerHTML="How long will it take my child to adjust to their new surroundings?"}
    
}

const Answer4=()=>{
                
    if(document.getElementById("question4").innerHTML=="What is JKids educational philosophy?"){
        document.getElementById("question4").innerHTML="We believe in harmonizing the processes of learning and fun. We never miss an opportunity to teach our children something new, our children solve puzzles in play time and participate in games in the classroom so both processes are intertwined to maximise learning efficiency while ensuring all-round development,at the same time we do not neglect perosnality development and focus on teaching our students discipline and responibility.";}
    
    else
    {document.getElementById("question4").innerHTML="What is JKids educational philosophy?"}
    
}

const Answer5=()=>{
                
    if(document.getElementById("question5").innerHTML=="What programs do you offer?"){
        document.getElementById("question5").innerHTML="We offer :<ul   ><li>Pre-Nursery</li><li>Nursery</li><li>J-Kids Junior</li><li>J-Kids Senior</li><li>Day Care</li></ul>";}
    
    else
    {document.getElementById("question5").innerHTML="What programs do you offer?"}
    
}

const Answer6=()=>{
                
    if(document.getElementById("question6").innerHTML=="What are the measures taken for my childs safety?"){
        document.getElementById("question6").innerHTML="All classrooms and play areas are equipped with CCTV cameras and monitored in the principal office in real time. Our staff is all female to ensure children feel comfortable.";}
    
    else
    {document.getElementById("question6").innerHTML="What are the measures taken for my childs safety?"}
    
}

    return(
    <div style={{fontFamily:"defolt",}}>
        <div style={{fontFamily:"defolt",backgroundColor:"rgb(0,0,0,0.48)",border:"1px solid black",borderRadius:"10px"}}>
        <br></br>
        <h1 style={{textAlign:"center",paddingBottom:"3vh",color:"white"}}>FAQ <br></br>(CLICK ON THE ARROWS TO LEARN THE ANSWERS!)</h1>
        </div>
        <br></br><br></br>
        
        <div style={{display:"flex"}}>
        <div style={{display:"flex",marginBottom:"5rem",}}>
            <div style={{backgroundColor:"#ff5c40",width:"30rem",height:"10rem",marginLeft:"6.5rem",color:"white",fontSize:"1.8rem",textAlign:"center",display:"flex",borderRadius:"10px",border:"3px solid black"}}>
            <p style={{width:"100%",textAlign:"center",marginTop:"1vh"}} id="question1">How important is preschool for my child?</p>
            </div>
            <button style={{display:"block",backgroundImage:"url("+icon+")",width:"36px",height:"36px",cursor:"pointer",backgroundRepeat:"no-repeat",}} onClick={Answer1}></button>
        </div>
        <br></br><br></br>
        <div style={{display:"flex",marginBottom:"10px"}}>
            <div style={{backgroundColor:"#ff5c40",width:"30rem",height:"10rem",color:"white",fontSize:"1.8rem",textAlign:"center",display:"flex",borderRadius:"10px",border:"3px solid black",marginLeft:"8rem"}}>
            <p style={{width:"100%",textAlign:"center",marginTop:"5px"}} id="question2">When do admissions take place?</p>
            </div>
            <button style={{display:"block",backgroundImage:"url("+icon+")",width:"36px",height:"36px",cursor:"pointer"}} onClick={Answer2}></button>
        </div>
        <br></br><br></br>
        </div>
        
        <div style={{display:"flex"}}>
        <div style={{display:"flex",marginBottom:"10px"}}>
            <div style={{backgroundColor:"#ff5c40",width:"30rem",height:"20rem",marginLeft:"6.5rem",color:"white",fontSize:"1.8rem",textAlign:"center",display:"flex",borderRadius:"10px",border:"3px solid black"}}>
            <p style={{width:"100%",textAlign:"center",marginTop:"1rem"}} id="question3">How long will it take my child to adjust to their new surroundings?</p>
            </div>
            <button style={{display:"block",backgroundImage:"url("+icon+")",width:"36px",height:" 36px",cursor:"pointer"}} onClick={Answer3}></button>
        </div>
        <br></br><br></br>

        <div style={{display:"flex",marginBottom:"10px"}}>
            <div style={{borderRadius:"10px",border:"3px solid black",backgroundColor:"#ff5c40",width:"30rem",height:"21 rem",marginLeft:"8rem",color:"white",fontSize:"1.8rem",textAlign:"center",display:"flex"}}>
            <p style={{width:"100%",textAlign:"center",marginTop:"0.5rem"}} id="question4">What is JKids educational philosophy?</p>
            </div>
            <button style={{display:"block",backgroundImage:"url("+icon+")",width:"36px",height:" 36px",cursor:"pointer"}} onClick={Answer4}></button>
        </div>
        </div>
        <br></br><br></br>

        <div style={{display:"flex"}}>
        <div style={{display:"flex",marginBottom:"10px"}}>
            <div style={{borderRadius:"10px",border:"3px solid black",backgroundColor:"#ff5c40",width:"30rem",height:"16rem",marginLeft:"6.5rem",color:"white",fontSize:"1.8rem",textAlign:"center",display:"flex"}}>
            <p style={{width:"100%",textAlign:"center",marginTop:"1.8rem"}} id="question5">What programs do you offer?</p>
            </div>
            <button style={{display:"block",backgroundImage:"url("+icon+")",width:"36px",height:" 36px",cursor:"pointer"}} onClick={Answer5}></button>
        </div>
        <br></br><br></br>
        <div style={{display:"flex",marginBottom:"10px"}}>
            <div style={{borderRadius:"10px",border:"3px solid black",backgroundColor:"#ff5c40",width:"30rem",height:"16rem",marginLeft:"8rem",color:"white",fontSize:"1.8rem",textAlign:"center",display:"flex"}}>
            <p style={{width:"100%",textAlign:"center",marginTop:"2rem"}} id="question6">What are the measures taken for my childs safety?</p>
            </div>
            <button style={{display:"block",backgroundImage:"url("+icon+")",width:"36px",height:" 36px",cursor:"pointer"}} onClick={Answer6}></button>
        </div>
        </div>
        <br></br><br></br>

    </div>
    )
}

export default Faq;