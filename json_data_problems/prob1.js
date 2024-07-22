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

function filter1(students) {
    let filteredStudents = [];
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let countGradeF = 0;
        for (let j = 0; j < student.grades.length; j++) {
            if (student.grades[j] == "F") {
                countGradeF++;
            }
        }
        if (countGradeF < 2) {
            filteredStudents[filteredStudents.length] = student;
        }
    }
    return filteredStudents;
}

function filter2(students) {
    let filteredStudents = [];
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let foundGradeA = true;
    
        for (let j = 0; j < student.grades.length; j++) {
          
            if (student.grades[j] == 'A') {
                foundGradeA = false;
                break; 
        }
    }
        
        if (!foundGradeA) {
            filteredStudents[filteredStudents.length] = student;
        }
    }
    return filteredStudents;
}



function filter3(students) {
    let filteredStudents = [];
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        if (student.age > 20) {
            filteredStudents[filteredStudents.length] = student;
        }
    }
    return filteredStudents;
}


function filter4(students) {
    let filteredStudents = [];
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        if (student.Address !== "NYC") {
            filteredStudents[filteredStudents.length] = student;
        }
    }
    return filteredStudents;
}

// Applying filters to the studentsJsonData
let filtered1 = filter1(studentsData.students);
let filtered2 = filter2(studentsData.students);
let filtered3 = filter3(studentsData.students);
let filtered4 = filter4(studentsData.students);

console.log("Students who didn't get F in any two courses");
console.log(filtered1);

console.log("Students who didn't get all gradeA");
console.log(filtered2);

console.log("Students age >20");
console.log(filtered3);

console.log("Students not living in NYC");
console.log(filtered4);

// Adding an array for courses in each student's data
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

console.log("Students with courses for next semester:");
console.log(studentsWithCourses);
