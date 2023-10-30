let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let mensagem = document.querySelector('#mensagem');
let nomeOk = false
let emailOk = false
let mensagemOk = false

function validarNome() {
    let txt = document.querySelector('#txtNome');
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome Inválido';
        txt.style.color = 'red';
        nomeOk = false
    }else{
        txt.innerHTML = 'Nome Válido';
        txt.style.color = 'green';
        nomeOk = true
    }

};
/* 1 - Existe | -1 não existe*/
function validarEmail2(){
    let txtEmail = document.querySelector('#txtEmail');
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){  
        txtEmail.innerHTML = 'E-mail Inválido';
        txtEmail.style.color = 'red';
        emailOk = false
    }else{
        txtEmail.innerHTML = 'Email Válido';
        txtEmail.style.color = 'green';
        emailOk = true
    }
};

function validarMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem');
    if(mensagem.value.length >= 100){
        txtMensagem.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
        mensagemOk = false
    }else{
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}
function enviarForm(){

    if (nomeOk == true && emailOk == true && mensagemOk == true){
        alert('Formulário enviado com sucesso')
    }else{
        alert('Preencha o formulário corretamente')
    }

}