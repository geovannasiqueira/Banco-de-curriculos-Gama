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

