import {Row,Col,Container, Form, InputGroup, FormControl, Button, FormGroup, Carousel} from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMobile } from "react-icons/ai";
import { useEffect } from "react"


import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

export const Contactus = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return (
        <Container className='mt-5'>
          <Row>
            <Col sm={4} data-aos="fade-right">
            <Row className='w-100'>
            <Row>
              
                <Col md={2}><IoLocationOutline className='textgreen fs-3 rounded-circle bg-light p-1' style={{width:'40', height:"40"}}/></Col>
                <Col md={10}><h4>Location:</h4><p className='mt-2'>A108 Adam Street, New York, NY 535022</p></Col>
            </Row>
            <Row>
            <Col md={2}><AiOutlineMail className='textgreen fs-3 rounded-circle bg-light p-1' style={{width:'40', height:"40"}}/></Col>
            <Col md={10}><h4>Email:</h4><p className='mt-2'>info@example.com</p></Col>
            </Row>

            <Row>
            <Col md={2}><AiOutlineMobile className='textgreen fs-3 rounded-circle bg-light p-1' style={{width:'40', height:"40"}}/></Col>
                <Col md={10}><h4>Call:</h4><p className='mt-2'>+1 5589 55488 55s</p></Col>
            </Row>

          </Row>
          
            </Col>
            <Col sm={8} data-aos="fade-left">
            <Form>
            <Row>
                <Col sm={6}>
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Your Name" className='rounded-0 p-2'/>
      </Form.Group>
      </Col>
      <Col sm={6}>
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Your Email" className='rounded-0 p-2' />
      </Form.Group>
      </Col>
      </Row>
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Subject"  className='rounded-0 p-2'/>
      </Form.Group>

      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={4}  className='rounded-0 p-2'/>
      </Form.Group>
      <Row className="mb-5 mx-auto algn-item-center" style={{width:150}}>
      <Button type="submit" className='rounded-pill px-3 py-2 btnsend'>Send Message</Button>
      </Row>
    </Form>
            </Col>
          </Row>
          
          
        </Container>
        
      );
  
}
export default Contactus
