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
    <MDBCol className="d-flex align-items-stretch">
      <MDBCard style={{ width: "18rem" }}>
        <MDBCardImage className="img-fluid" src={props.project.imgSrc} waves />
        <MDBCardBody>
          <MDBCardTitle>{props.project.name}</MDBCardTitle>
          <MDBCardText>{props.project.description}</MDBCardText>
          <MDBBtn color="deep-orange" href={props.project.link}>
            Go To Project
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default ProjectCardPage;
