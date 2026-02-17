import { Route, Routes } from "react-router";
import WrapPage from "./WrapPage.jsx";
import Homepage from "./components/pages/Homepage.jsx";
import Login from "./components/pages/Login.jsx";
import Register from "./components/pages/Register.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WrapPage />}>
        <Route index element={<Homepage />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
