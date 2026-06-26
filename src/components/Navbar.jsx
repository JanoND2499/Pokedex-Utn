/* Ubicación exacta: src/components/Navbar.jsx */
import './Navbar.css';

function Navbar(props) {
  return (
    <nav className="nav-container">
      <h1 className="nav-title" onClick={() => props.setVerFavoritos(false)} style={{cursor: 'pointer'}}>
        Pokédex UTN
      </h1>
      <ul className="nav-list">
        <li className="nav-item" onClick={() => props.setVerFavoritos(false)}>Inicio</li>
        <li className="nav-item" onClick={() => props.setVerFavoritos(true)}>
          Favoritos ⭐ ({props.cantidadFavs})
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;