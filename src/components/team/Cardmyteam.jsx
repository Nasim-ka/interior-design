import {Card,Col,Container,Row} from 'react-bootstrap';
import cardteam from './cardteam';
import { useEffect } from "react"
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { useState } from 'react';
import Sarah from "../../../public/images/team/Sarah.jpg"
import Walter from "../../../public/images/team/Walter.jpg"
import magi from "../../../public/images/team/magi.jpg"
import  Amanda from "../../../public/images/team/Amanda.jpg"



const Cardmyteam = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

     const [ishovering, setIsHovering] = useState(false)
     const [ishovering1, setIsHovering1] = useState(false)
     const [ishovering2, setIsHovering2] = useState(false)
     const [ishovering3, setIsHovering3] = useState(false)
  function crossClass(){
    return `mx-auto position-absolute display-flex display-flex icons text-center justify-content-center mb-0 ${ishovering? "" : "visually-hidden"}`
  }
  function crossClass1(){
    return `mx-auto position-absolute display-flex display-flex icons text-center justify-content-center mb-0 ${ishovering1? "" : "visually-hidden"}`
  }

  function crossClass2(){
    return `mx-auto position-absolute display-flex display-flex icons text-center justify-content-center mb-0 ${ishovering2? "" : "visually-hidden"}`
  }

  function crossClass3(){
    return `mx-auto position-absolute display-flex display-flex icons text-center justify-content-center mb-0 ${ishovering3? "" : "visually-hidden"}`
  }

  // const createCard = (item) => {
   return (
    
      <>
      <Container>
<Row>

        <Col md={3} xs={12} className="g-4 mx-auto" data-aos="fade-up" 
        onMouseEnter={()=> setIsHovering(true)}
        onMouseLeave={()=> setIsHovering(false)}
        >
          <Card>
            <Card.Img src={Sarah} />
            <Row className={crossClass()}>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaTwitter /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><TiSocialFacebook /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaInstagram /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaLinkedinIn /></Col>
    </Row>
            <Card.Body>
              <Card.Title>Sarah Jhonson</Card.Title>
              <Card.Text>
              design engineer
              </Card.Text>

              
              
              
            </Card.Body>
          </Card>
        </Col>


        <Col md={3} xs={12} className="g-4 mx-auto" data-aos="fade-up" 
        onMouseEnter={()=> setIsHovering1(true)}
        onMouseLeave={()=> setIsHovering1(false)}
        >
          <Card>
            <Card.Img src={Walter} />
            <Row className={crossClass1()}>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaTwitter /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><TiSocialFacebook /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaInstagram /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaLinkedinIn /></Col>
    </Row>
            <Card.Body>
              <Card.Title>Walter White</Card.Title>
              <Card.Text>
              furniture designer 
              </Card.Text>

              
              
              
            </Card.Body>
          </Card>
        </Col>


        <Col md={3} xs={12} className="g-4 mx-auto" data-aos="fade-up" 
        onMouseEnter={()=> setIsHovering2(true)}
        onMouseLeave={()=> setIsHovering2(false)}
        >
          <Card>
            <Card.Img src={magi} />
            <Row className={crossClass2()}>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaTwitter /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><TiSocialFacebook /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaInstagram /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaLinkedinIn /></Col>
    </Row>
            <Card.Body>
              <Card.Title>magi Anderson</Card.Title>
              <Card.Text>
              photographer
              </Card.Text>

              
              
              
            </Card.Body>
          </Card>
        </Col>


        <Col md={3} xs={12} className="g-4 mx-auto" data-aos="fade-up" 
        onMouseEnter={()=> setIsHovering3(true)}
        onMouseLeave={()=> setIsHovering3(false)}
        >
          <Card>
            <Card.Img src={Amanda}/>

    <Row className={crossClass3()}>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaTwitter /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><TiSocialFacebook /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaInstagram /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaLinkedinIn /></Col>
    </Row>


            <Card.Body>
              <Card.Title>Amanda Jepson</Card.Title>
              <Card.Text>
              industrial designer
              </Card.Text>

              
              
              
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </Container>
        </>
   
  
  )
}
  // return (
  //   <>
  //   <Container>
  //   <Row className="mt-5">
  //   {cardteam.map(createCard)}
  //       </Row>
  //       </Container>
  //   </>
  // )
//}



export default Cardmyteam;