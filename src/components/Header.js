import React from 'react';
import trollface from "../images/troll-face.png"
import "../components/Header.css"


export default function Header() {

    return(
        <div className="page--header">
          <img src={trollface} alt="img" />
            <h2>Meme Generator</h2>
        </div>
    )
}