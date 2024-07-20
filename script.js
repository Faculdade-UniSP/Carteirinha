function login() {
    const username = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value.toLowerCase();
    const loginContainer = document.getElementById('login-container');
    const cardContainer = document.getElementById('card-container');
    const userPhoto = document.getElementById('user-photo');
    const name = document.getElementById('name');
    const matricula = document.getElementById('matricula');
    const curso = document.getElementById('curso');
    const authCode = document.getElementById('auth-code');

    if (username === password) {
        if (username === 'joao') {
            userPhoto.src = 'joao.jpg'; // URL da foto de João
            name.textContent = 'João Vitor Souto';
            matricula.textContent = 'Matrícula: 20231001';
            curso.textContent = 'Curso: EAD - Pós em Gestão de Projetos';
            authCode.textContent = 'Código de Autenticidade: 67354325';
        } else if (username === 'ingrid') {
            userPhoto.src = 'ingrid.jpg'; // URL da foto de Ingrid
            name.textContent = 'Ingrid Coimbra';
            matricula.textContent = 'Matrícula: 20232002';
            curso.textContent = 'Curso: EAD - Pós em Gestão Financeira';
            authCode.textContent = 'Código de Autenticidade: 87654321';
        } else {
            alert('Usuário não encontrado!');
            return;
        }
        loginContainer.style.display = 'none';
        cardContainer.style.display = 'flex';
    } else {
        alert('Senha incorreta!');
    }
}

function logout() {
    const loginContainer = document.getElementById('login-container');
    const cardContainer = document.getElementById('card-container');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    username.value = '';
    password.value = '';
    loginContainer.style.display = 'flex';
    cardContainer.style.display = 'none';
}
