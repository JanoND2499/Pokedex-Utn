/* Ubicación exacta: src/App.jsx */
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [listaPokemon, setListaPokemon] = useState([]);
  const [favoritos, setFavoritos] = useState([]);      
  const [verFavoritos, setVerFavoritos] = useState(false); 
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null); 

  // NUEVO ESTADO: Guarda el número de la página actual (arranca en la 1)
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    // Si el usuario está viendo favoritos, no hace falta pedir datos de paginado a la API
    if (verFavoritos) return;

    // Cuantos pokemons saltar
    const offset = (pagina - 1) * 25;

    // Fetch de maximo 25 pokemones
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setListaPokemon(datos.results);
      });
  }, [pagina, verFavoritos]); // Cada vez que cambie 'pagina' o 'verFavoritos', se ejecuta el fetch

  const agregarAFavoritos = (pokemon) => {
    if (!favoritos.some(fav => fav.name === pokemon.name)) {
      setFavoritos([...favoritos, pokemon]);
    }
  };

  const eliminarDeFavoritos = (pokemon) => {
    const nuevaLista = favoritos.filter(fav => fav.name !== pokemon.name);
    setFavoritos(nuevaLista);
  };

  const listaAFiltrar = verFavoritos ? favoritos : listaPokemon;

  const pokemonesFiltrados = listaAFiltrar.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(busqueda.toLowerCase());
  });

  return (
    <div className="app-container">
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

      {/* --- SECCIÓN DE BOTONES DE PAGINADO --- */}
      {!verFavoritos && (
        <div className="app-paginado-container">
          <button 
            onClick={() => setPagina(pagina - 1)} 
            disabled={pagina === 1}
            className="app-btn-paginado"
          >
            Anterior ⬅️
          </button>
          <span className="app-pagina-texto">Página {pagina}</span>
          <button 
            onClick={() => setPagina(pagina + 1)} 
            disabled={listaPokemon.length < 25}
            className="app-btn-paginado"
          >
            Siguiente ➡️
          </button>
        </div>
      )}

      <div className="app-grid">
        {pokemonesFiltrados.map((unPokemon) => {
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