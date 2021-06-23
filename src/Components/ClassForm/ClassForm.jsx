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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
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
                    <label className="classLabel" >
                       Name: <br />
                       <input className="classInput" name="username" type="text" value={this.state.username} onChange={this.handleChange} placeholder={this.props.name} /> 
                    </label>
                        <br />
                    <label className="classLabel"> <br />
                        Email: <br />
                        <input className="classInput" name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder={this.props.email} />
                    </label>
                        <br />
                    <label className="classLabel"> <br />
                        Password: <br />
                        <input className="classInput" name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder={this.props.password} />
                    </label><br />
                    <input className="classSubmit" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ClassForm;
