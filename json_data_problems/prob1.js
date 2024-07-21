let studentsData = {
    "students": [
        {
            "id": 1,
            "name": "aisha",
            "age": 20,
            "class": "9",
            "grades": ["A", "B", "APlus", "B"],
            "Address": "NYC"
        },
        {
            "id": 1,
            "name": "aisha1",
            "age": 19,
            "class": "9",
            "grades": ["A", "F", "F", "B"],
            "Address": "NYC"
        },
        {
            "id": 1,
            "name": "aisha2",
            "age": 21,
            "class": "9",
            "grades": ["A", "B", "APlus", "F"],
            "Address": "TX"
        },
        {
            "id": 1,
            "name": "aisha3",
            "age": 21,
            "class": "9",
            "grades": ["A", "A", "A", "A"],
            "Address": "NYC"
        }
    ]
};


//solution
//

let filter1 = studentsData.students.filter(student => {
    let gradeF = student.grades.filter(grade => grade == "F").length;
    return gradeF < 2;
});
console.log("students who didn't get F in any 2 courses");
console.log(filter1);


let filter2= studentsData.students.filter(student => {
    let gradeA = student.grades.every(grade => grade == "A");
    return !gradeA;
});
console.log("studens who didn't get all A")
console.log(filter2);


let filter3 = studentsData.students.filter(student => student.age > 20);

console.log("students with age > 20")
console.log(filter3);


let filter4 = studentsData.students.filter(student => student.Address !== "NYC");

console.log("students not living in NYC")
console.log(filter4);

//now add an array in each student data 
let studentsWithCourses = [];
for (let i = 0; i < studentsData.students.length; i++) {
    let student = studentsData.students[i];
    let studentWithCourses = {
        id: student.id,
        name: student.name,
        age: student.age,
        class: student.class,
        grades: student.grades,
        Address: student.Address,
        "courses for next semester": ["TBD"]
    };
    studentsWithCourses[studentsWithCourses.length] = studentWithCourses;
}
console.log(studentsWithCourses);
