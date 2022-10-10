import WSPGallery from './components/WSPGallery';
import camera from './photos/camera1.jpg'
import "./Gallery.css"
import "./font/Letters\ for\ Learners.ttf"
function Gallery() {

  const galleryImages = [
    {
      img: "https://content3.jdmagicbox.com/comp/bangalore/p8/080pxx80.xx80.140924163645.i4p8/catalogue/j-kids-pre-school-manjunatha-nagar-bangalore-pre-schools-z4hmh0rts6.jpg"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AL9nZEXxK9HOg2zwL25w9l4kkJxdijdPGNZmkbxG22TxPcdreJiC33koOO9EZmp77wsgl36f5Nbpl-LqmJCAOti9-D6_L_CLSTXDfiLV075HtxnC1d1J55k7x4pcd-Gb-gUC5ARDvIUBb7yrtBrc2k4qOY8DpQ=w1258-h943-no?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AL9nZEUkgIpAO7t4QDq5TUMEbUHm542Uyt0LQ-K28kVrzXnWn2D8gqJMy2-CySKl2jwE7O_OVfOqUqx-t45ZPNAlUfXBKd6liwF-UtJPx0eED3DwRHiH0tSiVgGp-5C-lNL5V1W_bEOzipeCfZ9jpff1RxsCVw=w1258-h943-no?authuser=0"
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AL9nZEWygtXg9ulyGd7eiHJgMdPvspL2-552nMTi7Sp4QAlv1fyBPzRzWf0CisD0D7d0aTHigdcBMjdY_ITGbZ88v9U9VTGyGuYkSmgpW_D15Q1oFv4t_tsrjmXPgvGgquNFOp27pVyydSmYbH2G4B2JIromgw=w708-h943-no?authuser=0"

    },
    {
      img: "https://lh3.googleusercontent.com/pw/AL9nZEVATnQ92G2CX6K1y34L9I17LIq8sqz_TGz6TKqGunYYkWi48idRquFSnJISnZ1KS0dyLvPsvCpqU7ga1IvFxtt_w-SM8G6TaL4OgoC0uWUHOS380AR9X6iJJUDUHP-5yi6TyiXqUBIY6wZJ6zYtPXdPSg=w708-h943-no?authuser=0"
      
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AL9nZEXFhjerCa1cl_EW5akqXJWwm8TygXPhrtWVp1NCQ6ushTpSXMRsURVPecink9muL_8-MMM06P8ouMMNtcfz3_cCRsPFeYduH2HP4SKRjPeMfctlqUFmNk35X28aX-_-8fqBZvFUDzWLSL6x6wbAKRMyWQ=w1257-h943-no?authuser=0"
      
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AL9nZEUlu-X0-qpKmEj0bDDcyoDdVotx9gsRbQXYJ1ZoApqVYdf-QADvMnAtlXNalHerWKPpnpEEaeID8ICXPw2SSEHiT7bfh5Reu_A3t_Q4mfZ2aUu6FL-d68YtpTMya0tJBqtTd0rQvw2AL19nwzhhFyYsew=w1156-h868-no?authuser=0"
      
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AL9nZEXP1x-EmtzFvLXkQw-bafdTyAUUur7kDoT76VJsUrB17HTx7kZX4-XecWdo4o95F8o2_7ioUf4DISbm6tfCFSBxXdn9WK96ERA9ShRaNFSAbp3eMRQqCTXaleDzDId2PuKH6kC1ibCDzh_HhRmwOFdg7Q=w1156-h868-no?authuser=0"
      
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AL9nZEXZuNjFQrbmtIiII34Q_ZZ8vK304pKPj4dG8XccwmWRztBSChFyba7Vs91udY9Sieg-rritWHFcV3nkOZ0PE44o8UWV6stTx5fqkdNFLT5tpPjlQldUkIlV_iRSc1Nic30Y_AehUOMcqnsWdHLfxaolgA=w1257-h943-no?authuser=0"
      
    },
    
  ]

  return (
    <div className="App" style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,250,255,0.1856092778908438) 0%)",width:"98vw",height:"55rem",marginRight:"0.5vw",backgroundImage:"url("+camera+")"}}>
      <div style={{paddingTop:"7.5%"}}></div>
      
      <div style={{marginTop:"2rem"}}>
        <strong style={{fontSize:"18px"}}>
          <p style={{textAlign:"center",fontFamily:"defolt",color:"white",fontSize:"2em"}}>
            EVENT CELEBRATION AT JKIDS (CLICK ON THE IMAGES TO ZOOM IN)
            <hr style={{border:"1px solid aqua"}}></hr>
          </p>
          </strong>

      </div>
      <br /><br />

      <WSPGallery
        galleryImages={galleryImages}
      />

      <br /><br />
      <div></div>
    </div>
  );
}

export default Gallery;