var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
})






// Função para lidar com o login
function handleLogin(event) {
  event.preventDefault(); // Evita o envio do formulário

  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value; // Obtém a senha (não usada na lógica atual)
  const adminEmails = ['martins.willian@techlingo.com.br', 'kaua.gilvam@techlingo.com.br'];

  // Verifica se o e-mail é um dos e-mails de admin
  if (adminEmails.includes(email)) {
      window.location.href = '../tela admin/admin.html'; // Redireciona para a página de admin
  } else if (email.endsWith('@techlingo.com.br')) {
      window.location.href = '../tela admin/admin.html'; // Redireciona para a página de admin para qualquer e-mail do domínio techlingo.com
  } else {
      window.location.href = '../tela catalogo/catalogo.html'; // Redireciona para a página do catálogo de cursos
  }
}

// Adiciona um listener ao formulário de login para chamar handleLogin na submissão
document.getElementById('signin').addEventListener('submit', handleLogin);







// Função para buscar e inserir o conteúdo do HTML de outra pasta
async function carregarHTML(caminho) {
  try {
    const resposta = await fetch(caminho);
    if (!resposta.ok) {
      throw new Error('Erro ao carregar o HTML');
    }
    const html = await resposta.text();
    document.body.innerHTML = html; // Insere o HTML na página atual
  } catch (erro) {
    console.error(erro);
  }
}

// Chama a função para carregar o HTML quando necessário
carregarHTML('Music/Projeto-TechLingo/tela catalogo/catalogo.html');
