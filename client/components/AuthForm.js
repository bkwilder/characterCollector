import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  let signUpFields = <div></div>;
  if (name === "signup") {
    signUpFields = (
      <div>
        <div className='input'>
          <label htmlFor="email">
            <small>EMAIL</small>
          </label>
          <input className="text-input" name="email" type="text" />
        </div>
        <div className='input'>
          <label htmlFor="firstname">
            <small>FIRST NAME</small>
          </label>
          <input className="text-input" name="firstname" type="text" />
        </div>
      </div>
    );
  }
  return (
    <div className = 'login'>
    <div className='form'>
      <form onSubmit={handleSubmit} name={name}>
        <div className='input'>
          <label htmlFor="username">
            <small>USERNAME</small>
          </label>
          <input className="text-input" name="username" type="text" />
        </div>
        <div className='input'>
          <label htmlFor="password">
            <small>PASSWORD</small>
          </label>
          <input className="text-input" name="password" type="password" />
        </div>
        {signUpFields}
        <div className="form">
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
