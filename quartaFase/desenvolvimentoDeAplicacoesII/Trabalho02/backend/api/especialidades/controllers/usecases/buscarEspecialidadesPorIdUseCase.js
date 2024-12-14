const Especialidades = require('../model/especialidades');

exports.buscarEspecialidadesPorId = async (req, res, next) => {

    try {
        const especialidade = await Especialidades.findOne({ where: { id: req.params.id } });
        
        if (!especialidade) {
            return res.status(400).json({ message: 'Especialidade não encontrada' });
        }

        return res.status(200).json({ conteudo: especialidade });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao encontrar especialidade: ' + e.message})
    }
}