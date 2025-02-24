import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { FetchPrograms } from "./components/FetchPrograms";
import { SearchButton } from "./components/SearchButton";
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
          <Route path={`/`} element={<FetchPrograms />} />
          <Route path={`/`} element={<SearchButton />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
