const Responsaveis = require('../model/responsaveis');

exports.editarResponsaveis = async (req, res, next) => {
    try {
        const responsavelAtualizado = await Responsaveis.update(req.body, { where: { id: req.params.id } });
        
        if (responsavelAtualizado[0] > 0) {
            res.status(200).json({ Mensagem: 'Responsável atualizado' });
        } else {
            res.status(400).json({ Mensagem: 'Nenhum responsável encontrado' });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ Mensagem: 'Erro ao atualizar responsável' });
    }
};
