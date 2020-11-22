import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import OurTeam from "./components/OurTeam";

import vet1Image from "./img/vet1.jpg";
import vet2Image from "./img/vet2.jpg";

const brand = "Animalwet";

const menuItems = [
    { text: "O nas", href: "about" },
    { text: "Zespół", href: "ourteam" },
    { text: "Zakres działalności", href: "services" },
    { text: "Dziedziny", href: "domains" },
    { text: "Kontakt", href: "contact" },
];

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const ourTeam = [
    {
        academicTitle: "dr. n. wet.",
        name: "Jakub Nowak",
        image: vet1Image,
        desc: loremIpsum.slice(0, 250),
    },
    {
        academicTitle: "lekarz wet.",
        name: "Paulina Kowalczyk",
        image: vet2Image,
        desc: loremIpsum.slice(0, 150),
    },
];

function App(props) {
    return (
        <>
            <Navigation brand={brand} menuItems={menuItems} />
            <Header brand={brand} />
            <About about={loremIpsum} brand={brand} />
            <OurTeam team={ourTeam} />
        </>
    );
}

export default App;
