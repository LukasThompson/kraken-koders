import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Kraken Koders</h5>
            <p>
            Kraken Koders was started between two like minded individuals looking to bring their ideas to
                        you! When we started this company we had a few ideas in mind, but one idea stood out from them
                        all. Bring affordable, professional, and quality designs to customers in a timely manner.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Connect With Us!{" "} </h5>
                <a className="list-unstyled" href="#!">{" "} Facebook </a>
                <a className="list-unstyled" href="#!">{" "} Twitter </a>
                <a className="list-unstyled" href="#!">{" "} GitHub </a>
                <a className="list-unstyled" href="#!">{" "} Instagram </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;