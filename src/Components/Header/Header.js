import React, { useEffect, useState } from 'react'
import { Link, Router } from 'react-router-dom'
import './Header.scss'

function Header() {
    
    return (
        <div className="header-component">
            <div className="recipe-logo">
                <img src="/logo.png" alt="logo" />
            </div>
            <div className="menu">
        
                    <Link to="/">Home</Link>
                    <Link to="/">Checkout</Link>
                
                
            </div>
        </div>
    )
}

export default Header
