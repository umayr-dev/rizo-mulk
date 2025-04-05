import { useState, useEffect } from "react";
import "../assets/styles/discounttimer.css";
import { useTranslation } from "next-i18next";
import "../i18n";
const DiscountTimer = ({ initialMinutes }) => {
    const { t, i18n } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleButtonClick = () => {
    setIsModalOpen(true); // Open the modal when the button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="discount-container">
      <h2 className="discount-title">10% OFF</h2>
      <p>When you complete your order in...</p>
      <div className="discount-timer">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <button className="discount-button" onClick={handleButtonClick}>
        Get My 10% OFF
      </button>
      <p className="discount-footer">No, thanks. I'd rather pay full price!</p>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Congratulations!</h2>
            <p>You unlocked 10% off on your order.</p>
            <button className="modal-close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DiscountForm = () => {
  return (
    <div className="discount-form">
      <h3>Complete Your Order</h3>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Enter your name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Address:
          <input type="text" placeholder="Enter your address" />
        </label>
        <button type="submit" className="form-submit-button">Submit</button>
      </form>
    </div>
  );
};

const DiscountSection = () => {
  return (
    <>
    <div className="container">

    <div className="discount-section">
      <div className="discount-timer-and-form">
        <DiscountTimer initialMinutes={15} />
        <DiscountForm />
      </div>
    </div>
    </div>
    </>
  );
};

export default DiscountSection;
