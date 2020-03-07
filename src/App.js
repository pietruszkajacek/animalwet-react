import React from 'react';
//import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';

const brand = 'Animalwet';

const menuItems = [
    {text: 'O nas', href: 'about'}, {text: 'Zespół', href: 'team'}, {text: 'Zakres działalności', href: 'services'}, {text: 'Dziedziny', href: 'domains'}, 
    {text: 'Kontakt', href: 'contact'}];
    
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

function App(props) {
    return (
        <>
            <Navigation brand={brand} menuItems={menuItems} />
            <Header brand={brand} />
            <About about={loremIpsum} brand={brand}/>
        </>
    );
}

export default App;
