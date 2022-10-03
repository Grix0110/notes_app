import { React } from "react";

function Note({ id, text, deleteNote, time }) {
    return (
        <div className="note">
            <div className="note__body">{text}</div>
            <div
                className="note__footer"
                >
                <div className="time">{time}</div>
                <div
                    className="note__delete"
                    aria-hidden="true"
                    onClick={() => deleteNote(id)}
                >
                    x
                </div>
            </div>
        </div>
    );
}
export default Note;