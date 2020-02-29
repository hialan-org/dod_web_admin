import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import {getListUser} from "../utils/APIUtils";

function ListUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getListUser().then(result => {
            console.log(result.body)
            setUsers(result.body);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <Table striped bordered hover>
                {
                    console.log(users[0])}
                <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Created Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index) => {
                        console.log("LOOP")
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{user.email}</td>
                                <td>{user.createdDate}</td>
                                <td></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </>
    )
}

export {ListUser}