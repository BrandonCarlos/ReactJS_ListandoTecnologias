module.exports = {//Vamos exportar algumas ferramentas
  presets: [//Quais "presets" do (BABEL) vamos utilizar, 
    "@babel/preset-env",//Altera as funcionalidades do "Javascript", o import e export que o navegador
    //não entendi este "preset" irá fazer enteder
    "@babel/preset-react"

  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]

};