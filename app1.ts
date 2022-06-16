// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') 
let botaoLimpar = document.getElementById('limpar-saldo') !
let soma = document.getElementById('soma')! as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0;

function somarAoSaldo(soma: number) {
   if(campoSaldo){
    saldoTotal += soma
    campoSaldo.innerHTML += String(saldoTotal)
    limparCampoSoma()
   }
}

const limpaSaldo = () => {
  if(campoSaldo){
    saldoTotal = 0
    campoSaldo.innerHTML = String(saldoTotal)
  }
}

const limparCampoSoma = () => soma.value = ''

if (botaoAtualizar) {
  botaoAtualizar.addEventListener('click', () => {
      somarAoSaldo(Number(soma.value)); 
  });
}


botaoLimpar.addEventListener('click', () => {
  limpaSaldo();
});