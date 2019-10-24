import React from 'react';
import Container from 'react-bootstrap/Container';

function Header(props) {
    return (
        <section>
            <header className="masthead">
                <Container className="d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Mikrowet</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Gabinet weterynaryjny <br />dr n. wet. Jolanta
                    Źródłowska-Danek</h2>
                        <a href="#about" className="btn btn-primary">Zapraszamy</a>
                    </div>
                </Container>
            </header>
        </section>
    );
}

export default Header;