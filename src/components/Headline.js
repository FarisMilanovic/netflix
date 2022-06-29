import React from "react";

export default function Headline(){
    return(
        <div className="headline">
            <h1 className="headline-text">Neograniceni filmovi,<br></br>serije i jos mnogo toga.</h1>
            <h2 className="headline-text">Gledaj bilo gdje. Otkazi bilo kada.</h2>
            <h3 className="headline-text">Spreman/na gledati? Za izradu ili ponovnu aktivaciju clanstva unesi svoju e-postu.</h3>
            <div className="headline-input">
                <input placeholder="Adresa e-poste" type="text"></input>
                <button>Pocni</button>
            </div>
            <div className="break"></div>
        </div>
    )
}