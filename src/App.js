//Importar las rutas del sign in y el login.
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink,
} from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Error from "./Pages/Error";
import Usuarios from "./Pages/Usuarios";
import Launchs from "./Pages/Launchs";
import Spacecrafts from './Pages/Spacecrafts';
import Satelites from './Pages/Satelites';
import Logout from "./Pages/Logout";
import Login from "./Pages/Login";
import Alta from "./Pages/Alta";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <NavLink className={"navlink"} to="/">
            Inicio
          </NavLink>
          <NavLink className={"navlink"} to="/launchs">
            Launchs
          </NavLink>
          <NavLink className={"navlink"} to="/spacecrafts">
            Spacecrafts
          </NavLink>
          <NavLink className={"navlink"} to="/satelites">
            Satelites
          </NavLink>
          <NavLink className={"navlink"} to="/signup">
            Crear Cuenta
          </NavLink>
          <NavLink className={"navlink"} to="/login">
            Login
          </NavLink>
          <NavLink className={"navlink"} to="/logout">
            Logout
          </NavLink>
        </div>

        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/launchs" element={<Launchs />} />
          <Route path="/spacecrafts" element={<Spacecrafts />} />
          <Route path="/satelites" element={<Satelites />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Alta />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

