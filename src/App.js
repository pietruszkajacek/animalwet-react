import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";
import loremIpsum from "./data/loremipsum"
import services from "./data/services";
import ourTeam from "./data/ourteam";

const brand = "Animalwet";

const menuItems = [
    { text: "O nas", href: "about" },
    { text: "Zespół", href: "ourteam" },
    { text: "Zakres działalności", href: "services" },
    { text: "Dziedziny", href: "domains" },
    { text: "Kontakt", href: "contact" },
];

function App(props) {
    return (
        <>
            <Navigation brand={brand} menuItems={menuItems} />
            <Header brand={brand} />
            <About about={loremIpsum} brand={brand} />
            <OurTeam team={ourTeam} />
            <Services services={services}/>
        </>
    );
}

export default App;
