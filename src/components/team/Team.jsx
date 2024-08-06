import { Mycard4, Mycard5, Mycard6 } from "../Mycard1"
import { Row } from "react-bootstrap"
import Cardmyteam from "./Cardmyteam"
import Mycarousel from "./Mycarousel"
import Cardpricing from "./Cardpricing"
import Myaccordion from "./Myaccordion"

export const Team = () => {
  return (
    <>
    <Row>
        <Mycard4/>
        </Row>
        <Cardmyteam/>
        <Mycarousel/>
        <Mycard5/>
        <Cardpricing/>
        <Mycard6/>
        <Myaccordion/>
    </>
  )
}

