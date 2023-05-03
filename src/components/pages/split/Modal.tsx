import React, { useEffect, useRef, Dispatch } from "react";

import {
  StyledModal,
  StyledModalContainer,
  StyledModalClose,
  StyledModalBody,
  StyledModalContent,
} from "../../sections";

interface ModalProps {
  src: string;
  alt?: string;
  desc?: string;
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}

const Modal: React.FC<ModalProps> = ({
  src,
  alt,
  desc,
  title,
  isOpen,
  setIsOpen,
}) => {
  const modalRef = useRef<any>(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      // @ts-ignore
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // Bind the event click
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <StyledModal>
      <StyledModalContainer>
        <StyledModalClose>
          <p onClick={handleClose}>x</p>
        </StyledModalClose>
        <StyledModalBody ref={modalRef}>
          <img src={src} alt={alt} />
          <StyledModalContent>
            <h3>{title}</h3>
            <p>{desc}</p>
          </StyledModalContent>
        </StyledModalBody>
      </StyledModalContainer>
    </StyledModal>
  );
};

export default Modal;
