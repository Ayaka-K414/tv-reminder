import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { MyPage } from "./components/MyPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/`} element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
