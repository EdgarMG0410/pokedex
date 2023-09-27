import Card from "@/components/Card";
import React from "react";
import st from "./ListStyles.module.css";



const List = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-pk-red">
      <div className={st.header}>
        <h1 >151 DEX</h1>
      </div>
      <section className={st.jk}>
      <Card />
      <Card />
      <Card />
      </section>
    </main>
  );
};

export default List;
