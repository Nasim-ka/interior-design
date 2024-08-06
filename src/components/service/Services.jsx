import {Container,Row,Col} from 'react-bootstrap';
import Cardservice from './Cardservice';
import { Mycard3 } from "../Mycard1"
const Services=()=>{
    return(
        <Container className='mt-5 text-center mb-5'>
      <Mycard3/>
      <Cardservice/>
        </Container>
    )
}
export default Services