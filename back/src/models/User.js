const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome:{
        type: String, 
        unique: false,
        required: true
    },
    cargo:{
        type: String, 
        unique: false,
        required: false
    },
    dataDeNascimento:{
        type: String, 
        unique: false,
        required: true
    },
    estadoCivil:{
        type: String, 
        unique: false,
        required: false
    },
    genero:{
        type: String, 
        unique: false,
        required: false
    },
    email:{
        type: String, 
        unique: true,
        required: true
    },
    telefone:{
        type: Number, 
        unique: true,
        required: false
    },
    celular:{
        type: Number, 
        unique: true,
        required: false
    },
    rua:{
        type: String,
        unique: false,
        required: true
    },
    numero:{
        type: Number,
        unique: false,
        required: true
    },
    bairro:{
        type: String,
        unique: false,
        required: true
    },
    complemento:{
        type: String,
        unique: false,
        required: false
    },
    cidade:{
        type: String,
        unique: false,
        required: true
    },
    estado:{
        type: String,
        unique: false,
        required: true
    },
    cep:{
        type: Number,
        unique: false,
        required: true
    },
    rg:{
        type: Number,
        unique: true,
        required: true
    },
    cpf:{
        type: Number,
        unique: true,
        required: true
    },
    habilitacao:{
        type: String,
        unique: false,
        required: false
    },
    veiculo:{
        type: String,
        unique: false,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);