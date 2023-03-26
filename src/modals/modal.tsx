import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Button from "../components/Button/Button";

interface IModalProps {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode,
}

const StyledOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 10;
background-color: rgba(0,0,0,0.3);
width: 100%;
display: grid;
place-items: center;
height: 100vh;

& div {
    padding: 20px;
    border-radius: 10px;
    background-color: white;
}
`;


export const Modal = ({ isOpen, children, onClose }: IModalProps) => {

    // if (!isOpen) return null;

    return createPortal(
        <>
            {isOpen && <StyledOverlay onClick={onClose}>
                <div>
                    {children}
                    <Button onClick={onClose}>zamknij</Button>
                </div>
            </StyledOverlay>}
        </>,
        document.getElementById('modal') as HTMLElement
    );
}

export default Modal;
