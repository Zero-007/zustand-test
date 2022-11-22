import React from "react";
import useCoursesStore from "../app/coursesStore";

function CourseList() {
  const { courses, removeCoursesById, toggleCoursesStatusById } =
    useCoursesStore((state) => ({
      courses: state.courses,
      removeCoursesById: state.removeCourse,
      toggleCoursesStatusById: state.toggleComplete,
    }));

  return (
    <>
      {courses.length > 0 ? (
        <ul>
          {courses.map((course) => {
            return(
            <li
              key={course.id}
              className="course-item"
              style={{
                backgroundColor: course.isCompleted ? "green" : "white",
                color:"black"
              }}
            >
              <span className="course-item-col-1">
                <input
                  type="checkbox"
                  checked={course.isCompleted}
                  onChange={() => toggleCoursesStatusById(course.id)}
                />
              </span>
              <span style={{
                textTransform:"uppercase"
              }} >{course?.title}</span>
              <button
                className="delete-btn"
                onClick={() => removeCoursesById(course.id)}
              >
                Delete
              </button>
            </li>);
          })}
        </ul>
      ) : (
        <h2>Please add courses</h2>
      )}
    </>
  );
}

export default CourseList;
