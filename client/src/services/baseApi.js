import axios from 'axios';

const getUserToken = () => {
    let user = localStorage.getItem("user");
    if(user) user = JSON.parse(user);
    return user.accessToken
}
const token = getUserToken();
const baseApi = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "content-Type": "application/json",
        "Authorization" : `bearer ${token}`
    }
});
export default baseApi;
