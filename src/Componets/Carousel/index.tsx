import corda from '../../Assets/images/corda-naval.jpg';
import halter from '../../Assets/images/halter.jpg';
import leg from '../../Assets/images/leg-press.jpg';

import {  Container} from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";
import { Carousel } from 'react-responsive-carousel';


const CarouselComponent = () =>{
  return (
    <Container>
        <Row>
            <Col>
                <Carousel autoPlay showArrows={true} showStatus={false} infiniteLoop={true} showIndicators={false} showThumbs={false}>
                    <div>
                        <img src={corda} alt=""/> 
                    </div>
                    <div >
                        <img src={halter} alt="Second slide" />
                    </div>
                    <div>
                        <img src={leg} alt="Third slide"/>
                    </div>
                </Carousel>
            </Col>
        </Row>
    </Container>
    
  );
}

export default CarouselComponent;