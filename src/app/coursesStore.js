import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const coursesStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId),
    }));
  },
  toggleComplete: (courseId) => {
    set((state) => {
      const copyCourses = [...state.courses];
      const foundCourse = copyCourses.find((course) => course.id === courseId);
      foundCourse.isCompleted = !foundCourse.isCompleted;
      return { courses: copyCourses };
    });
  },
});

const useCoursesStore = create(
  devtools(
    persist(coursesStore, {
      name: "courses",
    })
  )
);

export default useCoursesStore;
