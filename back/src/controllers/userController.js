const User = require('../models/User');

module.exports = {
    async register(req, res) {

        const { nome, cargo, dataDeNascimento, estadoCivil, genero, email, telefone, celular, rua, numero, bairro, complemento, cidade, estado, cep, rg, cpf, habilitacao, veiculo} = req.body;

        const newUser = new User();

        newUser.nome = nome;
        newUser.cargo = cargo;
        newUser.dataDeNascimento = dataDeNascimento;
        newUser.estadoCivil = estadoCivil;
        newUser.genero = genero;
        newUser.email = email;
        newUser.telefone = telefone;
        newUser.celular = celular;
        newUser.rua = rua;
        newUser.numero = numero;
        newUser.bairro = bairro;
        newUser.complemento = complemento;
        newUser.cidade = cidade;
        newUser.estado = estado;
        newUser.cep = cep;
        newUser.rg = rg;
        newUser.cpf = cpf;
        newUser.habilitacao = habilitacao;
        newUser.veiculo = veiculo;

        newUser.save((err, savedUser) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Problema no cadastro!")
            }

            return res.status(200).send(savedUser);
        });
    }

};