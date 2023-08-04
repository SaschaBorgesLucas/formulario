const camposDoFormulario = Array.from(document.getElementsByClassName('campoDoFormulario'));
const etiquetasDoFormulario = Array.from(document.getElementsByClassName('etiqueta'));
const botaoEnviar = document.getElementById('botaoEnviarFormulario');
const campoTelefoneFormatado = document.getElementById("ftelefone");

function marcaComoValido(campo, index){
    etiquetasDoFormulario[index].classList.remove("visivel");
    etiquetasDoFormulario[index].classList.add("invisivel");
    campo.classList.remove('invalido');
    campo.classList.add('valido');
}
function marcaComoInvalido(campo, index){
    etiquetasDoFormulario[index].classList.remove("invisivel");
    etiquetasDoFormulario[index].classList.add("visivel");
    campo.classList.remove('valido');
    campo.classList.add('invalido');
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
    if (valorAtual.length >= 9) {
      this.value = `${valorAtual.substring(0, 2)} ${valorAtual.substring(2, 7)}-${valorAtual.substring(7)}`;
    }
});
