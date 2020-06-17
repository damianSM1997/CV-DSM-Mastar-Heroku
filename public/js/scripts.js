$('#post-comment').hide();
$('#btn-toggle-comment').click(e => {
    e.preventDefault();
    $('#post-comment').slideToggle();
});

const boton = document.querySelector('#btn-toggle-comment').parentElement.parentElement.parentElement;
const formulario = document.querySelector('#formulario');

console.log(formulario);

console.log(boton);