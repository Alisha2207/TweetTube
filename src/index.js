import dotenv from "dotenv"
import{app} from './app.js'
// import express from 'express'
import connectDB from "./db/index.js"
import { Video } from "./models/video.model.js"

// const app = express()
dotenv.config({
    path: "./.env"
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed error", err)
})


const generateDummyData = async () => {
  try {
    const dummyVideos = [
      {
        videoFile: "https://cloudinary.com/sample_video1.mp4",
        thumbnail: "https://cloudinary.com/sample_thumbnail1.jpg",
        title: "Getting Started with Node.js",
        description: "A beginner's guide to Node.js development.",
        duration: "5:00",
        views: 200,
        isPublished: true,
        owner: "677cd8482fd2043135a298f3",
      },
      {
        videoFile: "https://cloudinary.com/sample_video2.mp4",
        thumbnail: "https://cloudinary.com/sample_thumbnail2.jpg",
        title: "Building REST APIs with Express",
        description: "Learn how to build RESTful APIs using Express.js.",
        duration: "8:30",
        views: 500,
        isPublished: true,
        owner: "677cd8482fd2043135a298f3",
      },
      {
        videoFile: "https://cloudinary.com/sample_video3.mp4",
        thumbnail: "https://cloudinary.com/sample_thumbnail3.jpg",
        title: "Introduction to React.js",
        description: "An introduction to building UI with React.js.",
        duration: "12:00",
        views: 1500,
        isPublished: true,
        owner: "677cd8482fd2043135a298f3",
      },
      {
        videoFile: "https://cloudinary.com/sample_video4.mp4",
        thumbnail: "https://cloudinary.com/sample_thumbnail4.jpg",
        title: "Mastering MongoDB",
        description: "Deep dive into MongoDB database management.",
        duration: "10:15",
        views: 900,
        isPublished: true,
        owner: "677cd8482fd2043135a298f3",
      },
      {
        videoFile: "https://cloudinary.com/sample_video5.mp4",
        thumbnail: "https://cloudinary.com/sample_thumbnail5.jpg",
        title: "Full-Stack Development",
        description: "Overview of full-stack development using MERN.",
        duration: "20:00",
        views: 3000,
        isPublished: true,
        owner: "677cd8482fd2043135a298f3",
      },
      {
        videoFile: "https://cloudinary.com/sample_video6.mp4",
        thumbnail: "https://cloudinary.com/sample_thumbnail6.jpg",
        title: "Asynchronous JavaScript",
        description: "Learn how to handle async operations in JavaScript.",
        duration: "7:45",
        views: 1200,
        isPublished: true,
        owner: "677cd8482fd2043135a298f3",
      },
      {
        videoFile: "https://cloudinary.com/sample_video7.mp4",
        thumbnail: "https://cloudinary.com/sample_thumbnail7.jpg",
        title: "Deploying Applications with Docker",
        description: "Guide to deploying your apps using Docker containers.",
        duration: "15:30",
        views: 1800,
        isPublished: true,
        owner: "677cd8482fd2043135a298f3",
      },
      {
        videoFile: "https://cloudinary.com/sample_video8.mp4",
        thumbnail: "https://cloudinary.com/sample_thumbnail8.jpg",
        title: "Securing Your Web Applications",
        description: "Learn best practices for web application security.",
        duration: "9:00",
        views: 800,
        isPublished: false,
        owner: "677cd8482fd2043135a298f3",
      },
      {
        videoFile: "https://cloudinary.com/sample_video9.mp4",
        thumbnail: "https://cloudinary.com/sample_thumbnail9.jpg",
        title: "Advanced JavaScript Techniques",
        description: "Explore advanced concepts in JavaScript programming.",
        duration: "11:45",
        views: 2200,
        isPublished: true,
        owner: "677cd8482fd2043135a298f3",
      },
      {
        videoFile: "https://youtu.be/ei5xUlksV7o?si=1HdZw8w1HSyhwA75",
        thumbnail: "https://i.ytimg.com/vi/ei5xUlksV7o/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD-ZFobWE2jVveMUe_O9nmgiaiY5Q",
        title: "Building Real-Time Apps with Socket.io",
        description: "Learn to build real-time applications using Socket.io.",
        duration: "13:20",
        views: 1700,
        isPublished: false,
        owner: "677cd8482fd2043135a298f3",
      },
    ];

    await Video.insertMany([
        {
            videoFile: "https://youtu.be/ei5xUlksV7o?si=1HdZw8w1HSyhwA75",
            thumbnail: "https://i.ytimg.com/vi/ei5xUlksV7o/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD-ZFobWE2jVveMUe_O9nmgiaiY5Q",
            title: "Building Real-Time Apps with Socket.io",
            description: "Learn to build real-time applications using Socket.io.",
            duration: "13:20",
            views: 1700,
            isPublished: true,
            owner: "677cd8482fd2043135a298f3",
          },
    ]);
    console.log("10 dummy videos inserted successfully!");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  }
};

// generateDummyData();




/* First Approach
import express from "express"
const app = express()

( async ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(` App is listening on ${process.env.PORT} `)

        })
    } catch (error) {
        console.log("ERROR: ", error)
        throw err
    }
})
*/