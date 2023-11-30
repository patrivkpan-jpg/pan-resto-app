const express = require('express');
const router = express.Router();
const adminContrller = require("../../controllers/AdminController");


/**
 * @method GET
 * @access public
 * @endpoint /api/v1/admin/login
 **/
router.get('/', adminContrller.getLoginUser);

/**
 * @method POST
 * @access public
 * @endpoint /api/v1/admin/login
 **/
router.post('/login', adminContrller.login);

/**
 * @method POST
 * @access public
 * @endpoint /api/v1/admin/register
 **/
router.post('/register', adminContrller.register);

module.exports = router;
