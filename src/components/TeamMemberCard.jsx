import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";

function TeamMemberCard(props) {
  return (
    <MDBCol style={{ margin: "20px" }}>
      <MDBCard style={{ width: "18rem" }}>
        <MDBCardImage
          className="img-fluid img-avatar"
          src={props.member.imgSrc}
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{props.member.name}</MDBCardTitle>
          <MDBCardText>{props.member.position}</MDBCardText>
          <MDBCardText>
            <a className="myFooterLink" href={props.member.linkedIn}>
              {" "}
              <MDBIcon fab icon="linkedin" size="3x" />
            </a>

            <a className="myFooterLink" href={props.member.github}>
              {" "}
              <MDBIcon fab icon="github-square" size="3x" />
            </a>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default TeamMemberCard;
