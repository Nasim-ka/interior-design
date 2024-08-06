import myportfolio from "./portfolio/myportfolio";
import {Row,Col} from "react-bootstrap";
import myaboutcard from "./about/myaboutcard";
import mycardservice from "./service/mycardservice";
import myteam from "./team/myteam";
import mypricing from "./team/mypricing";
import faq from "./team/faq";
import mycontact from "./contact/mycontact";
import { useEffect } from "react"


import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';
const createCard1 = (item) =>{
 
  useEffect(()=>{
   AOS.init({duration:2000})
},[])


    return(
       <>
        <Row className='text-center mt-5 justify-content-center mx-auto' style={{maxWidth:"500px"}} data-aos="zoom-in">
        <Col className="mt-5">
        <button className="textgreen mb-3 px-3 py-1 bg-light border rounded-5">{item.number}</button>
          <h3>{item.title}<span className="textgreen">{item.titlesuccess}</span><span>{item.title2}</span></h3>
          <p className='mt-3'>{item.content}</p>
        </Col>
      </Row>
        </>
    );

  };
export const Mycard1=()=>{
    return(
        <>
        {myportfolio.map(createCard1)}
        </>
    )
}
export const Mycard2=()=>{
  return(
      <>
      {myaboutcard.map(createCard1)}
      </>
  )
}
export const Mycard3=()=>{
  return(
      <>
      {mycardservice.map(createCard1)}
      </>
  )
}
export const Mycard4=()=>{
  return(
      <>
      {myteam.map(createCard1)}
      </>
  )
}
export const Mycard5=()=>{
  return(
      <>
      {mypricing.map(createCard1)}
      </>
  )
}
export const Mycard6=()=>{
  return(
      <>
      {faq.map(createCard1)}
      </>
  )
}
export const Mycard7=()=>{
  return(
      <>
      {mycontact.map(createCard1)}
      </>
  )
}
