let nombre   = document.getElementById('nombre');
let materias = document.getElementById('materias');
const 
    boton  = document.getElementById('boton'),
    div    = document.getElementById('inputsGenerados'), 
    div2   = document.getElementById('inputsValorMaterias'),
    div3   = document.getElementById('resultSuma')
 
boton.addEventListener('click', () => {

    let nombre   = document.getElementById('nombre').value;
    let materias = document.getElementById('materias').value;
    let suma = 0;

    for (let i = 1; i <= materias; i++) {
        div.innerHTML += `<input type="number" name="" id="${i}" placeholder="Valor Materia ${i}"> <br><br>`;
    }
    div2.innerHTML += `<input type="button" name="" id="boton2" value="¡Vamos!"> <br><br>`;

    //Este Codigo Se Ejecutará Despues Que Se Presione El Boton "¡Vamos!"
    
    div2.addEventListener('click', () => {

        for (let i = 1; i <= materias; i++) {
            const valor = document.getElementById(i).value;
            suma += parseInt(valor);
        }
        const 
            papeleria     = 20000,
            carnet        = 8000,
            porcentajeDto = 20,
            descuento     = (porcentajeDto * suma) / 100,
            restaValor    = (suma - descuento),
            totalPago     = restaValor + papeleria + carnet

        div3.innerHTML += `<p> Hola ${nombre}, Que Tal? </p>
        <p>El Total A Pagar Por Las Materias Es De: ${suma}</p>
        <p>El Descuento Aplicado Al Total De Las Materias Es Del 20%, Es Decir: ${descuento}</p>
        <p>Los Costos Fijos Son: <br> Papeleria: $ ${papeleria} <br> Carnet: $ ${carnet}</p>
        <p>Total A Pagar: ${totalPago}</p>
        <p>NOTA: RECUERDE, EL VALOR TOTAL A PAGAR CONTIENE LOS DESCUENTOS APLICADOS ANTERIORMENTE</p>`;
    });
});

