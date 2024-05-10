import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./UserContext";
import BotScreen from "./screens/BotScreen";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="/bot" element={<BotScreen />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
