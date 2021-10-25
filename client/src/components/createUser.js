import React from 'react'

function CreateUser() {
    return (
        <div className="wrapper">
            <form>
                <div className="form-group">
                    <label>Enter Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Enter Email</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-success btn-block" />
                </div>
            </form>
        </div>
    )
}

export default CreateUser
