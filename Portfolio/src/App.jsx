// src/App.js
import Layout from "./components/Layout/Layout";
import AppRoutes from "./Routes/AppRoutes";
import Navbar from "./components/Navbar/Navbar";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LanguageProvider from "./context/LanguageContext";

function App() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("es");

  return (
    <Layout>
      <LanguageProvider>
        <Navbar />
        {/* <LanguageSelector
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        /> */}
        <AppRoutes />
      </LanguageProvider>
    </Layout>
  );
}

export default App;
