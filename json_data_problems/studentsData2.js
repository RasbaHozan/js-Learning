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
            "id": 2,
            "name": "aisha1",
            "age": 19,
            "class": "9",
            "grades": ["A", "F", "F", "B"],
            "Address": "NYC"
        },
        {
            "id": 3,
            "name": "aisha2",
            "age": 21,
            "class": "9",
            "grades": ["A", "B", "APlus", "F"],
            "Address": "TX"
        },
        {
            "id": 4,
            "name": "aisha3",
            "age": 21,
            "class": "9",
            "grades": ["A", "A", "A", "A"],
            "Address": "NYC"
        }
    ]
};

// Function to filter students who got 'F' in any two courses
function studentsWithFewerF(studentsData) {
    let filteredStudents= studentsData.students.filter(x => {
        let countF = x.grades.filter(y => y == 'F').length;
        return countF < 2;
    });
    return filteredStudents;
}

// Function to filter students who got 'A' in all courses
function studentsWithoutAllAs(studentsData) {
    let filteredStudents=studentsData.students.filter(student => {
        let found = false;
        for (let i = 0; i < student.grades.length; i++) {
            if (student.grades[i] !== 'A') {
                found = true;
                break;
            }
        }
        return found;
    });
    return filteredStudents;
}

// Function to filter students living in NYC
function studentsNotLivingInNYC(studentsData) {
    let filteredStudents= studentsData.students.filter(x => x.Address !== 'NYC');
    return filteredStudents;
}

// Function to filter students whose age is greater than 20
function studentsAgeLessThan20(studentsData) {
    let filteredStudents= studentsData.students.filter(x => x.age < 20);
    return filteredStudents;
}

// Adding an array for courses in each student's data
let studentsWithCourses = [];
for (let i = 0; i < studentsData.students.length; i++) {
    let x = studentsData.students[i];
    let studentWithCourses = {
        id: x.id,
        name: x.name,
        age: x.age,
        class: x.class,
        grades: x.grades,
        Address: x.Address,
        "courses for next semester": ["TBD"]
    };
    studentsWithCourses[studentsWithCourses.length] = studentWithCourses;
}

console.log("Students with courses for next semester:");
console.log(studentsWithCourses);
console.log("Students who got fewer 'F'");
console.log(studentsWithFewerF(studentsData));

console.log("Students without all A's");
console.log(studentsWithoutAllAs(studentsData));

console.log("Students not living in NYC");
console.log(studentsNotLivingInNYC(studentsData));

console.log("Students whose age is less than 20");
console.log(studentsAgeLessThan20(studentsData));

console.log("Students with courses for next semester:");
console.log(studentsWithCourses);