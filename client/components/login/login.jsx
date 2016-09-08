import React , {Component} from 'react';
import {Link, browserHistory} from 'react-router';

class  Login extends Component {


    handleLogin(event){
        event.preventDefault();
        var email=this.refs.email.value;
        var password=this.refs.password.value;

        Meteor.loginWithPassword(email, password, function (err) {
            if(err){
                Bert.alert( err.reason, 'danger', 'growl-top-right' );
            }else{
                Bert.alert( 'Welcome! You are Logged In!', 'success', 'growl-top-right' );
                Session.set('loginUser',Meteor.user());
                browserHistory.push('/');
            }
        })

    }

    render(){

        return(
            <div className="container">
                <form className="form-signin" onSubmit={this.handleLogin.bind(this)}>
                    <h2 className="form-signin-heading">Please sign in</h2>

                    <label  className="sr-only">Email address</label>
                    <input type="text" id="inputEmail" ref="email" className="form-control" placeholder="Email address" />

                    <label  className="sr-only">Password</label>
                    <input type="password" id="inputPassword" ref="password" className="form-control" placeholder="Password" required/>

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in!</button>
                    <br/>
                    <Link to="register" className="pull-right">Dont have account? Sign Up! </Link><span className="clearfix"/>
                </form>
            </div>

            )

        }
    }

    export default Login;