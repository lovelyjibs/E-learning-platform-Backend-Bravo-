

  const express = require("express")
  const { handleAddCourse,
       handleGetAllCourses,
       handleGetOneCourse,
       handleUpdateCourseCode, 
       handleDelete} = require("../controllers/courseController")

    const courseRouter = express.Router()

courseRouter.post("/add-course",handleAddCourse)
<<<<<<< HEAD
courseRouter.get ("/all-course", handleGetAllCourses)
courseRouter .get("/one-course/:id",handleGetOneCourse)
courseRouter .patch("/updated-course-code/:id", handleUpdateCourseCode)
courseRouter .delete("/delete-course/:id",handleDelete)
=======
<<<<<<< HEAD
courseRouter.get("/all-courses",handleGetAllCourses)
courseRouter.get("/one-course/:id",handleGetOneCourse)
=======
courseRouter.get ("all-courses", handleGetAllCourses)
courseRouter
>>>>>>> 4ecba3a8d65a3de1a6169b8fee52d6b6e3d253ae


>>>>>>> 76d9f56896f5dbe3d9ca36591c239362654f4fc4


module.exports= courseRouter