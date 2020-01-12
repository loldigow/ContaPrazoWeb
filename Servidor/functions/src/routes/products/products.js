'use strict'

const express = require('express');
const router  = express.Router();
const controle= require('../../controles/produtos');




router.get('/', controle.get);
router.post('/', controle.post);
router.put('/', controle.put);
router.delete('/',controle.delete);

module.exports=router;