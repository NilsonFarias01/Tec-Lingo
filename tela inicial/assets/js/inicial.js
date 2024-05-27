document.addEventListener("DOMContentLoaded", function() {
    const btnAnteriorCurso = document.getElementById("btn-anterior-curso");
    const btnProximoCurso = document.getElementById("btn-proximo-curso");
    const btnAnteriorColaborador = document.getElementById("btn-anterior-colaborador");
    const btnProximoColaborador = document.getElementById("btn-proximo-colaborador");
    const elementosCurso = document.querySelectorAll("#cursos .elemento");
    const elementosColaborador = document.querySelectorAll("#colaboradores .equipe");
    const cursosPorPagina = 5;
    const colaboradoresPorPagina = 3;
    let indiceInicialCurso = 0;
    let indiceInicialColaborador = 0;

    // Oculta todos os cursos após o índice inicial
    function ocultarCursos() {
        for (let i = 0; i < elementosCurso.length; i++) {
            elementosCurso[i].style.display = "none";
        }
    }

    // Exibe os cursos visíveis com base no índice inicial
    function exibirCursos() {
        for (let i = indiceInicialCurso; i < indiceInicialCurso + cursosPorPagina && i < elementosCurso.length; i++) {
            elementosCurso[i].style.display = "block";
        }
    }

    // Oculta todos os colaboradores após o índice inicial
    function ocultarColaboradores() {
        for (let i = 0; i < elementosColaborador.length; i++) {
            elementosColaborador[i].style.display = "none";
        }
    }

    // Exibe os colaboradores visíveis com base no índice inicial
    function exibirColaboradores() {
        for (let i = indiceInicialColaborador; i < indiceInicialColaborador + colaboradoresPorPagina && i < elementosColaborador.length; i++) {
            elementosColaborador[i].style.display = "block";
        }
    }

    // Atualiza os índices iniciais após clicar em "Próximo Curso"
    function avancarPaginaCurso() {
        if (indiceInicialCurso + cursosPorPagina < elementosCurso.length) {
            indiceInicialCurso++;
            ocultarCursos();
            exibirCursos();
        }
    }

    // Atualiza os índices iniciais após clicar em "Anterior Curso"
    function retrocederPaginaCurso() {
        if (indiceInicialCurso > 0) {
            indiceInicialCurso--;
            ocultarCursos();
            exibirCursos();
        }
    }

    // Atualiza os índices iniciais após clicar em "Próximo Colaborador"
    function avancarPaginaColaborador() {
        if (indiceInicialColaborador + colaboradoresPorPagina < elementosColaborador.length) {
            indiceInicialColaborador++;
            ocultarColaboradores();
            exibirColaboradores();
        }
    }

    // Atualiza os índices iniciais após clicar em "Anterior Colaborador"
    function retrocederPaginaColaborador() {
        if (indiceInicialColaborador > 0) {
            indiceInicialColaborador--;
            ocultarColaboradores();
            exibirColaboradores();
        }
    }

    // Inicialização
    ocultarCursos();
    exibirCursos();
    ocultarColaboradores();
    exibirColaboradores();

    // Evento de clique no botão "Próximo Curso"
    btnProximoCurso.addEventListener("click", avancarPaginaCurso);

    // Evento de clique no botão "Anterior Curso"
    btnAnteriorCurso.addEventListener("click", retrocederPaginaCurso);

    // Evento de clique no botão "Próximo Colaborador"
    btnProximoColaborador.addEventListener("click", avancarPaginaColaborador);

    // Evento de clique no botão "Anterior Colaborador"
    btnAnteriorColaborador.addEventListener("click", retrocederPaginaColaborador);
});
