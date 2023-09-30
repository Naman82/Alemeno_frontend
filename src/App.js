import React from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/Navbar";
import ImageUploadFormComponent from "./components/ImageUploadForm"; // Import the image upload component
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <>
      <NavbarComponent />
      <Container className="text-center">
        <h1 className="my-5 heading">Upload Test Sample Image</h1>
        <ImageUploadFormComponent />
      </Container>
    </>
  );
}

export default App;
