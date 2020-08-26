import React from "react";
import "./App.css";
import NavbarPage from "./components/NavBarPage";
import { MDBContainer, MDBCardGroup } from "mdbreact";
import ProjectCardPage from "./components/ProjectCardPage";
import JumbotronPage from "./components/JumbotronPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      Welcome to Kraken Koders!
      <MDBContainer>
        <JumbotronPage />
        <MDBCardGroup>
          <ProjectCardPage />
          <ProjectCardPage />
          <ProjectCardPage />
        </MDBCardGroup>
      </MDBContainer>
      <Footer/>
    </div>
  );
}

export default App;
