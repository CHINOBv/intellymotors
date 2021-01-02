const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const express = require('express');
const ctrl = require('./controllers/controllers');
const app = express();
const router = express.Router();

//MiddleWares
app.use(cors());
app.use(express.json({encoding:true}));
app.use(helmet());
app.use(morgan('dev'));

router.get('/offers', ctrl.newOffer);

module.exports = {app, router};