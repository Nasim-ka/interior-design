import Iconfooter from "./Iconfooter"
import { Col,Row,Container, Form } from "react-bootstrap"
const Footer=()=>{
    return(
        <>
        <Container fluid className='bg-footer text-white fw-bold'>
    <Row className='text-center mt-5 justify-content-center mx-auto'>

<Col className="mt-5" md={6}>

  <h2 className="mt-5 fw-bold fs-1">Chic</h2>
  <h3 className='mt-5'>Become a part of the exclusive Chic design community</h3>

</Col>


</Row>
<Row className='justify-content-center footer-subscribe'>

<Col lg={6}>
    <div className="border border-0 bg-white rounded-pill mx-auto" style={{maxwidth:500, minWidth:50}}>
  <Form.Group className="footer-form">
              <input type="email" name="email" placeholder="Enter your Email" className="footeremail"/>
              <input type="submit" value="Subscribe" className="btnsubscribe"/>
            </Form.Group>
 
  </div>
</Col>
</Row>

<Iconfooter/>
 </Container>

 </>
    )
}
export default Footer