const formulario = document.getElementById('form-cadastro');
const nome = document.getElementById('nome');
const cpf = document.getElementById('cpf');
const dataNascimento = document.getElementById('data-nascimento');
const cargo = document.getElementById('cargo');
const salario = document.getElementById('salario');
const estado = document.getElementById('estado');
const estadoCivil = document.getElementById('estado-civil');
const btnEnviar = document.getElementById('btn-enviar');
const btnLimpar = document.getElementById('btn-limpar');
const campoObrigatorio = document.querySelectorAll('.campo-obrigatorio');

function validarCampos() {
    let camposValidos = true;
    const campos = [nome, cpf, dataNascimento, cargo, salario, estado, estadoCivil];

    campos.forEach(campo => {
        const aviso = campo.nextElementSibling;
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

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); // Remove tudo o que não é dígito
    cpf = cpf.substring(0, 11); // Limita a 11 dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca um ponto entre o terceiro e o quarto dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca um ponto entre o sexto e o sétimo dígitos
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Coloca um hífen entre o nono e o décimo dígitos
    return cpf;
}

function formatarSalario(salario) {
    salario = salario.replace(/\D/g, ""); // Remove tudo o que não é dígito
    salario = (salario / 100).toFixed(2) + ''; // Divide por 100 e fixa duas casas decimais
    salario = salario.replace(".", ","); // Substitui ponto por vírgula
    salario = salario.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); // Adiciona pontos a cada milhar
    return 'R$ ' + salario;
}

cpf.addEventListener('input', (event) => {
    event.target.value = formatarCPF(event.target.value);
});

salario.addEventListener('input', (event) => {
    event.target.value = formatarSalario(event.target.value);
});

// Função para enviar o formulário //
btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    if (validarCampos()) {
        const funcionario = {
            nome: nome.value,
            cpf: cpf.value,
            dataNascimento: dataNascimento.value,
            cargo: cargo.value,
            salario: salario.value,
            estado: estado.value,
            estadoCivil: estadoCivil.value
        };
        
        fetch('/api/funcionarios', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(funcionario)
        })
        .then(response => response.text())
        .then(message => {
            if (message === 'Funcionário cadastrado com sucesso') {
                Toastify({
                    text: "Funcionário cadastrado com sucesso!",
                    duration: 3000,
                    close: true,
                    gravity: "top", // Posição do toast
                    position: "center", // Alinhamento do toast
                    backgroundColor: "#00a524",
                    stopOnFocus: true, // Para o timer quando o toast é focado
                }).showToast();
                formulario.reset();
            }
        })
        .catch(error => {
            alert('Erro ao cadastrar funcionário: ' + error);
        });
    }
});

// Função para limpar o formulário //
btnLimpar.addEventListener('click', function() {
    // Limpa os campos
    nome.value = '';
    cpf.value = '';
    dataNascimento.value = '';
    cargo.value = '';
    salario.value = '';
    estado.value = '';
    estadoCivil.value = '';

    // Remove os estilos de validação
    campoObrigatorio.forEach(aviso => aviso.style.display = 'none');
    const campos = [nome, cpf, dataNascimento, cargo, salario, estado, estadoCivil];
    campos.forEach(campo => campo.style.border = '2px solid #ddd');
});