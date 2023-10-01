import React, { useState } from "react";
import axios from "axios";
import { Card, Table, Button, Image } from "react-bootstrap";

function ImageUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setResults(null); 

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      setLoading(true);
      const response = await axios.post("https://strip-spectrum-backend.onrender.com/api/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response from the server:", response.data);

      setResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false); 
    }
  };

  return (
    <div>
      {loading ? (
        <div>Image Processing...<br></br>Loading...</div>
      ) : (
        <>
          <div className="upload">
            <input className="custom-file" type="file" accept="image/*" onChange={handleFileChange} />
            <Button className="btn btn-secondary" onClick={handleUpload}>
              Upload
            </Button>
          </div>

          {results === null && imagePreview && (
            <div>
              <h4 className="my-3">Image Preview:</h4>
              <Image style={{ width: "10rem", height: "20rem" }} src={imagePreview} alt="Preview" thumbnail />
            </div>
          )}

          {results && (
            <Card className="my-5">
              <Card.Header>
                <Card.Title>Results:</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th style={{ color: "#070707" }}>Strip Marks</th>
                      <th>
                        <span style={{ color: "red" }}>R</span>
                        <span style={{ color: "green" }}>G</span>
                        <span style={{ color: "blue" }}>B</span> Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(results).map(([key, value]) => (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{JSON.stringify(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          )}
        </>
      )}
    </div>
  );
}

export default ImageUploadForm;
