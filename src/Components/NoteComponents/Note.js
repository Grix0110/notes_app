import { React } from "react";

function Note({ id, text, deleteNote }) {
    return (
        <div className="note">
            <div className="note__body">{text}</div>
            <div
                className="note__footer"
                style={{ justifyContent: "flex-end" }}
            >
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