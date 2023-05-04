import React from "react";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import ResetPassword from './account/ResetPassword';
import ConfirmPassword from './account/ConfirmPassword';
import NewPassword from './account/NewPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index  Component={ResetPassword} />
        <Route path="/confirm-password" Component={ConfirmPassword} />
        <Route path="/new-password" Component={NewPassword} />
      </Routes>
    </Router>
  );
}
export default App;
