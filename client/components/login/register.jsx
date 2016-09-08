import React , {Component} from 'react';
import {Link, browserHistory} from 'react-router';

class  Register extends Component {

    handleRegister(event){
        event.preventDefault();

        var trimInput = function(val){
            return val.replace(/^\s*|\s*$/g, "");
        };

        var isNotEmpty = function(value) {
            if (value && value !== ''){
                return true;
            }
            Bert.alert( 'Please fill in all fields!', 'danger', 'growl-top-right' );
            return false;
        };

        var isValidPassword = function(password) {
            if (password.length < 6) {
                Bert.alert( 'Password must be at least 6 char!', 'danger', 'growl-top-right' );
                return false;
            }
            return true;
        };

        var isEmail = function(value) {
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (filter.test(value)) {
                return true;
            }
            Bert.alert( 'Please use a valid Email!', 'danger', 'growl-top-right' );
            return false;
        };

        var areValidPasswords = function(password, confirm) {
            if (!isValidPassword(password)) {
                return false;
            }
            if (password !== confirm) {
                Bert.alert( 'Password doesnt match!', 'danger', 'growl-top-right' );
                return false;
            }
            return true;
        };


        var firstName=trimInput(this.refs.first_name.value);
        var lastName=trimInput(this.refs.last_name.value);
        var email=trimInput(this.refs.email.value);
        var password=trimInput(this.refs.password.value);
        var confirmPassword=trimInput(this.refs.confirm_password.value);


        if (isNotEmpty(email) &&
            isNotEmpty(password) &&
            isNotEmpty(firstName) &&
            isNotEmpty(lastName) &&
            isEmail(email) &&
            areValidPasswords(password, confirmPassword)){

                Accounts.createUser({
                    email:email,
                    password:password,
                    profile:{
                        firstName:firstName,
                        lastName:lastName
                    }
                },function (err) {
                    if(err){
                        Bert.alert( err.reason, 'danger', 'growl-top-right' );
                    }else{
                        Bert.alert( 'Account Created, you are log in!', 'success', 'growl-top-right' );
                        browserHistory.push('/')
                    }
                });

        }

    }


    render(){

        return(
            <div className="container">
                <form className="form-signin" onSubmit={this.handleRegister.bind(this)}>
                    <h2 className="form-signin-heading">Please Register</h2>

                    <label  className="sr-only">Name</label>
                    <input type="text" ref="first_name" id="inputFirstName" className="form-control" placeholder="FirstName" />

                    <label  className="sr-only">Last Name</label>
                    <input type="text"  ref="last_name" id="inputLastName" className="form-control" placeholder="LastName" />

                    <label  className="sr-only">Email address</label>
                    <input type="email" ref="email" id="inputEmail" className="form-control" placeholder="Email address" />

                    <label  className="sr-only">Password</label>
                    <input type="password" ref="password" id="inputPassword" className="form-control" placeholder="Password" />

                    <label  className="sr-only">Confirm Password</label>
                    <input type="password" ref="confirm_password" id="inputConfirmPassword" className="form-control" placeholder="Confirm Password" />

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in!</button>
                    <br/>
                    <Link to="login" className="pull-right">Have account? Sign In! </Link><span className="clearfix"/>
                </form>
            </div>

        )
    }
}

export default Register;