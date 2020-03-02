import {createStore, combineReducers} from "redux";
import UserReducer from "./reducers/UserReducer";
import SignupReducer from "./reducers/SignupReducer";
import BlogReducer from "./reducers/BlogReducer";
import getUserReducer from "./reducers/getUserReducer";
import AddBlogReducer from "./reducers/AddBlogReducer";

let rootReducers = combineReducers({
    userData: UserReducer,
    loginData: SignupReducer,
    blogData: BlogReducer,
    getUser: getUserReducer,
    createBlog: AddBlogReducer
})

const store  = createStore(rootReducers);

store.subscribe(()=>{
    console.log("dispatched-item: ",store.getState());
})

let stateMapper = state => {
    return state
}
export { store, stateMapper };