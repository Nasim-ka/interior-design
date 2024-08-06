
import { Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Saul from "../../../public/images/team/Saul.jpg"
import Sara from "../../../public/images/team/Sara.jpg"
import Matt from "../../../public/images/team/Matt.jpg"
import  John from "../../../public/images/team/John.jpg"
import  Jena from "../../../public/images/team/Jena.jpg"


 const Mycarousel = () => {
  return (
    <>
    <Carousel fluid className='bg-carousel mb-5 text-white fw-bold mt-5'>
     
      <Carousel.Item interval={1000}>
      <img src={Saul} className='rounded-circle border border-5 border-secondary' style={{width:100,height:100}} alt=""/>
      <h3>Saul Goodman</h3>
      <p>manager</p>
          <p  className='text-center mt-3 justify-content-center mx-auto' style={{maxWidth:"850px"}}> <BiSolidQuoteAltLeft className='fs-4 mb-3 secondary'/> I ask for a client to allow me to understand them and develop what they really want. As an architect, I try and guide the design to support the client, to create an environment the client owns instead of me, the designer.<BiSolidQuoteAltRight  className='fs-4 secondary'/></p>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={Sara} className='rounded-circle border border-5 border-secondary' style={{width:100,height:100}} alt=""/>
         <h3>Sara Wilsson</h3>
          <p>Designer</p>
          <p className='text-center mt-3 justify-content-center mx-auto' style={{maxWidth:"850px"}}><BiSolidQuoteAltLeft className='fs-4 mb-3 secondary'/>from life, from living, learning, seeing, experiencing, touching, making, dreaming and failing; and they develop and change through testing, problem-solving, discussion, experimenting, experience and failing, again<BiSolidQuoteAltRight  className='fs-4 secondary'/></p>
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={Jena} className='rounded-circle border border-5 border-secondary' style={{width:100,height:100}} alt=""/>
      <h3>Jena Karlis</h3>
          <p>Marketing</p>
          <p className='text-center mt-3 justify-content-center mx-auto' style={{maxWidth:"850px"}}><BiSolidQuoteAltLeft className='fs-4 mb-3 secondary'/>
          I suppose the satisfaction I get from seeing an idea make the jump off paper and into reality is the reason I became a designer.
          <BiSolidQuoteAltRight  className='fs-4 secondary'/></p>
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={Matt} className='rounded-circle border border-5 border-secondary' style={{width:100,height:100}} alt=""/>
      <h3>Matt Brandon</h3>
          <p>Accessories designer</p>
          <p className='text-center mt-3 justify-content-center mx-auto' style={{maxWidth:"850px"}}><BiSolidQuoteAltLeft className='fs-4 mb-3 secondary'/>
          My work often has a mid-century quality and I feel a strong affinity for the aesthetics and design philosophy of this era. Alongside this runs a deep interest in vernacular British textiles and I see much of my work as a re-interpretation of these traditions and techniques for a contemporary audience.
          <BiSolidQuoteAltRight  className='fs-4 secondary'/></p>

      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={John} className='rounded-circle border border-5 border-secondary' style={{width:100,height:100}} alt=""/>
      <h3>John Larson</h3>
          <p>furniture designer</p>
          <p className='text-center mt-3 justify-content-center mx-auto' style={{maxWidth:"850px"}}><BiSolidQuoteAltLeft className='fs-4 mb-3 secondary'/>
          I find it fascinating to see how people live and how they create a certain atmosphere in their homes. Next to that, my daily life often serves as a starting point, for example when a specific piece is missing in my interior. When I’m designing, I love observing antique furniture, which often leads to progress in the construction of my designs.
          <BiSolidQuoteAltRight  className='fs-4 secondary'/></p>
        
      </Carousel.Item>
     
    </Carousel>

    </>
  )
}

export default Mycarousel;
