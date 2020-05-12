import { API_BASE_URL, ACCESS_TOKEN } from '../constants/data';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    if(options.accessToken){
        headers.append('Authorization', 'Bearer ' + options.accessToken)
    } else {
        if(sessionStorage.getItem(ACCESS_TOKEN)) {
            headers.append('Authorization', 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN))
        }
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function getCurrentUser() {
    if(!sessionStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function login(accessToken) {
    return request({
        url: API_BASE_URL + "/loginWithGoogle",
        method: 'POST',
        accessToken: accessToken
    });
}

export function getListUser() {
    if(!sessionStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/users",
        method: 'GET'
    })
}

export function deleteUser(userId) {
    if(!sessionStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/users" + "/" + userId,
        method: 'DELETE',
    })
}

export function getTotalUserStock() {
    if(!sessionStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/statistics/countTotalUserStockNumber",
        method: 'GET'
    })
}

export function getTotalUserMoney() {
    if(!sessionStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/statistics/totalAmountOfUserMoney",
        method: 'GET'
    })
}