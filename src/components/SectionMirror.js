import React from "react"

export default function Sectionmirror(props) {
    console.log(props);
    return(
        <div className="section-mirror">
            <img className="section-mirror-img" src={props.img} alt=""></img>
            <h1 className="section-mirror-h1">{props.maintext}</h1>
            <h2 className="section-mirror-h2">{props.secondarytext} </h2>
            <div className="break"></div>
        </div>  
    )
}