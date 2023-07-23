import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const ObjectForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        newsletter: false
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ?
            e.target.checked : e.target.value;
        setForm({
            ...form,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        showData();
        setForm({
            name: '',
            email: '',
            password: '',
            newsletter: false
        });
    };

    const showData = () => {
        console.log(`Name: ${form.name}`);
        console.log(`Email: ${form.email}`);
        console.log(`Password: ${form.password}`);
        console.log(`Newsletter: ${form.newsletter}`);
    }
    return (<>
        <section className="container">
            <h1>Form con oggetto</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Full name</label>
                    <input id="name" name="name" type="text" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input id="email" name="email" type="email" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Your Password</label>
                    <input id="password" name="password" type="password" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3 form-check">
                    <input id="newsletter" name="newsletter" type="checkbox" className="form-check-input" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="newsletter">Submit to the weekly newsletter</label>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </section>
    </>);
}

export default ObjectForm;