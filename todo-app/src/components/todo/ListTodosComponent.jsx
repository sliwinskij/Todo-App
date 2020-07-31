import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    // { id: 1, description: 'Learn React', done: false, targetDate: new Date() },
                    // { id: 2, description: 'Learn sas', done: false, targetDate: new Date() },
                    // { id: 3, description: 'Learn dfsft', done: false, targetDate: new Date() }
                ]

        }
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUsername();
        TodoDataService.retrieveAllTodos(username)
            .then(response => {
                this.setState({ todos: response.data })
            })
    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent