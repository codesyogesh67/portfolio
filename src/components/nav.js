import React, { useState, useEffect, useRef } from "react";

import MailOutlineIcon from "@mui/icons-material/MailOutline";

import ContactsIcon from "@mui/icons-material/Contacts";
import StarsIcon from "@mui/icons-material/Stars";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { NavLink } from "react-router-dom";
import { links } from "../assets";
import "../styles/nav.css"



function Nav() {

    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }


    return (

        <nav className="nav">
            <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                <ul className="nav__list">
                    {links.map(({ name, icon }, index) => {
                        return (
                            <li className="nav__item" key={index}>
                                <NavLink to={name} onClick={() => setShowMenu(!showMenu)} className={({ isActive }) => isActive ? 'nav__link active-nav' : 'nav__link'}>
                                    <p className="nav__icon">{icon}</p>
                                    <h3 className="nav__name">{name}</h3>

                                </NavLink>


                            </li>
                        )
                    }

                    )}
                </ul>
            </div>
            <div className="nav__toggle">

                {!showMenu ? (
                    <DragHandleOutlinedIcon onClick={handleMenu} />
                )

                    : (<CloseOutlinedIcon onClick={handleMenu} />)}




            </div>

        </nav>
    );
}

export default Nav;

