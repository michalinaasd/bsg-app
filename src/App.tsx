import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import { LoginPage } from "./components/LoginPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
