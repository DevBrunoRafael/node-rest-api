// const userService = require('../services/UserService');
const router = require('express').Router();

router.get('/', async (req, res) => {
  
  try {

    const users = await User.find();
    res.status(200).json(users);
    
  } catch (error) {

    res.status(500).json(error);
  
  }
});

router.get('/:id', async (req, res) => {
  
  try {

    const id = req.params.id;
    const user = await User.findOne({_id: id});

    res.status(200).json(user);
    
  } catch (error) {

    res.status(500).json(error);
  
  }
});

router.post('/', async (req, res) => {

  const {nome, cpf, telefone} = req.body;

  const user = {nome, cpf, telefone};

  try {
    
    await User.create(user);
    res.status(201).json({ message: "User created!" })

  } catch (error) {

    res.status(500).json(error);
  
  }

});

router.patch('/:id', async (req, res) => {

  const id = req.params.id;

  const {nome, cpf, telefone} = req.body;

  const user = {nome, cpf, telefone};

  try {

    await User.updateOne({_id: id}, user);
    res.status(200).json(user);
    
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {

  const id= req.params.id;

  try {

    await User.deleteOne({_id: id});
    res.status(200).json({message: "usuário deletado"});
    
  } catch (error) {
    res.status(500).json(error);
  }

});


module.exports = router;