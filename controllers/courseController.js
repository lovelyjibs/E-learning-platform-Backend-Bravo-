
<<<<<<< HEAD
const Course =require("../models/Course")




const courseController =[
    {
        courseTitle: "Mathematics",
        courseCode: "mathematics 101",
        courseCategory: "simple",
        courseDuration: "six months"
    },
    
    {
        courseTitle: "English",
        courseCode: "English 101",
        courseCategory: "simple simple",
        courseDuration: "six months"

    }
]

=======
>>>>>>> 76d9f56896f5dbe3d9ca36591c239362654f4fc4
const handleAddCourse = async(req,res)=>{
    

    //Adding a course
   try{
   
    const {courseTitle, courseCode,  courseCategory ,courseDuration } =req.body

    const newCourse = newCourse ({
        courseTitle, 
        courseCode,  
        courseCategory ,
        courseDuration})
    await newCourse .save()

    return res.status(200).json({message: "Course created successfully"})


    


    //if(!courseTitle){
       // return res.status(400).json({message: "kindly enter course title"})
    //}
    //if(!courseCode){
        //return res.status(400).json({message: "kindly enter course code"})
    //}
    //if (!courseCategory){
        //return res.status(400).json({message: "kindly enter course category"})
    //}
    
   // if(!courseDuration){
        //return res.status(400).json({message: "kindly enter course category"})

      
        
    

         //return res.status(200).json
        // ({message:"Course selected successfully",
            
           

         //})}
} 
catch (error) {
    return res.status(400).json({ error });
}}


//To get all courses

const handleGetAllCourses = async (req,res)=>{ 
   
    try{
<<<<<<< HEAD
     
        const course=await Course.find()
     return res.status(200).json({
        message:"successful",
       course
        
        
        
      
    
    })
    
    
   




=======
     const course= await Course.find()

        const courses = await Courses.find()
         return res.status(200).json({
            message:"Successful",
            count: courses.length,
            courses
            
    })
>>>>>>> 76d9f56896f5dbe3d9ca36591c239362654f4fc4
}

    catch(error){
        return res.status(400).json({error})
    }
}


            
   


//To get one course

const handleGetOneCourse = async(req,res)=>{
    
    try{
        const {   id }= req.params
        const course= await Course.findById(id)

        return res.status(200).json({
            message:"Course selected successfully",
            course
        })

    }catch(error){
        return res.status(404).json({error})
    }






   

}

//To update coursecode

const handleUpdateCourseCode =async(req,res)=>{
   
    try{
      
        const{id}=req.params
        const { courseCode  }=req.body

        const updatedCourse= await Course.findByIdAndUpdate(
            id,
            { courseCode },
            {new: true}
        )

        
        return res.status(200).json({
        message: "updated successfully",
        course: updatedCourse

    })   
    
    }catch (error){
        return res.status(500).json({message:error.message})
    }
    }

     
    // To delete course
   
   const handleDelete=async(req,res)=>{
    
    try{

        const { id } = req.params
        const deletedCourse = await Course.findByIdAndDelete(id)     
        return res.status(200).json({
            message:"course deleted successfully",
        })


     } catch(error){
         return res.status(404).json({message:"error"})
        }
    }
    
    
    
    
    
    

<<<<<<< HEAD
    
    
    
    
    
    
     
=======
try{
    const{id }= req.params
    const course= await Course.findById(id)
    return res.status(200).json
    ({message:"successful"})
>>>>>>> 76d9f56896f5dbe3d9ca36591c239362654f4fc4




<<<<<<< HEAD
=======
}}
>>>>>>> 76d9f56896f5dbe3d9ca36591c239362654f4fc4
    
    
    


module.exports ={
      handleAddCourse,
      handleGetAllCourses,
      handleGetOneCourse,
<<<<<<< HEAD
      handleUpdateCourseCode,
      handleDelete
      
      
=======
>>>>>>> 76d9f56896f5dbe3d9ca36591c239362654f4fc4
}