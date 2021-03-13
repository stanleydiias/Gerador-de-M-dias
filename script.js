


function GerarMedia() {
    let nomeAluno = document.getElementById('nomeAluno').value;
    let materia = document.getElementById('matéria').value;
    let sobrenome = document.getElementById('sobrenome').value;
     

    nota1 = parseFloat(document.getElementById('nota1').value);
    nota2 = parseFloat(document.getElementById('nota2').value);
    nota3 = parseFloat(document.getElementById('nota3').value);
    
    const array = [nota1, nota2, nota3];

    let soma = 0;

    for (let nota of array) {
        soma += nota;
    }
    const media = soma / (array.length);


    if (media.toFixed(1) < 6.9) 
    return document.getElementById('resultado').innerHTML = 'Olá ' + nomeAluno+' '+ sobrenome+',' + ' infelizmente você está REPROVADO! Sua média em ' + materia + ' é: '+  media.toFixed(1)
    return document.getElementById('resultado').innerHTML = 'Olá ' + nomeAluno+' '+ sobrenome +',' + ' Parabéns você está APROVADO! Sua média em ' + materia + ' é: '+  media.toFixed(1)


}

