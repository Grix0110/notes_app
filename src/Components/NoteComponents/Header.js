import { React } from "react";

function Header() {
    const changeOrder = () => {
        document.location.reload();
    };

    return (
        <div className="header">
            <h1 className="notes__title">Notes</h1>
            <h1 className="notes__order" onClick={() => changeOrder()}>↑↓</h1>
        </div>
    );
}

export default Header;
