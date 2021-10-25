import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from './dataTable';

function Users() {
    const [usersCollection, setUsersCollection] = useState([])

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:4000/users')
            .then(res => setUsersCollection(res.data))
            .then(console.log(usersCollection))
            .catch((err) => console.log(err))
    }

    function dataTable() {
        return usersCollection && usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />
        })
    }
    return (
        <div className="wrapper-users">
            <div className="container">
                <table className="table table-striped table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {dataTable()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
