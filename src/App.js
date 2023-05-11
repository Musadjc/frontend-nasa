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
import Misiones from './Pages/Misiones';
import Spacecrafts from './Pages/Spacecrafts';
import Satelites from './Pages/Satelites';
import Logout from "./Pages/Logout";
import Login from "./Pages/Login";
import Alta from "./Pages/Alta";

//Modulos importados


function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar" class="navbar navbar-expand-lg navbar-dark bg-primary">
          <NavLink className={"navlink"} to="/" class="nav-link active " style={{color: "white"}}>
            Inicio
          </NavLink>
          <NavLink className={"navlink"} to="/misiones" class="nav-link" style={{color: "white"}}>
            Misiones
          </NavLink>
          <NavLink className={"navlink"} to="/launchs" class="nav-link" style={{color: "white"}}>
            Launchs
          </NavLink>
          <NavLink className={"navlink"} to="/spacecrafts" class="nav-link" style={{color: "white"}}>
            Spacecrafts
          </NavLink>
          <NavLink className={"navlink"} to="/satelites" class="nav-link" style={{color: "white"}}>
            Satelites
          </NavLink>
          <NavLink className={"navlink"} to="/signup" class="nav-link" style={{color: "white"}}>
            Crear Cuenta
          </NavLink>
          <NavLink className={"navlink"} to="/login" class="nav-link" style={{color: "white"}}>
            Login
          </NavLink>
          <NavLink className={"navlink"} to="/logout" class="nav-link" style={{color: "white"}}>
            Logout
          </NavLink>
        </div>
        


        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/misiones" element={<Misiones />} />
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

