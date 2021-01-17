import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Students from "./components/Students/Students";
import Student from "./components/Students/Student";
import StudentForm from "./components/Students/StudentForm";
// import { Provider } from "react-redux";
// import store, { rrfProps } from "./redux/store";
// import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import LoginForm from "./components/LoginForm";
// import PrivateRoute from "./components/router/PrivateRoute";
function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
      <Router>
        {/* <PrivateRoute component={Navbar} /> */}
        <Navbar />
        <Switch>
          {/* <PrivateRoute exact path='/' component={Students} /> */}
          <Route exact path='/' component={Students} />
          {/* <PrivateRoute exact path='/student/:id' component={Student} /> */}
          <Route exact path='/student/:id' component={Student} />
          {/* <PrivateRoute
            exact
            path='/studentform/:id?'
            component={StudentForm}
          /> */}
          <Route exact path='/studentform/:id?' component={StudentForm} />
          <Route exact path='/login' component={LoginForm} />
        </Switch>
      </Router>
      {/* </ReactReduxFirebaseProvider> */}
      {/* </Provider> */}
    </>
  );
}

export default App;
