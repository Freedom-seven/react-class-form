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
        console.log(form);
    }

    return (
        <div className="functionForm">
            <form onSubmit={handleSubmit}>
                <label className="functionLabel">
                    Name:
                    <input className="functionLabel" type="text" name="username" value={form.username} onChange={handleChange} placeholder={props.name} />
                </label>

                <label className="functionLabel">
                    Email:
                    <input className="functionLabel" type="text" name="email" value={form.email} onChange={handleChange} placeholder={props.email} />
                </label>

                <label className="functionLabel">
                    Password:
                    <input className="functionLabel" type="text" name="password" value={form.password} onChange={handleChange} placeholder={props.password} />
                </label>
                <input className="functionSubmit" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default FunctionForm;
