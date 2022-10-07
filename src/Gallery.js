import WSPGallery from './components/WSPGallery';
import './Gallery.css';
import image1 from './photos/image1.jpg'
import image2 from './photos/image2.jpg'
import image3 from './photos/image3.jpg'
import image4 from './photos/image3.jpg'
import image5 from './photos/image1.jpg'
import image6 from './photos/image1.jpg'
import image7 from './photos/image1.jpg'
import image8 from './photos/image1.jpg'
import image9 from './photos/image1.jpg'

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
      img: "https://lh3.googleusercontent.com/pw/AL9nZEVJUtPQtQMDjeTmoruwZPUFqKSqBiOzgbdQLiuSu9X4qW95vCbFOBdTN0e8V_JXpoKCGp_NqcE4IlrET_3GldI_0I_I8MHHObmoDyPweG5k0Au8PVWjI8ec36DJcoCYEc4tC1m_kI22-lV7FsHxvjBmtA=w1258-h943-no?authuser=0"
    },
  ]

  return (
    <div className="App" style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,250,255,0.1856092778908438) 0%)",width:"100vw",height:"100vh"}}>
      <br />
      <div>
        <strong style={{fontSize:"18px"}}>
          <p style={{textAlign:"center"}}>EVENT CELEBRATION AT JKIDS</p>
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