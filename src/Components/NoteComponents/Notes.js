import { React, useState, useEffect } from "react";
import "../css/Note.css";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";

function Notes() {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("Notes")) || []
    );
    const [inputText, setInputText] = useState("");
    const [timeStamp, setTimeStamp] = useState("");

    //saving data to local storage
    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(notes));
    }, [notes]);

    //get the saved notes and add them to the array
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Notes"));
        setNotes(data.reverse());
    }, []);

    const textHandler = (e) => {
        setInputText(e.target.value);
    };

    const time = new Date().toString().slice(0, 24);

    // add new note to the state array
    const saveHandler = () => {
        setNotes((prevState) => [
            ...prevState,
            {
                text: inputText,
                id: uuid(),
                time: time,
            },
        ]);
        setTimeStamp(time);
        //clear the textarea
        setInputText("");
    };

    //delete note function
    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };

    return (
        <div className="notes">
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    deleteNote={deleteNote}
                    time={note.time}
                />
            ))}
            <CreateNote
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={inputText}
            />
        </div>
    );
}
export default Notes;
