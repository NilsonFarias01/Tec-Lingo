// ESSA SEÇÃO É DESTINADA A FOTO DE PERFIL DO CABEÇALHO
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})
// ESSA SEÇÃO É DESTINADA A FOTO DE PERFIL DO CABEÇALHO





// 
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const expandAllButton = document.querySelector('.expand-all');

    sections.forEach(section => {
        section.querySelector('.section-header').addEventListener('click', () => {
            section.querySelector('.section-content').classList.toggle('open');
        });
    });

    expandAllButton.addEventListener('click', () => {
        const isOpen = expandAllButton.textContent === 'Expandir todas as seções';
        sections.forEach(section => {
            section.querySelector('.section-content').classList.toggle('open', isOpen);
        });
        expandAllButton.textContent = isOpen ? 'Contrair todas as seções' : 'Expandir todas as seções';
    });
});


function toggleSection(button) {
    const sectionContent = button.parentElement.nextElementSibling;
    const isVisible = sectionContent.style.display === 'block';

    // Toggle visibility
    sectionContent.style.display = isVisible ? 'none' : 'block';

    // Change button icon based on visibility
    button.src = isVisible ? 'asset/image/expandir.png' : 'assets/image/ocultar.png';
}





// ESSA SEÇÃO É DESTINADA A RODAR OS VÍDEOS 
// Obtém o elemento do vídeo
const video = document.querySelector('.video');

// Adiciona um ouvinte de evento para quando o vídeo terminar
video.addEventListener('ended', () => {
    // Atualiza o atributo src do vídeo para o próximo vídeo quando o atual terminar
    const nextVideoSrc = getNextVideoSrc();
    video.src = nextVideoSrc;
});

// Função para obter o src do próximo vídeo
function getNextVideoSrc() {
    // Obtenha o link de vídeo da próxima aula
    const nextLessonLink = document.querySelector('.lesson-link');
    const nextVideoSrc = nextLessonLink.getAttribute('data-video-src');
    return nextVideoSrc;
}

// Função para manipular o clique na lição
function handleLessonClick(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Obtém o link do vídeo da lição clicada
    const videoSrc = event.target.getAttribute('data-video-src');

    // Atualiza o src do vídeo para o vídeo da lição clicada
    video.src = videoSrc;
}

// Obtém todos os links de lições
const lessonLinks = document.querySelectorAll('.lesson-link');

// Adiciona um ouvinte de evento para cada link de lição
lessonLinks.forEach(link => {
    link.addEventListener('click', handleLessonClick);
});
// ESSA SEÇÃO É DESTINADA A RODAR OS VÍDEOS