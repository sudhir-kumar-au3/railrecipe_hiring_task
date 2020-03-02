import React, { useEffect } from 'react'
import {connect} from "react-redux";
import { stateMapper } from '../redux/store';
import moment from "moment";
function Home(props) {
    async function fetchData(){
        const res = await props.dispatch({
            type : "FETCH_BLOGS"
        })
        return res
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
      <div>
        <h2 className="text font-weight-bolder p-2">Welcome To Blogger</h2>
        <hr></hr>
        {props.blogData.length > 0 ? (
          props.blogData.map(data => {
            let time = moment(data.updatedAt).format("DD-MM-YYYY");
            return (
              <div className="card mb-3" key={data.blogId}>
                <img
                  className="card-img-top"
                  src={data.cover}
                  alt={data.title}
                  height="300px"
                />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold text-capitalize">
                    {data.title}
                  </h5>
                  <p className="card-text">{data.body}</p>
                  <p className="card-text">
                    <small className="text-muted float-md-right">
                      Last updated on <em>{time}</em>
                    </small>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="spinner-border text-center" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    );
}

export default connect(stateMapper)(Home);
