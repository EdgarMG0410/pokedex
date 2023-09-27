import React from "react";
import st from "./CardStyles.module.css";

const Card = () => {
  return (
    <div className={st.card}>
      <div className={st.pokeimg}>
        <img  src="/images/001.png" alt="bulbasaur" />
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
