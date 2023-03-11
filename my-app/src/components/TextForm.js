import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const upperCase = () => {
    console.log("upper  case was cliked");
    setText(text.toUpperCase());
  };
  const lowerCase = () => {
    console.log("upper  case was cliked");
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    console.log("handleOnChange");
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
  };

  const sort = () => {
    let sorting = text.split(" ");
    sorting = sorting.sort();
    let mem = "";
    for (let i of sorting) {
      mem += i + " ";
    }
    setText(mem);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const textToSpeech = () => {
    const Speech = new SpeechSynthesisUtterance();
    const message = document.getElementById("myBox").value;
    Speech.lang = "eng";
    Speech.text = message;
    window.speechSynthesis.speak(Speech);
  };

  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let joinedWords = "";
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] != undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    });
    setText(joinedWords);
  };

  return (
    <>
      <div className="container">
        <h2 className="my-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="10"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={upperCase}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={lowerCase}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearText}>
          Clear all the text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={sort}>
          sort
        </button>

        <button
          type="submit"
          onClick={speak}
          className="btn btn-primary mx-2 my-2"
        >
          Speak
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove extra space
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={textToSpeech}>
          speak
        </button>
      </div>

      <div className="container">
        <h3 className="my-2">your text summary</h3>
        <p>
          {text.split(" ").length} words {text.length} and characters
        </p>
        <p>{Math.round(0.008 * text.split(" ").length)} Minutes read</p>
        <h4 className="my-1">Preview</h4>

        <p>{text}</p>
      </div>
    </>
  );
}
