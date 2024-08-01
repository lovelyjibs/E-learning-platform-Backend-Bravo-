
const express = require("express")
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const cookieParser = require("cookie-parser")
const courseRouter = require("./routes/courseRoutes")


const app = express();
app.use(express.json());
app.use(cookieParser());


const PORT = process.env.PORT || 8000

//function to connect to DB

connectDB()

//mongoose.connect(process.env.MONGODB_URL)
//.then (()=>{
//console.log("mongodb connected");
//})
//.catch((error)=>{
//console.log("error");
//})


app.listen(PORT, () => (
    console.log(`Server running on ${PORT}`)
))

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Welcome to my school E-learning Platform" })
})

// Routes for Users

app.use("/api/v1/users", authRoutes);

//Routes for Courses

app.use("/api", courseRouter)

<<<<<<< HEAD
app


=======
<<<<<<< HEAD
//app.post("/add-course",async(req,res)=>{
    //return res.status(200).json({message:"Course selected successfully"})
//})
=======
app.post("/add-course",async(req,res)=>{
    return res.status(200).json({message:"Course selected successfully"})

})
//app.post("/add-course",)
>>>>>>> 4ecba3a8d65a3de1a6169b8fee52d6b6e3d253ae
>>>>>>> 76d9f56896f5dbe3d9ca36591c239362654f4fc4

app

//app.get("/all-courses",async(req,res)=>{
    //return res.status(200).json({message:"Course selected successfully"})}
//)

app.patch("/update-course-Code",async(req,res)=> {
    return res.status(200).json({message:"Coursecode updated successful"})
}
)

app
app

app
app

app

app