const express = require('express');
const router = express.Router();
const adminContrller = require("../../controllers/AdminController");

/**
 * @method GET
 * @access public
 * @endpoint /api/v1/admin/login
 **/
router.post('/login', adminContrller.login);

module.exports = router;
