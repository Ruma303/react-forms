import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const SingleForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newsletter, setNewsletter] = useState(false);

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'newsletter':
                setNewsletter(e.target.checked);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setPassword('');
        setNewsletter(false);
    };

    return (<>
        <section className="container">
            <h1>Form con singoli stati</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Full name</label>
                    <input id="name" name="name" type="text" className="form-control"
                        value={name}
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input id="email" name="email" type="email" className="form-control"
                    value={email}
                    onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Your Password</label>
                    <input id="password" name="password" type="password" className="form-control"
                    value={password}
                    onChange={handleChange} />
                </div>
                <div className="mb-3 form-check">
                    <input id="newsletter" name="newsletter" type="checkbox" className="form-check-input" onChange={handleChange}
                    checked={newsletter}
                    />
                    <label className="form-check-label" htmlFor="newsletter">Submit to the weekly newsletter</label>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </section>
    </>);
}

export default SingleForm;