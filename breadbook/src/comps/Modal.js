import React from 'react';

const Modal = ({ selectedImage, setSelectedImage }) => {

  const onClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImage(undefined);
    }
  };

  return (
    <div className="backdrop" onClick={onClick}>
      <img src={selectedImage} alt="enlarged-pic" />
    </div>
  );
};

export default Modal;
