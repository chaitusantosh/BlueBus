const express = require('express');
const router = express.Router();
require('./routes/user')(router);
require('./routes/bustype')(router);
require('./routes/bus')(router);
module.exports = router;