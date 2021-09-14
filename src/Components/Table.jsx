import userEvent from '@testing-library/user-event'
import React, { Fragment } from 'react'

function Table(props) {
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Ocupacion</th>
                        <th>Categoria</th>
                        <th>Valores</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       props.users.length > 0 ?
                       props.users.map((user) => (
                       <tr>
                           <td>{user.name}</td>
                           <td>{user.age}</td>
                           <td>{user.occupation}</td>
                           <td>{user.category}</td>
                           <td>{user.attitudes}</td>
                        </tr>
                           )) : (<tr>No se ha guardado ningún usuario</tr>)
                   }
                </tbody>
            </table>
        </Fragment >
    )
}

export default Table
