import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Desafio 2 - Funções e Condições</h1>
    </div>
  );
}

//1 - crie uma função que exiba uma mensagem no console

function msg() {
  console.log("E aí, Joy e Jão?");
}

msg();

// //2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function myName(nome) {
  console.log(`Bem-vindo(a), ${nome}!`);
}

myName("Maria");

// //3 - crie uma função que receba nome, idade, e um estilo musical
// //preferido (parâmetros) e exiba no console

function about(name, age, music) {
  console.log(`Meu nome é ${name}, eu tenho ${age} anos e amo ouvir ${music}`);
}

about("Maria Alessandra", 25, "pop");

// //4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function fun(movie, music) {
  console.log(
    `Meu filme favorito é ${movie} e minha música favorita é ${music}`
  );
}

fun("De repente 30", "Glad you Came - The Wanted");

// //5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function calc(triplo) {
  return triplo * 3;
}

console.log(calc(7));

//6 - crie uma função que  verifique se uma  variável é true ou false

let idade = 26;
if (idade >= 18) {
  console.log("Você pode beber cachaça");
} else {
  console.log("Você não pode beber ainda criança");
}
