import React from "react";
import st from "./CardStyles.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div className={st.card}>
      <div className={st.pokeimg}>
        <Image  src="/images/001.png" alt="bulbasaur" fill />
      </div>
      <div className={st.namepokemon}>
        <p>Bulbasaur</p>
      </div>
      <div className={st.pokemontypes}>
        <div className={st.typegrass}>grass</div>
        <div className={st.typepoison}>poison</div>
      </div>
    </div>
  );
};

export default Card;
