
import React from "react";
const Course = async () => { // 비동기 함수로 변경시켜줌
  const response = await fetch("http://localhost:9999/courses", {
    cache: "no-cache"
  });
  const courses = await response.json();
  return (
    <div>
      {courses.map((course) => (
        <div>
          <span>
            {course.code}_ {course.name}({course.courseId})
          </span>
          <span>{course.professtorName}</span>
        </div>
      ))}
    </div>
  );  
};
export default Course;