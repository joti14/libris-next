"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = ({ children }) => {
    return (
        <div>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="dark"
                toastStyle={{
                    backgroundColor: "#1f1f1f",
                    color: "#d1d5db",
                }}
            />
        </div>
    );
};

export default ToastProvider;