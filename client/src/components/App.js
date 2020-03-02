import React from 'react';

import {Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../redux/store";

import Menu from "./Menu";
import Profile from "./Profile";
import Home from "./Home";
import CreatePost from "./CreatePost";
import '../App.scss';

function App() {
  return (
    <Provider store={store}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Menu/>
            </div>
            <div className="col-md-9">
              <Route path="/app/profile" component={Profile}/>
              <Route path='/app/home' component={Home}></Route>
              <Route path='/app/addPost' component={CreatePost}></Route>
            </div>
          </div>
        </div>
      </Provider>
  );
}

export default App;
