import React, {useState} from 'react'
import {connect} from 'react-redux';
import {stateMapper} from '../redux/store';
function CreatePost(props) {
    const data = {
        userId: props.getUser.id,
        title: '',
        body: ''
    }
    const [formData, setFormData] = useState(data);
    const onInputChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.dispatch({
            type: "ADD_BLOG",
            data: {
                userId: formData.userId,
                title: formData.title,
                body: formData.body
            }
        })
        console.log(` -- SUBMITTED--
        userId: ${formData.userId}
        title: ${formData.title}
        body: ${formData.body}
        `)
    }
    return (
        <div>
            <h2 className="text font-weight-bolder p-2">Create a Blog Post</h2>
            <form onSubmit={handleSubmit}>
                 <div className="form-group">
                   <label htmlFor="" className='font-weight-bolder'>Blog Title:</label>
                   <input type="text" className='form-control' name='title'  onChange={onInputChange} required/>
                 </div>
                 <div className="form-group">
                   <label htmlFor="" className='font-weight-bolder'>Blog Body:</label>
                   <textarea className='form-control' rows="6"  name='body' onChange={onInputChange} required/>
                 </div>
                 <div className='form-group'>
                    <button className='btn ' type='submit'>Save</button></div>

               </form>
               {
                   (props.createBlog.title) ? (
                    <div className='alert alert-success'>Blog Created</div>
                   ): ""
               }
        </div>
    )
}

export default connect(stateMapper)(CreatePost)
