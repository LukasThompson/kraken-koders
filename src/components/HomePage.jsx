import React from "react";
import { MDBContainer, MDBCardGroup, MDBCard } from "mdbreact";
import ProjectCardPage from "./ProjectCardPage";
import JumbotronPage from "./JumbotronPage";
import TeamMemberCard from "./TeamMemberCard";
import $ from "jquery";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      team: [],
    };
  }

  mapProjects = (project) => {
    return <ProjectCardPage project={project} key={project.id} />;
  };

  mapTeam = (member) => {
    return <TeamMemberCard member={member} key={member.id} />;
  };

  getTeamData() {
    $.ajax({
      url: "./teamMemberData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ team: data });
      }.bind(this),
      error: function (err) {
        console.log(err);
        alert(err);
      },
    });
  }

  getProjectData() {
    $.ajax({
      url: "./projectData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ projects: data });
      }.bind(this),
      error: function (err) {
        console.log(err);
        alert(err);
      },
    });
  }

  onLoad = () => {
    this.setState((prevState) => {
      // Will replace with Ajax Call to .json Data Files
      let projectsArray = [
        {
          name: "WebMall Blogs",
          description: "React.js, C#, .Net Core, SQL",
          imgSrc: "media/WebMallBlogs.png",
          id: 1,
          link: "https://webmall.azurewebsites.net/blogs",
        },
        {
          name: "WebMall Scheduler",
          description: "React.js, C#, .Net Core, SQL, Google Maps API",
          imgSrc: "media/WebMallScheduler.png",
          id: 2,
          link: "https://webmall.azurewebsites.net/schedules",
        },
        {
          name: "Huskey Developers",
          description: "HTML, CSS, Bootstrap",
          imgSrc: "media/HuskyDev.png",
          id: 3,
          link: "http://huskydevelopers.epizy.com/",
        },
      ];
      let mappedProject = projectsArray.map(this.mapProjects);
      // Replace with Ajax call to .json Data files
      let teamArray = [
        {
          id: 1,
          name: "Lukas Thompson",
          imgSrc: "media/MEBlehBW.png",
          position: "Developer",
          linkedIn: "https://www.linkedin.com/in/lukas-thompson-2b7b611aa/",
          github: "https://github.com/LukasThompson",
          profile:
            "I graduated in 2017 with my Associate of Applied Science in Computer programming and Systems Design. From there I've used tons of resources to learn about C# and Unity game development. In my spare time I'm using my programming knowledge to learn how to create things using systems such as Arduino and Raspberry Pi.",
        },
        {
          id: 2,
          name: "Rob Rukavina",
          imgSrc: "media/RobBW.png",
          position: "Developer",
          linkedIn: "https://www.linkedin.com/in/robert-rukavina-9bb219187/",
          github: "https://github.com/RobRukavina",
          profile: "",
        },
        {
          id: 3,
          name: "Patrick Yarbourgh",
          imgSrc: "media/Pat.png",
          position: "Sales / Jr Developer",
          linkedIn: "https://www.linkedin.com/company/kraken-koders/",
          github: "https://github.com/",
          profile:
            "I am currently enrolled in school with a degree focus in programming. I also provide a service in sales for Kraken Koders with some of the most competitive prices available on the market.",
        },
      ];
      let mappedTeam = teamArray.map(this.mapTeam);
      return {
        ...prevState,
        projects: mappedProject,
        team: mappedTeam,
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
              <h1>Our Projects</h1>
              <br />
              <MDBCardGroup>{this.state.projects}</MDBCardGroup>
              <br />
              <img src="media/kraken.jpg" alt="kraken break" />
              <br />
              <section id="about">
                <MDBContainer>
                  <MDBCard>
                    <br />
                    <h1>Meet The Team!</h1>
                    <MDBCardGroup>{this.state.team}</MDBCardGroup>
                    <h1>About Us</h1>
                    <MDBContainer style={{ width: "75%" }}>
                      <p>
                        Kraken Koders develop professional custom applications
                        for websites, games, and more. We specialize in being
                        the best for our customers and the products they desire.
                        If you are on a tight deadline let Kraken Koders help
                        you and bring you a top of the line product to satisfy
                        your needs.
                      </p>
                      <p>
                        With more than 5 years on the web and 20 years of
                        experience working with computers. We have developed
                        applications ranging from very simple, to extremely
                        complex. No matter what your development needs are,
                        Kraken Koders can make the magic happen.
                      </p>
                    </MDBContainer>
                    <br />
                  </MDBCard>
                </MDBContainer>
              </section>
            </center>
          </MDBContainer>
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;
