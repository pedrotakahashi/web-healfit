import "./styles.css";
import {  Container} from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CarouselComponent from "../Carousel";
import { ModalityCardComponent, PlanCardComponent } from "../Card";

const HomeContent = () => {
  return (
    <>
       <Container className="content-page">
          <Row>
            <Col md={12}>
              <CarouselComponent />
              <PlanCardComponent />
              <ModalityCardComponent />
            </Col>
          </Row>
      </Container>
    </>
  );
};

export default HomeContent;

