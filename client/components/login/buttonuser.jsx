import React , {Component} from 'react';
import {Link, browserHistory} from 'react-router';

class  ButtonUser extends Component {


    render(){
        return(
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.user.firstName} <span className="caret"/></a>
                    <ul className="dropdown-menu">
                        <li><Link to="#">Profile</Link></li>
                        <li><Link to="#">Change Password</Link></li>
                    </ul>
                </li>

            </ul>

        )
    }
}

export default ButtonUser;