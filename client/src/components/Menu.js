import React, { useState, useEffect } from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {stateMapper} from '../redux/store';
import {connect} from 'react-redux';
function Menu(props) {

  async function fetchUser(){
    const userData = await props.dispatch({
      type: "FETCH_USER"
    })
    return userData
  }
  useEffect(() => {
    fetchUser()
  },[])

  const [isLoggedOut, setLoggedOut] = useState({
    logoutUser: false
  })
  const handleLogout = () => {
    localStorage.clear("user");
    setLoggedOut({...isLoggedOut, logoutUser: true});
  }
  if(isLoggedOut.logoutUser){
    return <Redirect to='/login'></Redirect>
  }
    return (
      <div className='dashboard'>
        <h2 className="text-dark font-weight-bolder p-1">
          <img
            src="https://img.icons8.com/dusk/48/000000/google-blog-search.png"
            alt="icon"
          />
          <NavLink activeClassName="active" className='text-dark' to="/app/home">
              Blogger
            </NavLink>
        </h2>
        <hr></hr>
        <ul className="list-group">
          <li className="list-group-item bg-dark text-white font-weight-bolder">
            <img
              src="https://img.icons8.com/officel/24/000000/menu.png"
              alt="menu"
            />
            &nbsp; Menu
          </li>
          <li className='list-group-item'>
          <NavLink activeClassName="active"  to="/app/home">
          <img src="https://img.icons8.com/ultraviolet/28/000000/home.png" alt="home"/> 
              &nbsp; Home
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink activeClassName="active" to="/app/profile/">
              <img
                src="https://img.icons8.com/ultraviolet/28/000000/message-squared.png"
                alt="post"
              />
              &nbsp; My Profile
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink activeClassName="active" to="/app/addPost">
              <img
                src="https://img.icons8.com/ultraviolet/28/000000/create-new.png"
                alt="create"
              />
              &nbsp; Create Post
            </NavLink>
          </li>
          <li className="list-group-item">
              <button className='btn text-danger' onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    );
}

export default connect(stateMapper)(Menu)
