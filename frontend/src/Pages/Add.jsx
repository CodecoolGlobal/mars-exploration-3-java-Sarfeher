import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function saveQuestion(title, description, userName) {

    const questionObject = {title, description, userName};
    
    fetch("/api/questions/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(questionObject),
    }).then(res => res.json());
}

function Add() {
    const navigate = useNavigate();
    const [question, setQuestion] = useState("");
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");

    function submit(e) {
        e.preventDefault()
        saveQuestion(question, title, name);
        setQuestion("");
        setName("");
        setTitle("");

        navigate("/");
    }

  return (
    <>
      <form onSubmit={submit}>
        <label>Title:
            <input required value={title} onChange={e => setTitle(e.target.value)}></input>
        </label>
        <label>Question:
            <textarea required rows="5" cols="33" value={question} onChange={e => setQuestion(e.target.value)}> </textarea>
        </label>
        <label>Name:
            <input required value={name} onChange={e => setName(e.target.value)}></input>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Add