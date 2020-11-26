import loremIpsum from "./loremipsum";
import vet1Image from "../img/vet1.jpg";
import vet2Image from "../img/vet2.jpg";

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
    }
];

export default ourTeam;