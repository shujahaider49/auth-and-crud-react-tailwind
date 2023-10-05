import React, { useState } from "react";
import axios, { Axios } from "axios";
import Navbar from "./Navbar";
import FormField from "./FormFields";
import { Fade } from "react-reveal";

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    overview: "",
    lectures: [
      {
        heading: "Default Lecture Heading",
        detail: "Default Lecture Detail",
      },
    ],
    faqs: {
      question: "Default FAQ Question",
      answer: "Default FAQ Answer",
    },
    whyUs: "",
    prerequisites: "",
    benefits: "",
    marketValue: "",
    courseFor: "",
    duration: "",
    classes: "",
    timming: "",
    startingFrom: "",
    regFee: "0",
    courseFee: "0",
    image: {
      url: "Default Image URL",
      public_id: "Default Public ID",
    },
    instructor: "64912d4befcd18b51e4f77e5",
    categories: ["650556e4b68ed3c2ef657b37"],
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQyMDMzYjAxYTNiYWVhMjRmMTQzMDQiLCJpYXQiOjE2OTYyMzA4OTEsImV4cCI6MTY5NjU3NjQ5MX0.RcvNvRRuKbr7bXNdrTm_izmjqNw84RUMwdbS7WbqycA"; 
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const response = await axios.post(
        "http://localhost:5000/api/create-course",
        formData,
        { headers }
      );
      console.log(response.data.courses);
      alert("Course created successfully");

      setFormData({
        title: "",
        overview: "",
        lectures: [
          {
            heading: "Default Lecture Heading",
            detail: "Default Lecture Detail",
          },
        ],
        faqs: {
          question: "Default FAQ Question",
          answer: "Default FAQ Answer",
        },
        whyUs: "",
        prerequisites: "",
        benefits: "",
        marketValue: "",
        courseFor: "",
        duration: "",
        classes: "",
        timming: "",
        startingFrom: "",
        regFee: "0",
        courseFee: "0",
        image: {
          url: "Default Image URL",
          public_id: "Default Public ID",
        },
        instructor: "64912d4befcd18b51e4f77e5",
        categories: ["650556e4b68ed3c2ef657b37"],
      });
    } catch (err) {
      console.error(err);
      setError("An error occurred while saving the course.");
    }
  };

  const formFieldsConfig = [
    { label: "Title", name: "title", required: true },
    { label: "Overview", name: "overview", required: true },
    { label: "Lecture Heading", name: "lectures[0].heading", required: true },
    { label: "Lecture Detail", name: "lectures[0].detail", required: true },
    { label: "FAQ Question", name: "faqs.question", required: true },
    { label: "FAQ Answer", name: "faqs.answer", required: true },
    { label: "Why Us", name: "whyUs", required: true },
    { label: "Prerequisites", name: "prerequisites", required: true },
    { label: "Benefits", name: "benefits", required: true },
    { label: "Market Value", name: "marketValue", required: true },
    { label: "Course For", name: "courseFor", required: true },
    { label: "Duration", name: "duration", required: true },
    { label: "Classes", name: "classes", required: true },
    { label: "Timings", name: "timming", required: true },
    { label: "Starting From", name: "startingFrom", required: true },
    { label: "Registration Fee", name: "regFee", required: true },
    { label: "Course Fee", name: "courseFee", required: true },
    { label: "Image URL", name: "image.url", required: true },
    { label: "Image Public ID", name: "image.public_id", required: true },
    { label: "Instructor", name: "instructor", required: true },
    { label: "Categories", name: "categories[0]", required: true },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white">
      <Fade bottom>
      <div className="max-w-xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Create a New Course</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="text-blue-400">
          {formFieldsConfig.map((field, index) => (
            <FormField
              key={index}
              label={field.label}
              name={field.name}
              type={field.type || "text"}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required || false}
            />
          ))}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            type="submit"
          >
            Create Course
          </button>
        </form>
      </div>
      </Fade>
      </div>
    </>
  );
};

export default CreateCourse;
