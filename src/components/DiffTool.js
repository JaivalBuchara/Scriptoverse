// src/components/DiffTool.js
import React, { useState } from "react";
import { diffWords } from "diff";

export default function DiffTool({ showAlert }) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diffOutput, setDiffOutput] = useState([]);

  const handleText1Change = (e) => {
    setText1(e.target.value);
  };

  const handleText2Change = (e) => {
    setText2(e.target.value);
  };

  const handleCompareClick = () => {
    const diff = diffWords(text1, text2);
    setDiffOutput(diff);
    showAlert("Text compared successfully!", "success");
  };

  const renderDiffOutput = () => {
    return diffOutput.map((part, index) => {
      const color = part.added ? "green" : part.removed ? "red" : "gray";
      const backgroundColor = part.added ? "#eaffea" : part.removed ? "#ffeaea" : "transparent";
      return (
        <span
          key={index}
          style={{
            color: color,
            backgroundColor: backgroundColor,
            textDecoration: part.removed ? "line-through" : "none",
            fontWeight: part.added || part.removed ? "bold" : "normal",
            padding: "0 4px",
          }}
        >
          {part.value}
        </span>
      );
    });
  };

  return (
    <div className="container my-4">
      <h2>Text Comparison Tool</h2>
      <div className="mb-3">
        <h4>Original Text</h4>
        <textarea
          className="form-control"
          value={text1}
          onChange={handleText1Change}
          placeholder="Enter the original text"
          rows={8}
        ></textarea>
      </div>
      <div className="mb-3">
        <h4>Text to Compare</h4>
        <textarea
          className="form-control"
          value={text2}
          onChange={handleText2Change}
          placeholder="Enter the text to compare"
          rows={8}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleCompareClick}>
        Compare Texts
      </button>
      <div className="mt-4">
        <h4>Comparison Result:</h4>
        <div
          style={{
            whiteSpace: "pre-wrap",
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#f8f9fa",
          }}
        >
          {renderDiffOutput()}
        </div>
      </div>
    </div>
  );
}