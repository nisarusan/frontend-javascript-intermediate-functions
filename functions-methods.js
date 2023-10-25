// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

const getEmailDomain = email => {
    const apelStaart = email.indexOf("@");

    if (apelStaart === -1) {
        return "Geen e-mail adres gevonden";
    }
    const emailDomain = email.slice(apelStaart + 1);
    return emailDomain;
}

console.log(getEmailDomain("nizar.abak@live.nl"));


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

const typeOfEmail = email => {
    const apelStaart = email.indexOf("@");
    const noviDomains = ["novi.nl", "novi-education.nl"];
    if (apelStaart === -1) {
        return "Geen e-mail adres gevonden";
    }
    const emailDomain = email.slice(apelStaart + 1);

    if (emailDomain === noviDomains[0]) {
        return "Dit is een email van een medewerker";
    } else if (emailDomain === noviDomains[1]) {
        return "Dit is een email van een student";
    } else {
        return "Dit is een email met een een externe domain ";
    }
}

console.log(typeOfEmail("nizar.abak@novi.nl"));

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

const checkEmailValidity = email => {

    //Kijken of e-mail @ bevat
    const emailHas = email.indexOf("@");

    //Kijken of email ',' included heeft. Dus verplicht

    const emailInclude = email.includes(',');

    //Kijken of de email argument eindigt met .
    const lastCharacterisDot = email.endsWith('.');

    if (emailHas !== -1 && !emailInclude && !lastCharacterisDot) {
        return true;
    } else {
        return false;
    }

}

console.log(checkEmailValidity("nizar.abak@live.nl"));
