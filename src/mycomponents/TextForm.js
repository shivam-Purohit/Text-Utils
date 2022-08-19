import React, { useState } from "react";

export default function (props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };
  const handleLcClick = () => {
    let newText = text.toLowerCase();

    setText(newText);
    props.showAlert("Converted to lowercase","success");
  };
  const handleClear = () => {
    let newText = "";

    setText(newText);
    props.showAlert("cleared","success");
  };
  const handleCopy = () => {
    var copyText = document.getElementById("myText");
    copyText.select();
console.log(copyText);
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("copied successfully","success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState(""); //setText can be used to update the value of the variable text
  const [TextWords, setTextWords] = useState("NoOfWords");
  const [TextChar, setTextChar] = useState("NoOfChars");

  //text = "this is new text"   wrong way to update the value
  //setText ("this is new text") ; correct  way to update the value

  return (
    <>
      <div className= {`container text-${props.mode==="dark" ? "light":"dark"}`} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myText"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2  "
          mx-2="true"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-primary mx-2"
          mx-2="true"
          onClick={handleLcClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          mx-2="true"
          onClick={handleClear}
        >
          Clear
        </button>

        <button
          className="btn btn-primary mx-2"
          mx-2="true"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
      <div className={`container text-${props.mode==="dark" ? "light":"dark"} my-2`}>
        <h2>Your paragraph summery</h2>
        <p>
          your entered words are {text.split(" ").length} and characters are{" "}
          {text.length}
        </p>
        <p>Time to read the above paragraph {text.split(" ").length * 0.008}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  );
}
