import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-scroll'

function Header(props) {
    return (
        <section>
            <header className="masthead">
                <Container className="d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">{props.brand}</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Gabinet weterynaryjny <br />dr n. wet. Jolanta
                            Źródłowska-Danek</h2>
                        <Link className="btn btn-primary" to="about" spy={true} smooth={true} duration={500}>
                            Zapraszamy
                        </Link>
                    </div>
                </Container>
            </header>
        </section>
    );
}

export default Header;