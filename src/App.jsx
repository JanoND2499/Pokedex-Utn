/* Ubicación exacta: src/App.jsx */
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [listaPokemon, setListaPokemon] = useState([]);
  
  // NUEVOS ESTADOS:
  const [favoritos, setFavoritos] = useState([]);      // Guarda los pokemones favoritos
  const [verFavoritos, setVerFavoritos] = useState(false); // Falso = ve Inicio, Verdadero = ve Favoritos
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null); // Para el Modal de detalles

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setListaPokemon(datos.results);
      });
  }, []);

  // Funciones para Favoritos
  const agregarAFavoritos = (pokemon) => {
    if (!favoritos.some(fav => fav.name === pokemon.name)) {
      setFavoritos([...favoritos, pokemon]);
    }
  };

  const eliminarDeFavoritos = (pokemon) => {
    const nuevaLista = favoritos.filter(fav => fav.name !== pokemon.name);
    setFavoritos(nuevaLista);
  };

  // Lógica para decidir qué lista mostrar (Toda la lista o solo Favoritos)
  const listaAFiltrar = verFavoritos ? favoritos : listaPokemon;

  const pokemonesFiltrados = listaAFiltrar.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(busqueda.toLowerCase());
  });

  return (
    <div className="app-container">
      {/* Pasamos el estado y la cantidad al Navbar */}
      <Navbar setVerFavoritos={setVerFavoritos} cantidadFavs={favoritos.length} />

      <div className="app-search-container">
        <input 
          type="text" 
          placeholder={verFavoritos ? "Buscar en favoritos..." : "Buscar Pokémon..."} 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)} 
          className="app-input"
        />
      </div>

      <div className="app-grid">
        {pokemonesFiltrados.map((unPokemon) => {
          // Comprobamos si este pokemon en particular ya está en la lista de favoritos
          const esFav = favoritos.some(fav => fav.name === unPokemon.name);
          return (
            <Card 
              key={unPokemon.name} 
              pokemon={unPokemon} 
              onAgregarFav={agregarAFavoritos}
              onEliminarFav={eliminarDeFavoritos}
              esFavorito={esFav}
              onVerDetalles={(poke) => setPokemonSeleccionado(poke)}
            />
          );
        })}
      </div>

      {/* --- VENTANA MODAL FLOTANTE (DETALLES) --- */}
      {pokemonSeleccionado && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-cerrar" onClick={() => setPokemonSeleccionado(null)}>X</button>
            <h2>Detalles del Recurso</h2>
            <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonSeleccionado.url.split("/")[6]}.png`} 
              alt={pokemonSeleccionado.name} 
              style={{width: '120px'}}
            />
            {/* Recursos a mostrar */}
            <p><strong>1. Nombre:</strong> {pokemonSeleccionado.name.toUpperCase()}</p>
            <p><strong>2. Número de ID:</strong> #{pokemonSeleccionado.url.split("/")[6]}</p>
            <p><strong>3. Enlace Base:</strong> URL Pública de API</p>
            <p><strong>4. Clasificación:</strong> Recurso de Generación 1</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;