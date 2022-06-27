import React, {SyntheticEvent, useState} from "react";

import axios from 'axios';

import './Register.css';

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Register = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit= async (e: SyntheticEvent) => {
        //prepreči nekaj glede html
        e.preventDefault();

        const data = {
            first_name,
            last_name,
            email,
            password
        }

        console.log(data);
        const res = await axios.post('http://localhost:8080/auth/register', data);
        console.log(res);
    }

    return (
        <>
            <Nav />
            <h1>Register</h1>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={submit}>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingFirstName"
                                   placeholder="First name"
                                onChange={(e) => setFirstName(e.target.value)}/>
                                <label htmlFor="floatingFirstName">First name</label>
                        </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingLastName"
                               placeholder="Last name"
                               onChange={(e) => setLastName(e.target.value)}/>
                        <label htmlFor="floatingLastName">Last name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput"
                               placeholder="name@example.com"
                               onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder="Password"
                                   onChange={(e) => setPassword(e.target.value)}/>
                                <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>

                </form>
            </main>
            <Footer />
        </>
    )

}

export default Register;