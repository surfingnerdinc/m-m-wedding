import React, { useState } from "react";
import guests from "../data/Auth";
import Modal from "./Modal"; // Assuming you have a Modal component for rendering content
import GreenButton from "./GreenButton";

const AuthModal = ({ isOpen, onClose, cardType, onAuth }) => {
  const [lastname, setLastname] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);

  const handleAuth = (e) => {
    e.preventDefault();
    const user = guests.find(
      (user) => user.name.toLowerCase() === lastname.toLowerCase()
    );

    if (user && user.access.includes(cardType)) {
      setIsAuthenticated(true);
      setUserData(user);
      setError("");
    } else if (user) {
      setError("Nie masz dostępu do tej sekcji.");
    } else {
      setError("Nie znaleziono gościa o tym nazwisku.");
    }
  };

  const handleClose = () => {
    setLastname("");
    setIsAuthenticated(false);
    setError("");
    setUserData(null);
    onClose();
  };

  const renderContent = () => {
    switch (cardType) {
      case "nocleg":
        return (
          <Modal
            line1={` 🏨 Hotel: ${userData.nocleg.name}`}
            line2={` 📍 Adres: ${userData.nocleg.address}`}
            line3={` 🛌 Pokój: ${userData.room}`}
            line4={` ⏰ Wymeldowanie: ${userData.nocleg.checkout}`}
            line5={` 🍽️ Śniadanie: ${userData.nocleg.breakfast}`}
            line6={<GreenButton content="Zobacz na mapie" onClick={() => window.open(userData.nocleg.mapLink, "_blank")} />}
          />
        );
      default:
        return <div>Informacje niedostępne</div>;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              {isAuthenticated ? "" : "Weryfikacja gościa"}
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          {!isAuthenticated ? (
            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Podaj swoje nazwisko:
                </label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Wprowadź nazwisko..."
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-[#d8d1ba] hover:bg-[#bbaf87] text-white font-semibold py-2 px-4 rounded mt-4 shadow-md transition duration-300"
              >
                Weryfikuj
              </button>
            </form>
          ) : (
            <div>{renderContent()}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
