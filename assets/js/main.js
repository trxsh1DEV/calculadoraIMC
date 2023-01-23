// Capturar evento de submit do formulário
const form = document.querySelector('#forms'); // Pegando formulário 

form.addEventListener('submit', function(e){
    e.preventDefault(); //Previne o evento, ou seja, eu escolho o que vou fazer com os valores digitados pelo usuário
    const input_peso = e.target.querySelector('#input-weight'); // Input dos valores digitados pelo usuário
    const input_altura = e.target.querySelector('#input-height');
    // Convertendo texto para numbers (float);
    const peso = Number(input_peso.value); // convertendo string para number
    const altura = Number(input_altura.value);
    
    if(!peso){
        setResult('Valor informado inválido', false); // Verificando se o valor pode ser convertido para um number ou n
        return;
    }
    if(!altura){
        setResult(`Valor informado inválido`, false);
        return;
    }
    const imc = getIMC(peso, altura); // Calculo IMC
    const lvlIMC = Level(imc); // Definindo os graus de obesidade e exibindo os elementos str
    const msg = `Seu IMC é ${imc} (${lvlIMC})`; // Msg para o usuário final
    console.log(imc, lvlIMC); // Exibindo msg final
    setResult(msg, true); // Exibindo cor azul (certo), vermelho(error) de acordo com as informações digitadas pelo usuário
});

function getIMC(peso, altura){
    const imc = peso / altura ** 2; //Fazendo o cálculo da fórmula do IMC
    return imc.toFixed(2); // Limitando casa decimais
}

function Level (imc){
    const lv = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2',
'Obesidade Grau 3'];

    if(imc >= 39.9){
        return lv.pop();
    }
    if (imc >= 34.9){
        return lv[lv.length - 2];
    }
    if (imc >= 29.9){
        return lv[3];
    }
    if (imc >= 24.9){
        return lv[2];
    }
    if (imc >= 18.5){
        return lv[1]
    }
    if (imc < 18.5){
        return lv[0];
    }
}

function createP (){
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid){
    const res = document.querySelector('#result');
    res.innerHTML = '';
    const p = createP();

    if (isValid){
         p.classList.add('p-result');
    }

    else{
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    res.appendChild(p);
};

