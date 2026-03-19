
        // [1] Mostrar Nome
        function mostrarNome() {
            const nome = document.getElementById('inputNome').value;
            alert(`Olá, ${nome}!`);
        }

        // [2] Calcular Área do Triângulo
        function calcularAreaTriangulo() {
            const base = parseFloat(document.getElementById('inputBase').value);
            const altura = parseFloat(document.getElementById('inputAltura').value);
            const area = (base * altura) / 2;
            alert(`Área = ${area}`);
        }

        // [3] Calcular Idade em Dias
        function calcularIdadeDias() {
            const anos = parseInt(document.getElementById('inputIdadeDias').value);
            const dias = anos * 365;
            alert(`Você já viveu aproximadamente ${dias} dias.`);
        }

        // [4] Converter Idade (Meses e Dias)
        function converterIdade() {
            const anos = parseInt(document.getElementById('inputIdadeConv').value);
            const meses = anos * 12;
            const dias = anos * 365;
            alert(`${anos} anos equivalem a:\n${meses} meses e ${dias} dias.`);
        }

        // [5] Calcular Média
        function calcularMedia() {
            const n1 = parseFloat(document.getElementById('inputNota1').value);
            const n2 = parseFloat(document.getElementById('inputNota2').value);
            const n3 = parseFloat(document.getElementById('inputNota3').value);
            const media = (n1 + n2 + n3) / 3;
            alert(`Média: ${media.toFixed(2)}`);
        }

        // [6] Calcular Desconto
        function calcularDesconto() {
            const preco = parseFloat(document.getElementById('inputPreco').value);
            const desconto = parseFloat(document.getElementById('inputDesconto').value);
            const precoFinal = preco - ((preco * desconto) / 100);
            alert(`Preço final com desconto: R$ ${precoFinal.toFixed(2)}`);
        }

        // [7] Tabuada
        function tabuada() {
            const numero = parseInt(document.getElementById('inputTabuada').value);
            let resultadoTabuada = `Tabuada do ${numero}:\n`;
            for (let i = 1; i <= 10; i++) {
                resultadoTabuada += `${numero} x ${i} = ${numero * i}\n`;
            }
            alert(resultadoTabuada);
        }

        // [8] Converter Medida (Metros para Centímetros)
        function converterMedida() {
            const metros = parseFloat(document.getElementById('inputMetros').value);
            const centimetros = metros * 100;
            alert(`${metros} metros = ${centimetros} centímetros`);
        }