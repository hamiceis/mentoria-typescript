//console.log('Arquivo de testes. Pode mexer nele como quiser.')

//let employee = {};
//employee.code = 10;
//employee.name = "John";

type employeProps =  {
  code: number,
  name: string
}

const functionario: employeProps = {
  code: 10,
  name: "John"
}

// resposta 2 

interface Iemployee {
  code: number
  name: string
}

const funcionario2 = {} as Iemployee;

funcionario2.code = 10
funcionario2.name = "Josh"

// resposta 3 

const funcionario3: Iemployee = {
  code: 20,
  name: "Drake"
} 

// resposta 4 

const funcionario4 : {code: number, name: string} = {
  code: 10,
  name: "Park"
}

// =============== DESAFIO 2 =================== \\

enum Job {
  atriz,
  Padeiro
}

type pessoaProps = {
  nome: string,
  idade: number,
  profissao: Job
}

let pessoa1 = {} as pessoaProps ;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao: Job.atriz

let pessoa2: pessoaProps = {
  nome : "roberto",
  idade : 19,
  profissao: Job.Padeiro
} 

let pessoa3: pessoaProps = {
  nome: "laura",
  idade: 32,
  profissao: Job.atriz
};

let pessoa4 = {} as pessoaProps;

pessoa4.nome = "carlos",
pessoa4.idade = 19,
pessoa4.profissao = Job.Padeiro 


