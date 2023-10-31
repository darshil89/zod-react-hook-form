
import { ToastContainer, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToasterProps extends ToastContainerProps {
    children: React.ReactNode;
}

export default function Toaster({ children, ...props }: ToasterProps) {
    return <ToastContainer {...props}>{children}</ToastContainer>;
}
