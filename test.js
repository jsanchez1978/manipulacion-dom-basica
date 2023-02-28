const input1 = document.querySelector('#cal1');
const input2 = document.querySelector('#cal2');
const btnCal = document.querySelector('#res');
const pRes = document.querySelector('#resultado');

function btnEjecuta(){
  const encadenando = input1.value + input2.value;
  pRes.innerText = encadenando;
  const aviso = document.createElement('div');
  pRes.appendChild(aviso);
  aviso.innerHTML = 'Usuario Registrado';
  aviso.classList.add('rojoAvisador');
}