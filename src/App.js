//import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "conteners/Home";
import Login from "conteners/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
