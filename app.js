let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo == '') {
        alert('Por favor, escribe un nombre.');
        return; 
    }
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya fue agregado. Intenta con otro.');
        inputAmigo.value = ''; 
        return; 
    }
    amigos.push(nombreAmigo);
    actualizarListaVisual();
    inputAmigo.value = '';
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes agregar al menos 2 personas para hacer un sorteo.');
        return;
    }

    for (let i = amigos.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = amigos[i];
        amigos[i] = amigos[j];
        amigos[j] = k;
    }

    let amigoSecretoAsignado = amigos[1];
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<p>Tu amigo secreto es: <strong>${amigoSecretoAsignado}</strong></p>`;

}

function actualizarListaVisual() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        listaHTML.appendChild(elementoLista);
    }
}
