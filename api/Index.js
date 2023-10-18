
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/User");
const Userpassword=require("./models/Userpassword")
const multer = require("multer");
const cookieParser = require("cookie-parser");

const path = require("path"); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { log } = require("console");
const { default: LoginPage } = require("../photographer-booking-site/src/components/LoginPage");
require('dotenv').config()
const secret = "sfhgsghahs2re534wghvdsjgd32e54e5hgfher65";


const app = express();
app.use(express.json());
app.use(cookieParser());


mongoose.set("strictQuery", false);
app.use(express.static('public')); // Replace 'public' with your actual static directory

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

mongoose
  .connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads"); 
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const filename = `${Date.now()}${extension}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });






// Get all users
app.get("/users", async (req, res) => {
  try {
    //FETCHING DATA
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.status(500).json({ message: "cant fetch data frome mongodb" });
  }
});


// Get a specific user by ID
app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error("Error retrieving user:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new user
app.post("/users", upload.single("profileImage"), async (req, res) => {
  const {name,phone,chargePerHour,portfolio,email,photoshootType,eventRate,overview,serviceLocation,
  } = req.body;
  
  const imageSrc = req.file ? req.file.filename : "";
  
  try {
  const newUser = await User.create({name,phone,imageSrc,chargePerHour,portfolio,email,photoshootType,eventRate,overview,serviceLocation,
    });

    console.log("User saved:", newUser);
    res.json(newUser);
  } catch (err) {
    console.error("Error while saving user:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// Register User
app.post('/registeruser', async(req,res)=>{
  const { username, password } = req.body;
try {
  const hashedPassword = await bcrypt.hash(password, 10);
  const userdoc=await Userpassword.create({
    username,
    password:hashedPassword,
  });
  res.json(userdoc)


} catch (error) {
  console.error(error);
  res.status(401).json(error.message);
  console.log("this is Catch");
}
});

// app.post('/login', async (req,res) => {
//   const {username,password} = req.body;
//   const userDoc = await Userpassword.findOne({username});
//   const passOk = bcrypt.compareSync(password, userDoc.password);
//   if (passOk) {
//     // logged in
//     jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
//       if (err) throw err;
//       res.cookie('token', token).json({
//         id:userDoc._id,
//         username,
//       });
//     });
//   } else {
//     res.status(400).json('wrong credentials');
//   }
// });



// app.get('/profile', (req,res) => {
//   const {token} = req.cookies;
//   jwt.verify(token, secret, {}, (err,info) => {
//     if (err) throw err;
//     res.json(info);
//   });
// });















const PORT =  4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
