import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    //event.target.name and event.target.value
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    //Calling onAdd is equivalent to calling addNote from App.jsx
    //Passing the current object note as parameter to the onAdd or equivalently to addNote of App

    props.onAdd(note);
    submitNote({ title: "", content: "" });
    event.preventDefalut();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
