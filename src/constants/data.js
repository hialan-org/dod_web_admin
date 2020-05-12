// export const API_BASE_URL = 'https://5dih1d57x5.execute-api.us-west-1.amazonaws.com/Prod';
const hostname = window && window.location && window.location.hostname;
console.log(hostname);
let endpoint = "";
if(hostname === "d1jjkkatwr4a0n.cloudfront.net") { // prod url
    endpoint = 'https://27szlnied4.execute-api.us-west-2.amazonaws.com/Prod';
} else {
    endpoint = 'https://dlj4o26lpe.execute-api.us-west-2.amazonaws.com/Prod';
}
console.log(endpoint);
export const API_BASE_URL = endpoint;
export const ACCESS_TOKEN = 'accessToken';
export const EMAIL = 'email';

export const ROLE = 'role';
export const ROLE_ADMIN = 'admin';
export const ROLE_USER = 'user';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;