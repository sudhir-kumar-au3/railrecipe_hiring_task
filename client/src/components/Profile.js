import React from 'react'
import {stateMapper} from '../redux/store';
import {connect} from 'react-redux';
function Profile(props) {
    return (
        <div>
            <h2 className="text font-weight-bolder p-2">Welcome {props.getUser.firstName}</h2>
        </div>
    )
}

export default connect(stateMapper)(Profile)
