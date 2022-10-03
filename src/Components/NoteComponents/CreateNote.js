import { React } from "react";

function CreateNote({ textHandler, saveHandler, inputText }) {
    //character limit
    const charLimit = 175;
    const charLeft = charLimit - inputText.length;

    return (
        <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
            <textarea
                cols="10"
                rows="5"
                value={inputText}
                placeholder="Type...."
                onChange={textHandler}
                maxLength="175"
            ></textarea>
            <div className="note__footer">
                <span className="label">{charLeft}</span>
                <button className="note__save" onClick={saveHandler}>💾</button>
            </div>
        </div>
    );
}
export default CreateNote;
