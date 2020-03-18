// export const API_BASE_URL = 'https://5dih1d57x5.execute-api.us-west-1.amazonaws.com/Prod';
const hostname = window && window.location && window.location.hostname;
console.log(hostname);
let endpoint = "";
if(hostname === "dod-admin-20200226181705-hostingbucket-prod.s3-website-us-west-2.amazonaws.com") {
    endpoint = 'https://7nfta4t8di.execute-api.us-west-1.amazonaws.com/Prod';
} else {
    endpoint = 'https://5dih1d57x5.execute-api.us-west-1.amazonaws.com/Prod';
}
export const API_BASE_URL = endpoint;
export const ACCESS_TOKEN = 'accessToken';
export const EMAIL = 'email';

export const ROLE = 'role';
export const ROLE_ADMIN = 'admin';
export const ROLE_USER = 'user';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;