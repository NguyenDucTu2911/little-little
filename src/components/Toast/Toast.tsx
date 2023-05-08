import React, { useState, useEffect } from 'react';
import './Toast.css';

interface ToastProps {
    message: string;
    type?: 'success' | 'warning' | 'error';
    onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
    const [show, setShow] = useState(true);

    // useEffect(() => {
    //     let timer: NodeJS.Timeout;
    //     if (show) {
    //         timer = setTimeout(() => setShow(false), 3000);
    //     }
    //     return () => clearTimeout(timer);
    // }, [show]);

    const handleClose = () => {
        // setShow(false);
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


