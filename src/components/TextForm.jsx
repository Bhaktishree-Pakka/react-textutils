"use client";
import { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Basic manipulations
  const Upper = () => setText(text.toUpperCase());
  const Lower = () => setText(text.toLowerCase());
  const Clear = () => setText("");
  const CopyTxt = () => { navigator.clipboard.writeText(text); alert("Text copied!"); };
  const ReverseTxt = () => setText(text.split("").reverse().join(""));
  const ExtractTxt = () => setText(text.replace(/[^a-zA-Z\s]/g,""));
  const RemoveSpace = () => setText(text.replace(/\s+/g," ").trim());
  const RemoveChar = () => setText(text.replace(/[^a-zA-Z0-9\s]/g,""));

  // Extra manipulations
  const TitleCase = () => setText(text.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase()));
  const RemoveVowels = () => setText(text.replace(/[aeiouAEIOU]/g,""));
  const SortWords = () => setText(text.split(/\s+/).sort().join(" "));
  const ReadAloud = () => {
    if(text.length>0){
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  }

  // Statistics
  const wordsArr = text.trim() === "" ? [] : text.trim().split(/\s+/);
  const words = wordsArr.length;
  const characters = text.length;
  const questions = (text.match(/\?/g) || []).length;
  const statements = (text.match(/\./g) || []).length;
  const uniqueWords = [...new Set(wordsArr.map(w => w.toLowerCase()))].length;
  const avgWordLength = words === 0 ? 0 : (text.replace(/\s+/g,"").length / words).toFixed(2);
  const readingTime = (words / 200).toFixed(2); // approx 200 wpm
  const numbers = (text.match(/\d+/g) || []).length;
  const links = (text.match(/https?:\/\/[^\s]+/g) || []).join(", ");

  return (
    <div className={`textform-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="flex justify-between align-center">
        <h1>Enter Text to Analyze</h1>
      </div>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        rows="8"
        placeholder="Type or paste your text..."
      ></textarea>

      <div className="buttons-container">
        <button className="action-btn" onClick={Upper}>UpperCase</button>
        <button className="action-btn" onClick={Lower}>LowerCase</button>
        <button className="action-btn" onClick={TitleCase}>Title Case</button>
        <button className="action-btn" onClick={RemoveVowels}>Remove Vowels</button>
        <button className="action-btn" onClick={Clear}>Clear</button>
        <button className="action-btn" onClick={CopyTxt}>Copy</button>
        <button className="action-btn" onClick={ReverseTxt}>Reverse</button>
        <button className="action-btn" onClick={ExtractTxt}>Extract Text</button>
        <button className="action-btn" onClick={RemoveSpace}>Remove Space</button>
        <button className="action-btn" onClick={RemoveChar}>Remove Special Char</button>
        <button className="action-btn" onClick={SortWords}>Sort Words</button>
        <button className="action-btn" onClick={ReadAloud}>Read Aloud</button>
      </div>

      <div className="summary">
        <h2>Text Summary</h2>
        <p>Words: {words} | Characters: {characters} | Unique Words: {uniqueWords}</p>
        <p>Average Word Length: {avgWordLength} | Reading Time: {readingTime} min</p>
        <p>Questions: {questions} | Statements: {statements} | Numbers: {numbers}</p>
        <p>Links: {links || "None"}</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}