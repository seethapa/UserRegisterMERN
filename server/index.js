const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const contactRoutes = require('./routes/contacts');

const app = express();

const database = require("./config/database");
database.connect();
const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`Server is listening to Port: ${PORT}`);
});

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "server is up",
  });
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'https://samuelasirvatham.com' ,
  //  'https://user-register-mern-5p25.vercel.app', // allow your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use("/api", contactRoutes);
// Your routes here
//app.post('/api/contact', (req, res) => {
//  // handle contact form
//});



