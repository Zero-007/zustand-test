import  { useState } from "react";
import useCoursesStore from "../app/coursesStore";

function AddCourseForm() {
  const [courseTitle, setCourseTitle] = useState("");

  const addCourse = useCoursesStore((state) => state.addCourse);

  const handleSubmit = () => {
    if (!courseTitle) return alert("Please enter title");

    addCourse({
      id: Math.ceil(Math.random() * 100000),
      title: courseTitle,
      isCompleted: false,
    });

    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        type="text"
        className="form-input"
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
        value={courseTitle}
      />
      <button type="submit" className="form-submit-btn" onClick={handleSubmit}>
        Add Course
      </button>
    </div>
  );
}

export default AddCourseForm;
