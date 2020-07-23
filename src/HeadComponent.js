import React, { Component } from "react"
import './HeadFoot.css'

function HeadComponent(props) {
    return (
        <header className="head-content">
            <div className="left">
            <button>x</button>
            </div>
            <div className="right">
            <label style={{color:"blue",fontSize:"1.3em"}}>Your PaperBag</label>
            <img src='./dummpy.jpg' alt="image"/>
            </div>
            
        </header>
    )
}

export default HeadComponent