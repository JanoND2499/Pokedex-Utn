/* Ubicación exacta: src/components/Card.jsx */
import './Card.css';

function Card(props) {
  const pokemon = props.pokemon;
  if (!pokemon) return null;

  const id = pokemon.url.split("/")[6];
  const urlImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="card-container">
      <img src={urlImagen} alt={pokemon.name} className="card-image" />
      <h3 className="card-name">{pokemon.name.toUpperCase()}</h3>
      
      {/* Botón para abrir los detalles */}
      <button className="card-btn-detalle" onClick={() => props.onVerDetalles(pokemon)}>
        Ver detalles del recurso
      </button>

      {/* Botón de Favoritos */}
      {props.esFavorito ? (
        <button className="card-btn-fav eliminar" onClick={() => props.onEliminarFav(pokemon)}>
          Eliminar ❌
        </button>
      ) : (
        <button className="card-btn-fav" onClick={() => props.onAgregarFav(pokemon)}>
          Añadir ⭐
        </button>
      )}
    </div>
  );
}

export default Card;