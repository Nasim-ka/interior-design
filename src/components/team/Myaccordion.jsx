import Accordion from 'react-bootstrap/Accordion';
import { IoIosHelpCircleOutline } from "react-icons/io";
import accord from './accord';
import {Container,Row} from 'react-bootstrap';
import { useEffect } from "react"


import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

const Myaccordion = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

  const createaccordion = (item) =>{
  return (

    
    <Accordion defaultActiveKey="0" className='mb-3 w-75 mx-auto bg-accordion' data-aos="fade-up">
    <Accordion.Item key={item.id}>
      <Accordion.Header><IoIosHelpCircleOutline className='text-muted fs-4 fw-lighter me-2' />{item.title}</Accordion.Header>
      <Accordion.Body>
       {item.content}
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>

  )}
  return(
    <Container>
    <Row className="mt-5">
    {accord.map(createaccordion)}
        </Row>
        </Container>
   
  )
}

export default Myaccordion