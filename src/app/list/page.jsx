import Card from '../../components/Card'
import React from 'react'
import st from '../../styles/ListStyles.module.css'

const List = () => {
  return (
    <main className={st.body}>
      <div className={st.header}>
        <h1>151 DEX</h1>
      </div>
      <section className={st.pokelist}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
};

export default List;
