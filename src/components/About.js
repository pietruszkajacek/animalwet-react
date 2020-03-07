import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bulldog from '../img/cute-bulldog-puppy2.png';

function About(props) {
    return (
        <section id="about" className="about-section text-center">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <h2 className="text-white mb-4">Gabinet weterynaryjny {props.brand}</h2>
                        <p className="text-white-50">{props.about}
                        </p>
                    </Col>
                </Row>
                <img src={bulldog} className="img-fluid" alt="" />
            </Container>
        </section>
    );
}

export default About;