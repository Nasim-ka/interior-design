import  { useState } from "react";
import Data from "./dataimg";
import Cardproducts from "./Cardproducts";
import Buttons from "./Buttons";
import { Row,Col, Container } from "react-bootstrap";
import { useEffect } from "react"
import AOS from 'aos';

const Filterimage = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
},[])

  const [item, setItem] = useState(Data);
  const imagesItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat; 
    });
    setItem(newItem);
  };
  return (
    <>
      <Container className="mt-3">
        <Row className="mx-auto text-center justify-content-center" data-aos="fade-up">
          <Col>
            <Row gap={3} className="justify-content-center"> 
          <Buttons
          imagesItems={imagesItems}
          filterItem={filterItem}
          setItem={setItem}
          />
           </Row>
           <Row >
           <Cardproducts item={item}/>
      </Row>
      </Col>
        </Row>
        </Container>
    </>
  );
};
 
export default Filterimage;