import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import Footer from "../footer/Footer";
<LuMenu />
const MyNavbar=()=>{
 
    return(
        <>
        <Navbar expand="lg" className="bg-dark z-3" fixed="top">
      <Container>
        <Navbar.Brand href="#" className=" fs-2 chic">Chic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><LuMenu /></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav"className="iconwhite">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            basic-navbar-nav
          >
            <Nav.Link href="#action1" className="me-4"><Link to="/"><span className="textgreen">Home</span> </Link></Nav.Link>
            <Nav.Link href="#action2" className="me-4"><Link to="/about"><span>About</span></Link></Nav.Link> 
            <Nav.Link href="#action2" className="me-4"><Link to="/services"><span>Services</span></Link></Nav.Link>
            <Nav.Link href="#action2" className="me-4"><Link to="/portfolio"><span>Products</span> </Link></Nav.Link>
            <Nav.Link href="#action2" className="me-4"><Link to="/team"><span>Team</span></Link></Nav.Link>
           

            <Nav.Link href="#action2" className="me-4"><Link to="/contact"><span>Contact</span></Link></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    <Outlet />
    <Footer/>
    </>
  ); 
}
export default MyNavbar