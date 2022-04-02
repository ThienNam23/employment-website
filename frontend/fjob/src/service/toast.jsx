import { toast } from "react-toastify";

export const notify = (message, toastType, delay = 2500, onClose = {}) => {
    toast(message, {
        type: toastType,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: onClose,
    });
}