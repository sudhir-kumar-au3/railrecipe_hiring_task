import { loginUser} from '../../services/apiCalls';
const SignupReducer = (loginData = {}, action) => {
    switch(action.type){
        case "USER_LOGIN":
            loginUser(action.data);
        default: return loginData;
    }
}
export default SignupReducer;