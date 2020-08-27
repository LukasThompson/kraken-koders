import React from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
} from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol
              className="text-white text-center py-5 px-4 my-5"
              style={{
                backgroundImage: `url(media/3989646.jpg)`,
              }}
            >
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                  - Kraken Koders -
                </MDBCardTitle>
                <p className="mx-5 mb-5">Sinking The Competition</p>
                <MDBBtn outline color="white" className="mb-5">
                  <MDBIcon icon="clone" className="mr-2"></MDBIcon> View
                  Projects
                </MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default JumbotronPage;
