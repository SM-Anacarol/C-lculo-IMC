// Função para calcular o IMC
function calcular() {
    var peso = parseFloat(document.getElementById("idpeso").value.replace(',', '.'));
    var altura = parseFloat(document.getElementById("idaltura").value.replace(',', '.'));
    var resultadoDiv = document.getElementById("Resultado");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = "⚠️ Por favor, preencha peso e altura corretamente.";
        resultadoDiv.style.background = "linear-gradient(135deg, #ff6b6b, #ee5a24)";
        return;
    }

    if (peso < 20 || peso > 300) {
        resultadoDiv.innerHTML = "⚖️ Peso deve estar entre 20kg e 300kg.";
        resultadoDiv.style.background = "linear-gradient(135deg, #ff6b6b, #ee5a24)";
        return;
    }

    if (altura < 0.5 || altura > 2.5) {
        resultadoDiv.innerHTML = "📏 Altura deve estar entre 0.5m e 2.5m.";
        resultadoDiv.style.background = "linear-gradient(135deg, #ff6b6b, #ee5a24)";
        return;
    }

    var resultado = peso / (altura * altura);
    var classificacao = "";
    var corGradiente = "";
    var emoji = "";
    var mensagem = "";
    
    if (resultado < 18.5) {
        classificacao = "Abaixo do peso";
        corGradiente = "linear-gradient(135deg, #74b9ff, #0984e3)";
        emoji = "🥗";
        mensagem = "Considere consultar um nutricionista para ganhar peso de forma saudável!";
    } else if (resultado < 25) {
        classificacao = "Peso ideal";
        corGradiente = "linear-gradient(135deg, #00b894, #00a085)";
        emoji = "🎉";
        mensagem = "Parabéns! Seu peso está na faixa saudável. Continue mantendo hábitos saudáveis!";
    } else if (resultado < 30) {
        classificacao = "Sobrepeso";
        corGradiente = "linear-gradient(135deg, #fdcb6e, #e17055)";
        emoji = "⚖️";
        mensagem = "Foque em uma alimentação equilibrada e exercícios regulares para melhorar sua saúde!";
    } else if (resultado < 35) {
        classificacao = "Obesidade grau I";
        corGradiente = "linear-gradient(135deg, #e17055, #d63031)";
        emoji = "🏃‍♂️";
        mensagem = "É importante buscar orientação médica para um plano de emagrecimento saudável!";
    } else if (resultado < 40) {
        classificacao = "Obesidade grau II";
        corGradiente = "linear-gradient(135deg, #d63031, #b71540)";
        emoji = "💪";
        mensagem = "Consulte um médico para um acompanhamento profissional e personalizado!";
    } else {
        classificacao = "Obesidade grau III";
        corGradiente = "linear-gradient(135deg, #b71540, #6f1e51)";
        emoji = "🏥";
        mensagem = "É fundamental buscar acompanhamento médico especializado para sua saúde!";
    }

    resultadoDiv.style.background = corGradiente;
    resultadoDiv.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 10px;">${emoji}</div>
        <div style="font-size: 1.5rem; margin-bottom: 10px;">📊 Seu IMC: ${resultado.toFixed(1)}</div>
        <div style="font-size: 1.3rem; margin-bottom: 15px; font-weight: bold;">${classificacao}</div>
        <div style="font-size: 1rem; opacity: 0.9;">${mensagem}</div>
    `;

    resultadoDiv.style.transform = "scale(1.05)";
    setTimeout(() => {
        resultadoDiv.style.transform = "scale(1)";
    }, 200);
}

function limpar() {
    document.getElementById("idpeso").value = '';
    document.getElementById("idaltura").value = '';
    document.getElementById("Resultado").innerHTML = '';
    document.getElementById("Resultado").style.background = "linear-gradient(135deg, #667eea, #764ba2)";
    document.getElementById("Resultado").style.transform = "scale(1)";
}

function validarEntrada(input) {
    input.value = input.value.replace(/[^0-9,.]/g, '');
    input.value = input.value.replace(',', '.');
    
    var pontos = (input.value.match(/\./g) || []).length;
    if (pontos > 1) {
        input.value = input.value.replace(/\.+$/, '');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var pesoInput = document.getElementById("idpeso");
    var alturaInput = document.getElementById("idaltura");
    
    if (pesoInput) {
        pesoInput.addEventListener('input', function() {
            validarEntrada(this);
        });
    }
    
    if (alturaInput) {
        alturaInput.addEventListener('input', function() {
            validarEntrada(this);
        });
    }
    
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calcular();
        }
    });
});

// Função para scroll suave para a calculadora
function irParaCalculadora() {
    document.getElementById('calcular-imc').scrollIntoView({
        behavior: 'smooth'
    });
}
