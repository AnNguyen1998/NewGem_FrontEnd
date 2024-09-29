import React, { createContext } from 'react';
import { toast } from 'react-toastify';

export const ToastTypes = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const showToast = (message, type) => {
    if (Object.values(ToastTypes).includes(type)) {
      toast[type](message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

