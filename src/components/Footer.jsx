import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="deep-orange" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="2">
            <div className="footerImgContainer" style={{ height:"200px", width:"225px"}}>
            <img className="footerLogo" style={{ marginLeft: "2rem", objectFit:"cover", height: "100%", width: "100%"}} alt="" src="/media/KrakenKodersFooter.png"></img>
            </div>
          </MDBCol>
          <MDBCol md="8">
            
            <div className="footerTextBox" style={{marginLeft: "50px"}}>
            <h5 className="title"style={{color:"black", fontWeight:"bold"}}>Kraken Koders</h5>
            <p className="footerContent" style={{ color: "black", fontWeight:"bolder", height: "8rem"}}>
            Kraken Koders was started between two like minded individuals looking to bring their ideas to
                        you! When we started this company we had a few ideas in mind, but one idea stood out from them
                        all. Bring affordable, professional, and quality designs to customers in a timely manner.
            </p>
            </div>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title" style={{color:"black", fontWeight:"bold"}}>Connect With Us!{" "} </h5>
                <div className="footerLinkList">
                <a className="footerLink" style={{ color: "black", fontWeight:"bolder"}} href="https://www.linkedin.com/company/kraken-koders/">{" "}<MDBIcon fab icon="linkedin" /></a>
                <a className="footerLink" style={{ color: "black", fontWeight:"bolder"}} href="#!">{" "}<MDBIcon fab icon="twitter-square" /></a>
                <a className="footerLink" style={{ color: "black", fontWeight:"bolder"}} href="#!">{" "}<MDBIcon fab icon="github-square" /></a>
                </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.krakenkoders.com"> KrakenKoders.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;