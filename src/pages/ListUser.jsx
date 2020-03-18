import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import {deleteUser, getListUser} from "../utils/APIUtils";
import {ROLE, ROLE_ADMIN, EMAIL} from "../constants/data";
import {Redirect} from "react-router-dom";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import overlayFactory from 'react-bootstrap-table2-overlay';
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

function ListUser(props) {
    const [users, setUsers] = useState([]);
    const [redirect, setRedirect] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if ((sessionStorage.getItem(ROLE) && sessionStorage.getItem(ROLE) !== ROLE_ADMIN)
            || !props.authenticated) {
            setRedirect("/");
        } else {
            getListUser().then(result => {
                setUsers(result.body);
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
            })
        }
    }, []);

    function onClickDelete(userId) {
        deleteUser(userId).then(result => {
            console.log("Delete success");
            getListUser().then(result => {
                setUsers(result.body);
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }

    function buttonFormatter(cell, row, rowIndex, formatExtraData) {
        return (
            <Button
                disabled={row.email === sessionStorage.getItem(EMAIL)}
                variant="danger"
                onClick={() => onClickDelete(row.userId)}>
                Delete
            </Button>
        );
    }

    function dateFormatter(cell, row, rowIndex, formatExtraData) {
        const date = new Date(cell);
        return (
            <span>{date.toDateString()}</span>
        )
    }

    const columns = [{
        dataField: 'userId',
        text: 'User ID'
    }, {
        dataField: 'email',
        text: 'Email'
    }, {
        dataField: 'createdDate',
        text: 'Created Date',
        formatter: dateFormatter,
    }, {
        dataField: 'role',
        text: 'Role',
    }, {
        dataField: "actions",
        text: "Actions",
        sort: false,
        formatter: buttonFormatter,
        headerAttrs: {width: 100},
    }];

    return (
        redirect ?
            (<Redirect push to="/"/>)
            : (
                <>
                    <div className="list-users-header">
                            <Badge pill variant="primary">Total Users: {users.length}</Badge>
                            <Badge pill variant="secondary">Total Users's Stock: </Badge>
                            <Badge pill variant="secondary">Total Amount of User Money: </Badge>
                    </div>
                    <BootstrapTable
                        keyField='userId'
                        data={users}
                        columns={columns}
                        noDataIndication={() => <Spinner animation="border"/>}
                    />
                </>
            )
    )
}

export {ListUser}