import React , {Component} from 'react';
import {Link, browserHistory} from 'react-router';

class  ButtonLogOut extends Component {

    handleLogout(){
        Meteor.logout(function (err) {
            if(err){
                Bert.alert( err.reason, 'danger', 'growl-top-right' );
            }else{
                Bert.alert( 'Hope see you soon!', 'success', 'growl-top-right' );
                browserHistory.push('/')

            }
        })
    }

    render(){
        return(
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#" onClick={this.handleLogout.bind(this)}>Logout</a></li>
            </ul>

        )
    }
}

export default ButtonLogOut;