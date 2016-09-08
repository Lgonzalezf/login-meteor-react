import React , {Component} from 'react';
import {Link} from 'react-router';

class  ButtonLogin extends Component {

    render(){

        return(
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="login"><i className="fa fa-sign-in" /> Login/Register</Link></li>
            </ul>

        )
    }
}

export default ButtonLogin;