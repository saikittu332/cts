import React from "react";
import NavBar from "./components/navbar";
import List from "./components/movies"; //movies
import SideNav from "./components/sidenav"; //listgroup

function App() {
  return (
    <div className="m-auto container-fluid">
      <div>
        <NavBar />
      </div>

      <div className="row">
        <div className="col-md-4">
          <SideNav />
        </div>
        <div className="col-md-8">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
