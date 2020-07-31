import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '123',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked() {
        if (this.state.username === '123' && this.state.password === '') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)

            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            this.setState({ hasLoginFailed: true })
        }


    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

}

export default LoginComponent