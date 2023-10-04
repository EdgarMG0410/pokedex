import React from "react";
import st from "./CardStyles.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Badges from "../Badge";
import { fadeBottom, fadeIn } from "../../utils/animations";
import Link from "next/link";

const Card = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <Link href='/pokemon'>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={fadeBottom(0.7, 0.2)}
        className={st.card}
      >
        <div className={st.namepokemon}>
          <p>{pokemon.name}</p>
        </div>
        <div className={st.pokeimg}>
          <Image src={pokemon.sprites.front_default} alt="bulbasaur" fill />
        </div>

        <div className={st.pokemontypes}>
          {pokemon.types.map((type, index) => (
            <Badges
              key={index}
              className={type.type.name}
              text={type.type.name}
            />
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
