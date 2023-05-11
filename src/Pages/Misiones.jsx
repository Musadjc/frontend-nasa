import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VerMisiones = () => {
  const [misiones, setMisiones] = useState([]);
  const [usuario, setUsuario] = useState([]);
  
  const extraerDatosDeUsuario = () => {
    const datosRecuperar = JSON.parse(localStorage.getItem("datosUsuario"));
    if (datosRecuperar && datosRecuperar.userId) {
      setUsuario(datosRecuperar.userId);
      return datosRecuperar.token;
    }
    return null;
  };

  useEffect(() => {
    const obtenerMisiones = async () => {
      const token = extraerDatosDeUsuario();
      if (token) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/usuarios/login`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setMisiones(response.data.mision);
        } catch (error) {
          console.error(error);
        }
      }
    };
    obtenerMisiones();
  }, [usuario]);

  const eliminarMision = async (id) => {
    const token = extraerDatosDeUsuario();
    if (token) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_BACKEND_URL}/api/launchs${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setMisiones(misiones.filter((mision) => mision._id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="container">
      <h1>Misiones del usuario</h1>
      <ul>
        {misiones.map((mision) => (
          <li key={mision._id}>
            <h2>{mision.titulo}</h2>
            <p>{mision.descripcion}</p>
            <p>Categoría: {mision.categoria}</p>
            <p>Creada: {mision.fechaCreacion}</p>
            <p>Expira: {mision.fechaExpiracion}</p>
            <button onClick={() => eliminarMision(mision._id)}>
              Eliminar misión
            </button>
            <Link to={`/modificarmision/${mision._id}`}>
              <button>Modificar misión</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerMisiones;


// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// // import "./VerTareas.css";

// const VerMisiones = () => {
//   const [misiones, setMisiones] = useState([]);
//   const [usuario, setUsuario] = useState([]);
//   const extraerDatosDeUsuario = () => {
//     const datosRecuperar = JSON.parse(localStorage.getItem("datosUsuario"));
//     if (datosRecuperar && datosRecuperar.userId) {
//       setUsuario(datosRecuperar.userId);
//       return datosRecuperar.token;
//     }
//   };

//   useEffect(() => {
//     const obtenerMisiones = async () => {
//       const token = extraerDatosDeUsuario();
//       if (token) {
//         try {
//           const response = await axios.get(
//             process.env.REACT_APP_BACKEND_URL + "/api/usuarios/login" ,
//             { headers: { Authorization: `Bearer ${token}` } }
//           );
//           setMisiones(response.data.mision);
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     };
//     obtenerMisiones();
//   }, [usuario]);

//   const eliminarMisiones = async (id) => {
//     const token = extraerDatosDeUsuario();
//     if (token) {
//       try {
//         await axios.delete(
//           process.env.REACT_APP_BACKEND_URL + `/mistareas/${id}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setMisiones(mision.filter((mision) => mision._id !== id));
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Misiones del usuario</h1>
//       <ul>
//         {mision.map((tarea) => (
//           <li key={mision._id}>
//             <h2>{mision.titulo}</h2>
//             <p>{mision.descripcion}</p>
//             <p>Categoría: {mision.categoria}</p>
//             <p>Creada: {mision.fechaCreacion}</p>
//             <p>Expira: {mision.fechaExpiracion}</p>
//             <button onClick={() => eliminarMision(mision._id)}>
//               Eliminar mision
//             </button>
//             <Link to={`/modificarmision/${mision._id}`}>
//               <button>Modificar mision</button>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VerMisiones;