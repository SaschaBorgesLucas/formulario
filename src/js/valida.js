const camposDoFormulario = Array.from(document.getElementsByClassName('campoDoFormulario'));
const etiquetasDoFormulario = Array.from(document.getElementsByClassName('etiqueta'));
const instrucaoDoFormulario = document.getElementById('instrucaoDoFormulario');
const botaoEnviar = document.getElementById('botaoEnviarFormulario');
const campoTelefoneFormatado = document.getElementById("telefone");

function marcaComoValido(campo, index){
    etiquetasDoFormulario[index].classList.remove("visivel");
    etiquetasDoFormulario[index].classList.add("invisivel");
    campo.classList.remove('invalido');
    campo.classList.add('valido');
    moverTestoInstrucao(campo);
}
function marcaComoInvalido(campo, index){
    etiquetasDoFormulario[index].classList.remove("invisivel");
    etiquetasDoFormulario[index].classList.add("visivel");
    campo.classList.remove('valido');
    campo.classList.add('invalido');
    moverTestoInstrucao(campo)
}
function moverTestoInstrucao(campo){
    if(campo.name ==='texto' && campo.classList[2]==="invalido"){
        instrucaoDoFormulario.classList.add ('rebaixada');
    }
    else if(campo.name ==='texto' && campo.classList[2]==="valido"){
        instrucaoDoFormulario.classList.remove ('rebaixada');
    }
}
function validaFormulario(event) {
   camposDoFormulario.forEach((campo, index) => {
    if (campo.value === '') {
        marcaComoInvalido(campo, index);
    } else {
        marcaComoValido(campo, index)
    }
  });
  event.preventDefault();
}

botaoEnviar.addEventListener("click", validaFormulario);
campoTelefoneFormatado.addEventListener("input", function(){
    this.value = this.value.replace(/[^0-9]/g, "");
    const valorAtual = this.value;
    if (valorAtual.length >= 11) {
      this.value = `${valorAtual.substring(0, 2)} ${valorAtual.substring(2, 7)}-${valorAtual.substring(7)}`;
    }
});
