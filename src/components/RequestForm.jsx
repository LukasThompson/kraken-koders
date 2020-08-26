import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';

class RequestForm extends React.Component {
  constructor(props){
    super(props)
      this.state = { 
        formValues:{
        name: "",
        email: "",
        subject: "",
        message: "",
      },
  }}

  componentDidMount = () => {
    this.setState((prevState) => {
      const newState = {
        ...prevState,
        hasMadeRequest: true,
      };
      return newState;
    });
  }

  render(){
    return (
    <React.Fragment>
      <div className="requestFormBody">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="8">
            <MDBCard>
              <MDBCardBody>
            <form>
              <p className="h5 text-center mb-4">Complete Your Request</p>
                <div className="grey-text">
                  <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right" />
                  <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                  <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                  <MDBInput type="textarea" rows="6" label="Your message" icon="pencil-alt" />
                </div>
                <div className="text-center">
                <MDBBtn outline color="deep-orange">
                Send
                <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
                </div>
              </form>
              </MDBCardBody>
              </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    </React.Fragment>
    );
  }
};

export default RequestForm;