const { Professores } = require('../models');

const livrosService = {
    async novoProfessor(nome, email, senha, nivel) {
        return Livros.create({ nome, email, senha, nivel });
    },

    async getProfessor() {
        return Professores.findAll();
    },

    async getProfessor(id) {
        const Professores = await Professores.findByPk(id);
        if (!Professores) 
            throw new Error('Professores não encontrado');
        else 
            return Professores;
    },

    async alterarProfessor(id, nome) {
        const Professores = await Professores.findByPk(id);
        if (!Professores) throw new Error('Professores não encontrado');
        Professores.nome = nome;
        return Professores.save();
    },

    async excluirProfessor(id) {
        const Professores = await Professores.findByPk(id);
        if (!Professores) throw new Error('Professor não encontrado');
        return Professores.destroy();
    }
    
};

module.exports = livrosService;