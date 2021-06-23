import React, { Component } from 'react';
import './ClassForm.css';

class ClassForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""
        };

        this.handleChnage = this.handleChnage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChnage(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Class form submitted:");
        console.log("Name: " + this.state.username);
        console.log("Email: " + this.state.email);
        console.log("Password: " + this.state.password);
    }

    render() {
        return (
            <div className="classForm">
                <form onSubmit={this.handleSubmit}>
                    <label >
                       Name: <br />
                       <input name="username" type="text" value={this.state.username} onChange={this.handleChnage} placeholder={this.props.name} /> 
                    </label>
                        <br />
                    <label> <br />
                        Email: <br />
                        <input name="email" type="text" value={this.state.email} onChange={this.handleChnage} placeholder={this.props.email} />
                    </label>
                        <br />
                    <label> <br />
                        Password: <br />
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChnage} placeholder={this.props.password} />
                    </label><br />
                    <input className="classSubmit" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ClassForm;
