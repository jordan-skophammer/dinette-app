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
                onClick={props.handleSubmit}
            >
            Save Changes
            </button>
        </form>
    </div>
)

export default EditAccountForm;