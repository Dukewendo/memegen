import React, { useState } from "react";
import "./memeData";
import "./Form.css";
import memeData from "./memeData";

export default function Form() {
  const [memeImage, setMemeImage] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const response = memeData.data.memes;
    const randomMeme = Math.floor(Math.random() * response.length);
    setMemeImage(response[randomMeme].url)
  }

  return (
    <form onSubmit={handleSubmit} className="page--form">
      <label className="first--input">
        <input
          type="text"
          placeholder="Top text"
          className="form--first"
        ></input>
      </label>

      <label className="second--input">
        <input
          type="text"
          placeholder="Bottom text"
          className="form--second"
        ></input>
      </label>
      <button type="submit" className="form--button">
        Generate new image
      </button>
      <img className="meme--image" src={memeImage} alt="" />
    </form>
  );
}
