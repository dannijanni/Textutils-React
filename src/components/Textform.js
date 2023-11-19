import React, { useState } from "react";

export default function Textform(props) {
  const handleupClick = () => {
    // console.log("Uppercase was Clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to upper case!","success");
  };
  const handleLoClick = () => {
    // console.log("Lowercase was Clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lower case!","success");
  };
  const handleonChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    
    props.showAlert("Copied to clipboard!","success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces","success");
  };

  const [text, setText] = useState(" ");
  // setText("new text")

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "light" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>
          Conver to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Conver to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove ExtraSpaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text?.split(" ")?.length} word and {text?.length}charatecrs
        </p>
        <p>{0.008 * text?.split(" ")?.length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the textbox above to Preview it Here"}
        </p>
      </div>
    </>
  );
}
