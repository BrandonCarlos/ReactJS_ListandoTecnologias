//Aki não teremos STATE, não precisarei armazenar nenhuma informação, manipular nenhuma informação
//eu posso criar ele no formato de FUNÇÃO
import React from 'react';

function TechItem({ tech, onDelete }) {//o COMPONENTE é uma FUNÇÃO, recebendo como parâmetro da função (tech)
  //OS PARÂMETROS que ela recebe são as PROPRIEDADES DO COMPONENTE
  //Aki no retorno vamos por o <li></li>
  //Como eu recupero a informação "tech" aki dentro do COMPONENTE
  //Desestruturar { tech }
  //E as propriedades de um COMPONENTE no formato de FUNCTION eu consigo acessar atráves dos PARÂMETROS
  //dessa FUNCTION 
  //O COMPONENTE "TechItem" não conhece o STATE, ele não vai conseguir manipular esse STATE
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  )
}

export default TechItem;//Exportando a function "TechItem"