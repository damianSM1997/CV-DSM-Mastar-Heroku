//constantes
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn')


//event listener
eventListeners();

function eventListeners() {
    //inicio de la aplicacion y desavilitar submit
    document.addEventListener('DOMContentLoaded', iniciarApp);
    //campos del formulario
    //blur nos ayudara a validar el campo
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //boton de enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);
    //boton a resetear
    resetBtn.addEventListener('click', resetFormulario);
}


//funciones

function iniciarApp() {
    //desavilitar el boton envio
    //aqui puedes poner todo lo que quieras cargar
    btnEnviar.disabled = true;
}
//valida que los campso tengan algo escrito
function validarCampo() {
    //valida la longitud del texto y que no este vasio
    // va funcion de this es que te regrese cual es el seleccionado
    validarLongitud(this);

    //validar unica mente el email
    if (this.type === 'email') {
        validarEmail(this);

    }
    let errores = document.querySelectorAll('.error');

    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
        //esta line no va en el curso pero valida mejor 
    } else {
        btnEnviar.disabled = true;
    }
}

function resetFormulario(e) {
    e.preventDefault();
    formularioEnviar.reset();
}

// cuando se envia el correo
function enviarEmail(e) {
    //spiner al precionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    //gif que envia el imal
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //ocultar spiner y mostrar gif de enviado
    setTimeout(function() {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function() {
            enviado.style.display = 'none';
            formularioEnviar.reset();
        }, 3000);
    }, 3000);
    //e.preventDefault();

}




// Verifica la longitud del texto en los campos
function validarLongitud(campo) {

    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}


function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}