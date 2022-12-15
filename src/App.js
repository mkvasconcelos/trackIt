import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Today from "./components/pages/Today";
import GlobalStyle from "./globalStyles";
import { Image } from "./constants/constants";
import { useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);
  return (
    <Image.Provider value="Teste">
      <div>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/hoje" element={<Today />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Image.Provider>
  );
}
