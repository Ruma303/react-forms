import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const SingleForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const [user, setUser] = useState(null);

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
        const hashedPassword = password.split('').reverse().join('');
        const newUser = {
            name,
            email,
            password: hashedPassword,
            newsletter
        };
        setUser(newUser);
        showData();
        setName('');
        setEmail('');
        setPassword('');
        setNewsletter(false);
    };

    const showData = () => {
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log(`Newsletter: ${newsletter}`);
    }

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
        {user && <User user={user} />}
    </>);
}

const User = ({ user }) => {
    return (
        <div>
            <h2>New User</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Newsletter: {user.newsletter ? 'Yes' : 'No'}</p>
        </div>
    );
}
export default SingleForm;