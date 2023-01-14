import { Col, Container, Navbar, Row } from "react-bootstrap"
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import "./styles.css"

const Footer = () =>{

    return (
        <Container fluid className="p-0 mt-2">    
            <Row id="redesSociais" >
                <Col md={12} sm={12}>
                    <Navbar bg="dark">
                        <Container className="justify-content-center">
                                <a href="https://www.facebook.com/healfitpp/" target="_blank" rel="noreferrer">
                                    <BsFacebook size={35} style={{marginRight:"20px"}} color="#007bff" />
                                </a>
                                <a href="https://instagram.com/healfitpp?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                                    <BsInstagram size={35} style={{marginRight:"20px"}} color="#fff" />
                                </a>
                                <a href="https://api.whatsapp.com/send?phone=5518988173798" target="_blank" rel="noreferrer">
                                    <BsWhatsapp size={35}  style={{marginRight:"20px"}} color="#0dc042" />
                                </a>
                        </Container>
                    </Navbar>
                </Col>
        </Row>
    </Container>
    )
}

export default Footer;