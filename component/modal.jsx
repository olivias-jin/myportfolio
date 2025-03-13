import React from "react";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                {children}
                <button onClick={onclose}>닫기기</button>
            </div>
        </div>
    );
}

export default Modal;