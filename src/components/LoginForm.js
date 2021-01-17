import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
const LoginForm = () => {
  const history = useHistory();
  const firebase = useFirebase();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await firebase.login(user);
    history.replace("/");
  };
  return (
    <>
      <div className='container'>
        <div className='row my-5 '>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12 m-auto'>
            <form
              className='shadow p-4 rounded-3'
              onSubmit={submit}
              style={{ backgroundColor: `white` }}>
              <h3 className='text-center mb-3'>
                Students <span className='text-danger fw-bold'>Data</span>
              </h3>
              <div className='mb-3'>
                <input
                  type='email'
                  name='email'
                  value={user.email}
                  onChange={onChangeUser}
                  className='form-control  border-0 shadow-sm bg-light'
                  placeholder='Email id'
                  required
                  autocomplete='off'
                />
              </div>
              <div className='mb-3'>
                <input
                  type='password'
                  name='password'
                  value={user.password}
                  onChange={onChangeUser}
                  className='form-control  border-0 shadow-sm bg-light'
                  placeholder='Password'
                  required
                  autocomplete='off'
                />
              </div>
              <div className='d-grid col-8 mx-auto'>
                <button
                  type='submit'
                  className='btn border-0 btn-danger  btn-sm fs-6 rounded-pill'>
                  Login to DashBoard
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
