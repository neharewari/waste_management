const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const config = require("config")
const { check, validationResult } = require("express-validator")
const Seller = require("../models/Seller")
const Rider = require("../models/Rider")
const Vendor = require("../models/Vendor");
// Authenticate and return Details

/**
 * route     GET /auth/seller
 * desc:     to get the detail of seller
 * access:   privates
 */




module.exports = router