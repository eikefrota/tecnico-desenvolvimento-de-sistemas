const cpf = document.getElementById('cpf');
const senha = document.getElementById('senha');
const btnLogin = document.getElementById('btn-login');
const btnLimpar = document.getElementById('btn-limpar');
const formulario = document.getElementById('form-login');
const campoObrigatorio = document.querySelectorAll('.campo-obrigatorio');

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); // Remove tudo o que não é dígito
    cpf = cpf.substring(0, 11); // Limita a 11 dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca um ponto entre o terceiro e o quarto dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca um ponto entre o sexto e o sétimo dígitos
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Coloca um hífen entre o nono e o décimo dígitos
    return cpf;
}

cpf.addEventListener('input', (event) => {
    event.target.value = formatarCPF(event.target.value);
});

function validarCampos() {
    let camposValidos = true;
    const campos = [cpf, senha];

    campos.forEach((campo, index) => {
        const aviso = campoObrigatorio[index];
        if (campo.value.trim() === '') {
            aviso.style.display = 'block';
            campo.style.border = '2px solid #e3342f';
            camposValidos = false;
        } else {
            aviso.style.display = 'none';
            campo.style.border = '2px solid #ddd';
        }
    });

    return camposValidos;
}


// Funçaõ para enviar o formulário //	
btnLogin.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    if (!validarCampos()) {
        return;
    }

    const cpfCadastrado = '123.456.789-10';
    const senhaCadastrada = '123456';

    if (cpf.value === cpfCadastrado && senha.value === senhaCadastrada) {
        Toastify({
            text: "Login efetuado com sucesso!",
            duration: 3000,
            close: true,
            gravity: "top", // Posição do toast
            position: "center", // Alinhamento do toast
            backgroundColor: "#00a524",
            stopOnFocus: true, // Para o timer quando o toast é focado
        }).showToast();
        setTimeout(() => {
            window.location.href = '../views/cadastro'; // Redireciona para a página de cadastro
        }, 1000); // Aguarda 1 segundo antes de redirecionar
    } else {
        Toastify({
            text: "CPF ou Senha incorretos!",
            duration: 3000,
            close: true,
            gravity: "top", // Posição do toast
            position: "center", // Alinhamento do toast
            backgroundColor: "#e3342f",
            stopOnFocus: true, // Para o timer quando o toast é focado
        }).showToast();
    }
});


// Função para limpar o formulário //
btnLimpar.addEventListener('click', function() {
    formulario.reset();

    campoObrigatorio.forEach(aviso => aviso.style.display = 'none');
    cpf.style.border = '2px solid #ddd';
    senha.style.border = '2px solid #ddd';
});