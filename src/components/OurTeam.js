import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function OurTeam(props) {
    const team = props.team;
    return (
        <section id="ourteam" className="ourteam-section bg-light">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto text-center">
                        <h2 className="text-black text-uppercase mb-5">
                            Nasz zespół
                        </h2>
                    </Col>
                </Row>
                {team.map((vet) => (
                    <Row
                        key={vet.name}
                        className="no-gutters align-items-center mb-4 mb-lg-5"
                    >
                        <Col lg={6}>
                            <img
                                className="img-fluid"
                                src={vet.image}
                                alt={vet.name}
                            />
                        </Col>
                        <Col lg={6}>
                            <div className="member-team-text text-center text-lg-left">
                                <h4>{`${vet.academicTitle} ${vet.name}`}</h4>
                                <p className="text-black-50 mb-0">{vet.desc}</p>
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
}

export default OurTeam;
