import React from 'react'
import "./header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import Logo from './images/logo.png';
import { Forum } from '@material-ui/icons';


const Header = () => {
    return (
        <div className="header">
            <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
             <img className="header__logo" src={Logo}/>
            <IconButton>
                <Forum className="header__icon" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header
