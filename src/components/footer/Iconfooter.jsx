
import { Col, Container, Row,Stack } from 'react-bootstrap'
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";



const Iconfooter = () => {
  return (
   <Container>
      <Row className="justify-content-center mt-4">
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaTwitter /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><TiSocialFacebook /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaInstagram /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaSkype /></Col>
      <Col sm={1} className="text-white ms-1 text-center align-item-center justify-content-center inline-block align-self-center rounded-circle socialicon py-1 fs-5" style={{width:36 , height:36}}><FaLinkedinIn /></Col>
    </Row>

    <hr className="w-90 mx-auto mt-5"/>

     

      <Row sm={12} className='py-4'>
      <Col sm={6}> &copy; 2024 Chic Hospitality & Home</Col>
      <Col sm={6} className="text-end"> Designed by <a className='link-success' href="nasim.kaseb69@gmail.com">Nasim ka</a></Col>
    </Row>
   

   </Container>
  )
}
export default Iconfooter