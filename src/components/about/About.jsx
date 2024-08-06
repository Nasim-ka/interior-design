import {Container,Row,Col, Button} from 'react-bootstrap';
import { GiStairsGoal} from "react-icons/gi";
import { SiPeakdesign } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import MyCard from"./MyCard";
import Counter from "./Counter";
import { useEffect } from "react";
import { Mycard2 } from '../Mycard1';
import about from "../../../public/images/about.jpg"


import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
const About=()=>{
  useEffect(()=>{
    AOS.init({duration:2000})
},[])

  return (
    <>
    <Container className='mt-5'>
      <Row className='justify-content-center mt-5'>
        <Col sm={12} lg={6} className='pe-lg-5'>
        <div class="justify-content-center mt-5">
            <img data-aos="zoom-in" src={about} alt="" className='img-fluid' style={{height:"700px"}}/>
          </div>
        </Col>
        <Col sm={12} lg={6} className='align-self-center'>
        <Row sm={12} className='mt-5'>
        <Col data-aos="fade-up">
           <button className="textgreen  mb-3 px-3 py-1 bg-light border rounded-5">About us</button>
              <h3>We build houses in the Scandinavian style</h3>
              <p>Our main aim is to build both a reliable and modern house in the Scandinavian style. Your comfort and security matters for us.</p>
         </Col>
      </Row>
      <Row className='my-4 space-evenly' gap={5} data-aos="fade-up">
      <Col sm={2} xs={4} md={2} className='align-self-center inline-flex'>
       <RiTeamFill className='fs-2 border rounded-circle p-2 w-75 h-75 bordericon' style={{color:'#c3a476'}}/>
 
        </Col>
      <Col sm={10} xs={8}  md={10} className=' inline-flex' style={{maxWidth:"400px"}}>
        
              <h4 class="title">Our Team</h4>
              <p class="description">Our diverse team of artists ensures that we have the right fit for every project, bringing it to life with creativity and sophistication.</p>
        </Col>
      </Row>
      <Row sm={12} data-aos="fade-up">
      <Col  sm={2} xs={4} md={2} xxs={2} className='align-self-center' >
        <div style={{color:'#c3a476'}}><GiStairsGoal  className='fs-2 border rounded-circle p-2 w-75 h-75 bordericon' /></div>
             
        </Col>
        
        <Col sm={10} xs={8}  md={10}>
        
              <h4 class="title">Our Intent</h4>
              <p class="description">The two curators strive to create exquisite products that bring comfort, beauty, and sophistication into your space. All pieces in the collection are handcrafted from premium materials, ensuring quality that you deserve.</p>
        </Col>
      </Row>
      <Row sm={12} data-aos="fade-up" className='mt-4'>
      <Col  xs={4} sm={2} md={2}className='align-self-center'>
        <div style={{color:'#c3a476'}}><SiPeakdesign  className='fs-2 p-2 border-0 rounded-circle w-75 h-75 bordericon' /></div>
              
        </Col>
        <Col  xs={8} sm={10} md={10}>
              <h4 class="title">Explore</h4>
              <p class="description">At Chic Hospitality & Home, we believe that comfort and design go hand in hand. We strive to bring the perfect balance of both to create exceptional spaces that leave a lasting impression.</p>
        </Col>
      </Row>
        </Col>
      </Row>
      <Mycard2/>
        <MyCard/>
        <Counter/>
       
      
    </Container>
    <Container fluid className='bg-1 text-white' >
    <Row className='mx-auto w-75'>

<Col sm={12} data-aos="zoom-in">

  <h3 className='mt-3 h2'>Chic Members get</h3>
  <h3 className='mt-3 h2'>25% off !</h3>
  <h3 className='my-3 h2'>Not Member yet? join now,</h3>
  <h3 className='my-3 h2'>it's free.</h3>
  <Button className='rounded-5 btncall mt-3 my-3 fw-bold fs-5'>JOIN NOW</Button>
</Col>
</Row>

    </Container>
   
    </>
    
  );
}
export default About