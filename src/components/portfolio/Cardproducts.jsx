import {Card, Col, Row,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";



const Cardproducts = ({ item }) => {            
return (
<>

<Row key={item.id} xs={1} md={3} className="mt-3">
 
  
   {item.map((item) => {
     return (
      <Link to={`/products/${item.id}`}>
        <Col>
       <Card 
         className="p-0 mx-2 my-3"
         style={{maxWidth:"25rem"}}
        >
         <img src={item.imgURL} className="img-fluid" />
         <div className="btn-shop mb-5 ms-3">
         <FaLink className="fs-2 border-3 rounded-5 p-1 mb-3 linkshop" style={{backgroundColor:"#fff", borderColor:"#000",color:"#C7A17A"}}/>
                </div>
        </Card>
        </Col>
        </Link>
     );
   })}
   
 
</Row>

</>
);
};

export default Cardproducts;