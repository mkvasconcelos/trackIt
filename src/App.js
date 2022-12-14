import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import GlobalStyle from "./globalStyles";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
