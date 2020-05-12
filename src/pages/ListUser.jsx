import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import {deleteUser, getListUser, getTotalUserStock} from "../utils/APIUtils";
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

    const [totalStocks, setTotalStocks] = useState("");
    const [totalMoney, setTotalMoney] = useState("");

    useEffect(() => {
        if ((sessionStorage.getItem(ROLE) && sessionStorage.getItem(ROLE) !== ROLE_ADMIN)
            || !props.authenticated) {
            setRedirect("/");
        } else {

            getTotalUserStock().then(result => {
                console.log(result.body);
                setTotalStocks(result.body.length);
            }).catch(err => {
                console.log(err);
            });

            getListUser().then(result => {
                setTotalMoney(2300);
            }).catch(err => {
                console.log(err);
            });

            getListUser().then(result => {
                console.log(result.body);
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
                disabled={row.email === sessionStorage.getItem(EMAIL) || row.active==0}
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

    function statusFormatter(cell, row, rowIndex, formatExtraData) {
        const status = cell;
        if(status==1){
            return <span>Active</span>
        } else {
            return <span>De-Active</span>
        }
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
        dataField: 'active',
        text: 'Status',
        formatter: statusFormatter,
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
                            <Badge pill variant="primary">Total Active Users: {users.filter(user => {
                                return user.active==1
                            }).length}</Badge>
                            <Badge pill variant="secondary">Total Users's Stock: {totalStocks}</Badge>
                            <Badge pill variant="secondary">Total Amount of User Money: {totalMoney}</Badge>
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