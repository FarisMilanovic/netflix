import React from "react";

export default function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <img className="logo" src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014.svg" alt=""></img>
                <ul>
                    <li>
                        <a href="http://google.com" target="__blank">
                            <button className="language-btn">Bosanski</button>
                        </a>
                    </li>
                    <li>
                        <a href="http://google.com" target="__blank">
                            <button className="login-btn">Prijava</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}