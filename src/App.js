import React from "react";
import "./App.css";
import NavbarPage from "./components/NavBarPage";
import { MDBContainer, MDBCardGroup } from "mdbreact";
import ProjectCardPage from "./components/ProjectCardPage";
import JumbotronPage from "./components/JumbotronPage";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <MDBContainer>
        <JumbotronPage />
        <MDBCardGroup>
          <ProjectCardPage />
          <ProjectCardPage />
          <ProjectCardPage />
        </MDBCardGroup>
      </MDBContainer>
      Welcome to Kraken Koders bitch!
    </div>
  );
}

export default App;
