import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import { FaTelegram } from "react-icons/fa"; // Telegram ikonkasi uchun kutubxona

function App() {
  const handleAdminRedirect = () => {
    window.open("https://t.me/rizomulkacademy", "_blank"); // Admin Telegram profiliga yo'naltirish
  };

  return (
    <>
      <Header />
      <Main />
      <div id="footer">
        <Footer />
      </div>

      {/* Admin Icon Button */}
      <button
        onClick={handleAdminRedirect}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#0088cc",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <FaTelegram size={30} />
      </button>
    </>
  );
}

export default App;
