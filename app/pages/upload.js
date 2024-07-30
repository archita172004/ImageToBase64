"use client";
import { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [base64, setBase64] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setBase64(base64String);
      console.log("Base64 String:", base64String);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Convert</button>
      </form>
      {base64 && (
        <div>
          <p>Base64 Preview :</p>
          <img src={base64} alt="base64" style={{ maxWidth: "300px" }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
