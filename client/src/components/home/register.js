import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';

const Register = ({ register,isAuthenticated }) => {
    

    const [user, setUser] = useState({
        firstName: '',
        lastName: ''
    });
    const { firstName,lastName} = user;
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (firstName==='' ||lastName==='') {
            console.log("err");
        } else {
            const newUser ={
                firstName,
                lastName
            }
            register(newUser);
            console.log(isAuthenticated)
        }
    }

    return (
        <div className="container">
            <h1>Account Register</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input className="form-control" placeholder="first name"
                        type="text" name="firstName" value={firstName} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input className="form-control" placeholder="last name"
                        type="text" name="lastName" value={lastName} onChange={onChange} required />
                </div>
                <button type="submit" className="btn btn-primary" value="Register">Register</button>
            </form>
        </div>
    )
}

const mapStateToProps = state =>({
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);