let selectedCourse = {};
(async function getAvailableCourses() {
  const url = 'https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/courses.json';
  const response = await fetch(url);
  const data = await response.json();
    
  return data;
})().then((courses) => {
  console.log(courses);
  let courseOptionsHtml = '';
  courses.forEach((course) => {
    console.log(course);
    courseOptionsHtml += `<option value="${course.id}" onclick="selectCourse(${course.id})">${course.name}</option>`;
  });
  document.getElementById('course-select').innerHTML += courseOptionsHtml;
});

function selectCourse(course) {
  selectCourse = course;
  console.log(selectCourse);
}