import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { color } from "../lib/styles.config";

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

& > div {
    padding: 30px;
    border-radius: 10px;
    background-color: white;
    position: relative;
    max-width: 500px;
}

& button {
    position: absolute;
    top: 5px;
    right:5px;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    cursor: pointer;

    &:hover {
        color: ${color.blue};
        border-color: ${color.blue};
    }
}
`;


export const Modal = ({ isOpen, children, onClose }: IModalProps) => {

    // if (!isOpen) return null;

    return createPortal(
        <>
            {isOpen && <StyledOverlay onClick={onClose}>
                <div>
                    {children}
                    <button onClick={onClose}><FontAwesomeIcon icon={faClose}/></button>
                </div>
            </StyledOverlay>}
        </>,
        document.getElementById('modal') as HTMLElement
    );
}

export default Modal;
