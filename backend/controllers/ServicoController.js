let servicos = [
    {
        id: 1,
        nome: "Banho e Tosa",
        valor: 80
    }
];

class ServicoController {

    listar(req, res) {
        res.json(servicos);
    }

    cadastrar(req, res) {
        const { nome, valor } = req.body;

        const novoServico = {
            id: servicos.length + 1,
            nome: nome,
            valor: valor
        };

        servicos.push(novoServico);

        res.status(201).json(novoServico);
    }

    excluir(req, res) {
        const id = Number(req.params.id);

        servicos = servicos.filter(servico => servico.id !== id);

        res.json({ mensagem: "Serviço excluído com sucesso" });
    }
}

module.exports = ServicoController;