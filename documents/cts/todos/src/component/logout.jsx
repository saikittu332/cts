import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <h2>logged out successfully</h2>
      <p>
        click<Link to="/login"> here</Link> to login again
      </p>
    </div>
  );
};

export default Logout;
