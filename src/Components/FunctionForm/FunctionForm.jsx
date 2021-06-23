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
        console.log(form);
    }

    return (
        <div className="functionForm">
            <form onSubmit={handleSubmit}>
                <label className="functionLabel"> <br />
                    Name: <br />
                    <input className="functionLabel" type="text" name="username" value={form.username} onChange={handleChange} placeholder={props.name} />
                </label>
                <br />
                <label className="functionLabel"> <br />
                    Email: <br />
                    <input className="functionLabel" type="text" name="email" value={form.email} onChange={handleChange} placeholder={props.email} />
                </label>
                <br />
                <label className="functionLabel"> <br />
                    Password: <br />
                    <input className="functionLabel" type="password" name="password" value={form.password} onChange={handleChange} placeholder={props.password} />
                </label>
                <br />
                <input className="functionSubmit" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default FunctionForm;
