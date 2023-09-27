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
console.log(pokemonList)
  return (
    <main className={st.body}>
      <div className={st.header}>
        <h1>151 DEX</h1>
      </div>
      <section className={st.pokelist}>
        {pokemonList.map((item, index) => (
          <Card key={index} item={item}/>
        ))}
      </section>
    </main>
  );
};

export default List;
