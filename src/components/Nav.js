import React from 'react'
import {Link} from 'react-router-dom'

// import { Dashboard } from '@material-ui/icons'

import './../scss/components/Nav.scss'

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/home" className="NavLink">Dashboard</Link></li>
                <li><Link to="/browse" className="NavLink">Browse</Link></li>
                <li><Link to="/match" className="NavLink">Match</Link></li>
                <li><Link to="/settings" className="NavLink">Settings</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;