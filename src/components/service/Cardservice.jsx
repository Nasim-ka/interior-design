import myservices from "./myservices"
import {Container,Row,Col,Card} from 'react-bootstrap';
import { useEffect } from "react"


import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
const createCard = (item) => {
  useEffect(()=>{
    AOS.init({duration:2000})
},[])

    return (
     
      <>
      <Col md={6} lg={4}>
      <Card className="p-0 m-2">
      <Card.Img src={item.imgURL} className="img-fluid" />
      <Card.Text className=" h5 contentserviscard">{item.title}</Card.Text>
     
    </Card>
    </Col>
       </>
    );
  };

const Cardservice=()=>{
    return (
        <Container className="mt-3">
      <Row >
      {myservices.map(createCard)}
      </Row>
    </Container>
      );
}
export default Cardservice