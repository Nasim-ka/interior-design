import { Container, Row } from "react-bootstrap"


export const Mygooglemap = () => {
  return (
    <Container className="text-center mx-auto">

  <Row className="iframe justify-content-center"> 
 
  <iframe className="responsive-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
  
</Row>
</Container>
  )
}
export default Mygooglemap

