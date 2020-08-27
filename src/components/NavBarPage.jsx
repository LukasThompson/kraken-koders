import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RequestForm from "./RequestForm";
import HomePage from "./HomePage";

const Form = () => (
  <React.Fragment>
    <RequestForm />
  </React.Fragment>
);

const Home = (props) => (
  <React.Fragment>
    <HomePage projects={props.projects} />
  </React.Fragment>
);

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar className="navbar" light expand="md">
          <MDBNavbarBrand>
            <img
              src="media\KrakenKoders_Logo_2020_Orange_BeigeBG_LG@0.25x.png"
              height="75px"
              width="75px"
              alt="logo"
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">About</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Activity</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Games</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="#!">Game One</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Game Two</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Game Three</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Game Four</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/requestForm">Request Our Services</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <Route path="/RequestForm" exact component={Form} />
        <Route path="/" exact component={Home} />
      </Router>
    );
  }
}

export default NavbarPage;
