let nombre   = document.getElementById('nombre');
let materias = document.getElementById('materias');
const boton  = document.getElementById('boton');
const div    = document.getElementById('label'); 
const div2   = document.getElementById('inputValorMaterias');
const div3 = document.getElementById('botonEnviarValores');
const div4 = document.getElementById('factura');


boton.addEventListener('click', () => {
    let nombre   = document.getElementById('nombre').value;
    let materias = document.getElementById('materias').value;
 
    div.innerHTML = `<label for="">Digite El Valor De Cada Materia</label> <br><br>`;
    div2.innerHTML = `<input type="number" name="" id="numMaterias" placeholder="Digite Los Valores Aqui"> <br><br>`;
    div3.innerHTML = `<input type="button" id="enviarValores" value="Enviar Valores">`;
});

div3.addEventListener('click', () => {
    
    let numMaterias = document.getElementById('numMaterias').value;
    let valores = [];
    
    div4.innerHTML = `El valor De Las Materia Es De ${numMaterias}`;
});

