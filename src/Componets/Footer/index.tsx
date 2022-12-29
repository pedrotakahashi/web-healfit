import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './styles.css';

const Footer = () =>{
      return (
        <Navbar bg="dark" expand="lg" className="d-flex align-itens-center " fixed="bottom">
            <Container fluid>
            <Navbar.Text className="text-footer">
               HEAL FIT
            </Navbar.Text>
            </Container>
      </Navbar>
      );
}

export default Footer;
