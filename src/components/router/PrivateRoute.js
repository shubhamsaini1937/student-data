import React from "react";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { Route, Redirect } from "react-router-dom";
import Loading from "../Navbar/Loading";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) {
    return <Loading />;
  }
  return !isEmpty(auth) ? (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  ) : (
    <Redirect to='/login' />
  );
};

export default PrivateRoute;
