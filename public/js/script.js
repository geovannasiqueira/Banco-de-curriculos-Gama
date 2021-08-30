function validaCPF(cpf) {
    console.log("funcionando cpf")
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        var soma = 0
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validação do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validação segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
}

function validacaoCPF() {
    let cpf = document.getElementById('cpf').value;

    let resultadoValidacao = validaCPF(cpf);

    if (!resultadoValidacao) {
        document.getElementById('invCPF').style.display = 'inline';
        return false;
    } else {
        document.getElementById('invCPF').style.display = 'none';
        document.getElementById('errCpf').style.border = 'none';
        return true;
    }

}

document.getElementById('cpf').addEventListener('focusout', validacaoCPF);

const validaCEP = (cep) => cep.toString().length == 8;

const buscaCEP = async () => {
    LimpaEndereco();
    let validacao = false;
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (validaCEP(cep)) {
        const data = await fetch(url);
        const endereco = await data.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('invCEP').style.display = 'inline';
            validacao = false;
        } else {
            document.getElementById('invCEP').style.display = 'none';
            document.getElementById('errCep').style.border = 'none';
            completaEndereco(endereco);
            validacao = true;
        }
    } else {
        document.getElementById('invCEP').style.display = 'inline';
        validacao = false;
    }
    return validacao;
}

document.getElementById('cep').addEventListener('focusout', buscaCEP);

const completaEndereco = (enderecos) => {
    document.getElementById('rua').value = enderecos.logradouro;
    document.getElementById('bairro').value = enderecos.bairro;
    document.getElementById('cidade').value = enderecos.localidade;
    document.getElementById('estado').value = enderecos.uf;
}

const LimpaEndereco = () => {
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}

const FormGama = () => {
    let form = {
        nome: document.getElementById('nome').value,
        cargo: document.getElementById('cargo').value,
        dataDeNascimento: document.getElementById('dataDeNascimento'),
        estadoCivil: document.getElementById('estadoCivil').value,
        genero: document.getElementById('genero').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        celular: document.getElementById('celular').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        complemento: document.getElementById('complemento'),
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        cep: document.getElementById('cep').value,
        rg: document.getElementById('identidade').value,
        cpf: document.getElementById('cpf').value,
        habilitacao: document.getElementById('habilitacao').value,
        veiculo: document.getElementById('veiculo').value
    };
    console.log(form);
    return form
}
const criarUsuario = async (User) => {

    const requisicao = await fetch('https://back-formgama.herokuapp.com/docs', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(FormGama())
    });
    if (requisicao.status === 200) {
        alert('Cadastrato efetuado com sucesso!');
    }

    if (requisicao.status === 500) {
        alert('CPF ou EMAIL em uso');
    }
    location.reload();
}
function formValid() {
    let nome = document.getElementById('nome').value;
    let cargo = document.getElementById('cargo').value;
    let dataDeNascimento = document.getElementById('dataDeNascimento');
    let estadoCivil = document.getElementById('estadoCivil').value;
    let genero = document.getElementById('genero').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let celular = document.getElementById('celular').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let complemento = document.getElementById('complemento');
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let cep = document.getElementById('cep').value;
    let rg = document.getElementById('identidade').value;
    let cpf = document.getElementById('cpf').value;
    let habilitacao = document.getElementById('habilitacao').value;
    let veiculo = document.getElementById('veiculo').value;

    if (nome == "" || dataDeNascimento == "" || cep == "" || rua == ""
        || numero == "" || bairro == "" || cidade == "" || estado == "" ||
        email.length < 4 || rg == "" || validacaoCPF() == false) {
        alert('Por favor, preencha todos os campos corretamente.');
    } else {
        criarUsuario();
    }
}
