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

const ProjectCardPage = (props) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "18rem" }}>
        <MDBCardImage className="img-fluid" src={props.project.imgSrc} waves />
        <MDBCardBody>
          <MDBCardTitle>{props.project.name}</MDBCardTitle>
          <MDBCardText>{props.project.description}</MDBCardText>
          <MDBBtn color="deep-orange" href="#">
            Go To Project
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default ProjectCardPage;
