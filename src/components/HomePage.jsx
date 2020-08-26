import React from "react";
import { MDBContainer, MDBCardGroup } from "mdbreact";
import ProjectCardPage from "./ProjectCardPage";
import JumbotronPage from "./JumbotronPage";


class HomePage extends React.Component {
  render(){
    return (
        <React.Fragment>

      <div className="App">
        <h1 className="HomePageTitle" style={{marginTop: "10px", textAlign: "center", fontWeight: "bold"}}>Welcome to Kraken Koders!</h1>
        <MDBContainer>
          <JumbotronPage />
          <MDBCardGroup>
            <ProjectCardPage />
            <ProjectCardPage />
            <ProjectCardPage />
          </MDBCardGroup>
        </MDBContainer>
      </div>

      </React.Fragment>
    );
  }
}
export default HomePage;