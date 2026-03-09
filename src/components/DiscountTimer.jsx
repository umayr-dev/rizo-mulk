import { useState, useEffect } from "react";
import { Button, message, Input, Checkbox } from "antd";
import "../assets/styles/discounttimer.css";

const DiscountSection = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 daqiqa taymer
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    accepted: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, accepted: e.target.checked }));
  };

  const handleSubmit = async () => {
    const botToken = "7935816289:AAH-sgAo1-N_fmdKAdo66ab85ZX1tKnWOjw";
    const chatId = "-1002678371666";
    const text = `📩 Yangi buyurtma!\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}`;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    message.success("Buyurtma yuborildi! ✅");
    setFormData({ name: "", phone: "", accepted: false });
    setIsSubmitted(true);
  };

  return (
    <div className="container">
      <div className="discount-container">
        {/* Chegirma card */}
        <div className="discount-card">
          <h2>15% Chegirma!</h2>
          <p>Shoshiling, chegirma tugashiga oz qoldi:</p>
          <div className="timer">
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </div>
          {/* <Button type="primary" className="discount-btn">
          Buyurtma Berish
        </Button> */}
        </div>

        {/* Form */}
        <div className="form-container">
          <div className="form-box">
            {!isSubmitted ? (
              <>
                <Input
                  name="name"
                  placeholder="Ismingiz"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  placeholder="Telefon raqamingiz"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ marginTop: "10px" }}
                />
                <Input
                  name="hour"
                  placeholder="Soat (masalan: 12:00)"
                  value={formData.hour}
                  onChange={handleChange}
                  style={{ marginTop: "10px" }}
                />
                <div style={{ marginTop: "10px" }}>
                  <Checkbox
                    checked={formData.accepted}
                    onChange={handleCheckboxChange}
                  >
                    Shartlarga rozi bo`laman
                  </Checkbox>
                </div>
                <Button
                  type="primary"
                  onClick={handleSubmit}
                  block
                  style={{ marginTop: "15px" }}
                  disabled={!formData.accepted}
                >
                  Yuborish
                </Button>
              </>
            ) : (
              <p>Buyurtmangiz yuborildi!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
