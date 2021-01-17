import React from "react";
import { useFirebase } from "react-redux-firebase";
import { Link } from "react-router-dom";
import Pro_img from "../../logo192.png";

const Navbar = () => {
  const firebase = useFirebase();
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm '>
        <div className='container '>
          <Link className='navbar-brand fs-3' to='/'>
            Students <span className='text-danger fw-bold'>Data</span>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center'>
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/studentform'>
                  <button className='btn btn-danger border-0 px-4 btn-sm fs-6 rounded-pill'>
                    Add Student
                  </button>
                </Link>
              </li>

              <li className='nav-item dropdown fw-bold'>
                <button
                  className='nav-link dropdown-toggle btn btn-light border-0 navBtnStyle  p-0'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  <img src={Pro_img} width='35' alt='Profile_img' /> Your Name
                </button>
                <ul className='dropdown-menu border-0 shadow w-100 mt-3 '>
                  <li>
                    <Link
                      to='!#'
                      className='dropdown-item'
                      onClick={() => firebase.logout()}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
