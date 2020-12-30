import React from 'react'
import {Link} from 'react-router-dom'

import { Dashboard } from '@material-ui/icons'

import './../scss/components/Nav.scss'

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/home">{Dashboard}</Link></li>
                <li><Link to="/browse">Browse</Link></li>
                <li><Link to="/match">Match</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;