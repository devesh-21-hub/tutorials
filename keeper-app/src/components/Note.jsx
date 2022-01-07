import React from "react";

//catch the onDelete property from App
function Note(props) {
  function handleClick() {
    //Triggers the deleteNote function of App
    //Pass the id of props to the deleteNote via onDelete
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
