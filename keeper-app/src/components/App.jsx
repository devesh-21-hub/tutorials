import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //notes is an array that will contain all notes
  const [notes, setNotes] = useState([]);
  //note object is received from onAdd() inside submitNote of CreateArea
  //note object is passed as parameter to addNote, to store it in an array
  function addNote(note) {
    //prevNotes is the initial array, i.e. before note object is created
    setNotes((prevNotes) => {
      //adds the note object to the notes arrays after the previous elements
      return [...prevNotes, note]; //updates the notes array
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  //Return the app
  return (
    <div>
      <Header />

      {/* Pass the function as props to the <CreateArea /> */}
      <CreateArea onAdd={addNote} />
      {/* Take the notes array and using map function, for each noteItem, create a Note element */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.note}
            content={noteItem.content}
            //Trigger the above deleteNote function by the prop onDelete
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
