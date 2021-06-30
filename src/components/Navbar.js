import { blue } from '@material-ui/core/colors';
import React from 'react';
import css from "./navbar.module.css";
import firebase from '../firebase';

const Navbar = (props) => {

    return (
        <ul className={css.ul}>
            <li className={css.li}><a  href="/">Home</a></li>
            <li className={css.li}><a  href="/signin">Sign In</a></li>
            <li className={css.li}><a  href="/signup">Sign Up</a></li>
            {props.signedIn && <li className={css.li} style={{"backgroundColor": "darkcyan", "marginLeft":"70%"}}><a href="/">{props.userMail}</a></li>}
        </ul >
    );
}

export default Navbar;