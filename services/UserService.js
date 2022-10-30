const User = require('../models/UserModel');

exports.getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
}

exports.getById = async (req, res) => {
  try {
    const user = await User.findOne({_id: req.params.id});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}

exports.create = async (req, res) => {
  try {
    await User.create({
      nome: req.body.nome,
      cpf: req.body.cpf,
      telefone: req.body.telefone,
    });
    res.status(201).json({ message: "User created!" })
  } catch (error) {
    res.status(500).json(error);
  }

}

exports.update = async (req, res) => {
  try {
    await User.updateOne({_id: req.params.id},
       {
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
       }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}

exports.deleteById = async (req, res) => {
  try {
    await User.deleteOne({_id: req.params.id});
    res.status(200).json({message: "usuário deletado"});
  } catch (error) {
    res.status(500).json(error);
  }

}

