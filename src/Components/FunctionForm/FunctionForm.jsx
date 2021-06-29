import React, { useState } from 'react';
import './FunctionForm.css'

const FunctionForm = (props) => {
    
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm({[name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Function form submitted:");
        console.log(form.username);
        console.log(form.email);
        console.log(form.password);
        setForm={
            username: "",
            email: "",
            password: ""
        }
    }

    return (
        <div className="functionForms">
            <h4>Funtion Form</h4>
            <form onSubmit={handleSubmit}>
                <label className="functionLabel"> <br />
                    Name: <br />
                    <input className="functionInput" type="text" name="username" value={form.username} onChange={handleChange} placeholder={props.name} />
                </label>
                <br />
                <label className="functionLabel"> <br />
                    Email: <br />
                    <input className="functionInput" type="text" name="email" value={form.email} onChange={handleChange} placeholder={props.email} />
                </label>
                <br />
                <label className="functionLabel"> <br />
                    Password: <br />
                    <input className="functionInput" type="password" name="password" value={form.password} onChange={handleChange} placeholder={props.password} />
                </label>
                <br />
                <input className="functionSubmit" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default FunctionForm;
