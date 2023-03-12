import React from 'react'
import square_inactive from '../assets/logo_inactive.png'
import square_active from '../assets/logo_active.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons"

import "./topbar.css"


function NavBar () {
    return (
        <>
            <nav className = "navbar">
                <div className= "nav-list">
                    <a href = "src/components">
                        <div className = "logo">
                            <img id = "default" src = {square_inactive} alt = "Home"/>
                            <img id = "onHover" src = {square_active} alt = "Home"/>
                            <div id = "text"><strong>ALLTHESQUARES</strong></div>
                        </div>
                    </a>

                    <div id="divider"> | </div>

                    <div className = "nav-elements">
                    {/* <a href="#courses">Courses</a> */}
                    <a href="src/components#tutorials"><FontAwesomeIcon icon={faCircleInfo}/>  About  </a>
                    <a href="src/components#jobs"><FontAwesomeIcon icon={faFolder}/>  Portfolio  </a>
                    <a href='src/components#student'><FontAwesomeIcon icon={faShareNodes} />  Socials  </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;