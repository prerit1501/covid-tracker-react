import React from 'react'
import Background from "../images/header.png";
// style={{ backgroundImage: `url(${Background})` }} 

export default function Header() {
    return (
        <div>
            <header >
                <h1 className="ui  header blue menu" style={{padding:"0px 210px", backgroundImage: `url(${Background})`, fontSize:"40px"  } } >Covid-19 Tracker</h1>
            </header>
        </div>
    )
}
