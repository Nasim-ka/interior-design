import Mycount from "./Mycount";
import {Container,Row,Col} from 'react-bootstrap';

  const Counter=()=>{
    return(
<>
   
        <Container className="mt-3 mb-5">
            <Row sm={12}>
        <Col lg={3} sm={6} xs={6} className="mt-5 text-center">
        <div style={{ maxWidth: '18rem'}}>
        <h2 className="mt-4 textgreen fs-1"><Mycount number={12} className="mt-4" /></h2> 
        <p className="mx-auto">Years on the market</p>
       </div>
       
    </Col>
    <Col lg={3} sm={6} xs={6} className="mt-5 text-center">
        <div style={{ maxWidth: '18rem'}}>
            <h2 className="mt-4 textgreen fs-1"><Mycount number={21}/></h2>
            <p>Staff members</p>
        </div>
       
 
     </Col>
    <Col lg={3} sm={6} xs={6} className="mt-5 text-center">
        <div style={{ maxWidth: '18rem'}}>
        <h2 className="mt-4 textgreen fs-1"><Mycount number={206} className="mt-4" /></h2>
        <p>Implemented projects</p>
       </div>
       
    </Col>
    <Col lg={3} sm={6} xs={6} className="mt-5 text-center">
       <div style={{ maxWidth: '18rem'}}>
        <h2 className="mt-4 textgreen fs-1"><Mycount number={15} className="mt-4" /></h2>
        <p>Hard Workers</p>
       </div>
       
    </Col>

      </Row>
    </Container>
</>
    );
}
export default Counter