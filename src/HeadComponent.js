import React, { Component } from "react"
import './HeadFoot.css'

function HeadComponent(props) {
    return (
        <header className="head-content">
            <div className="left">
            <button>x</button>
            </div>
            <div className="right">
            <label>your paper bag</label>
            <img src='./dummpy.jpg' alt="image"/>
            </div>
            
        </header>
    )
}

export default HeadComponent