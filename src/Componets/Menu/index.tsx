import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import "./styles.css"
import logo from "../../Assets/images/logoHealFit.png"

const Menu = () =>{
    return(
        <Container fluid className="p-0">    
            <Row >
            <Col md={12} sm={12}>
                <Navbar bg="success" collapseOnSelect expand="md" variant="dark" >
                    <Container >
                    <Nav>
                            <Nav.Link href={process.env.PUBLIC_URL +'/'} className="menu-button">
                                <img style={{width:"65px"}} src={logo} alt="LogoHealFit" />
                            </Nav.Link>
                        </Nav>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link href={process.env.PUBLIC_URL +'/'} className="menu-button">Inicio</Nav.Link>
                                <Nav.Link href='#planos' className="menu-button">Planos</Nav.Link>
                                <Nav.Link href='#modalidades' className="menu-button">Modalidades</Nav.Link>
                                <Nav.Link href='#redesSociais' className="menu-button">Redes Sociais</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>
        </Row>
        </Container>
)
}

export default Menu;