import GreenButton from "./GreenButton";
import React, { useState } from "react";

const OneCardNoAuth = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Map card titles to content for the modal
  const getModalContent = (title) => {
    switch (title?.toLowerCase()) {
      case 'transport':
        return {
          title: 'Informacje o transporcie',
          content: (
            <div className="space-y-3">
              <p className="text-lg">‼️ Z hotelu do kościoła: 13:00</p>
              <p className="text-sm text-gray-600 mt-4 pl-6">13:00 odjazd z Kolejowej / 13:05 z Piłsudskiego</p>
              <p className="text-sm text-gray-600 mt-4 pl-6">
                Bus będzie czekał przy głównym wejściu do hotelu.
              </p>
              <p className="text-lg">✅ Pierwszy bus z sali do hotelu: 02:00</p>
              <p className="text-lg">✅ Ostatni bus z sali do hotelu: 04:00</p>
            </div>
          )
        };
      case 'dresscode':
        return {
          title: 'Dress Code',
          content: (
            <div className="space-y-3">
              <p className="text-lg">👔 Nie wymagamy niczego szczególnego</p>
              <p className="text-lg">👗 Wesele jest w eleganckim stylu</p>
              <p className="text-lg">🏡 Lecz sala jest w malowniczej scenerii</p>
              <p className="text-sm text-gray-600 mt-4">
                Wesele odbędzie się w ogrodzie, przygotuj się na trawę!
              </p>
            </div>
          )
        };
      case 'śniadanie':
        return {
          title: 'Śniadanie',
          content: (
            <div className="space-y-3">
              <p className="text-lg">🕘 Godzina: 8:00 - 10:00</p>
              <p className="text-lg">📍 Miejsce: Restauracja hotelu Ambrozja, ul. Kolejowa</p>
              <p className="text-lg">🍳 Warto jednak rozważyć wcześniejsze przybycie</p>
              <p className="text-lg">🕘 Godzina: 8:00 - 10:00</p>
              <p className="text-lg">📍 Miejsce: Restauracja hotelu Arte, plac Zamkowy</p>
              <p className="text-lg">🍳 Warto jednak rozważyć wcześniejsze przybycie</p>
            </div>
          )
        };
      default:
        return {
          title: 'Informacje',
          content: (
            <div className="space-y-3">
              <p className="text-lg">Więcej informacji wkrótce...</p>
            </div>
          )
        };
    }
  };

  // Simple modal component without authentication
  const SimpleModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div>
              {content}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const modalContent = getModalContent(props.title);

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

      <SimpleModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalContent.title}
        content={modalContent.content}
      />
    </>
  );
};

export default OneCardNoAuth;
