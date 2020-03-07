import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Events, Link, scrollSpy } from 'react-scroll';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        
        this.brand = props.brand;
        this.listItems = props.menuItems.map((menuItem) =>
            <Nav.Item as="li" key={menuItem.href} >
                <Link className="nav-link" to={menuItem.href} spy={true} smooth="easeInOutQuint" duration={1000}>
                    {menuItem.text}
                </Link>                
            </Nav.Item>
        );

        this.state = { 
            navShrink: false,
            isNavExpanded: false
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setIsNavExpanded = this.setIsNavExpanded.bind(this);
    }

    setIsNavExpanded(isNavExpanded) {
        this.setState({ isNavExpanded: isNavExpanded });
    }

    handleScroll(e) {
        if (document.body.getBoundingClientRect().top < -100) {
            this.setState({ navShrink: true });
        } else {
            this.setState({ navShrink: false });
        }
    }

    handleClick(e) {
        if (this.node.contains(e.target) && (e.target.className !== 'navbar-brand')) {
            //if clicked inside menu do something
        } else {
            // If clicked outside menu, close the navbar.
            this.setState({ isNavExpanded: false });
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('click', this.handleClick, false);

        Events.scrollEvent.register('begin', (to, element) => {
            this.setState((state, props) => {
                return state.isNavExpanded ? {isNavExpanded: false} : {}
            });
        });

        Events.scrollEvent.register('end', (to, element) => {
            this.setState((state, props) => {
                return state.isNavExpanded ? {isNavExpanded: false} : {}
            });
        });

        scrollSpy.update();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('click', this.handleClick, false);

        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');        
    }

    render() {
        return (
            <Navbar ref={node => this.node = node} expand="lg" fixed="top" id="mainNav" onToggle={this.setIsNavExpanded}
                expanded={this.state.isNavExpanded} className={this.state.navShrink ? 'navbar-shrink' : ''}>
                <Container>
                    <Link className="navbar-brand" to="page-top" spy={true} smooth="easeInOutQuint" duration={1000}>
                        {this.brand} 
                    </Link>                
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav as="ul" className="ml-auto">{this.listItems}</Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;