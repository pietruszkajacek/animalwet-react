import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Collapse from "./Collapse";

function Services(props) {
    const services = props.services;

    return (
        <section id="services" className="services-section bg-light">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto text-center">
                        <h2 className="text-black text-uppercase mb-5">
                            Zakres działalności
                        </h2>
                    </Col>
                </Row>
                {services.map((service, row) => {
                    let short = service.items.slice(0, 10);
                    let collapse = service.items.slice(10);

                    short = short.map((item, i, arr) => {
                        let s;
                        if (i === 0) {
                            s = `${item[0].toUpperCase()}${item.slice(1)}, `;
                        } else if (i === arr.length - 1) {
                            s = `${item}... `; 
                        } else {
                            s = `${item}, `; 
                        }
                        return s;
                    })

                    collapse = collapse.map((item, i, arr) => {
                        let s;
                        if (i === 0) {
                            s = `...${item}, `;
                        } else if (i === arr.length - 1) {
                            s = `${item}. `; 
                        } else {
                            s = `${item}, `; 
                        }
                        return s;
                    })

                    return (
                        <Row
                            key={service.type}
                            noGutters={true}
                            className="mb-4 mb-lg-0 bg-black"
                        >
                            <Col lg={6} className="align-self-center">
                                <img
                                    className="img-fluid"
                                    src={service.image}
                                    alt={service.type}
                                />
                            </Col>
                            <Col lg={6} className={row % 2 !== 0 ? 'order-lg-first' : ''}>
                                <div className="bg-black text-center h-100">
                                    <div className="d-flex h-100">
                                        <div className="services-text w-100 my-auto text-center text-lg-left">
                                            <h4 className="text-white">
                                                {service.type}
                                            </h4>
                                            <Collapse
                                                short={short}
                                                collapse={collapse}
                                            />
                                            <hr className="d-none d-lg-block mb-0 ml-0"></hr>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    );
                })}
            </Container>
        </section>
    );
}

export default Services;
