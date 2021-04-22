export interface IErrorMessageProps {
  position: 'top-left' | 'top-right' | 'top-center';
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  message: string;
  toggleToast: boolean;
  setToggleToast: (toggleToast: boolean) => void;
  setError?: (params: setErrorFunction) => void;
}

interface setErrorFunction {
  error: boolean;
  message: string;
}
