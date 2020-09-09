import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <div className="footerContainer">
      <MDBFooter color="deep-orange" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="2">
              <div className="footerImgContainer">
                <img
                  className="footerLogo"
                  alt=""
                  src="/media/KrakenKodersFooterLGTrans.png"
                  height="450px"
                  width="450px"
                ></img>
              </div>
            </MDBCol>
            <MDBCol md="6">
              <div className="footerTextBox">
                <h5 className="footerTitle">Kraken Koders</h5>
                <p className="footerContent">
                  Kraken Koders was started between two like minded individuals
                  looking to bring their ideas to you! When we started this
                  company we had a few ideas in mind, but one idea stood out
                  from them all. Bring affordable, professional, and quality
                  designs to customers in a timely manner.
                </p>
              </div>
            </MDBCol>
            <MDBCol md="2"></MDBCol>
            <MDBCol md="2">
              <h5 className="footerTitle">Connect With Us!</h5>
              <div className="footerLinkList row">
                <a
                  className="myFooterLink"
                  href="https://www.linkedin.com/company/kraken-koders/"
                >
                  {" "}
                  <MDBIcon
                    fab
                    icon="linkedin"
                    size="3x"
                    style={{ marginRight: "2px" }}
                  />
                </a>
                <a className="myFooterLink" href="#!">
                  {" "}
                  <MDBIcon
                    fab
                    icon="twitter-square"
                    size="3x"
                    style={{ marginRight: "2px" }}
                  />
                </a>
                <a className="myFooterLink" href="#!">
                  {" "}
                  <MDBIcon
                    fab
                    icon="github-square"
                    size="3x"
                    style={{ marginRight: "2px" }}
                  />
                </a>
                <div
                  className="damnDiscordIconWrapper"
                  style={{ marginTop: "3px" }}
                >
                  <a className="myFooterLink" href="#!">
                    {" "}
                    <MDBIcon
                      fab
                      icon="discord"
                      size="3x"
                      style={{ marginRight: "2px" }}
                    />
                  </a>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.krakenkoders.com"> KrakenKoders.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
