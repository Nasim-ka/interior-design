import Data from "./dataimg";
import { useEffect } from "react"
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import { Col } from "react-bootstrap";


 
const Buttons = ({ filterItem, setItem, imagesItems }) => {

  useEffect(()=>{
    AOS.init({duration:2000})
},[])
    return (
      <>
        <div className="justify-content-center btnproduct">
          {imagesItems.map((Val, id) => {

            return (
              <Col xs={4} sm={2} lg={1} data-aos="fade-up"
                className="btn"
                onClick={() => filterItem(Val)}
                key={id}
              >
                {Val}
              </Col>
            );
          })}
           <Col xs={4} sm={2} lg={1} data-aos="fade-up" 
            className="btn btnall" 
            onClick={() => setItem(Data)}
          >
            All
          
          </Col>
         </div>
      </>
    );
  };
   
  export default Buttons;