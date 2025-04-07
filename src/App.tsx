import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "./pages/Top";
import { Home } from "./pages/Home";
import { MyPage } from "./pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="home" element={<Home />} />
        <Route path="mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
