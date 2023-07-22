import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
    /* const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    }); */
    /* const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }; */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form inviato");
    };
    return (<>
        <section className="container">
            <h1>Form in React</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Full name</label>
                    <input id="name" type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Your Password</label>
                    <input id="password" type="password" className="form-control" />
                </div>
                <div className="mb-3 form-check">
                    <input id="newsletter" type="checkbox" className="form-check-input" />
                    <label className="form-check-label" htmlFor="newsletter">Submit to the weekly newsletter</label>
                </div>
                <button type="submit" className="btn btn-primary"
                    /* onClick={handleSubmit} */
                >Register</button>
            </form>
        </section>
    </>);
}

export default Form;