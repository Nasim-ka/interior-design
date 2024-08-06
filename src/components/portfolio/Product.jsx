import { Row ,Col, Card, Container} from "react-bootstrap"
import { getProduct } from "./dataimg"
import { useParams } from "react-router-dom"


const Product = () => {
    const params = useParams()
    const item = getProduct(parseInt(params.ProductID))
  return (
    <Container className="mt-5">
        <Row className="mt-5 g-5" key={item.id}>
            <Col sm={12} lg={8} className="mt-5">
                <Card>
                    <Card.Body className="p-0">
                        <Card.Img src={item.imgURL} >
                        </Card.Img>
                    </Card.Body>
                </Card>
            
            </Col>
           
            <Col sm={12} lg={4} className="mt-5">
            <Row>
              
                <Card className="shadow border-3">
                    <Card.Body>
              <Card.Title>Product information</Card.Title>
              <hr className="mt-4"/>
                <Card.Text className="mt-4"><strong>Category: </strong>{item.category}</Card.Text>
                <Card.Text><strong>Name: </strong>{item.name}</Card.Text>
                <Card.Text><strong>Price: </strong>{item.price}</Card.Text>
                <Card.Text className="mb-4"><strong>Material: </strong>{item.Material}</Card.Text>
                </Card.Body>
                </Card>
                </Row>


                <Row className="mt-5">
            
            <Card className="shadow border-3">
             <Card.Body className="p-3">
              <Card.Title className="h4" >{item.title}</Card.Title>
                <Card.Text className="mt-4 p-3">{item.Description}</Card.Text>
                </Card.Body>
                </Card>
            
            </Row>
            </Col>
           
            
        </Row>
        </Container>
     
      
    
  )
}


export default Product