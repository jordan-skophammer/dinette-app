import React from "react";

const EditAccountForm = (props) => (
    <div>
        <form>
            <div className="form-group">
            <label htmlFor="userName">Email/Username</label>
            <input 
                type="text" 
                className="form-control" 
                name="userName" 
                placeholder="Enter Username or Email"
                onChange={props.handleChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                type="text" 
                className="form-control" 
                name="password" 
                placeholder="Enter new password"
                onChange={props.handleChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="zipcode">Default Zipcode</label>
            <input 
                type="text" 
                className="form-control" 
                name="zipcode" 
                placeholder="55555"
                onChange={props.handleChange}
                />
            </div>
            <button 
                type="submit"
                className="btn yellow"
                data-dismiss="modal"
                onClick={props.handleSubmit}            >
            Save Changes
            </button>
        </form>
    </div>
)

export default EditAccountForm;