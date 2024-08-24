const express = require('express');
const bodyParser = require("body-parser")
const cors = require("cors")
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();


app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))


connectDB();


app.use('/api', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
