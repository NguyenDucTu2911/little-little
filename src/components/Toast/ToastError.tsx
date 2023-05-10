import React, { useState, useEffect } from 'react';
import './Toast.css';

interface ToastProps {
    message: string;
    type?: 'success' | 'warning' | 'error';
    onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type = 'error', onClose }) => {
    const [show, setShow] = useState(true)

    const handleClose = () => {
        onClose?.();
    };

    return (
        <div className={`toast toast-${type}${show ? ' toast-show' : ' toast-hide'}`}>
            <button className="toast-close" onClick={handleClose}>
                &times;
            </button>
            <div className="toast-message">{message}</div>
        </div>
    );
};

export default Toast;


