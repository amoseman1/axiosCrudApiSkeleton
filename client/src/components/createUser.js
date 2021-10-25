import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
    const [formObject, setFormObject] = useState({
        username: '',
        email: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormObject({ ...formObject, [name]: value })
        console.log(e.target.value)
    };


    function onSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:4000/users/create',
            {
                username: formObject.username,
                email: formObject.email
            }).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            }).then(() => setFormObject({
                username: "",
                email: ""
            })).then(alert("User created successfully!"))
    }

    return (
        <div className="wrapper">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Enter UserName</label>
                    <input type="text" className="form-control" onChange={handleChange} name="username" value={formObject.username} />
                </div>
                <div className="form-group">
                    <label>Enter Email</label>
                    <input type="text" className="form-control" onChange={handleChange} name="email" value={formObject.email} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-success btn-block" />
                </div>
            </form>
        </div>
    )
}

export default CreateUser
