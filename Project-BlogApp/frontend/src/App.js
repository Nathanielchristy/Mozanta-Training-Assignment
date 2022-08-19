import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import HomeRoute from "./components/routes/HomeRoute";
import NotFound from "./components/notfound/NotFound";
import Logout from "./components/logout/Logout";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route exact path="/home/*" element={<HomeRoute />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
