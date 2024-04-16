
import './PopUp.css';  
import { IoMdClose } from "react-icons/io";

function PopUp({ isOpen, close, children }:{ isOpen: boolean, close: () => void, children: JSX.Element }) {
    if (!isOpen) return null;

    return (
        <div className="popup-backdrop">
            <div className="popup-content">
                <button className="close-button" onClick={close}>
                    <IoMdClose />
                </button>
                {children}
            </div>
        </div>
    );
}

export default PopUp;