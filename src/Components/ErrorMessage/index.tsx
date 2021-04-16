import React, {useEffect} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {IErrorMessageProps} from './interface';

export const ErrorMessageToast: React.FC<IErrorMessageProps> = (
    {
      autoClose,
      closeOnClick,
      draggable,
      hideProgressBar,
      message,
      pauseOnHover,
      position,
      setToggleToast,
      toggleToast,
      setError,
    }:IErrorMessageProps,
): JSX.Element =>{
  useEffect(
      () => {
        if (toggleToast) {
          toast.error(message, {
            position: position,
            autoClose: autoClose,
            hideProgressBar: hideProgressBar,
            closeOnClick: closeOnClick,
            pauseOnHover: pauseOnHover,
            draggable: draggable,
            progress: undefined,
          });
          setToggleToast(false);
          if (setError) {
            setError({error: false, message: ''});
          }
        }
      },
      [toggleToast],
  );

  return <ToastContainer
    position={position}
    autoClose={autoClose}
    hideProgressBar={hideProgressBar}
    newestOnTop={true}
    closeOnClick={closeOnClick}
    rtl={false}
    draggable={draggable}
    pauseOnHover={pauseOnHover}
  />;
};
