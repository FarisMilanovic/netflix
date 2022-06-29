import React from "react"

export default function Section(props) {
    console.log(props);
    return(
        <div className="section">
            <h1 className="section-h1">{props.maintext}</h1>
            <h2 className="section-h2">{props.secondarytext} </h2>
            <img className="section-img" src={props.img} alt=""></img>
            <div className="break"></div>
        </div>  
    )
}