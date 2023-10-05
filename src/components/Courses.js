import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { RiLoader3Fill } from 'react-icons/ri';
import { Fade } from 'react-reveal';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCourse, setEditedCourse] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then((response) => {
        setCourses(response.data.courses);
        console.log("data arha hai",response.data.courses);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleDelete = (courseId) => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQyMDMzYjAxYTNiYWVhMjRmMTQzMDQiLCJpYXQiOjE2OTYyMzA4OTEsImV4cCI6MTY5NjU3NjQ5MX0.RcvNvRRuKbr7bXNdrTm_izmjqNw84RUMwdbS7WbqycA'; // Replace with your actual authorization token
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };
  
    axios.delete(`http://localhost:5000/api/delete/course/${courseId}`, { headers })
    .then((response) => {
      if (response.status === 200) {
        console.log(`Course with ID ${courseId} deleted successfully.`);
        alert(`Course with ID ${courseId} deleted successfully.`);
        
        // Call removeCourseFromList to update the UI
        removeCourseFromList(courseId);
      } else {
        console.error(`Failed to delete course with ID ${courseId}.`);
      }
    })
    .catch((error) => {
      console.error(`Error deleting course with ID ${courseId}:`, error);
    });
  
      
    };
    
    const removeCourseFromList = (courseId) => {
      setCourses((prevCourses) => prevCourses.filter((course) => course._id !== courseId));
    };
  

  return (
    <>
      <Navbar />
      <div className=' bg-gray-900 text-white h-[42.4rem]'>
      <div className="container mx-auto">
        <h2 className="text-2xl p-3 font-semibold mb-4 text-center">Course List</h2>
        <table className="min-w-full">
          <thead>
            <tr className="">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Timing</th>
              <th className="border px-4 py-2">Duration</th>
              <th className="border px-4 py-2">Classes</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
      <Fade bottom>
              <tr key={index} className="">
                <td className="border px-4 py-2">{course._doc.title}</td>
                <td className="border px-4 py-2">{course._doc.timing}</td>
                <td className="border px-4 py-2">{course._doc.duration}</td>
                <td className="border px-4 py-2">{course._doc.classes}</td>
                <td className="border px-4 py-2">
                  <button
                     onClick={() => {
                      console.log("Deleting course with ID:", course._doc._id);
                      handleDelete(course._doc._id);
                    }}
                    className="text-red-600 hover:underline ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </Fade>
            ))}
          </tbody>
        </table>
        {courses.length === 0 && (
          <div className="min-h-screen flex justify-center items-center">
            <p className="text-center">
              <RiLoader3Fill className="animate-spin fill-info text-5xl" />
            </p>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default Courses;
