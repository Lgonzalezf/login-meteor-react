import React , {Component} from 'react';
import {Link} from 'react-router';

import ButtonLogin from '../login/buttonlogin';
import ButtonLogout from '../login/buttonlogout';
import ButtonUser from '../login/buttonuser';

class  Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggin: Meteor.userId(),
            user: ''
        }
    }


    componentWillReceiveProps (){

        if(Meteor.userId()){
            this.setState({loggin: true,
                            user: Meteor.user().profile});
        }else {
            this.setState({loggin: false,
                            user: ''});

        }
    }

    loginUser(){
        return (
            <div>
                <ButtonLogout/>
                <ButtonUser user={this.state.user} />
            </div>

        )
    }


    render(){

        return(
            <nav className="navbar navbar-default ">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="#">Chambea!</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="about">Nosotros</Link></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"/></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"/>
                                    <li className="dropdown-header">Nav header</li>
                                    <li><a href="#">Separated link</a></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>

                        </ul>
                        {this.state.loggin? (
                            this.loginUser()
                        ) : (
                            <ButtonLogin/>
                        )}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;