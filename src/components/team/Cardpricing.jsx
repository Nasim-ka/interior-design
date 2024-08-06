
import {Badge, Button, Card,Col,Container,Row} from 'react-bootstrap';
import pricingcard from './pricingcard';
import { useEffect } from "react"
import { useState } from 'react';

import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
const Cardpricing = () => {


    useEffect(()=>{
        AOS.init({duration:2000})
    },[])


  const createCard = (item) => {
   return (
    
      
        <Col key={item.id} md={4} xs={12} className="g-4 text-center" data-aos="zoom-in-up">
          <Card className='border-0'>
            <Card.Body style={item.main} className='bg-pricingcard p-5' >
            <Badge bg="#8fc04e" className='recommended bordergreen'>{item.title}</Badge>
            <Card.Title className='mt-3'>{item.title1}</Card.Title>
              <Card.Text>
              {item.title2}
              </Card.Text>
              <Button className='rounded-5 bordergreen py-2 px-4 mt-3 mb-2' style={item.btnstyle}>
              {item.btn}
              </Button>
            </Card.Body>
          </Card>
        </Col>

   
  
  )
}
  return (
    <>
    <Container>
    <Row className="mt-5">
    {pricingcard.map(createCard)}
        </Row>
        </Container>
    </>
  )
}
export default Cardpricing