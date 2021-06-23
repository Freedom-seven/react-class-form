import React, { useState } from 'react';
import './FunctionForm.css'

const FunctionForm = () => {
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
        <div>
            Function Form
        </div>
    );
}

export default FunctionForm;
