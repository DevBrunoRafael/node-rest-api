const userService = require('../services/UserService');
const router = require('express').Router();

router.get('/', userService.getAll);

router.get('/:id', userService.getById);

router.post('/', userService.create);

router.patch('/:id', userService.update);

router.delete('/:id', userService.deleteById);


module.exports = router;