import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const ProjectCardPage = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="media\kraken.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Project Title</MDBCardTitle>
          <MDBCardText>Description of project.</MDBCardText>
          <MDBBtn color="deep-orange" href="#">
            Go To Project
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default ProjectCardPage;
