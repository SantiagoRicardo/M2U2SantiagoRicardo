let       A = document.getElementById("A");
let       B = document.getElementById("B");
let       C = document.getElementById("C");
let       D = document.getElementById("D");
const   div = document.getElementById("numMayor");
const  div2 = document.getElementById("numMenor");
const boton = document.getElementById("boton");


boton.addEventListener("click", () => {

    let A = document.getElementById("A").value;
    let B = document.getElementById("B").value;
    let C = document.getElementById("C").value;
    let D = document.getElementById("D").value;

    /*
    Condicion Anidada: 
    Primero Se Valida Si Los Numeros Son Iguales y Que Los Campos No Esten Vacios.
    Luego Se Procede A Entrar A Las Condiciones Para Encontrar El Numero Mayor y Numero Menor.
    */

    if (A==B || A==C || A==D || B==C || B==D || C==D) {
        alert("Por Favor Ingresa Valores Diferentes, y Verifica Que No Haya Quedado Campos Vacios");
    } else {

        //Condicionales Para Encontar El Numero Mayor
        
        if (A > B) {
            if (A > C) {
                if (A > D) {
                    div.innerHTML = `El Numero Mayor Es ${A}`;
                } else {
                    div.innerHTML = `El Numero Mayor Es ${D}`;
                }
            } else {
                if (C > D) {
                    div.innerHTML = `El Numero Mayor Es ${C}`;
                } else {
                    div.innerHTML = `El Numero Mayor Es ${D}`;
                }
            }
        } else {
            if (B > C) {
                if (B > D) {
                    div.innerHTML = `El Numero Mayor Es ${B}`;
                } else {
                    div.innerHTML = `El Numero Mayor Es ${D}`;
                }
            } else {
                if (C > D) {
                    div.innerHTML = `El Numero Mayor Es ${C}`;
                } else {
                    div.innerHTML = `El Numero Mayor Es ${D}`;
                }
            }
        }
    
        //Condicionales Para Encontar El Numero Menor
    
        if (A < B) {
            if (A < C) {
                if (A < D) {
                    div2.innerHTML = `El Numero Menor Es ${A}`;
                } else {
                    div2.innerHTML = `El Numero Menor Es ${D}`;
                }
            } else {
                if (C < D) {
                    div2.innerHTML = `El Numero Menor Es ${C}`;
                } else {
                    div2.innerHTML = `El Numero Menor Es ${D}`;
                }
            }
        } else {
            if (B < C) {
                if (B < D) {
                    div2.innerHTML = `El Numero Menor Es ${B}`;
                } else {
                    div2.innerHTML = `El Numero Menor Es ${D}`;
                }
            } else {
                if (C < D) {
                    div2.innerHTML = `El Numero Menor Es ${C}`;
                } else {
                    div2.innerHTML = `El Numero Menor Es ${D}`;
                }
            }
        }
    }

   
});