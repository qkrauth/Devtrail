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
import ResourceScreen from "./screens/ResourceScreen";
import ServiceScreen from "./screens/ServiceScreen";
import ProductScreen from "./screens/ProductScreen";
import PrivateRoute from "./components/PrivateRoute";
import CancelScreen from "./screens/CancelScreen";
import ConfirmScreen from "./screens/ConfirmScreen";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="/bot" element={<PrivateRoute element={<BotScreen />} />} />
          <Route path="/resources" element={<PrivateRoute element={<ResourceScreen />} />} />
          <Route path="/services" element={<PrivateRoute element={<ServiceScreen />} />} />
          <Route path="/products" element={<PrivateRoute element={<ProductScreen />} />} />
          <Route path="/cancel" element={<CancelScreen />} />
          <Route path="/success" element={<ConfirmScreen />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
