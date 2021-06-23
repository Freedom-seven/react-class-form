import React, { Component } from 'react';

class ClassForm extends Component {
    constructor (props) {
        super(props)
        this.state = {value: ""};

        this.handleChnage = this.handleChnage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChnage(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("A class form filled: " + this.state.value);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                       Name:
                       <input type="text" value={this.state.value} onChange={this.handleChnage} placeholder={this.props.name} /> 
                    </label>

                    <label>
                        Email:
                        <input type="text" value={this.state.value} onChange={this.handleChnage} placeholder={this.props.email} />
                    </label>

                    <label>
                        Password:
                        <input type="password" value={this.state.value} onChange={this.handleChnage} placeholder={this.props.password} />
                    </label>
                </form>
            </div>
        );
    }
}

export default ClassForm;
