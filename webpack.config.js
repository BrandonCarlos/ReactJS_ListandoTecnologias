//A barrinha / = (src/index.js) pode ser que no windows não funcione, então vamos importar
//webpack roda encima do NODE

const path = require('path');

module.exports = {
  //entry: 'src/index.js'  //Que é nosso arquivo de entrada (Index.js)
  //__dirname o diretório em que o "webpack" está
  //a virgula (,) sinboliza a barra /

  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {//onde ele vai jogar o "bundle" que é o código transpilado pelo "webpack",
    //o código com as funcionalidades que o Javascript já entendi
    //na pasta PUBLIC é que vamos jogar o "bundle"
    path: path.resolve(__dirname, 'public'),//Jogando o "bundle" na pasta PUBLIC
    filename: 'bundle.js'//É o nome que o arquivo vai ficar
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),//É onde vai encontrar o arquivo INDEX.HTML
    //para dar RELOAD quando salvarmos o arquivo
  },
  module: {//Aki dentro desse MODULE iremos ter REGRAS
    rules: [//Significado de "rules": "regras"
      //precisamos informar pro "webpack" pra qual tipo de arquivo ele deve utilizar
      //para arquivos "js" (JavaScript) quem vai lidar com arquivos "js" é o BABEL
      //Dentro das "regras" iremos ter outros LOADERS para CSS etc...
      //iremos criar uma "regra" que toda vez que o "webpack" encontrar arquivos "js"
      //o BABEL deve transpilar esse arquivo
      {
        test: /\.js$/,//Expressão regular ficar entre duas barras -> /\.js/ <- quero que ele encontre
        //arquivos .js, sinal de $ <- significa que a string deve terminar assim ".js"
        exclude: /node_modules/, //Vou excluir tudo que tiver dentro de "node_modules"
        use: {
          loader: 'babel-loader'//Mais pra frente teremos "loader" de CSS, "loader" de IMAGEM
          //terminamos a configuração do "webpack"
        }
      }, {
        //TINHA UM SUPER ERRO, o erro FOI QUE EU COLOQUEI "TEXT" ao INVEZ DE "TEST"
        test: /\.css$/, //Agora vamos TESTAR arquivos que terminem com .css
        use: [
          //STYLE-LOADER serve para importar arquivos CSS
          //STYLE-LOADER vai pegar o CSS do arquivo, e vai transferir pro HTML
          { loader: 'style-loader' },//Vamos usar o style-loader
          //CSS-LOADER server para IMPORTAÇÃO DE IMAGENS NO CSS por exemplo
          //Ai o WEBPACK irá entender a IMPORTAÇÃO
          { loader: 'css-loader' },//Vamos usar o css-loader
        ]
      }, {
        //i -> tudo isso é CASE INSENSITIVE, ou seja se a imagem estiver .GIF(com letra maiuscula)
        //irá funcionar também
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};


/*const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader' },
      { test: /\.css$/, loader: 'css-loader' },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};*/