import React from 'react'
import Logo from '../logo/logo'
import './navBar.scss'
import {FaGithubAlt, FaLinkedin, FaMailBulk} from 'react-icons/fa'

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBar__left">
                <Logo/>
            </div>

            <div className="navBar__right">
                <a href="#" >
                    <FaGithubAlt   fontSize={30}/>
                </a>
                <a href="#">
                    <FaLinkedin fontSize={30}/>
                </a>
                <a href="#">
                    <FaMailBulk fontSize={30}/>
                </a>
            </div>
        </div>
    )
}

export default NavBar
