import importReact from "react";
import Layout from "./components/Layout/Layout";
import AppRoutes from "./Routes/AppRoutes";
import Navbar from "./components/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LanguageProvider from "./context/LanguageContext";
import Footer from "./components/Footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("es");

  return (
    <Layout>
      <LanguageProvider>
        <Navbar />
        <AppRoutes />
        <Chatbot/>
        <Footer />
      </LanguageProvider>
    </Layout>
  );
}

export default App;
