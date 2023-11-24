const express = require('express');
const router = express.Router();
const menuController = require("../../controllers/MenuController");

/**
 * @method GET
 * @access public
 * @endpoint /api/v1/menu/
 **/
router.get('/', menuController.getMenu);

/**
 * @method POST
 * @access public
 * @endpoint /api/v1/menu/
 **/
router.post('/', menuController.addMenuItem);

/**
 * @method PUT
 * @access public
 * @endpoint /api/v1/menu/
 **/
router.put('/', menuController.editMenuItem);

/**
 * @method DELETE
 * @access public
 * @endpoint /api/v1/menu/
 **/
router.delete('/:_id', menuController.deleteMenuItem);

module.exports = router;
