import {addUser} from '../../services/apiCalls';
const UserReducer = (userData = {}, action) => {
    if(action.type === "ADD_USER"){
        addUser(action.data);
    }
    if(action.type === "USER_ADDED"){
        userData = action.data
    }
    return userData
}
export default UserReducer;