import podstawoweZabiegiWeterynaryjne from "../img/podstawowe zabiegi.jpg";
import diagnostykaLaboratoryjna from "../img/diagnostyka laboratoryjna.jpg";
import leczenieChorobTowarzyszacych from "../img/leczenie chorób towarzyszących.jpg";
import pielegnacjaIDieta from "../img/pielęgnacja i dieta.jpg";
import dodatkoweUslugi from "../img/dodatkowe usługi.jpg";

const services = [
    {
        image: podstawoweZabiegiWeterynaryjne,
        type: "Podstawowe zabiegi weterynaryjne",
        items: [
            "czipowanie psa",
            "kastracja kota",
            "kastracja psa",
            "odrobaczanie kota",
            "odrobaczanie psa",
            "sterylizacja kota",
            "sterylizacja psa",
            "szczepienia kotów",
            "szczepienia psów",
            "usuwanie kamienia nazębnego u kota",
            "usuwanie kamienia nazębnego u psa",
            "usuwanie kleszczy u kotów",
            "usuwanie kleszczy u psa",
            "zwalczanie pcheł u kota",
            "zwalczanie pcheł u psa",
        ]
    },
    {
        image: diagnostykaLaboratoryjna,
        type: "Diagnostyka laboratoryjna",
        items: [
            "badania bakteriologiczne u zwierząt", 
            "badania histopatologiczne u zwierząt", 
            "badania parazytologiczne u zwierząt", 
            "badanie hormonów u zwierząt", 
            "badanie kału u kota",
            "badanie kału u psa", 
            "badanie kału u zwierząt", 
            "badanie krwi kota", 
            "badanie krwi psa", 
            "badanie krwi u zwierząt", 
            "badanie moczu kota", 
            "badanie moczu psa", 
            "badanie moczu u zwierząt", 
            "badanie zeskrobin naskórka zwierząt", 
            "cytologia weterynaryjna", 
            "posiewy i badania mykologiczne zwierząt", 
            "testy alergiczne u zwierząt"
        ]
    },    
    {
        image: leczenieChorobTowarzyszacych,
        type: "Leczenie chorób towarzyszących",
        items: [
            "leczenie anaplazmozy u psa", 
            "leczenie białaczki u kotów", 
            "leczenie białaczki u psów", 
            "leczenie chlamydiozy u kotów", 
            "leczenie choroby Rubartha u psów",
            "leczenie chorób nerek u kotów",
            "leczenie dysplazji u psów", 
            "leczenie grzybicy u kota", 
            "leczenie kaszlu kenelowego u psów", 
            "leczenie kociego kataru", 
            "leczenie koronawirozy u psów", 
            "leczenie lambliozy u kota", 
            "leczenie lambliozy u psa", 
            "leczenie laptospirozy", 
            "leczenie niewydolności nerek u psów", 
            "leczenie nosówki", 
            "leczenie nużycy u psów", 
            "leczenie padaczki u psów", 
            "leczenie panleukopenii kotów", 
            "leczenie parwowirozy u psów", 
            "leczenie pasożytów wewnętrznych kotów", 
            "leczenie pasożytów wewnętrznych psów", 
            "leczenie pryszczycy", 
            "leczenie skrętu żołądka u psa", 
            "leczenie syndromu urologicznego kotów", 
            "leczenie wrzodu rogówki u psa", 
            "leczenie zapalenia spojówek u kota", 
            "leczenie zapalenia spojówek u psa", 
            "prowadzenie suk oraz kotek ciężarnych"
        ]
    },
    {
        image: pielegnacjaIDieta,
        type: "Pielęgnacja i dieta",
        items: [
            "czyszczenie uszu kota", 
            "czyszczenie uszu psa", 
            "czyszczenie zębów kota", 
            "czyszczenie zębów psa", 
            "diety, karmy, obcinanie pazurów"    
        ]
    },
    {
        image: dodatkoweUslugi,
        type: "Dodatkowe usługi",
        items: [
            "doradztwo żywieniowe i hodowlane", 
            "książeczka zdrowia kota", 
            "książeczka zdrowia psa", 
            "LYSSETKY"
        ]
    },
];

export default services;