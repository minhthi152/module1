var courses = [
    {
        id: 1,
        name: "HTML",
        coin: 1
    },
    {
        id: 2,
        name: "CSS",
        coin: 1
    },
    {
        id: 3,
        name: "JavaScript",
        coin: 1
    }

];
var newCourse = courses.map(function(course, index){
    return {
        id: course.id,
        name: `Khóa học ${course.name}`,
        coin: course.coin,
        index: index
    }
    });
console.log(newCourse);
// function createNewCourses(course){
// return {
//     id: course.id,
//     name: `Khoa hoc ${course.name}`
// };
// }
// var newCourses = courses.map(createNewCourses);
// console.log(newCourses);