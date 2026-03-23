let alunos = [];

        function obterDadosInput() {
            const nome = document.getElementById('nome').value.trim();
            const curso = document.getElementById('curso').value.trim();
            const semestre = parseInt(document.getElementById('semestre').value);
            
            if (!nome || !curso || isNaN(semestre)) {
                mostrarResultado("Erro: Preencha Nome, Curso e Semestre corretamente.", true);
                return null;
            }
            return { nome: nome, curso: curso, semestre: semestre };
        }

        function mostrarResultado(mensagem, erro = false) {
            const caixa = document.getElementById('caixaResultado');
            const texto = document.getElementById('displayResultado');
            
            caixa.classList.remove('hidden');
            texto.innerText = mensagem;

            if (erro) {
                caixa.classList.replace('border-indigo-500', 'border-red-500');
                caixa.classList.replace('bg-indigo-50', 'bg-red-50');
                texto.classList.replace('text-indigo-900', 'text-red-900');
            } else {
                caixa.classList.replace('border-red-500', 'border-indigo-500');
                caixa.classList.replace('bg-red-50', 'bg-indigo-50');
                texto.classList.replace('text-red-900', 'text-indigo-900');
            }
        }

        function limparFormulario() {
            document.getElementById('nome').value = '';
            document.getElementById('curso').value = '';
            document.getElementById('semestre').value = '';
            document.getElementById('nome').focus();
        }

        function atualizarTela() {
            const listaEl = document.getElementById('listaAlunos');
            document.getElementById('contadorAlunos').innerText = `${alunos.length} Aluno(s)`;
            
            listaEl.innerHTML = ''; 
            
            if (alunos.length === 0) {
                listaEl.innerHTML = '<li class="text-slate-400 italic text-center py-8">A lista está vazia.</li>';
                return;
            }

            alunos.forEach((aluno, index) => {
                const li = document.createElement('li');
                li.className = 'flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-colors';
                li.innerHTML = `
                    <div>
                        <div class="flex items-center">
                            <span class="text-slate-400 text-sm font-mono mr-3">#${index}</span>
                            <span class="font-bold text-slate-800 text-lg">${aluno.nome}</span>
                        </div>
                        <div class="text-slate-500 text-sm mt-1 ml-7">${aluno.curso}</div>
                    </div>
                    <span class="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1.5 rounded-full">
                        Semestre ${aluno.semestre}
                    </span>
                `;
                listaEl.appendChild(li);
            });
        }

        function adicionarFim() {
            const novoAluno = obterDadosInput();
            if (novoAluno) {
                alunos.push(novoAluno); 
                atualizarTela();
                limparFormulario();
                mostrarResultado(`"${novoAluno.nome}" adicionado ao FINAL do vetor.`);
            }
        }

        function adicionarInicio() {
            const novoAluno = obterDadosInput();
            if (novoAluno) {
                alunos.unshift(novoAluno); 
                atualizarTela();
                limparFormulario();
                mostrarResultado(`"${novoAluno.nome}" adicionado ao INÍCIO do vetor.`);
            }
        }

        function removerFim() {
            if (alunos.length > 0) {
                const removido = alunos.pop(); 
                atualizarTela();
                mostrarResultado(`Aluno removido do FINAL:\nNome: ${removido.nome}\nCurso: ${removido.curso}`);
            } else {
                mostrarResultado("A lista já está vazia.", true);
            }
        }

        function removerInicio() {
            if (alunos.length > 0) {
                const removido = alunos.shift(); 
                atualizarTela();
                mostrarResultado(`Aluno removido do INÍCIO:\nNome: ${removido.nome}\nCurso: ${removido.curso}`);
            } else {
                mostrarResultado("A lista já está vazia.", true);
            }
        }

        function transformarMap() {
            if (alunos.length === 0) return mostrarResultado("Lista vazia. Adicione alunos primeiro.", true);
            
            const resumo = alunos.map(aluno => `• ${aluno.nome} estuda ${aluno.curso}`);
            
            mostrarResultado(`RESUMO GERADO COM MAP():\n${resumo.join('\n')}`);
        }

        function filtrarAlunos() {
            if (alunos.length === 0) return mostrarResultado("Lista vazia.", true);

            const valorFiltro = parseInt(document.getElementById('filtroSemestre').value);
            if (isNaN(valorFiltro)) {
                return mostrarResultado("Digite um semestre válido para filtrar.", true);
            }

            const filtrados = alunos.filter(aluno => aluno.semestre >= valorFiltro);

            if (filtrados.length === 0) {
                mostrarResultado(`FILTRO:\nNenhum aluno encontrado do semestre ${valorFiltro} em diante.`);
            } else {
                const texto = filtrados.map(a => `${a.nome} (${a.semestre}º semestre)`).join('\n');
                mostrarResultado(`ENCONTRADOS COM FILTER() (Semestre >= ${valorFiltro}):\n${texto}`);
            }
        }

        function somarSemestres() {
            if (alunos.length === 0) return mostrarResultado("Lista vazia.", true);

            const totalSemestres = alunos.reduce((acumulador, aluno) => acumulador + aluno.semestre, 0);

            mostrarResultado(`RESULTADO DO REDUCE():\nA soma acumulada de todos os semestres cadastrados é igual a ${totalSemestres}.`);
        }