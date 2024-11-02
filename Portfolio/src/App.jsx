import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AppRoutes from "./Routes/AppRoutes";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <Layout>
      <Navbar />
      <AppRoutes />
    </Layout>
  );
}

export default App;
