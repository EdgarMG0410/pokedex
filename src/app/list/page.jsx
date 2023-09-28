'use client'
import Card from '../../components/Card'
import React, { useEffect, useState } from 'react'
import st from '../../styles/ListStyles.module.css'

const List = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        if (response.ok) {
          const data = await response.json();
          const results = data.results;
          const pokemonDetails = await Promise.all(results.map(async (result) => {
            const response = await fetch(result.url);
            return response.json();
          }));
          setPokemonList(pokemonDetails);
        } else {
          console.error('Error al obtener la lista de Pokémon');
        }
      } catch (error) {
        console.error('Error en la solicitud: ', error);
      }
    };
    fetchPokemonList();
  }, []);

  return (
    <main className={st.bodylist}>
      <div className={st.navbar}>
       <div>
        <img src="" alt="filter" />
       </div>
        <h1>151 DEX</h1>
        <div>
          <p>first generation</p>
        </div>


      </div>
      <section className={st.pokelist}>
        {pokemonList.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon}/>
        ))}
      </section>
    </main>
  );
};

export default List;
