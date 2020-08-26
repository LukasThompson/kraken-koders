import React from "react";
import "./App.css";
import NavbarPage from "./components/NavBarPage";
import Footer from "./components/Footer";

class App extends React.Component {
  render(){
  return (
    <React.Fragment>
      <NavbarPage />
      <Footer />
    </React.Fragment>
  );
  }
}

export default App;
