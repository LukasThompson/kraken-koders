import React from "react";
import { MDBContainer, MDBCardGroup } from "mdbreact";
import ProjectCardPage from "./ProjectCardPage";
import JumbotronPage from "./JumbotronPage";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  mapProjects = (project) => {
    return <ProjectCardPage project={project} key={project.id} />;
  };

  onLoad = () => {
    this.setState((prevState) => {
      let projectsArray = [
        {
          name: "Space Game Clone",
          description: "Unity3D - C#",
          imgSrc: "media/SpaceGame.png",
          id: 1,
        },
        {
          name: "Coming Soon",
          description: "Coming Soon",
          imgSrc: "media/comingsoon.jpg",
          id: 2,
        },
        {
          name: "Coming Soon",
          description: "Coming Soon",
          imgSrc: "media/comingsoon.jpg",
          id: 3,
        },
      ];
      let mappedProject = projectsArray.map(this.mapProjects);
      return {
        ...prevState,
        projects: mappedProject,
      };
    });
  };

  componentDidMount() {
    this.onLoad();
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <MDBContainer>
            <JumbotronPage />
            <center>
              <h1>About Us</h1>
              <p>
                Kraken Koders develop professional custom applications for
                websites, games, and more. We specialize in being the best for
                our customers and the products they desire. If you are on a
                tight deadline let Kraken Koders help you and bring you a top of
                the line product to satisfy your needs.
              </p>
              <p>
                With more than 5 years on the web and 20 years of experience
                working with computers. We have developed applications ranging
                from very simple, to extremely complex. No matter what your
                development needs are, Kraken Koders can make the magic happen.
              </p>
              <br />
              <h1>Our Projects</h1>
              <br />
              <MDBCardGroup>{this.state.projects}</MDBCardGroup>
              <hr />
            </center>
          </MDBContainer>
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;
