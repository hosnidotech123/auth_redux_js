const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use(cors());

// Mock database array of users
const users = [
  { username: 'admin', password: '1234' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' }
];


// register POST endpoint

app.post("/register",async(req,res)=>{

  try{
    const {username,password}=req.body
    const hashedPassword= await bcrypt.hash(password,10)
    const newUser= new User({username,password:hashedPassword})
    await newUser.save()
    res.status(201).json({message:"User created successfully"})

  }
  catch(err){
    res.json(500).json()
  }

})

// Login POST endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user in the database
  const user = users.find(user => user.username === username && user.password === password);

  // If user is found, return true, otherwise return false
  if (user) {
    res.json(user);
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

app.get('/users',(req,res)=>{
    res.json(users)
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
