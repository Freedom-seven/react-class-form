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
                Class Form
            </div>
        );
    }
}

export default ClassForm;
