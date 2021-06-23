import React, { Component } from 'react';

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
        console.log(<h1>Class form submited</h1>);
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.password);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                       Name: <br />
                       <input name="username" type="text" value={this.state.value} onChange={this.handleChnage} placeholder={this.props.name} /> 
                    </label>
                        <br />
                    <label> <br />
                        Email: <br />
                        <input name="email" type="text" value={this.state.value} onChange={this.handleChnage} placeholder={this.props.email} />
                    </label>
                        <br />
                    <label> <br />
                        Password: <br />
                        <input name="password" type="password" value={this.state.value} onChange={this.handleChnage} placeholder={this.props.password} />
                    </label><br />
                    <input className="classSubmit" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ClassForm;
