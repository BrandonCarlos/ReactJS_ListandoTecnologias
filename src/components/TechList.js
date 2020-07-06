//Vamos criar uma lista de tecnológias que conhecemos até agora
//temos várias formas de escrever um "componente" agora usaremos CLASS
import React, { Component } from 'react';//Vamos importar do REACT também um carinha chamado "COMPONENT"
//Aki teremos que IMPORTAR o TechItem
import TechItem from './techItem';


class TechList extends Component {//Class TechList herdando funcionalidades do Component
  //Na Classe podemos armazenar esse ESTADO
  //Quando agente vai guardar informações, e manipular essas informações aki dentro de um COMPONENTE
  //Nós utilizamos CLASSES, e ai agente pode usar esse nosso STATE, o STATE precisa obrigatóriamente
  //ter esse nome (STATE), ele é o ESTADO do componente
  state = {
    //Aki iremos guardar todas as informaçôes que podem ser manipuladas por esse COMPONENTE
    //Ou seja podem receber novos itens, podem receber mutaçôes e por ai vai
    //Vamos criar um nova PROPRIEDADE (newTech) aki dentro do STATE
    newTech: '',//Aqui irá armazenar a nova tecnologia que o usuário digitar dentro do INPUT
    newGame: '',

    techs: [//Váriavel "techs" que são nossas TECNOLOGIAS
      //ARRAY DE STRINGS
      'Node.js',
      'ReactJS',//O BABEL não entendi essas propriedades, ele esperava que agente definisse dentro
      'React Native'//de um CONSTRUCTOR
      //O COMPONENTE já está entendendo essa váriavel de ESTADO
      //Vamos começar a manipular esse ESTADO via nosso COMPONENTE(RENDER())
    ]

  };

  //Conceito de IMUTABILIDADE DENTRO DO STATE
  //Essa váriavel do STATE é IMUTAVEL, ou seja ela não pode sofrer MUTAÇÔES
  //Toda vez que agente precisar CRIAR OU ALTERAR um STATE, nós precisamos utilizar uma FUNÇÃO
  //Que o nosso COMPONENTE de classe da pra gente, que se chama "setState"

  //Novo método no formato de ARROW FUNCTION
  //Toda vez que agente cria uma função própria dentro de um COMPONENTE no estilo de classe
  //Aki dentro do REACT, essa função precisa ser escrita no formato de ARROW FUNCTION
  //Isso porque se essa função não for escrita no formato de ARROW FUNCTION, ela não teria acesso
  //ao THIS, então não iriamos conseguir acessar outras propriedades da classe, outras funçôes e por
  //ai vai, precisarei utilizar o THIS porque eu preciso armazenar o valor que está contido em
  //e.target.value, dentro de newTech que eu tenho aki no STATE da minha classe, do meu COMPONENTE
  handleInputChange = e => {
    //Se o COMPONENTE "techItem" precisasse acessar alguma propriedade dentro de um COMPONENTE de CLASSE
    //Para acessar as propriedades fariamos -> this.props.tech
    //As propriedades no formato de classe ficam armazenadas dentro de "this.props"
    //console.log(e.target.value);//Pra eu pegar o valor do INPUT, temos que armazenar este valor dentro
    //do STATE
    //1° parâmetro quero alterar o valor de "newTech", pra e.target.value
    this.setState({ newTech: e.target.value });//Agora sim vai conseguir fazer essa atualização
  }

  handleSubmit = e => {
    //Vamos evitar de que quando eu clicar no botão "enviar" o navegador de RELOAD(RECARREGUE)
    e.preventDefault();//Ai ele vai previnir o comportamento padrão (NÃO IRÁ MAIS RECARREGAR) 
    //desse formulário no HTML
    //this.state.techs.push();// Não poderei fazer isso, porque eu estaria aplicando uma MUTAÇÃO dentro
    //do meu STATE, e nosso ARRAY, nosso STATE é IMUTAVEL, ele não pode receber alteraçôes dessa forma
    //Nós precisamos utilizar o "setState()"
    //Dentro do "setState()" quando vai manipular ARRAY e OBJETOS
    //Como vou atualizar o ARRAY de "techs", agente sempre precisa RECRIAR O NOSSO ARRAY DO ZERO
    //Agente não pode fazer alteraçôes no ARRAY e nem no OBJETO
    //Precisamos criar um novo ARRAY
    //Vou copiar todas as informações que já tem dentro do meu ARRAY de TECNOLOGIAS(techs) 
    //Pra por todas as tecnologias no ARRAY utilizo ( ... ) <- SPREAD OPERATOR
    //"this.state.newTech" pegando o valor que está dentro de "newTech", e to adicionando como
    //ultima posição do ARRAY
    //A função "this.setState" o que ela faz e criar sempre um novo STATE com as alteraçôes que agente
    //passa aqui dentro, então ele copia por padrão o STATE inteiro do react e aplica as alteraçôes
    //que nós colocamos aki dentro desse OBJETO, então se agente quer alterar o ARRAY de TECNOLOGIAS
    //(techs) nós também precisamos copiar exatamente como o nosso STATE de TECNOLOGIAS já está
    //e adicionar as informaçôes ou remover as informaçôes que agente precisa
    //Então se nós precisasemos remover uma tecnologia daqui de dentro, nós precisamos criar um novo
    //ARRAY removendo aquilo que agente não quer 
    //Eu vou também mudar o valor de "newTech" pra vazio

    this.setState({
      techs: [... this.state.techs, this.state.newTech],
      newTech: ''//Mudando o valor de "newTech" pra vazio
    });
  }

  handleInputGame = g => {
    this.setState({ newGame: g.target.value });
  }

  //Criaremos uma função para o botão
  //O que seria legal receber de parâmetro dentro dela, por enquanto as nossas tecnologias não tem ID
  //Elas tem apenas o nome, então vou receber exatamente o "tech" então vou procurar dentro do ARRAY
  //qual que é igual a esse nome(tech) e vou remover ele da lista
  handleDelete = (tech) => {//tech = NODE, REACT, REACT NATIVE
    //Pra gerar um novo STATE, nesse FILTER eu recebo cada uma dessas tecnologias 
    //chamo a tecnologia de "t"
    //t = node SE node for diferente de node = FALSE, então não retorna node
    //t = node SE node for diferente de REACT = TRUE, então retorna o REACT
    //t = node SE node for diferente de REACT NATIVE = TRUE, então retorna o REACT NATIVE
    this.setState({ techs: this.state.techs.filter(t => t != tech) })//t = NODE, REACT, REACT NATIVE
    //Vai retornar todas as tecnologias menos a tecnologia(tech)
    //Ou seja quando clicamos em REMOVER(NODE) nos retorna todas as tecnologias menos o NODE
  }

  //iremos retornar o HTML 
  //Todo "Component" escrito em formato de Classe, precisa obrigatóriamente ter um método chamado
  //"render()"
  render() {//E este método retorna o nosso HTML

    return (//Como vai ser um HTML com várias linhas eu coloco PARÊNTESES em volta
      //Dentro do <ul></ul> eu continuo podendo por código Javascript, basta eu adicionar 2 chaves
      // { } <- dentro das chaves podemos por qualquer tipo de código Javascript
      //Vou percorrer o STATE com o método MAP
      //1° parâmetro CADA UMA DAS TECNOLOGIAS
      //Podemos retornar qualquer coisa de dentro, inclusive conteúdo jsx
      //Vamos retornar <li></li> com os conteúdos
      //Toda vez que fazemos um MAP, cada elemento(<li></li>) precisa ter um propriedade KEY
      //Que recebe um valor unico de cada um desses elementos, passaremos no key={tech}
      //Porque os valores são unicos ex: Node.js, ReactJS, React Native
      //Para adicionarmos 2 elementos aki é obrigatório ter um CONTAINER(DIV)
      // <> FRAGMENT(TAG SEM NOME)
      //é bom usar <> porque assim não atrapalha no CSS
      //Preciso pegar o valor que o usuário digita no INPUT, existem várias formas de fazer isso
      // Anotar o valor que o usuário digita dentro do input, conforme ele vai digitando
      //onChange={}  método executado conforme o usuário vai mudando o valor desse INPUT
      //Testando que está fazendo a atualização colocando o <h1></h1>
      //Ao invez do FRAGMENTE vamos por <form></form> que terá um método chamado "onSubmit"
      //que vai chamar o nosso "this.handleSubmit"
      //Vamos fazer a funcionalidade de remover tecnologia, e iremos ter várias linhas de código
      //então usamos os PARÊNTESES ()
      //Usaremos um botão para "remover" um item
      //Dentro do "button" teremos uma AÇÃO quando o usuário clicar no botão, por isso vou chamar o
      //onClick do REACT
      //Pra eu fazer a função de remover item funcionar temos que por assim:
      // () => this.handleDelete(tech) <- irá funcionar porque eu estou criando uma nova FUNÇÃO
      //E não to executando ela, só quando eu clicar irá executar 
      //No lugar onde tinha o <li></li> eu coloco o <TechItem />
      //Fizemos um "map" e ao invez de retornar um elemento HTML, agente retorna diretamente um
      //"Componente" a "key" também precisa ficar deste lado, não pode ficar dentro do COMPONENTE(TechItem)
      //a "key" precisa ficar deste lado na "LISTAGEM"
      //Vou ter que passar a informação de "TECH" como uma propriedade pra esse <TechItem key={tech} />
      //Conceito de propriedade: propriedade é tudo que agente passa pro COMPONENTE aki dentro da TAG
      //Passando a propriedade tech que é igual a tech = <TechItem key={tech} tech={tech} />
      //Eu também preciso passar a FUNCTION "handleDelete" como uma PROPRIEDADE do nosso <TechItem />
      //Para que ele conheça essa FUNCTION
      //Vamos passar uma outra PROPRIEDADE chamada "onDelete={this.handleDelete}"
      //Ficaria assim: <TechItem key={tech} tech={tech} onDelete={this.handleDelete} />
      //Estou passando uma PROPRIEDADE pro meu COMPONENTE que é uma FUNCTION
      //A gente passou pro nosso COMPONENTE pro "TechItem" aqui 
      //No REACT podemos passar qualquer coisa como PROPRIEDADE, pode ser uma FUNÇÃO, pode ser um
      //OBJETO, pode ser outra CLASSE, pode ser outro ELEMENTO, pode ser até um COMPONENTE
      //COMPONENTE icon={} por exemplo e dentro um JSX


      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1> Aki é para mostrar a nova Tecnologia digitada no INPUT
        <h2>{this.state.newGame}</h2> Aki é para mostrar o novo game digitado no INPUT
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              //icon={<Icon />}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        Input das tecnologias: <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        /><br />
        Input dos games: <input type="text" onChange={this.handleInputGame} />
        <button type="submit">Enviar</button>
      </form>
    );
    //Toda vez que o STATE do react muda, o método RENDER executa novamente
    //Ou seja toda vez, que agente tiver ou um novo texto dentro de "newTech" ou uma nova "tecnologia"
    //Ou uma tecnologia a menos, qualquer forma que esse STATE mudar o nosso RENDER vai executar 
    //novamente com as alteraçôes
    //ESTADO: variaveis que o component vai manipular
    //Componente: render()
    //Variaveis: <ul><li></li></ul>
    //Toda vez que uma váriavel do COMPONENTE precisar ser manipulada, nóis chamamos essa váriavel
    //de ESTADO
    //Uma das boas práticas quando agente está utilizando INPUT é armazenando o valor dele
    //dentro do STATE é passar um "value" aki dentro do INPUT também, com o mesmo valor lá no STATE
    //value={this.state.newTech}
  }

}

export default TechList;//Exportando por default TechList