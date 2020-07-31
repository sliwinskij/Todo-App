import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulReponse = this.handleSuccessfulReponse.bind(this)
        this.handleError = this.handleError.bind(this)
        this.state = {
            welcomeMessage: ''
        }
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}!
                    You can manage your todos <Link to='/todos'>here</Link>
                </div>
                <div className="container">
                    Click here to get
                    customized welcome message!
            <button onClick={this.retrieveWelcomeMessage} className='btn btn-success'>Get Welcome Message!</button>
                </div>

                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulReponse(response))

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessfulReponse(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulReponse(response))
            .catch(error => this.handleError(error))
    }

    handleSuccessfulReponse(response) {
        console.log(response)
        this.setState({ welcomeMessage: response.data.message })
    }

    handleError(error) {
        console.log(error.response)
        this.setState({ welcomeMessage: error.response.data.message })
    }
}



export default WelcomeComponent
