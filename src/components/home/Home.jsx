import { Button, Container} from "react-bootstrap"
import { useEffect } from "react"
// import videoBg from "../../../public/video/video.mp4"
import video from '../../../public/video/video.mp4'


import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

const Home=()=>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[])



    return(
        <>
        
            
            <Container fluid className="mt-5 p-0">
              <div className="playvideo">
                <div className="overlay">

                </div>
              <video src={video}  className="video" autoPlay loop muted />
              </div>          
           
                <div className="content">
                    <h1 className="display-1" data-aos="fade-up">PASSION</h1>
                    <h2 className="mb-5 display-1" data-aos="fade-up">FOR QUALITY</h2>
                    <a href="#about" class="btn-get-started scrollto"></a>

                    <Button className="rounded-5 btnstart fw-bold fs-5"  data-aos="fade-up">Get Started</Button>{' '}
                </div>
                <div>
                </div>
            </Container>
           
        </>
        
    )
}
export default Home
 