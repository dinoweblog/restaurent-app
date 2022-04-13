import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { Restaurent } from "./Components/Restaurent";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.login);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/get-restaurants"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Restaurent />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
