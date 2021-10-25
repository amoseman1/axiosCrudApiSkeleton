import React from 'react'

function DataTable(props) {
    return (
        <tr>
            <td>
                {props.obj._id}
            </td>
            <td>
                {props.obj.username}
            </td>
            <td>
                {props.obj.email}
            </td>
        </tr>
    )
}

export default DataTable
