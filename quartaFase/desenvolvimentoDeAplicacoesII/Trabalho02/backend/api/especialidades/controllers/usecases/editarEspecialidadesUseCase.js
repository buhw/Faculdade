const Especialidades = require('../model/especialidades');

exports.editarEspecialidades = async (req, res, next) => {
    try {
        const especialidadeAtualizado = await Especialidades.update(req.body, { where: { id: req.params.id } });
        
        if (especialidadeAtualizado[0] > 0) {
            res.status(200).json({ Mensagem: 'Especialidade atualizada' });
        } else {
            res.status(400).json({ Mensagem: 'Nenhuma especialidade encontrada' });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ Mensagem: 'Erro ao atualizar especialidade' });
    }
};
