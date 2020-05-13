import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import {deleteUser, getLatestActivity, getListUser, getTotalUserMoney, getTotalUserStock} from "../utils/APIUtils";
import {ROLE, ROLE_ADMIN, EMAIL} from "../constants/data";
import {Redirect} from "react-router-dom";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import overlayFactory from 'react-bootstrap-table2-overlay';
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import "../i18n/i18n";
import { useTranslation } from "react-i18next";

function ListUser(props) {
    const [users, setUsers] = useState([]);
    const [redirect, setRedirect] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const [totalStocks, setTotalStocks] = useState("");
    const [totalMoney, setTotalMoney] = useState("");
    const [latestActivity, setLatestActivity] = useState("");

    const { t, i18n } = useTranslation();

    useEffect(() => {
        if ((sessionStorage.getItem(ROLE) && sessionStorage.getItem(ROLE) !== ROLE_ADMIN)
            || !props.authenticated) {
            setRedirect("/");
        } else {

            getTotalUserStock().then(result => {
                console.log("getTotalUserStock: "+result.body);
                setTotalStocks(result.body);
            }).catch(err => {
                console.log(err);
            });

            getTotalUserMoney().then(result => {
                console.log("getTotalUserMoney:"+result.body);
                let val = Math.round(result.body);

                let formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });
                formatter.format(val); /* $2,500.00 */

                setTotalMoney(formatter.format(val));
            }).catch(err => {
                console.log(err);
            });

            getLatestActivity().then(result => {
                console.log("getLatestActivity: "+result.body);
                let date= new Date(result.body);
                //dateString=dateString+"";
                let dateString=date.toLocaleDateString()+' '+date.toLocaleTimeString();
                setLatestActivity(dateString);
            }).catch(err => {
                console.log(err);
            });

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
                disabled={row.email === sessionStorage.getItem(EMAIL) || row.active==0}
                variant="danger"
                onClick={() => onClickDelete(row.userId)}>
                {t("Delete")}
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
            return <span>{t("Active")}</span>
        } else {
            return <span>{t("De-Active")}</span>
        }
    }

    const columns = [{
        dataField: 'userId',
        text: t('User ID')
    }, {
        dataField: 'email',
        text: t('Email')
    }, {
        dataField: 'createdDate',
        text: t('Created Date'),
        formatter: dateFormatter,
    }, {
        dataField: 'role',
        text: t('Role'),
    }, {
        dataField: 'active',
        text: t('Status'),
        formatter: statusFormatter,
    }, {
        dataField: "actions",
        text: t("Actions"),
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
                            <Badge pill variant="primary">{t("Total Users")}: {users.length}</Badge>
                            <Badge pill variant="primary">{t("Total Active Users")}: {users.filter(user => {
                                return user.active==1
                            }).length}</Badge>
                            <Badge pill variant="secondary">{t("Total Users' Stock")}: {totalStocks}</Badge>
                            <Badge pill variant="secondary">{t("Total User Money")}: {totalMoney}</Badge>
                            <Badge pill variant="secondary">{t("Latest Activity")}: {latestActivity}</Badge>
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