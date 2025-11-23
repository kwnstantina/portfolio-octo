import Logo from '../logo/logo'
import './navBar.scss'
import {FaGithubAlt, FaLinkedin, FaMailBulk} from 'react-icons/fa'
import ThemeToggle from '../../components/ThemeToggle'

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBar__left">
                <Logo/>
            </div>

            <div className="navBar__right">
                <ThemeToggle />
                <a href="https://github.com/kwnstantina"  target='_blank'>
                    <FaGithubAlt   fontSize={30}/>
                </a>
                <a href="https://linkedin.com/in/konstantina-kirtsia" target='_blank'>
                    <FaLinkedin fontSize={30}/>
                </a>
                <a href="mailto:konstantinakirtsia@gmail.com">
                    <FaMailBulk fontSize={30}/>
                </a>
            </div>
        </div>
    )
}

export default NavBar
