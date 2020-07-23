import React, { Component } from "react"
import './HeadFoot.css'

function HeadComponent(props) {
    return (
        <footer>
            <div className='foot-content'>
                <span className="span-left">Powered by <strong>Smart Diner</strong></span>
                <span className="span-right"><a href='#'>Terms and Conditions</a>
                <a href='#'>Contact Us</a></span>
            </div>
        </footer>
    )
}

export default HeadComponent