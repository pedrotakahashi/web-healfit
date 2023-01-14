
import Card from 'react-bootstrap/Card';
import {  Container} from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./styles.css";

export const PlanCardComponent = () =>{
  return (
    <Container className='mt-5 d-flex justify-content-center'>
      <Row>
      <Card.Title id="planos" style={{  textAlign:'center' }}>PLANO TRIMESTRAL</Card.Title>
        <Col md={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={{  textAlign:'center' }}>PLANO ANUAL</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, voluptatem cumque quam saepe minima, inventore quia corporis magni facilis
                  facere veniam? Deserunt repellat aliquam officia explicabo, at soluta! Tempore, quisquam.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col md={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
              <Card.Title style={{  textAlign:'center' }}>PLANO TRIMESTRAL</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, voluptatem cumque quam saepe minima, inventore quia corporis magni facilis
                  facere veniam? Deserunt repellat aliquam officia explicabo, at soluta! Tempore, quisquam.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col md={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
              <Card.Title style={{  textAlign:'center' }}>PLANO SEMESTRAL</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, voluptatem cumque quam saepe minima, inventore quia corporis magni facilis
                  facere veniam? Deserunt repellat aliquam officia explicabo, at soluta! Tempore, quisquam.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col md={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
              <Card.Title style={{  textAlign:'center' }}>PLANO MENSAL</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, voluptatem cumque quam saepe minima, inventore quia corporis magni facilis
                  facere veniam? Deserunt repellat aliquam officia explicabo, at soluta! Tempore, quisquam.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
    
  );
}


export const ModalityCardComponent = () =>{
  return (
    <Container className='mt-5 d-flex justify-content-center'>
      <Row>
      <Card.Title id="modalidades" style={{  textAlign:'center' }}>MODALIDADES</Card.Title>
        <Col md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
              <Card.Title style={{  textAlign:'center' }}>MUSCULAÇÃO</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, voluptatem cumque quam saepe minima, inventore quia corporis magni facilis
                  facere veniam? Deserunt repellat aliquam officia explicabo, at soluta! Tempore, quisquam.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
              <Card.Title style={{  textAlign:'center' }}>JIU JITSU</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, voluptatem cumque quam saepe minima, inventore quia corporis magni facilis
                  facere veniam? Deserunt repellat aliquam officia explicabo, at soluta! Tempore, quisquam.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
              <Card.Title style={{  textAlign:'center' }}>FUNCIONAL</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, voluptatem cumque quam saepe minima, inventore quia corporis magni facilis
                  facere veniam? Deserunt repellat aliquam officia explicabo, at soluta! Tempore, quisquam.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
    
  );
}
