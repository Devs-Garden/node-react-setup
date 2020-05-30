//connect Database


//Init Middleware


//Define routes


//define default port
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.use(require('./routes/users'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))






// const express = require('express');
// const connectDB = require('./config/db');

// const app = express();

// //connect Database
// connectDB();

// //Init Middleware
// app.use(express.json({extended:false}));

// app.get('/',(req,res)=>res.json({ msg: 'welcome to zedblox api'})); 


// //Define routes
// app.use('/api/users',require('./routes/users'));
// app.use('/api/auth',require('./routes/auth'));
// app.use('/api/trips',require('./routes/trips'));

// const PORT = process.env.port || 5000;

// app.listen(PORT, ()=> console.log(`server started on ports ${PORT}`));