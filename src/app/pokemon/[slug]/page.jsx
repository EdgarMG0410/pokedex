'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, inSheet, scaleDown } from '../../../utils/animations';

const Pokemon = ({ params }) => {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [type, setType] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`);
        if (response.ok) {
          const data = await response.json();
          setPokemonDetails(data);
          setType(data.types[0].type.name)
        } else {
          console.error('Error al obtener los datos del Pokémon');
        }
      } catch (error) {
        console.error('Error en la solicitud: ', error);
      }
    };
    fetchPokemonDetails();
  }, [params.slug]);

  return (
    <div className={`flex ${type} items-center justify-center text-black min-h-screen`}>
      <motion.p
        initial={'hidden'}
        whileInView={'visible'}
        variants={scaleDown()}
        className='text-7xl text-white'>
        {pokemonDetails.name}
      </motion.p>
    </div>
  )
}

export default Pokemon