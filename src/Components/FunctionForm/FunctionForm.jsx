import React, { useState } from 'react';
import './FunctionForm.css'

const FunctionForm = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });
    return (
        <div>
            Function Form
        </div>
    );
}

export default FunctionForm;
