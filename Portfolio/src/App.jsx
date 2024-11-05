// src/App.js
import Layout from "./components/Layout/Layout";
import AppRoutes from "./Routes/AppRoutes";
import Navbar from "./components/Navbar/Navbar";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector"; 
import { useTranslation } from "react-i18next";
import { useState } from "react";

function App() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("es");

  return (
    <Layout>
      <Navbar />
      <LanguageSelector 
        currentLanguage={currentLanguage} 
        setCurrentLanguage={setCurrentLanguage} 
      />
      <AppRoutes />
    </Layout>
  );
}

export default App;
