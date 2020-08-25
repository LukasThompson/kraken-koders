import React from "react";
import "./App.css";
import NavbarPage from "./components/NavBarPage";
<<<<<<< HEAD
import { MDBContainer, MDBCardGroup } from "mdbreact";
import ProjectCardPage from "./components/ProjectCardPage";
import JumbotronPage from "./components/JumbotronPage";
=======
import Footer from "./components/Footer";
>>>>>>> master

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
      <Footer/>
    </div>
  );
}

export default App;
