import myabout from "./myabout"
import {Container,Row,Col,Card} from 'react-bootstrap';
import { useEffect } from "react"


import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';


const createCard = (item) => {

  useEffect(()=>{
    AOS.init({duration:3000})
},[])

    return (
      <Col key={item.id} sm={12} lg={4} data-aos="fade-up">
        <Card style={{ maxwidth: '22rem',minHeight:'18rem' }} className="border-0 shadow">
      <Card.Body>
          <i style={{backgroundColor:"#C7A17A"}} className="p-2 iconservice mt-4"><img className=" iconservices p-2 text-white"src={item.icon}  style={{width:45 , height:45}}/></i>
          <h4 className="my-3">{item.title}</h4>
          <p> {item.content}</p>
        </Card.Body>
       </Card>
    </Col>
    );
  };

const MyCard=()=>{
    return (
        <Container className="mt-3">
      <Row className="g-4">
      {myabout.map(createCard)}
      </Row>
    </Container>
      );
}
export default MyCard