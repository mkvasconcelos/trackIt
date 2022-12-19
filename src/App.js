import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Today from "./components/pages/Today";
import GlobalStyle from "./globalStyles";
import { HabitsConcluded, Image, Token } from "./contexts/contexts";
import { useState } from "react";
import Habits from "./components/pages/Habits";

export default function App() {
  const [image, setImage] = useState(null);
  const [habits, setHabits] = useState(null);
  const [token, setToken] = useState(null);
  return (
    <Image.Provider value={{ image, setImage }}>
      <HabitsConcluded.Provider value={{ habits, setHabits }}>
        <Token.Provider value={{ token, setToken }}>
          <div>
            <BrowserRouter>
              <GlobalStyle />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/hoje" element={<Today />} />
                <Route path="/habitos" element={<Habits />} />
              </Routes>
            </BrowserRouter>
          </div>
        </Token.Provider>
      </HabitsConcluded.Provider>
    </Image.Provider>
  );
}
