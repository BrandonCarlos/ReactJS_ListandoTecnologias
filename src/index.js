//Suponhamos que usemos ARROW FUNCTION o "babel" irá compilar para uma função conversional
//const soma = (a, b) => a + b;

//alert(soma(1, 4));

/*Vamos começar a usar REACTJS */
import React from 'react';//Importando "React" de dentro do "react";
import { render } from 'react-dom';//"react-dom" integração do "react" com o "browser"
//"render" -> renderizar código REACT ou componente do REACT dentro de algum contéudo do meu
//HTML
//Vamos importar o App.js
import App from './App';

render(/* e aqui vou passar "App" como TAG HTML*/<App />, document.getElementById('app'))
//1° parâmetro contéudo "JSX" que é o HTML
//2° parâmetro aonde deve jogar esse contéudo.

//TÉCNICA DO REACT separar o componente da nossa aplicação