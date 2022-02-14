import React from 'react'
import Img1 from "../Imagens/Arequipa.jpg"
import Img2 from "../Imagens/Moquegua.jpg"
import Img3 from "../Imagens/Cambuquira.jpg"

const Destinos = () => {
  return (
    <section>
      <section id="titulo">
        <h2>Corta Caminho</h2>
      </section>

      <section id="Cidades">
        <article>
          <img width="250px" src={Img1} alt="Arequipa" />
          <p>Arequipa</p>
        </article>

        <article>
          <img width="250px" src={Img2} alt="Moquegua" />
          <p>Moquegua</p>
        </article>

        <article>
          <img width="250px" src={Img3} alt="Cambuquira" />
          <p>Cambuquira</p>
        </article>
      </section>
    </section>
  );
}

export default Destinos