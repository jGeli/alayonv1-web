import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons';
import { FaBars, FaTimes } from 'react-icons/fa'
import { CgSmartHomeWashMachine } from "react-icons/cg";


export default function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <CgSmartHomeWashMachine className="navbar-icon"/>
                        ALAYON
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                </div>
            </div>
        </>
    )
}
