const express = require('express');
const noteRoutes = require("./router/noteRouter-DB");
const userRoutes = require("./router/userRouter");
const authRoutes = require("./router/authRoute");
const connectDB = require('./config/ConnectionDB');
const cors = require('cors');
const app = express();
console.log("Sandeep3 printing inside index file");
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/note', noteRoutes);
app.use('/api/noteuser', userRoutes);
app.use('/api/userauth', authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT,() => {
console.log('Server Started'); 
});
