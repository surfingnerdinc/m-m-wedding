import GreenButton from "./GreenButton";
import AuthModal from "./AuthModal";
import React, { useState } from "react";

const Card = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Map card titles to cardType for the modal
  const getCardType = (title) => {
    switch (title?.toLowerCase()) {
      case 'transport':
        return 'transport';
      case 'zakwaterowanie':
        return 'nocleg';
      case 'dresscode':
        return 'dresscode';
      case 'śniadanie':
        return 'sniadanie';
      default:
        return 'general';
    }
  };

  return (
    <>
      <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
        <img
          src={props.image}
          alt={props.alt}
          className="w-20 mx-auto mt-[-3rem] bg-white"
        />
        <h2 className="font-wedding text-4xl font-bold text-center mt-8">
          {props.title}
        </h2>
        <p className="text-center text-l mt-4">{props.description}</p>
        <GreenButton content={props.button} onClick={props.onClick || handleCardClick} />
      </div>

      <AuthModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cardType={getCardType(props.title)}
      />
    </>
  );
};

export default Card;
