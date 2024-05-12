function toque() {
    var peso = parseFloat(document.getElementById('peso').value)
    var altura = parseFloat(document.getElementById('altura').value)
    altura = altura/100
    var soma = peso/(altura**2)
    var reponder = InterpretarIMC(soma)
    Exibir(reponder,soma)
}


function InterpretarIMC(soma) {
    if (soma > 40) {
        return 'obsidade grau 3'
    } else if (soma > 35) {
        return 'obsidade grau 2'
    } else if (soma > 30) {
        return 'obsidade grau 1'
    } else if (soma > 25) {
        return 'sobrepeso'
    } else if (soma > 18.5) {
        return 'normal'
    } else {
        return 'magreza'
    }
}

function Exibir(soma,reponder) {
    var respostadiv = document.getElementById('resultado')
    respostadiv.innerHTML='A Soma do seu IMC é ' + reponder.toFixed(2) + ' Você está ' + soma
}

function Reiniciar() {
    document.getElementById('resultado').innerHTML=''
    document.getElementById('peso').value=''
    document.getElementById('altura').value=''
}
